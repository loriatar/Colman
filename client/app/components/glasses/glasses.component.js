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
var glasses_service_1 = require("../../services/glasses.service");
var GlassesComponent = (function () {
    function GlassesComponent(glassesService) {
        var _this = this;
        this.glassesService = glassesService;
        this.glassesService.getGlasses()
            .subscribe(function (glasses) {
            _this.glasses = glasses;
        });
    }
    GlassesComponent.prototype.addGlasses = function (event) {
        var _this = this;
        event.preventDefault();
        var newGlasses = {
            brand: this.brand,
            type: this.type,
            serial: this.serial,
            amount: this.amount,
            price: this.price,
            imageURL: this.imageURL
        };
        this.glassesService.addGlasses(newGlasses)
            .subscribe(function (glasses) {
            _this.glasses.push(glasses);
            _this.brand = '';
            _this.imageURL = '';
            _this.type = '';
            _this.serial = '';
            _this.price = 0;
            _this.amount = 0;
        });
    };
    GlassesComponent.prototype.deleteGlasses = function (id) {
        var glasses = this.glasses;
        this.glassesService.deleteGlasses(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < glasses.length; i++) {
                    if (glasses[i]._id == id) {
                        glasses.splice(i, 1);
                    }
                }
            }
        });
    };
    GlassesComponent.prototype.updateGlasses = function (glasses) {
        var _glasses = {
            _id: glasses._id,
            brand: glasses.brand,
            serial: glasses.serial,
            type: glasses.type,
            amount: glasses.amount,
            price: glasses.price,
        };
        this.glassesService.updateGlasses(_glasses).subscribe(function (data) {
            glasses.brand = "loritest";
        });
    };
    return GlassesComponent;
}());
GlassesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'glasses',
        templateUrl: 'glasses.component.html',
    }),
    __metadata("design:paramtypes", [glasses_service_1.GlassesService])
], GlassesComponent);
exports.GlassesComponent = GlassesComponent;
//# sourceMappingURL=glasses.component.js.map