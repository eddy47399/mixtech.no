import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./Pages/home-page/home-page.component";
import { ContactPageComponent} from "./Pages/contact-page/contact-page.component";
import {ServicesComponent} from "./Pages/services/services.component";

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent},
  { path: 'services-page', component: ServicesComponent},
  { path: 'contact-page', component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
