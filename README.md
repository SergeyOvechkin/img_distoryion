
<img height="450" src="https://github.com/SergeyOvechkin/collagen/blob/master/collagen_2.png">

Collage_n - приложение для создания коллажей из картинок:  масштабирует, вращает, искажает  и перемещает выделенную область изображения.

Пример работы приложения: https://sergeyovechkin.github.io/collage_n/index.html

Редактор работает онлайн с github, достаточно просто перейти по ссылке выше, также его можно скачать себе и запустить на локальном сервере, например на node.js (node app).

В качестве подсказок, при наведении и удерживании курсора над большинством кнопок появляется краткое описание функции данной кнопки, на которые следует ориентироваться.

Для загрузки картинки нужно указать ее url (сервер на котором размещена картинка должен поддерживать crossorigin запросы), либо загрузить с компютера нажав кнопку load img.

После загрузки картинку можно масштабировать или отразить, по оси x, y или обоим направлениям.

Для начала работы нужно создать выделение (замкнутый контур) затем его можно отредактировать перемещая либо добавляя контрольные точки, либо сбросить и начать все заново. 

Далее после создания контура все что внутри него можно исказить (масштабировать по точкам), для этого нужно нажать на кнопку "Искажать" затем перетаскивать точки в новое положение.

Выделенную область можно залить каким либо цветом, добавить ей прозрачность либо применить какой либо цветовой эффект, а также повернуть ее на какой либо градус.

После всех манипуляций область можно скопировать в спрайт (создать спрайт), а затем переместить в новое положение и создать с него отпечаток на фоновом изображении, спрайты также можно  вращать.

Масштабирование спрайта идет от центра в обоих направлениях.
При масштабировании и вращении спрайта, сначала считается масштабирование относительно начального размера, затем поворот относительно центра уже отмасштабированого спрайта.
Поворот также считается относительно начального градуса = 0.
При отражении спрайта убирается вращение затем производится отражение, затем вращается сново уже отраженным. 

При окончании работы спрайт можно сохранить в локальном хранилище нажав на кнопку Save on PC, а затем восстановить нажав Показать сохраненные спрайты => создать

<p>
	Толщину линий обводки контура и цвет а также другие параметры, можно изменить открыв консоль броузера, далее ввести:					
	<ul>
		<li>Толщина обводки контура: lineWidth = 3;</li>
		<li>Цвет обвоки контура спрайтов: colorSpriteArea = "green";</li>
		<li>Цвет обводки  контура фона:  colorCommonArea = "red";</li>
		<li>Размер квадрата точки контура/2: halfPoitSize = 5;</li>
		<li>Максимальное количество шагов назад при редактировании фона: backStepCounts = 3; </li>
	</ul>
</p>


Collage_n находится в стадии тестирования и разработки. 

Контактная информация: ovechkin.sergey123@mail.ru

