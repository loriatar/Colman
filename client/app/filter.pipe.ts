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
                        if(key === 'city' && !item[key].includes(city)) {
                            console.log("city: " + item[key] + " key: " + key);
                            return false;
                        }
                        if(key === 'productsInStock') {
                            keyValue = parseInt(item[key]);
                            if(keyValue < num) {
                                console.log("productsInStock: " + item[key]+ " key: " + key);
                                return false;
                            }
                        }
                        if(key === 'name' && !item[key].includes(name)) {
                            console.log("name: " + item[key]+ " key: " + key);
                            return false;
                        }
                    }
                }
                console.log(item[key] +"  "+key);
                return true;
            });
        }
    }
}
