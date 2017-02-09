"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FilterGlassesPipe = (function () {
    function FilterGlassesPipe() {
    }
    FilterGlassesPipe.prototype.transform = function (glasses, brand, price, amount) {
        var a, p, keyValue;
        if (!brand && !price && !amount) {
            return glasses;
        }
        else if (glasses) {
            return glasses.filter(function (item) {
                a = parseInt(amount);
                p = parseInt(price);
                for (var key in item) {
                    if ((typeof item[key] === 'string' || item[key] instanceof String)) {
                        if (key === 'brand' && !item[key].includes(brand)) {
                            return false;
                        }
                        if (key === 'amount') {
                            keyValue = parseInt(item[key]);
                            if (keyValue < a) {
                                return false;
                            }
                        }
                        if (key === 'price') {
                            keyValue = parseInt(item[key]);
                            if (keyValue < p) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            });
        }
    };
    return FilterGlassesPipe;
}());
FilterGlassesPipe = __decorate([
    core_1.Pipe({ name: 'filterGlasses' })
], FilterGlassesPipe);
exports.FilterGlassesPipe = FilterGlassesPipe;
var FilterStoresPipe = (function () {
    function FilterStoresPipe() {
    }
    FilterStoresPipe.prototype.transform = function (stores, city, name, productsInStock) {
        var num, keyValue;
        if (!city && !name && !productsInStock) {
            return stores;
        }
        else if (stores) {
            return stores.filter(function (item) {
                num = parseInt(productsInStock);
                for (var key in item) {
                    if ((typeof item[key] === 'string' || item[key] instanceof String)) {
                        if (city && key === 'city' && !item[key].includes(city)) {
                            return false;
                        }
                        if (name && key === 'name' && !item[key].includes(name)) {
                            return false;
                        }
                    }
                    else if ((typeof item[key] === 'number' || item[key] instanceof number)) {
                        if (key === 'productsInStock') {
                            keyValue = parseInt(item[key]);
                            if (keyValue < num) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            });
        }
    };
    return FilterStoresPipe;
}());
FilterStoresPipe = __decorate([
    core_1.Pipe({ name: 'filterStores' })
], FilterStoresPipe);
exports.FilterStoresPipe = FilterStoresPipe;
//# sourceMappingURL=filter.pipe.js.map