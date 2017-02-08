import { Component ,OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'stores',
    templateUrl: 'stores.component.html',

})

export class StoresComponent{
    constructor() {}
    ngOnInit() {
        // var mapProp = {
        //     center: new google.maps.LatLng(51.508742, -0.120850),
        //     zoom: 5,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        var map = new google.maps.Map(document.getElementById("googleMap"),  {
            credentials: 'AIzaSyDVP0G0b1K3UZ_w8BY4nC5038lCYk2PgPs'});
    }
}