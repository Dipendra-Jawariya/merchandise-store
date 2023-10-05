import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },{
    path:'merch',
    component:MerchandiseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
