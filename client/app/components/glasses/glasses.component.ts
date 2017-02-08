import {Component} from '@angular/core';
import {GlassesService} from '../../services/glasses.service';
import {Glasses} from '../../../Glasses';
import {GlassesByBrand} from '../../../GlassesByBrand';

@Component({
    moduleId: module.id,
    selector: 'glasses',
    templateUrl: 'glasses.component.html',
})

export class GlassesComponent {
    glasses: Glasses[];
    glassesByBrand: GlassesByBrand[];
    showFilter:Boolean;
    editGrid:Boolean;
    selectedItem: Glasses;
    brand: string;
    serial: string;
    type: string;
    amount: number;
    price: number;
    imageURL: string;
    filterBrand: string;
    filterSerial: string;
    filterType: string;
    filterAmount: number;
    filterPrice: number;

    constructor(private glassesService:GlassesService){
        this.editGrid = false;
        this.showFilter = false;
        // Initialize glasses array
        this.glassesService.getGlasses()
            .subscribe(glasses => {
                this.glasses = glasses;
            });
        // Initialize glasses array grouped by their brand
        this.glassesService.getGlassesByBrand()
            .subscribe(glasses => {
                this.glassesByBrand = glasses;
            });
    }

    addGlasses(event){
        event.preventDefault();
        var newGlasses = {
            brand: this.brand,
            type: this.type,
            serial: this.serial,
            amount: this.amount,
            price: this.price,
            imageURL: this.imageURL
        }
        this.glassesService.addGlasses(newGlasses)
            .subscribe(glasses => {
                this.glasses.push(glasses);
                this.restorePlaceHolders();
            });
    }

    deleteGlasses(id) {
        var glasses = this.glasses;
        this.glassesService.deleteGlasses(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0; i < glasses.length; i++){
                    if(glasses[i]._id == id){
                        glasses.splice(i,1);
                    }
                }
            }
        });
    }

    updateGlasses(glasses) {
        var _glasses = {
            _id: glasses._id,
            brand: this.brand,
            serial: this.serial,
            type: this.type,
            amount: this.amount,
            imageURL: this.imageURL,
            price: this.price,
        };
        this.glassesService.updateGlasses(_glasses).subscribe(data => {
            glasses.brand = _glasses.brand;
            glasses.serial = _glasses.serial;
            glasses.type = _glasses.type;
            glasses.amount = _glasses.amount;
            glasses.imageURL = _glasses.imageURL;
            glasses.price = _glasses.price;
        });
        this.restorePlaceHolders();
    }

    getGlassesByBrand(){
        this.glassesService.getGlassesByBrand().subscribe(glasses => {
            this.glassesByBrand = glasses;
        });
    }

    switchEditMode(id){
        if(this.editGrid == true) {
            this.restorePlaceHolders();
        }
        else {
            this.editGrid = true;
            for(var i = 0; i < this.glasses.length; i++){
                if(this.glasses[i]._id == id){
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
    }

    showFilterForm(){
        this.showFilter = !this.showFilter;
    }

    filterGlasses() {

    }

    restorePlaceHolders() {
        // Set the placeholder's values back
        this.editGrid = false;
        this.brand = '';
        this.imageURL = '';
        this.type = '';
        this.serial = '';
        this.price = null;
        this.amount = null;
    }
}