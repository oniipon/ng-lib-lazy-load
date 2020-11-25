import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HogeComponent } from './hoge.component';
import { HogeRoutingModule } from './hoge-routing.module';



@NgModule({
  declarations: [HogeComponent],
  imports: [
    CommonModule,
    HogeRoutingModule
  ]
})
export class HogeModule { }
