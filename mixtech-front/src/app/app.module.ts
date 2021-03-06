import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ServicesComponent } from './Pages/services/services.component';
import { HeaderComponent } from './Elements/header/header.component';
import { MatMenuModule} from "@angular/material/menu";
import { VpnPageComponent } from './Pages/vpn-page/vpn-page.component';
import { PlexPageComponent } from './Pages/plex-page/plex-page.component';
import { CloudPageComponent } from './Pages/cloud-page/cloud-page.component';
import { MincraftPageComponent } from './Pages/mincraft-page/mincraft-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ServicesComponent,
    HeaderComponent,
    VpnPageComponent,
    PlexPageComponent,
    CloudPageComponent,
    MincraftPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
