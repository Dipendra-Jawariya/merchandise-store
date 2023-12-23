import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { MerchandiseComponent } from './merchandise/merchandise.component';
// register Swiper custom elements
register();


@NgModule({
  declarations: [
    LandingPageComponent,
    ProductDescComponent,
    CheckoutComponent,
    MerchandiseComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ],
})
export class LandingPageModule { }
