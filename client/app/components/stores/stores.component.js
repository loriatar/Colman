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
var core_1 = require("@angular/core");
var StoresComponent = (function () {
    function StoresComponent() {
        // Hide filter
        this.showFilter = false;
        // Create stores array
        this.stores = [
            {
                name: "OpticStore",
                city: "Tel Aviv",
                productsInStock: 1000,
                longitude: 40,
                latitude: 40
            },
            {
                name: "OpticForU",
                city: "Yafo",
                productsInStock: 200,
                longitude: 43,
                latitude: 40
            },
            {
                name: "Opticana",
                city: "Bat Yam",
                productsInStock: 180,
                longitude: 47,
                latitude: 40
            }
        ];
    }
    StoresComponent.prototype.ngOnInit = function () {
        // Create map with Google maps API
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            credentials: 'AIzaSyDVP0G0b1K3UZ_w8BY4nC5038lCYk2PgPs'
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    };
    StoresComponent.prototype.showFilterForm = function () {
        this.showFilter = !this.showFilter;
    };
    return StoresComponent;
}());
StoresComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'stores',
        templateUrl: 'stores.component.html',
    }),
    __metadata("design:paramtypes", [])
], StoresComponent);
exports.StoresComponent = StoresComponent;
//# sourceMappingURL=stores.component.js.map