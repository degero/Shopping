webpackJsonp(["configuration.module"],{

/***/ "../../../../../src/app/configuration/configuration-main/configuration-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/configuration/configuration-main/configuration-main.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  configuration-main works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/configuration/configuration-main/configuration-main.component.ts":
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
var ConfigurationMainComponent = /** @class */ (function () {
    function ConfigurationMainComponent() {
    }
    ConfigurationMainComponent.prototype.ngOnInit = function () {
    };
    ConfigurationMainComponent = __decorate([
        core_1.Component({
            selector: 'app-configuration-main',
            template: __webpack_require__("../../../../../src/app/configuration/configuration-main/configuration-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/configuration/configuration-main/configuration-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfigurationMainComponent);
    return ConfigurationMainComponent;
}());
exports.ConfigurationMainComponent = ConfigurationMainComponent;


/***/ }),

/***/ "../../../../../src/app/configuration/configuration-routing.module.ts":
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
var configuration_main_component_1 = __webpack_require__("../../../../../src/app/configuration/configuration-main/configuration-main.component.ts");
var routes = [
    { path: '', component: configuration_main_component_1.ConfigurationMainComponent }
];
var ConfigurationRoutingModule = /** @class */ (function () {
    function ConfigurationRoutingModule() {
    }
    ConfigurationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ConfigurationRoutingModule);
    return ConfigurationRoutingModule;
}());
exports.ConfigurationRoutingModule = ConfigurationRoutingModule;


/***/ }),

/***/ "../../../../../src/app/configuration/configuration.module.ts":
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
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var configuration_routing_module_1 = __webpack_require__("../../../../../src/app/configuration/configuration-routing.module.ts");
var configuration_main_component_1 = __webpack_require__("../../../../../src/app/configuration/configuration-main/configuration-main.component.ts");
var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                configuration_routing_module_1.ConfigurationRoutingModule
            ],
            declarations: [configuration_main_component_1.ConfigurationMainComponent]
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());
exports.ConfigurationModule = ConfigurationModule;


/***/ })

});
//# sourceMappingURL=configuration.module.chunk.js.map