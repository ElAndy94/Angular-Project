import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListModule,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {

}
