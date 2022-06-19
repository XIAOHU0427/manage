var rotation = document.getElementById("rotation")//外层父div
        var rotateFather = document.getElementById("rotateFather");//轮播图片的div
        var lis = rotateFather.children;//轮播图片的每个小li
        var oli = document.getElementById("dot").children;//下面颜色的小li
        var rightBtn = document.getElementsByClassName("rightBtn")[0];//右按钮
        var leftBtn = document.getElementsByClassName("leftBtn")[0];//左按钮
        var index = 0;//颜色小li的index
        var n = 0;//点击次数
 
        oli[index].style.backgroundColor = "red"
        function clearColor() { //clearColor函数清除小li的颜色
            for (let i = 0; i < oli.length; i++) {
                oli[index].style.backgroundColor = null
            }
        }
        rightBtn.onclick = function () {//右边点击
            clearColor()
            index++
            if (index > 3) {
                index = 0
            }
            oli[index].style.backgroundColor = "red"
 
            n++
            rotateFather.style.transform = `translateX(${n * -600}px)`
            rotateFather.style.transition = `all .5s linear`
            setTimeout(() => {
                if (n>=4) {
                    n = 0
                    rotateFather.style.transform = `translateX(0px)`
                    rotateFather.style.transition = `all 0s linear`
                }
            },500)//这里的时间要对应 rotateFather.style.transition = `all .5s linear`里面的时间
        }
        leftBtn.onclick = function () { //左边点击
            clearColor()
            index--
            if (index < 0) {
                index = 3
            }
            oli[index].style.backgroundColor = "red"
 
            n--
            rotateFather.style.transform = `translateX(${n * -600}px)`
            rotateFather.style.transition = `all .5s linear`
            setTimeout(() => {
                if (n <=-1) {
                    n = 3
                    rotateFather.style.transform = `translateX(${n * -600}px)`
                    rotateFather.style.transition = `all 0s linear`
                }
            }, 500)
 
        }
        let timer = setInterval(function () { //右边点击放定时器里面,每1000点击一次
            rightBtn.click()
        }, 1000)
 
        rotation.onmouseenter = function () {//进入轮播停止定时器
            clearInterval(timer)
        }
        rotation.onmouseleave = function () {//离开轮播开启定时器
            timer = setInterval(function () {
                rightBtn.click()
            }, 1000)
        }
        for (let i = 0; i < oli.length; i++) {//移动下面的小li,显示对应的图片和对应的小li变色
            oli[i].onmouseenter = function () {
                clearColor()
                index = i
                oli[index].style.backgroundColor = "red"
                n = index
                rotateFather.style.transform = `translateX(${n * -600}px)`
                rotateFather.style.transition = `all .5s linear`
                setTimeout(() => {
                    if (n >=4) {
                        n = 0
                        rotateFather.style.transform = `translateX(0px)`
                        rotateFather.style.transition = `all 0s linear`
                    }
                }, 500)
            }
        }