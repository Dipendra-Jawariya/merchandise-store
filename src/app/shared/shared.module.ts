import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports : [
    //Components
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { 
    faCoffee = faCoffee;
}
