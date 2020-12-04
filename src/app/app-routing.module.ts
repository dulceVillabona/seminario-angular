import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdoptionsPageComponent } from './adoptions-page/adoptions-page.component';
import { StorePageComponent } from './store-page/store-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'adoptions',
    component: AdoptionsPageComponent
  },
  {
    path: 'store',
    component: StorePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
