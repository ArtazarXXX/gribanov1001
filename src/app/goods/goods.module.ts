import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsComponent } from './goods.component';
import { GoodEditComponent } from './good-edit/good-edit.component';
import { GoodTableComponent } from './good-table/good-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GoodsComponent, GoodEditComponent, GoodTableComponent],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GoodsModule { }
