import {Pipe} from '@angular/core'

@Pipe({name: 'filterGlasses'})
export class FilterGlassesPipe {
    transform(glasses, brand, price, amount) {
        var a,p,keyValue;
        if(!brand && !price && !amount) {
            return glasses;
        }
        else if(glasses) {
            return glasses.filter(item => {
                a = parseInt(amount);
                p = parseInt(price);
                for(let key in item) {
                    if((typeof item[key] === 'string' || item[key] instanceof String)) {
                        if(key === 'brand' && !item[key].includes(brand)) {
                            return false;
                        }
                        if(key === 'amount') {
                            keyValue = parseInt(item[key]);
                            if(keyValue < a) {
                                return false;
                            }
                        }
                        if(key === 'price') {
                            keyValue = parseInt(item[key]);
                            if(keyValue < p) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            });
        }
    }
}

@Pipe({name: 'filterStores'})
export class FilterStoresPipe {
    transform(stores, city, name, productsInStock) {
        var num,keyValue;
        if(!city && !name && !productsInStock) {
            return stores;
        }
        else if(stores) {
            return stores.filter(item => {
                num = parseInt(productsInStock);
                for(let key in item) {
                    if((typeof item[key] === 'string' || item[key] instanceof String)) {
                        if(city && key === 'city' && !item[key].includes(city)) {
                            return false;
                        }
                        if(name && key === 'name' && !item[key].includes(name)) {
                            return false;
                        }
                    }
                    else if((typeof item[key] === 'number' || item[key] instanceof number)) {
                        if(key === 'productsInStock') {
                            keyValue = parseInt(item[key]);
                            if(keyValue < num) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            });
        }
    }
}
