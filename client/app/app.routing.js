"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_component_1 = require("./components/about/about.component");
var glasses_component_1 = require("./components/glasses/glasses.component");
var stores_component_1 = require("./components/stores/stores.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'about' },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'glasses', component: glasses_component_1.GlassesComponent },
    { path: 'stores', component: stores_component_1.StoresComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [about_component_1.AboutComponent, glasses_component_1.GlassesComponent, stores_component_1.StoresComponent];
//# sourceMappingURL=app.routing.js.map