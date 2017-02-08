import {Component, AfterViewInit} from '@angular/core';
import {GlassesByBrand} from '../../../GlassesByBrand'
import {GlassesService} from '../../services/glasses.service'

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html',
})

export class AboutComponent{
    //glassesByBrand: GlassesByBrand[];

    constructor(private glassesService:GlassesService){
        // Initialize glasses array grouped by their brand
        glassesService.getGlassesByBrand()
            .subscribe(glasses => {
                this.glassesByBrand = glasses;
            });
    }

    // @ViewChild("myCanvas") myCanvas;
    // ngAfterViewInit() {
    //     let canvas = this.myCanvas.nativeElement;
    //     this.context = canvas.getContext("2d");
    //     this.tick();
    // }
    // tick() {
    //         var ctx = this.context;
    //         ctx.fillStyle = this.rectColor;
    //         ctx.fillRect(0, 0, 430, 70);
    //         ctx.font = "35px Arial";
    //         ctx.strokeText("Welcome to our Optic Store!",5,40);
    // }
}
