import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./Pages/home-page/home-page.component";
import { ContactPageComponent} from "./Pages/contact-page/contact-page.component";
import { ServicesComponent} from "./Pages/services/services.component";
import { CloudPageComponent} from "./Pages/cloud-page/cloud-page.component";
import { VpnPageComponent} from "./Pages/vpn-page/vpn-page.component";
import { PlexPageComponent} from "./Pages/plex-page/plex-page.component";
import { MincraftPageComponent} from "./Pages/mincraft-page/mincraft-page.component";

const routes: Routes = [
  { path: '', redirectTo: 'home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent},
  { path: 'services-page', component: ServicesComponent},
  { path: 'contact-page', component: ContactPageComponent},
  { path: 'cloud-page', component: CloudPageComponent},
  { path: 'vpn-page', component: VpnPageComponent},
  { path: 'plex-page', component: PlexPageComponent},
  { path: 'minecraft-page', component: MincraftPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
