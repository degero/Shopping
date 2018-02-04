webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/configuration/configuration.module": [
		"../../../../../src/app/configuration/configuration.module.ts",
		"configuration.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var shopping_list_component_1 = __webpack_require__("../../../../../src/app/components/shoppinglist/shopping-list.component.ts");
var shopping_item_component_1 = __webpack_require__("../../../../../src/app/components/shoppingitem/shopping-item.component.ts");
var routes = [
    { path: '', redirectTo: '/shoppinglist', pathMatch: 'full' },
    {
        path: 'configuration',
        loadChildren: 'app/configuration/configuration.module#ConfigurationModule'
    },
    { path: 'shoppingitem/:id', component: shopping_item_component_1.ShoppingItemComponent },
    { path: 'shoppinglist', component: shopping_list_component_1.ShoppingListComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<h1>Shopping List</h1>\r\n<router-outlet></router-outlet>\r\n\r\n<a routerLink=\"shoppinglist\">Home</a>\r\n<a routerLink=\"configuration\">Configuration</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var shopping_list_component_1 = __webpack_require__("../../../../../src/app/components/shoppinglist/shopping-list.component.ts");
var shopping_item_component_1 = __webpack_require__("../../../../../src/app/components/shoppingitem/shopping-item.component.ts");
var custom_http_service_1 = __webpack_require__("../../../../../src/app/services/custom-http.service.ts");
var shopping_list_service_1 = __webpack_require__("../../../../../src/app/services/shopping-list.service.ts");
var http_2 = __webpack_require__("../../../common/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                shopping_list_component_1.ShoppingListComponent,
                shopping_item_component_1.ShoppingItemComponent
            ],
            imports: [
                http_2.HttpClientModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
            ],
            providers: [custom_http_service_1.CustomHttpService, shopping_list_service_1.ShoppingListService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/components/shoppingitem/shopping-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ShoppingItem\">\r\n  <h2>{{ ShoppingItem.Name }} Details</h2>\r\n  <div><span>id: </span>{{ShoppingItem.Id}}</div>\r\n  <div>\r\n    <form (ngSubmit)=\"submit()\" #shoppingForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" class=\"form-input\" id=\"name\" name=\"name\" #name=\"ngModel\" required minlength=\"4\" [(ngModel)]=\"ShoppingItem.Name\" />\r\n        <div *ngIf=\"name.errors.required\">\r\n          Name is required.\r\n        </div>\r\n        <div *ngIf=\"name.errors.minlength\">\r\n          Name must be at least 4 characters long.\r\n        </div>\r\n        <div *ngIf=\"name.errors.forbiddenName\">\r\n          Name cannot be Bob.\r\n        </div>\r\n\r\n        <!-- reactive form layout -->\r\n        <!-- <input type=\"text\" class=\"form-control\" formControlName=\"name\" required />\r\n    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\r\n         class=\"alert alert-danger\">\r\n      <div *ngIf=\"name.errors.required\">\r\n        Name is required.\r\n      </div>\r\n      <div *ngIf=\"name.errors.minlength\">\r\n        Name must be at least 4 characters long.\r\n      </div>\r\n      <div *ngIf=\"name.errors.forbiddenName\">\r\n        Name cannot be Bob.\r\n      </div>\r\n    </div>-->\r\n\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!shoppingForm.form.valid\">Submit</button>\r\n      </form>\r\n    </div>\r\n    <button (click)=\"back()\">go back</button>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shoppingitem/shopping-item.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var shoppingitem_1 = __webpack_require__("../../../../../src/app/dto/shoppingitem.ts");
var shopping_list_service_1 = __webpack_require__("../../../../../src/app/services/shopping-list.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var ShoppingItemComponent = /** @class */ (function () {
    // reactive form validation item 
    //public shopForm: FormGroup;
    function ShoppingItemComponent(shoppingListService, route, location) {
        this.shoppingListService = shoppingListService;
        this.route = route;
        this.location = location;
        this.ShoppingItem = null;
    }
    ShoppingItemComponent.prototype.ngOnInit = function () {
        // When route with id loads up get shopping item
        this.getShoppingItem();
    };
    ShoppingItemComponent.prototype.getShoppingItem = function () {
        var _this = this;
        // pull id from route and call shopping list service
        var id = this.route.snapshot.paramMap.get('id');
        this.shoppingListService.getShoppingItem(id).subscribe(function (r) {
            _this.ShoppingItem = r;
            // reactive form validation item 
            //this.shopForm = new FormGroup({
            //  'name': new FormControl(this.ShoppingItem.Name, [
            //    Validators.required,
            //    Validators.minLength(4),
            //  ])
            //});
        });
    };
    // reactive form validation item 
    //get name() { return this.shopForm.get('name'); }
    ShoppingItemComponent.prototype.submit = function () {
        alert('save data');
    };
    ShoppingItemComponent.prototype.back = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", shoppingitem_1.ShoppingItem)
    ], ShoppingItemComponent.prototype, "ShoppingItem", void 0);
    ShoppingItemComponent = __decorate([
        core_1.Component({
            selector: 'shopping-item',
            template: __webpack_require__("../../../../../src/app/components/shoppingitem/shopping-item.component.html")
        }),
        __metadata("design:paramtypes", [shopping_list_service_1.ShoppingListService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ShoppingItemComponent);
    return ShoppingItemComponent;
}());
exports.ShoppingItemComponent = ShoppingItemComponent;


/***/ }),

/***/ "../../../../../src/app/components/shoppinglist/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>Shopping list: todo put stuff in here</div>\r\n<ul>\r\n  <li *ngFor=\"let item of Items\">\r\n    <a routerLink=\"/shoppingitem/{{item.Id}}\">\r\n      {{item.Name}}</a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shoppinglist/shopping-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var shopping_list_service_1 = __webpack_require__("../../../../../src/app/services/shopping-list.service.ts");
var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.Items = [];
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingListService.getShoppingList().subscribe(function (r) {
            _this.Items = r;
        });
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: 'shopping-list',
            template: __webpack_require__("../../../../../src/app/components/shoppinglist/shopping-list.component.html")
        }),
        __metadata("design:paramtypes", [shopping_list_service_1.ShoppingListService])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());
