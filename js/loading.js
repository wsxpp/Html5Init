/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	var that;
	/**
	 * 引入css
	 */
	var styleDom = document.createElement("style");
	styleDom.innerHTML = '*{margin:0;padding:0;}.loading-container{width:100%;height:100%;position:fixed;}.spinner {margin: 50% auto;width: 50px;height: 60px;text-align: center;font-size: 10px;}.spinner>div {margin:0 1px;background-color: #67CF22;height: 100%;width: 6px;display: inline-block;-webkit-animation: stretchdelay 1.2s infinite ease-in-out;animation: stretchdelay 1.2s infinite ease-in-out;}.spinner .rect2 {-webkit-animation-delay: -1.1s;animation-delay: -1.1s;}.spinner .rect3 {-webkit-animation-delay: -1.0s;animation-delay: -1.0s;}.spinner .rect4 {-webkit-animation-delay: -0.9s;animation-delay: -0.9s;}.spinner .rect5 {-webkit-animation-delay: -0.8s;animation-delay: -0.8s;}@-webkit-keyframes stretchdelay {0%,40%,100% {-webkit-transform: scaleY(0.4)}20% {-webkit-transform: scaleY(1.0)}}@keyframes stretchdelay {0%,40%,100% {transform: scaleY(0.4);-webkit-transform: scaleY(0.4);}20% {transform: scaleY(1.0);-webkit-transform: scaleY(1.0);}}';
	document.head.appendChild(styleDom);
	/**
	 * 引入dom部分
	 */
	var loadingDom = document.createElement("div");
	loadingDom.id = "loading-container";
	loadingDom.innerHTML = '<div class="spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
	document.body.appendChild(loadingDom);
	var MyLoader = /** @class */ (function () {
	    function MyLoader(arr) {
	        that = this;
	        that.imagesArr = arr;
	        that.imagesArrLength = arr.length;
	        that.readyImagesNum = 0;
	        that.init();
	        that.checkIfAllImagesComplete();
	    }
	    MyLoader.prototype.init = function () {
	        for (var i = 0; i < that.imagesArrLength; i++) {
	            that.loadImage(that.imagesArr[i]);
	        }
	    };
	    MyLoader.prototype.loadImage = function (src) {
	        var imgObj = new Image();
	        imgObj.src = src;
	        imgObj.onload = function () {
	            that.readyImagesNum++;
	        };
	    };
	    MyLoader.prototype.checkIfAllImagesComplete = function () {
	        that.timer = setInterval(function () {
	            if (that.readyImagesNum === that.imagesArrLength) {
	                clearInterval(that.timer);
	                setTimeout(function () {
	                    removeLoading();
	                }, 5000);
	            }
	        }, 20);
	    };
	    return MyLoader;
	}());
	/**
	 * 删除loading动画的css和dom
	 */
	function removeLoading() {
	    document.body.removeChild(loadingDom);
	    document.head.removeChild(styleDom);
	}
	new MyLoader(["images/111.jpg", "images/btn-1.png", "images/btn-android.png", "images/btn-ios.png", "images/close.png", "images/index-bg.jpg", "images/livingRoom.jpg", "images/livingRoomEmpty.jpg", "images/logo.png", "images/myHonor-bg.jpg", "images/noHonor-bg.jpg", "images/rule.png", "images/test.jpg", "images/world.jpg"]);


/***/ })
/******/ ]);
//# sourceMappingURL=loading.js.map