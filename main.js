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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "     .title {\r\n         font-family: monospace;\r\n         display: block;\r\n         font-size: 2.5em;\r\n         -webkit-margin-before: 0.67em;\r\n         -webkit-margin-after: 0.67em;\r\n         -webkit-margin-start: 0px;\r\n         -webkit-margin-end: 0px;\r\n         font-weight: bold;\r\n     }\r\n\r\n     .logo-container {\r\n         margin-top: 5%;\r\n     }\r\n\r\n     img.logo {\r\n         width: 250px;\r\n         margin-right: 20px;\r\n     }\r\n\r\n     .start-action {\r\n         margin-top: 5%;\r\n     }\r\n\r\n     .loading {\r\n         margin-top: 25%;\r\n     }\r\n\r\n     #mesh {\r\n         margin-top: 25px;\r\n         margin-left: 25px;\r\n     }\r\n\r\n     .mesh-col {\r\n         height: 7vw;\r\n         width: 7vw;\r\n         background-color: #eee;\r\n         padding: 10px;\r\n         margin: 23px;\r\n     }\r\n\r\n     .node {\r\n         width: 100%;\r\n         height: 100%;\r\n         background-color: aquamarine;\r\n     }\r\n\r\n     .mesh-row {\r\n         /* margin-top: 10px; */\r\n     }\r\n\r\n     .node-component {\r\n         width: 36px;\r\n         height: 36px;\r\n         padding: 5px 4.5px;\r\n         background-color: cornflowerblue;\r\n         top: -51px;\r\n         position: relative;\r\n         left: -51px;\r\n         color: #fff;\r\n         cursor: pointer;\r\n         border-radius: 4px;\r\n         font-size: 14px;\r\n     }\r\n\r\n     .origin-node {\r\n         background-color: green;\r\n     }\r\n\r\n     .destiny-node {\r\n         background-color: crimson;\r\n     }\r\n\r\n     .path-node {\r\n         color: black;\r\n         background-color: yellow;\r\n     }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div [hidden]=\"hide_presentation\">\n    <div style=\"text-align:center\">\n\n      <p class=\"title\">\n        {{ title }}\n      </p>\n      <div class=\"logo-container\">\n        <img class=\"logo\" src=\"/assets/artificial-intelligence.svg\" alt=\"\">\n        <img class=\"logo\" src=\"/assets/water.svg\" alt=\"\">\n        <img class=\"logo\" src=\"/assets/nodejs.svg\" alt=\"\">\n        <img class=\"logo\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n      </div>\n    </div>\n    <div class=\"row justify-content-center start-action\">\n      <div class=\"col-4\">\n        <button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\" (click)=\"startSimulator($event)\">INICIAR SIMULADOR</button>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"loading.show\" class=\"row justify-content-center loading\">\n    <div class=\"col-10\">\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\"\n          aria-valuemax=\"100\" [style.width.pc]=\"loading.percent\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"ready_mesh\" id=\"mesh\">\n    <div *ngFor=\"let row of mesh.rows\" class=\"row mesh-row\">\n      <div *ngFor=\"let node of row\" class=\"mesh-col \">\n        <div class=\"node\">\n          <div [class]=\"'node-component ' + node.class\" (click)=\"open(content, node)\">\n            ({{node.location.X}},{{node.location.Y}})\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Criação de Rota</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"cancelSelectNode()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Selecione o tipo de nó para a rota</label>\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"select_tipo_no\">\n          <option value=\"ORIGEM\">Origem</option>\n          <option value=\"DESTINO\">Destino</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"selectNode()\">Save</button>\n    </div>\n  </ng-template>\n\n</div>"

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
/* harmony import */ var _models_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/interfaces */ "./src/models/interfaces.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _core_path_finder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/path-finder */ "./src/core/path-finder.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
        this.hide_presentation = false;
        this.title = 'Malha Hídrica Inteligente';
        // dados de inicialização da malha
        this.mesh_rows = 10;
        this.mesh_cols = 10;
        // loading state
        this.loading = {
            show: false,
            percent: 0
        };
        // Malha processada
        this.ready_mesh = false;
        // node pre-selecionado
        this.pre_selected_node = null;
        // variavel select tipo de no
        this.select_tipo_no = '';
        // path atual
        this.current_path = [];
        // ultimo path
        this.last_path = [];
        this.selected_nodes = {
            origem: null,
            destino: null
        };
        this.mesh = {
            n_rows: this.mesh_rows,
            n_collumns: this.mesh_cols,
            rows: []
        };
        this.path_finder = new _core_path_finder__WEBPACK_IMPORTED_MODULE_3__["PathFinder"]();
    }
    AppComponent.prototype.startSimulator = function (event) {
        var _this = this;
        this.hide_presentation = true;
        setTimeout(function () {
            _this.startLoading();
        }, 200);
    };
    AppComponent.prototype.startLoading = function () {
        var _this = this;
        this.loading.show = true;
        var timer = setInterval(function () {
            if (_this.loading.percent < 100) {
                _this.loading.percent += 10;
            }
            else {
                clearInterval(timer);
                setTimeout(function () {
                    _this.loading.show = false;
                    _this.initMesh();
                    console.log(_this.mesh);
                }, 200);
            }
        }, 100);
    };
    AppComponent.prototype.initMesh = function () {
        for (var row = 0; row < this.mesh_rows; row++) {
            var column = [];
            for (var col = 0; col < this.mesh_cols; col++) {
                var node = {
                    location: { X: row, Y: col },
                    state: _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["ComponentStatus"].FUNCIONAL,
                    class: _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].DEFAULT_NODE
                };
                column.push(node);
                // if (row === 0) {
                //   this.mesh.n_collumns++;
                // }
            }
            this.mesh.rows.push(column);
            // this.mesh.n_rows++;
        }
        this.ready_mesh = true;
    };
    AppComponent.prototype.selectNode = function () {
        if (this.select_tipo_no === 'ORIGEM') {
            if (this.selected_nodes.destino === this.pre_selected_node) {
                this.selected_nodes.destino.class = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].DEFAULT_NODE;
                this.selected_nodes.destino = null;
            }
            this.pre_selected_node.class = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].PATH_ORIGIN;
            if (this.selected_nodes.origem !== null) {
                this.selected_nodes.origem.class = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].DEFAULT_NODE;
            }
            this.selected_nodes.origem = this.pre_selected_node;
        }
        else if (this.select_tipo_no === 'DESTINO') {
            if (this.selected_nodes.origem === this.pre_selected_node) {
                this.selected_nodes.destino.class = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].DEFAULT_NODE;
                this.selected_nodes.origem = null;
            }
            if (this.selected_nodes.destino !== null) {
                this.selected_nodes.destino.class = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].DEFAULT_NODE;
            }
            this.pre_selected_node.class = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].PATH_DESTINY;
            this.selected_nodes.destino = this.pre_selected_node;
        }
        // this.pre_selected_node = null;
        this.modal.close();
        if (this.selected_nodes.origem != null && this.selected_nodes.destino != null) {
            this.mountRoute();
        }
    };
    AppComponent.prototype.mountRoute = function () {
        this.current_path = this.path_finder.mountPath(this.mesh, this.selected_nodes);
        this.colorPath();
        // console.log(route);
    };
    AppComponent.prototype.colorPath = function () {
        for (var _i = 0, _a = this.last_path; _i < _a.length; _i++) {
            var node = _a[_i];
            node.class = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].DEFAULT_NODE;
        }
        this.last_path = this.current_path;
        for (var _b = 0, _c = this.current_path; _b < _c.length; _b++) {
            var node = _c[_b];
            if (this.selected_nodes.destino !== node) {
                node.class = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeClass"].PATH_NODE;
            }
        }
    };
    AppComponent.prototype.cancelSelectNode = function (callback) {
        this.modal.close();
        // this.pre_selected_node = null;
    };
    // classe css para os nós da rota
    AppComponent.prototype.getNodeCssClass = function (node) {
        var css_class = '';
        if (node === this.selected_nodes.origem) {
            css_class = 'origin-node';
        }
        else if (node === this.selected_nodes.destino) {
            css_class = 'destiny-node';
        }
        return css_class;
    };
    // modeal functions
    AppComponent.prototype.open = function (content, node) {
        var _this = this;
        this.pre_selected_node = node;
        this.modal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.modal.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/core/path-finder.ts":
/*!*********************************!*\
  !*** ./src/core/path-finder.ts ***!
  \*********************************/
/*! exports provided: PathFinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathFinder", function() { return PathFinder; });
/* harmony import */ var _models_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/interfaces */ "./src/models/interfaces.ts");

