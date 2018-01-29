let that;
/**
 * 引入css
 */
let styleDom = document.createElement("style");
styleDom.innerHTML = '*{margin:0;padding:0;}.loading-container{width:100%;height:100%;position:fixed;}.spinner {margin: 50% auto;width: 50px;height: 60px;text-align: center;font-size: 10px;}.spinner>div {margin:0 1px;background-color: #67CF22;height: 100%;width: 6px;display: inline-block;-webkit-animation: stretchdelay 1.2s infinite ease-in-out;animation: stretchdelay 1.2s infinite ease-in-out;}.spinner .rect2 {-webkit-animation-delay: -1.1s;animation-delay: -1.1s;}.spinner .rect3 {-webkit-animation-delay: -1.0s;animation-delay: -1.0s;}.spinner .rect4 {-webkit-animation-delay: -0.9s;animation-delay: -0.9s;}.spinner .rect5 {-webkit-animation-delay: -0.8s;animation-delay: -0.8s;}@-webkit-keyframes stretchdelay {0%,40%,100% {-webkit-transform: scaleY(0.4)}20% {-webkit-transform: scaleY(1.0)}}@keyframes stretchdelay {0%,40%,100% {transform: scaleY(0.4);-webkit-transform: scaleY(0.4);}20% {transform: scaleY(1.0);-webkit-transform: scaleY(1.0);}}';
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
new MyLoader(["images/111.jpg", "images/btn-1.png", "images/btn-android.png", "images/btn-ios.png", "images/close.png", "images/index-bg.jpg", "images/livingRoom.jpg", "images/livingRoomEmpty.jpg", "images/logo.png", "images/myHonor-bg.jpg", "images/noHonor-bg.jpg", "images/rule.png", "images/test.jpg", "images/world.jpg"])