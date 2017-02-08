import {Component} from '@angular/core';
import {GlassesService} from './services/glasses.service'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers:[GlassesService]
})

export class AppComponent { }