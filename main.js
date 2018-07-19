(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n}\r\n\r\n.navigation{\r\n  width:20%;\r\n  height: 100%;\r\n  background-color: #2b2b3a;\r\n}\r\n\r\n.main {\r\n  width: 80%;\r\n  min-height: 100%;\r\n  background-color: green;\r\n}\r\n\r\n.headersContent {\r\n  height: 10%;\r\n  width: 100%;\r\n  background-color: #1ed2f4;\r\n}\r\n\r\n.taskContent {\r\n  width: 100%;\r\n  min-height: 90%;\r\n  background-color: darkgoldenrod;\r\n  display: flex;\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"all\">\n\n\n  <div class=\"navigation\">\n    <app-navigation>navigation</app-navigation>\n  </div>\n\n  <div class=\"main\">\n\n    <div class=\"headersContent\">\n      <app-header></app-header>\n    </div>\n\n    <div class=\"taskContent\">\n      <app-main> main</app-main>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_add_task_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/add-task/list-tasks/list-tasks.component */ "./src/app/main/add-task/list-tasks/list-tasks.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _main_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/add-task/add-task.component */ "./src/app/main/add-task/add-task.component.ts");
/* harmony import */ var _main_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/edit-task/edit-task.component */ "./src/app/main/edit-task/edit-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _main_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_8__["AddTaskComponent"],
                _main_add_task_list_tasks_list_tasks_component__WEBPACK_IMPORTED_MODULE_6__["ListTasksComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _main_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_9__["EditTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n  width: 100%;\r\n  padding-left: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\r\n\r\nh1, h2 {\r\n  color: white;\r\n  font-family: Calibri;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>Work task</h1>\n\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/add-task/add-task.component.css":
/*!******************************************************!*\
  !*** ./src/app/main/add-task/add-task.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-input {\r\n  width: 300px;\r\n  height: 30px;\r\n  margin: 50px 10px 30px 0;\r\n  border-top-style: none;\r\n  border-left-style: none;\r\n  border-right-style: none;\r\n  border-bottom: 1px solid grey;\r\n  background-color: white;\r\n  outline: none;\r\n  padding-left: 10px;\r\n\r\n  font-family: Calibri;\r\n  font-weight: 200;\r\n  color: #196a85;\r\n  padding-top: 10px;\r\n\r\n  font-size:20px;\r\n}\r\n\r\n.add-input:focus {\r\n  border-bottom: 1px solid #1c82a1;\r\n\r\n}\r\n\r\n.add-button {\r\n  width: 35px;\r\n  height: 35px;\r\n  background-color: #1ed2f4;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  outline: none;\r\n  margin-left: 10px;\r\n}\r\n\r\n.effect {\r\n  width: 60%;\r\n  font-family: Calibri;\r\n  border: 0;\r\n  padding: 4px 0;\r\n  border-bottom: 1px solid #2b2b3a;\r\n  background-color: transparent;\r\n  padding-left: 3px;\r\n}\r\n\r\n.effect ~ label{\r\n  font-family: Calibri;\r\n  position: absolute;\r\n  left: 60px;\r\n  top: 75px;\r\n  color: #2b2b3a;\r\n  transition: 0.3s;\r\n  z-index: -1;\r\n  font-size: 18px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.effect:focus ~ label{\r\n  font-family: Calibri;\r\n  top: 50px;\r\n  font-size: 13px;\r\n  color: #1c82a1;\r\n  transition: 0.3s;\r\n}\r\n\r\n.div {\r\n\r\n  position: relative;\r\n  z-index: 0;\r\n  height: 93%;\r\n  background-color: rgb(236, 235, 243);\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 15px 70px;\r\n}\r\n\r\n.plus{\r\n  width: 20px;\r\n  height: 20px;\r\n  padding-top: 3px;\r\n}\r\n\r\n.menu{\r\n  height: 7%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.inProgressBtn, .DoneBtn{\r\n\r\n  height: 100%;\r\n  width: 50%;\r\n  text-align: left;\r\n  font-size: 20px;\r\n  background-color: #1c82a1;\r\n  border: none;\r\n  outline: none;\r\n  color: #e8e9ea;\r\n  cursor: pointer;\r\n  font-weight: 300;\r\n  font-family: Calibri;\r\n  border-bottom: 5px solid #1c82a1;\r\n  padding-left: 10px;\r\n}\r\n\r\n.inProgressBtn:focus, .DoneBtn:focus {\r\n  border-bottom: 5px solid #a8d827;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/add-task/add-task.component.html":
/*!*******************************************************!*\
  !*** ./src/app/main/add-task/add-task.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"menu\">\n  <button class=\"menuComponent inProgressBtn\" (click)=\"openInProgress($event)\">Upcoming</button>\n  <button class=\"menuComponent DoneBtn\" (click)=\"openDone($event)\">Finished</button>\n</div>\n\n<div class=\"div\" id=\"inProgressList\">\n\n\n\n\n\n  <input maxlength=\"20\" [(ngModel)] =\"newTask\" type=\"text\" class=\"add-input effect\">\n  <label>write task here</label>\n  <button (click)=\"add($event)\"  class=\"add-button\"> <img class=\"plus\" src ='./assets/picture/plus.png'/></button>\n\n  <app-list-tasks [listTaskChild]=\"listTask\"></app-list-tasks>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/add-task/add-task.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/main/add-task/add-task.component.ts ***!
  \*****************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent() {
        this.listTask = ['Zadanie 1', 'Zadanie 2', 'Zadanie 3', 'Zadanie 4'];
    }
    AddTaskComponent.prototype.add = function () {
        this.listTask.push(this.newTask);
        this.newTask = '';
    };
    AddTaskComponent.prototype.openInProgress = function () { };
    AddTaskComponent.prototype.openDone = function () { };
    AddTaskComponent.prototype.ngOnInit = function () { };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/main/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/main/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/main/add-task/list-tasks/list-tasks.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main/add-task/list-tasks/list-tasks.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\r\n  list-style: none;\r\n  background-color: white;\r\n  margin-bottom: 5px;\r\n  margin-top: 20px;\r\n  padding: 7px;\r\n  font-family: Calibri;\r\n  font-size: 16px;\r\n  color: #196a85;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n\r\nul {\r\n  margin-top: 40px;\r\n  padding: 0;\r\n}\r\n\r\n\r\n.del {\r\n  position: absolute;\r\n  right: 10px;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  background-color: #1ed2f4;\r\n\r\n  width: 35px;\r\n  height: 35px;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  outline: none;\r\n  margin-left: 10px;\r\n}\r\n\r\n\r\n.delete {\r\n  height: 20px;\r\n  width: 20px;\r\n  padding-left: 2px;\r\n}\r\n\r\n\r\n.done {\r\n  position: absolute;\r\n  right: 60px;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  background-color: #a8d827;\r\n\r\n  width: 35px;\r\n  height: 35px;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  outline: none;\r\n  margin-left: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/add-task/list-tasks/list-tasks.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/add-task/list-tasks/list-tasks.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let task of listTaskChild\">\n    {{task}}\n    <button (click)=\"deleteTask(task)\" class=\"del\"><img class=\"delete\" src ='./assets/picture/delete.png'/></button>\n    <button  class=\"done\"><img class=\"delete\" src ='./assets/picture/done.png'/></button>\n  </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/app/main/add-task/list-tasks/list-tasks.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/add-task/list-tasks/list-tasks.component.ts ***!
  \******************************************************************/
/*! exports provided: ListTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTasksComponent", function() { return ListTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListTasksComponent = /** @class */ (function () {
    function ListTasksComponent() {
    }
    ListTasksComponent.prototype.ngOnInit = function () {
    };
    ListTasksComponent.prototype.deleteTask = function (task) {
        this.i = this.listTaskChild.indexOf(task);
        this.listTaskChild.splice(this.i, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ListTasksComponent.prototype, "listTaskChild", void 0);
    ListTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-tasks',
            template: __webpack_require__(/*! ./list-tasks.component.html */ "./src/app/main/add-task/list-tasks/list-tasks.component.html"),
            styles: [__webpack_require__(/*! ./list-tasks.component.css */ "./src/app/main/add-task/list-tasks/list-tasks.component.css")],
        })
    ], ListTasksComponent);
    return ListTasksComponent;
}());



