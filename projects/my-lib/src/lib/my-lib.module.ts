import { NgModule } from '@angular/core';
import {MyLibRoutingModule} from './my-lib-routing.module';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [MyLibComponent],
  imports: [MyLibRoutingModule
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
