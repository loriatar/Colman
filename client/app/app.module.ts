import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router";
import {AppRoutingModule, routingComponents} from './app.routing';
import {AppComponent} from './app.component';
import {FilterGlassesPipe,FilterStoresPipe} from './filter.pipe'
import {GlassesComponent} from './components/glasses/glasses.component';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule, FormsModule, RouterModule],
    declarations: [AppComponent, GlassesComponent, routingComponents, FilterGlassesPipe,FilterStoresPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }