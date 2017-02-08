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
        this.editGrid = false;
        this.showFilter = false;
        // Initialize glasses array
        this.glassesService.getGlasses()
            .subscribe(function (glasses) {
            _this.glasses = glasses;
        });
        // Initialize glasses array grouped by their brand
        this.glassesService.getGlassesByBrand()
            .subscribe(function (glasses) {
            _this.glassesByBrand = glasses;
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
            _this.restorePlaceHolders();
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
            brand: this.brand,
            serial: this.serial,
            type: this.type,
            amount: this.amount,
            imageURL: this.imageURL,
            price: this.price,
        };
        this.glassesService.updateGlasses(_glasses).subscribe(function (data) {
            glasses.brand = _glasses.brand;
            glasses.serial = _glasses.serial;
            glasses.type = _glasses.type;
            glasses.amount = _glasses.amount;
            glasses.imageURL = _glasses.imageURL;
            glasses.price = _glasses.price;
        });
        this.restorePlaceHolders();
    };
    GlassesComponent.prototype.getGlassesByBrand = function () {
        var _this = this;
        this.glassesService.getGlassesByBrand().subscribe(function (glasses) {
            _this.glassesByBrand = glasses;
        });
    };
    GlassesComponent.prototype.switchEditMode = function (id) {
        if (this.editGrid == true) {
            this.restorePlaceHolders();
        }
        else {
            this.editGrid = true;
            for (var i = 0; i < this.glasses.length; i++) {
                if (this.glasses[i]._id == id) {
                    // Get the selected item
                    this.selectedItem = this.glasses[i];
                    // Get all the product's info into the form
                    this.brand = this.glasses[i].brand;
                    this.imageURL = this.glasses[i].imageURL;
                    this.type = this.glasses[i].type;
                    this.serial = this.glasses[i].serial;
                    this.price = this.glasses[i].price;
                    this.amount = this.glasses[i].amount;
                }
            }
        }
    };
    GlassesComponent.prototype.showFilterForm = function () {
        this.showFilter = !this.showFilter;
    };
    GlassesComponent.prototype.filterGlasses = function () {
    };
    GlassesComponent.prototype.restorePlaceHolders = function () {
        // Set the placeholder's values back
        this.editGrid = false;
        this.brand = '';
        this.imageURL = '';
        this.type = '';
        this.serial = '';
        this.price = null;
        this.amount = null;
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