var PathFinder = /** @class */ (function () {
    function PathFinder() {
        console.log('Initializing...');
    }
    PathFinder.prototype.getDistance = function (pA, pB) {
        var exp1 = Math.pow(pA.X - pB.X, 2);
        var exp2 = Math.pow(pA.Y - pB.Y, 2);
        return Math.sqrt(exp1 + exp2);
    };
    PathFinder.prototype.mountPath = function (mesh, route) {
        var path = [];
        var current_node = route.origem;
        while (current_node !== route.destino) {
            var directions = this.getPossibleRouteNodes(mesh, route);
            current_node = this.getNextNodeRoute(mesh, current_node, route.destino, directions);
            path.push(current_node);
        }
        return path;
    };
    PathFinder.prototype.getPossibleRouteNodes = function (mesh, route, previous_node) {
        var routes = [];
        var possible_directions = [];
        if (route.origem.location.Y !== 0) {
            possible_directions.push(_models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].N);
        }
        if (route.origem.location.X !== 0) {
            possible_directions.push(_models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].O);
        }
        if (route.origem.location.Y !== (mesh.n_collumns - 1)) {
            possible_directions.push(_models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].S);
        }
        if (route.origem.location.X !== (mesh.n_rows - 1)) {
            possible_directions.push(_models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].L);
        }
        if (previous_node) {
            // ultima posição
            var last_directon = void 0;
            if (previous_node.location.X === route.origem.location.X) {
                if (previous_node.location.Y < route.origem.location.Y) {
                    last_directon = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].N;
                }
                else {
                    last_directon = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].S;
                }
            }
            else {
                if (previous_node.location.X < route.origem.location.X) {
                    last_directon = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].O;
                }
                else {
                    last_directon = _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].L;
                }
            }
            possible_directions.splice(possible_directions.indexOf(last_directon), 1);
        }
        return possible_directions;
    };
    PathFinder.prototype.getNextNodeRoute = function (mesh, origem, destino, directions) {
        var next_node = null;
        var nodes = [];
        if (directions.length === 1) {
            next_node = this.getNodeByDirection(mesh, origem, directions[0]);
        }
        else {
            for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
                var direc = directions_1[_i];
                nodes.push(this.getNodeByDirection(mesh, origem, direc));
            }
        }
        next_node = nodes.splice(0, 1)[0];
        var last_distance = this.getDistance(next_node.location, destino.location);
        for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
            var node = nodes_1[_a];
            var distance = this.getDistance(node.location, destino.location);
            if (distance < last_distance) {
                last_distance = distance;
                next_node = node;
            }
        }
        return next_node;
    };
    PathFinder.prototype.getNodeByDirection = function (mesh, node, direction) {
        var _node;
        switch (direction) {
            case _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].N:
                _node = mesh.rows[node.location.X][node.location.Y - 1];
                break;
            case _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].S:
                _node = mesh.rows[node.location.X][node.location.Y + 1];
                break;
            case _models_interfaces__WEBPACK_IMPORTED_MODULE_0__["NodeDirection"].L:
                _node = mesh.rows[node.location.X + 1][node.location.Y];
                break;
            default:
                _node = mesh.rows[node.location.X - 1][node.location.Y];
                break;
        }
        return _node;
    };
    return PathFinder;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

