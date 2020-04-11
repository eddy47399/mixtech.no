import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartpageComponent } from './Pages/startpage/startpage.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { HeaderComponent } from './Elements/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
