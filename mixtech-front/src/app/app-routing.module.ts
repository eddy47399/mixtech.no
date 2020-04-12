import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartpageComponent} from "./Pages/startpage/startpage.component";
import { HomePageComponent } from "./Pages/home-page/home-page.component";
import { ContactPageComponent} from "./Pages/contact-page/contact-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full'},
  { path: 'start-page', component: StartpageComponent },
  { path: 'home-page', component: HomePageComponent},
  { path: 'contact-page', component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
