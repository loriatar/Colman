import {Component} from '@angular/core';
import {GlassesService} from '../../services/glasses.service'
import {Glasses} from '../../../Glasses'

@Component({
    moduleId: module.id,
    selector: 'glasses',
    templateUrl: 'glasses.component.html',
})

export class GlassesComponent {
    glasses: Glasses[];
    brand: string;
    serial: string;
    type: string;
    amount: number;
    price: number;
    imageURL: string;

    constructor(private glassesService:GlassesService){
        this.glassesService.getGlasses()
            .subscribe(glasses => {
                this.glasses = glasses;
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
                this.brand = '';
                this.imageURL = '';
                this.type = '';
                this.serial = '';
                this.price = 0;
                this.amount = 0;
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
            brand: glasses.brand,
            serial: glasses.serial,
            type: glasses.type,
            amount: glasses.amount,
            price: glasses.price,
        };
        this.glassesService.updateGlasses(_glasses).subscribe(data => {
            glasses.brand = "loritest"
        });
    }
}