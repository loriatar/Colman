import {Component, OnInit} from '@angular/core';
import {GlassesByBrand} from '../../../GlassesByBrand'
import {GlassesService} from '../../services/glasses.service'

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
})

export class AboutComponent{
    glassesByBrand: GlassesByBrand[];

    constructor(private glassesService:GlassesService){
        // Initialize glasses array grouped by their brand
        glassesService.getGlassesByBrand()
            .subscribe(glasses => {
                this.glassesByBrand = glasses;
            });
    }
    ngOnInit() {
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.font = "35px Arial";
        ctx.strokeText("Welcome to our OpticStore!",5,40);
    }
}
