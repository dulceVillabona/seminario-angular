import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdoptionListComponent } from './adoption-list/adoption-list.component';
import { AdoptionFormComponent } from './adoption-form/adoption-form.component';
import { AdoptionsPageComponent } from './adoptions-page/adoptions-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StorePageComponent } from './store-page/store-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdoptionListComponent,
    AdoptionFormComponent,
    AdoptionsPageComponent,
    HomePageComponent,
    StorePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
