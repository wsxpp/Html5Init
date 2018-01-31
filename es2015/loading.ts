let that;
/**
 * 引入css
 */
let styleDom = document.createElement("style");
styleDom.innerHTML = '*{margin:0;padding:0;}#loading-container{background:white;width:100%;height:100%;position:fixed;top:0;left:0;z-index:999;}.spinner {margin: 50% auto;width: 50px;height: 60px;text-align: center;font-size: 10px;}.spinner>div {margin:0 1px;background-color: #67CF22;height: 100%;width: 6px;display: inline-block;-webkit-animation: stretchdelay 1.2s infinite ease-in-out;animation: stretchdelay 1.2s infinite ease-in-out;}.spinner .rect2 {-webkit-animation-delay: -1.1s;animation-delay: -1.1s;}.spinner .rect3 {-webkit-animation-delay: -1.0s;animation-delay: -1.0s;}.spinner .rect4 {-webkit-animation-delay: -0.9s;animation-delay: -0.9s;}.spinner .rect5 {-webkit-animation-delay: -0.8s;animation-delay: -0.8s;}@-webkit-keyframes stretchdelay {0%,40%,100% {-webkit-transform: scaleY(0.4)}20% {-webkit-transform: scaleY(1.0)}}@keyframes stretchdelay {0%,40%,100% {transform: scaleY(0.4);-webkit-transform: scaleY(0.4);}20% {transform: scaleY(1.0);-webkit-transform: scaleY(1.0);}}';
document.head.appendChild(styleDom);
/**
 * 引入dom部分
 */
let loadingDom = document.createElement("div");
loadingDom.id="loading-container";
loadingDom.innerHTML = '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>'
document.body.appendChild(loadingDom)

class MyLoader {
    imagesArr: Array<object>;
    imagesArrLength: number;
    readyImagesNum: number;
    timer: object;
    constructor(arr) {
        that = this;
        that.imagesArr = arr;
        that.imagesArrLength = arr.length;
        that.readyImagesNum = 0;
        that.init();
        that.checkIfAllImagesComplete()
    }

    init() {
        for (let i = 0; i < that.imagesArrLength; i++) {
            that.loadImage(that.imagesArr[i])
        }
    }

    loadImage(src) {
        let imgObj = new Image();
        imgObj.src = src;
        imgObj.onload = function () {
            that.readyImagesNum++;
        }
    }

    checkIfAllImagesComplete() {
        that.timer = setInterval(() => {
            if (that.readyImagesNum === that.imagesArrLength) {
                clearInterval(that.timer)
                setTimeout(()=>{
                    removeLoading()
                },5000)
            }
        }, 20)
    }
}
/**
 * 删除loading动画的css和dom
 */
function removeLoading(){
    document.body.removeChild(loadingDom)
    document.head.removeChild(styleDom);
}
new MyLoader(["images/btn-1.png","images/btn-2.png","images/btn-3.png","images/btn-4.png","images/btn-5.png","images/index-bg.jpg","images/index2-bg.jpg","images/index3-bg.jpg","images/logo.png","images/qian-step-1.png","images/qian-step-2.png","images/qian.png","images/share-bg.jpg","images/share.png","images/span-1.png","images/span-10.png","images/span-2.png","images/span-3.png","images/span-4.png","images/span-5.png","images/span-6.png","images/span-7.png","images/span-8.png","images/span-9.png"])