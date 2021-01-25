import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'goods',
    loadChildren: () =>
      import('./goods/goods.module').then((m) => m.GoodsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