exports.ShoppingListComponent = ShoppingListComponent;


/***/ }),

/***/ "../../../../../src/app/dto/shoppingitem.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShoppingItem = /** @class */ (function () {
    function ShoppingItem() {
    }
    return ShoppingItem;
}());
exports.ShoppingItem = ShoppingItem;


/***/ }),

/***/ "../../../../../src/app/services/custom-http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var CustomHttpService = /** @class */ (function (_super) {
    __extends(CustomHttpService, _super);
    function CustomHttpService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHttpService = __decorate([
        core_1.Injectable()
    ], CustomHttpService);
    return CustomHttpService;
}(http_1.HttpClient));
exports.CustomHttpService = CustomHttpService;


/***/ }),

/***/ "../../../../../src/app/services/shopping-list.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var custom_http_service_1 = __webpack_require__("../../../../../src/app/services/custom-http.service.ts");
var constants_1 = __webpack_require__("../../../../../src/app/utility/constants.ts");
var ShoppingListService = /** @class */ (function () {
    function ShoppingListService(customHttp) {
        this.customHttp = customHttp;
    }
    ShoppingListService.prototype.getShoppingList = function () {
        return this.customHttp.get(constants_1.Constants.URL_ShoppingList_List);
    };
    ShoppingListService.prototype.getShoppingItem = function (id) {
        return this.customHttp.get(constants_1.Constants.URL_ShoppingList_List + "/" + id);
    };
    ShoppingListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [custom_http_service_1.CustomHttpService])
    ], ShoppingListService);
    return ShoppingListService;
}());
exports.ShoppingListService = ShoppingListService;


/***/ }),

/***/ "../../../../../src/app/utility/constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.ROOT_PATH = '/api/';
    Constants.URL_ShoppingList_List = Constants.ROOT_PATH + 'shoppinglist';
    return Constants;
}());
exports.Constants = Constants;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map