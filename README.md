
<img src="https://github.com/SergeyOvechkin/collage_n/blob/master/collagen_2.png">

Collage_n - приложение для создания коллажей и спрайтов.

Ссылка на редактор - онлайн: https://sergeyovechkin.github.io/collage_n/index.html

Редактор работает онлайн с github, достаточно просто перейти по ссылке выше, также его можно скачать себе и запустить на локальном сервере, например на node.js

В качестве подсказок, при наведении и удержании курсора мыши над большинством кнопок появляется краткое описание функции данной кнопки, на которые следует ориентироваться.

Для загрузки картинки нужно указать ее url (сервер на котором размещена картинка должен поддерживать crossorigin запросы), либо загрузить с компютера нажав кнопку load img.

После загрузки картинку можно масштабировать или отразить, по оси x, y или обоим направлениям.

Для начала работы нужно создать выделение (замкнутый контур) затем его можно отредактировать перемещая либо добавляя контрольные точки, либо сбросить и начать все заново. 

Выделенную область можно залить каким либо цветом, добавить ей прозрачность либо применить какой либо цветовой эффект, а также масштабировать, отразить и повернуть на какой либо градус.

Для искажения (масштабирования по точкам) выделенной области необходимо нажать кнопку "искажать", выбрать ось "xy", "x" или "у", затем перетаскивать точки в новое положение.

По оси "xy" для искажения используется библиотека <a href="https://chenxing.name/fun/imgwarp-js/">**imgwarp-js**</a>, добавление точек деформации - Ctrl+Click, удаление - Shift+Click.
После окончания деформации, для возвращения в обычный режим нужно нажать кнопку "Перемещать точку".


После всех манипуляций область можно скопировать в спрайт (создать спрайт), а затем переместить в новое положение и создать с него отпечаток на фоновом изображении, спрайты также можно масштабировать, отражать и  вращать.

При работе со спрайтами часть кнопок скрывается, остаются только те которые можно применить к спрайтам. Чтобы вернуться к работе с фоновым изображением, созданию и редактированию контура нужно нажать на кнопку "работать с фоновым изображением".

Масштабирование спрайта идет от центра в обоих направлениях. 
При масштабировании и вращении спрайта, сначала считается масштабирование относительно начального размера, затем поворот относительно центра уже отмасштабированого спрайта.
Поворот также считается относительно начального градуса = 0.
При отражении спрайта убирается вращение затем производится отражение, затем вращается сново уже отраженным.
При масштабировании спрайта со скругленными углами если масштаб по оси x отличается от масштаба по оси y может появиться несовпадение контура и картинки спрайта.

При окончании работы спрайт можно сохранить в локальном хранилище нажав на кнопку Save, а затем восстановить нажав Показать сохраненные спрайты => создать

Для сохранения спрайтов в спрайт-листы можно использовать модуль <a href="https://github.com/SergeyOvechkin/collage_n/blob/master/js/modules/spriteMatrix.js"> spriteMatrix </a>

Для искажения углов и создания 3d эффектов, можно использовать модуль <a href="https://github.com/SergeyOvechkin/collage_n/blob/master/js/modules/perspectiveTransform.js">  perspectiveTransform </a>

<p>
	Толщину линий обводки контура и цвет а также другие параметры, можно изменить в панели:  "Загрузить модуль, изменить настройки"				
	<ul>
		<li>Толщина обводки контура: lineWidth = 3;</li>
		<li>Цвет обвоки контура спрайтов: colorSpriteArea = "green";</li>
		<li>Цвет обводки  контура фона:  colorCommonArea = "red";</li>
		<li>Размер квадрата точки контура/2: halfPointSize = 5;</li>
		<li>Максимальное количество шагов назад при редактировании фона: backStepCounts = 3; </li>
	</ul>
</p>

Colage_n находится в стадии тестирования и разработки.
Контактная информация: ovechkin.sergey123@mail.ru