/***/ }),

/***/ "./src/app/main/edit-task/edit-task.component.css":
/*!********************************************************!*\
  !*** ./src/app/main/edit-task/edit-task.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/edit-task/edit-task.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/edit-task/edit-task.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-task works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/edit-task/edit-task.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/edit-task/edit-task.component.ts ***!
  \*******************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent() {
    }
    EditTaskComponent.prototype.ngOnInit = function () {
    };
    EditTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/main/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.css */ "./src/app/main/edit-task/edit-task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".taskContent {\r\n  width: 60%;\r\n  background-color: #f4f5f6;\r\n}\r\n\r\n.editContent {\r\n  width: 40%;\r\n  background-color: #e8e9ea;\r\n}\r\n\r\n.task-edit-content {\r\n  height: 90%;\r\n  position: absolute;\r\n  width: 80%;\r\n  display: flex;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"task-edit-content\">\n\n  <div class=\"taskContent\">\n    <app-add-task></app-add-task>\n  </div>\n\n  <div class=\"editContent\">\n    <app-edit-task></app-edit-task>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".acc{\r\n  margin: 10px;\r\n  width:80px;\r\n  height: 80px;\r\n  background-color: #196a85;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  outline: none;\r\n}\r\n\r\n.account {\r\n  display: flex;\r\n}\r\n\r\n.accBtn {\r\n  height: 60px;\r\n  width: 60px;\r\n}\r\n\r\n.nameAcc {\r\n  color: #e8e9ea;\r\n  font-family: Calibri;\r\n}\r\n\r\n.accHello {\r\n  padding-left: 10px;\r\n  padding-top: 5px;\r\n  font-size: 30px;\r\n  line-height: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"account\">\n\n  <button class=\"acc\"><img class=\"accBtn\" src ='./assets/picture/account.png'/></button>\n  <div class=\"accHello\">\n    <p class=\"nameAcc\">Hello,</p>\n    <p class=\"nameAcc\">Elzbieta</p>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\elane\ToDo\ToDo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
