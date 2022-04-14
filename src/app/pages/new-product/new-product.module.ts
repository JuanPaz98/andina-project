import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewProductComponent, 
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule, 
    FormsModule,
  ]
})
export class NewProductModule { }
