
<img  src="https://github.com/SergeyOvechkin/collagen/blob/master/collagen_2.ppg">

Collage_n - приложение для создания коллажей из картинок:  масштабирует, вращает, искажает  и перемещает выделенную область изображения.

Пример работы приложения: https://sergeyovechkin.github.io/collagen/index.html

Редактор работает онлайн с github, достаточно просто перейти по ссылке выше, также его можно скачать себе и запустить на локальном сервере, например на node.js (node app).

Для загрузки картинки нужно указать ее url (сервер на котором размещена картинка должен поддерживать crossorigin запросы), либо загрузить с компютера нажав кнопку load img.

После загрузки картинку можно масштабировать или отразить, по оси x, y или обоим направлениям.

Для начала работы нужно создать выделение (замкнутый контур) затем его можно отредактировать перемещая либо добавляя контрольные точки, либо сбросить и начать все заново. 

Далее после создания контура все что внутри него можно исказить (масштабировать по точкам), для этого нужно нажать на кнопку "Искажать" затем перетаскивать точки в новое положение.

Выделенную область можно залить каким либо цветом, добавить ей прозрачность либо применить какой либо цветовой эффект, а также повернуть ее на какой либо градус.

После всех манипуляций область можно скопировать в спрайт (создать спрайт), а затем переместить в новое положение и создать с него отпечаток на фоновом изображении, спрайты также можно  вращать.

При окончании работы спрайт можно сохранить в локальном хранилище нажав на кнопку Save on PC, а затем восстановить нажав Показать сохраненные спрайты => создать

<p>
	Толщину линий обводки контура и цвет а также другие параметры, можно изменить открыв консоль броузера, далее ввести:					
	<ul>
		<li>Толщина обводки контура: lineWidth = 3;</li>
		<li>Цвет обвоки спрайтов: colorSpriteArea = "green";</li>
		<li>Цвет обводки фона:  colorCommonArea = "red";</li>
		<li>Размер квадрата точки контура/2: halfPoitSize = 5;</li>
	</ul>
</p>


Gollage_n находится в стадии тестирования и разработки. 

Контактная информация: ovechkin.sergey123@mail.ru