/***/ "./src/models/interfaces.ts":
/*!**********************************!*\
  !*** ./src/models/interfaces.ts ***!
  \**********************************/
/*! exports provided: ComponentStatus, NodeDirection, NodeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentStatus", function() { return ComponentStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeDirection", function() { return NodeDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeClass", function() { return NodeClass; });
var ComponentStatus;
(function (ComponentStatus) {
    ComponentStatus["FUNCIONAL"] = "FUNCIONAL";
    ComponentStatus["NAO_FUNCIONAL"] = "NAO FUNCIONAL";
})(ComponentStatus || (ComponentStatus = {}));
var NodeDirection;
(function (NodeDirection) {
    NodeDirection["N"] = "NORTE";
    NodeDirection["S"] = "SUL";
    NodeDirection["L"] = "LESTE";
    NodeDirection["O"] = "OESTE";
})(NodeDirection || (NodeDirection = {}));
var NodeClass;
(function (NodeClass) {
    NodeClass["PATH_ORIGIN"] = "origin-node";
    NodeClass["PATH_DESTINY"] = "destiny-node";
    NodeClass["PATH_NODE"] = "path-node";
    NodeClass["DEFAULT_NODE"] = "";
})(NodeClass || (NodeClass = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documentos\IESB\2018\IA\iaFrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map