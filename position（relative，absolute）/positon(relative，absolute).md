##  position属性之relative，absolute

**Absolute**CSS中的写法事：position；他的意思是绝对定位，他是参照浏览器的**左上角**，配合TOP,RIGHT,BOTTOM,LEFT(**下面简称TRB**)进行定位，在没有设定trbl，默认依据父级的坐标原始点为原始点。如果设定trbl并且父级没有设定position属性，那么当前的absolute则以浏览器左上角为原始点进行定位，位置将由trbl决定

**relative**
CSS中的写法是：position：relative；他的意思是相对定位，他是参照父级的原始点为原始点，无父级则以body的原始点为原始点，配合trbl进行定位，当父级内有padding等CSS属性时，当前级的原始点则参照父级内容区的原始点进行定位。

**定位的定义**
在CSS中关于定位的内容是：
position:relative | absolute | static | fixed

static（静态）没有特别的设定，遵循基本的定位规定，不能同福哦z-index进行层级分级
relative（相对定位）对象不可层叠，不脱离文档流，参考自身静态位置通过trbl定位，并且可以通过z-index进行层次分级
absolute（绝对定位）脱离文档流，通过top,bottom,left,right定位，选取其最近一个最有定位设置的父级对象进行绝对定位，如果对象的父级没有设置定位属性，absolute元素将以body坐标原点进行定位，可以通过z-index进行层次分级
fixed（固定定位）这里所固定的参照对象是可视窗口而并非是body或是父级元素。可以通过层次分级。
position:fixed; 他的含义就是：固定定位。这个固定与绝对定位很像，唯一不同的是绝对定位是被固定在网页中的某一个位置，而固定定位则是固定在浏览器的视框位置。

**CSS中定位的层叠分级**：z-index：auto | namber；

auto遵从欺负对象的定位
namber  无单位的整数值。可为负数