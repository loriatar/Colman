import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {GlassesComponent} from './components/glasses/glasses.component';
import {StoresComponent} from './components/stores/stores.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'about'},
    {path: 'about', component: AboutComponent},
    {path: 'glasses', component: GlassesComponent},
    {path: 'stores', component: StoresComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}

export const routingComponents = [AboutComponent,GlassesComponent,StoresComponent];


