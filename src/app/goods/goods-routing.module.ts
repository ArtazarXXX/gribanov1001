import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodEditComponent } from './good-edit/good-edit.component';
import { GoodTableComponent } from './good-table/good-table.component';
import { GoodsComponent } from './goods.component';

const routes: Routes = [
  {
    path: '',
    component: GoodsComponent,
    children: [
      {
        path: '',
        component: GoodTableComponent,
      },
      {
        path: 'edit',
        component: GoodEditComponent,
      },
      {
        path: 'edit/:id',
        component: GoodEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
