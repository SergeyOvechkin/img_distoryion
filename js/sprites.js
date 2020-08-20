
function CollageSprite(img, area, point, id, point2){
	
	this.id = id;
	this.frame = img;
	this.point = point;
	this.point2 = point2;
	this.area_1 = area;
	this.area_2 = area.slice(0);
	this.cursorOver = false;
	this.currentOperation = false;  //"move" - движение всего спрайта 	"move_point" - искажение
	//this.isMove = false; //движение всего спрайта
	this.moveStart = false; //начало движения "move" координаты
	this.isMovePoint = false; //движение одной точки - ее индекс i	
	this.rotate = 0;
	this.show = true;
	this.stamp_cursor = false;
}
CollageSprite.prototype.rotateArea = function(){
	
	var area = rotationArea(this.area_1, this.rotate);
	this.area_1 = area.slice(0);
	this.area_2 = area.slice(0);
}

CollageSprite.prototype.render = function(sprite_id , operationName, option){
	
	if(!this.show)return;
    var area = this.area_1;
		if(operationName == "move_point" && this.id == sprite_id || operationName == "move" && this.id == sprite_id ){
		area = this.area_2;
	}	
	var point = this.point;
	
	if(this.stamp_cursor == true && this.stamp_cursor_point){	
		point = this.stamp_cursor_point ;
	}
	
	if(this.rotate !== 0 && option != "rotate_no"){
		//this.rotateArea();
		area = rotationArea(this.area_1, this.rotate);
		if(operationName == "move_point" && this.id == sprite_id || operationName == "move" && this.id == sprite_id ){
			area = rotationArea(this.area_2, this.rotate);
		}
		if(operationName == "move_point" && this.id == sprite_id){			
			area = this.temporalArr.area_2;
		}
		
		    var halfW = (this.point2[0] - this.point[0])/2;
			var halfH = (this.point2[1] - this.point[1])/2;			
			var move = [this.point[0]+  halfW, this.point[1] + halfH];
            if(this.stamp_cursor == true){
				
				move = [point[0]+  halfW , point[1] + halfH ];
			}
			ctx.save();
			ctx.translate(move[0],   move[1]);
			ctx.rotate(this.rotate);
			if(this.stamp_cursor == true){
				
				ctx.drawImage(this.frame, -halfW, -halfH);
			}else{
				
				ctx.drawImage(this.frame, -halfW, -halfH);
			}
			ctx.restore();
			//ctx.rotate(-this.rotate);
			//ctx.translate( -move[0],  -move[1]);
			
	}else{
		
		ctx.drawImage(this.frame, point[0], point[1]);
	}

	if(this.id == sprite_id && operationName != "scale" && this.stamp_cursor == false){	
		drawAreaPoints(area)
	}
}

CollageSprite.prototype.mousedown = function(point, e, context){	
	if(this.cursorOver){     //move движение всего спрайта							
		if(this.moveStart === false && this.isMovePoint === false && this.currentOperation === false){
			this.moveStart = point;
			this.currentOperation = "move";
			this.savePoints = {point: this.point.slice(0), point2: this.point2.slice(0),}
            return ;								
		}							
	}
    if(this.stamp_cursor === true){
		var point = getCanvasPoint(e, canvas, context);
		this.stamp_cursor_point = [ point[0] - (this.point2[0]-this.point[0])/2,   point[1] - (this.point2[1]-this.point[1])/2,];
		ctx.putImageData(saveImg, 0, 0);
		this.render();
		saveImg = ctx.getImageData(0, 0, srcWidth , srcHeight);
		context.$methods().renderAll();		
	}
}
CollageSprite.prototype.mousemove  = function(point, context, e){
	
	if(this.currentOperation === "move"){					                        //move движение всего спрайта					
		var distance = [this.moveStart[0] - point[0], this.moveStart[1] -  point[1] ];		
		this.area_2 = getCutSize(this.area_1, distance[0], distance[1]);
		this.point = [this.savePoints.point[0] -distance[0],  this.savePoints.point[1] -distance[1]];
		this.point2 = [this.savePoints.point2[0] -distance[0], this.savePoints.point2[1] -distance[1]];
		context.$methods().renderAll("move");
	}
	if(this.stamp_cursor === true){
		var point = getCanvasPoint(e, canvas, context);
		this.stamp_cursor_point = [ point[0] - (this.point2[0]-this.point[0])/2,   point[1] - (this.point2[1]-this.point[1])/2,];
		//ctx.putImageData(saveImg, 0, 0);
		//this.render();
		//saveImg = ctx.getImageData(0, 0, srcWidth , srcHeight);
		context.$methods().renderAll();		
	}
	
}
CollageSprite.prototype.mouseup  = function(context){ 

	if(this.currentOperation == "move"){ 													
		var movePointEnd = getCanvasPoint(event, canvas);
		this.currentOperation = false;
		var distance = [this.moveStart[0] - movePointEnd[0], this.moveStart[1] -  movePointEnd[1] ];
		this.area_2 = getCutSize(this.area_1, distance[0], distance[1]);
		this.area_1 = this.area_2.slice(0);
		this.point = [this.savePoints.point[0] -distance[0],  this.savePoints.point[1] -distance[1]];
		this.point2 = [this.savePoints.point2[0] -distance[0], this.savePoints.point2[1] -distance[1],  ];
		context.$methods().renderAll();
		this.moveStart =false;
	}
}
CollageSprite.prototype.cursorOver_ = function(point){
	var area = this.area_1;
	if(this.rotate !== 0){
		area = rotationArea(this.area_1, this.rotate);
	}	
	var pathArea = getPathArea(area);						 
	var isOver = ctx.isPointInPath(pathArea, point[0], point[1]);	
	if(isOver){							
		document.body.style.cursor = "pointer";
		this.cursorOver = true;
	}else{
		document.body.style.cursor = "auto";
		this.cursorOver = false;
	}	
}
















