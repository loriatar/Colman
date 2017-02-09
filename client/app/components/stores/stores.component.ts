import { Component ,OnInit} from '@angular/core';
import {Store} from '../../../Store'

@Component({
    moduleId: module.id,
    selector: 'stores',
    templateUrl: 'stores.component.html',

})

export class StoresComponent{
    stores:Store[];
    showFilter:Boolean;
    filterCity:string;
    filterName:string;
    productsInStock:number;

    constructor() {
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
                name: "OpticStore",
                city: "Yafo",
                productsInStock:200,
                longitude: 43,
                latitude: 40
            }
        ];
    }
    ngOnInit() {
        // Create map with Google maps API
        var mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            credentials: 'AIzaSyDVP0G0b1K3UZ_w8BY4nC5038lCYk2PgPs'
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }

    showFilterForm(){
        this.showFilter = !this.showFilter;
    }
}