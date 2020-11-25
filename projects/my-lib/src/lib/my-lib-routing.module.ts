import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLibComponent } from './my-lib.component';

const routes: Routes = [  {
  path: '',
  component: MyLibComponent, }
, {
  path: 'hoge',
  loadChildren: () => import('./hoge/hoge.module').then(m => m.HogeModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLibRoutingModule { }
