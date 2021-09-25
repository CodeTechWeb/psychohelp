import { NgModule } from "@angular/core";
import  {LayoutModule } from "./layout/layout.module";
import {LayoutComponent} from "./layout/layout.component";

@NgModule({
  declarations: [],
  exports: [
    LayoutComponent
  ],
  imports: [
    LayoutModule
  ]
})
export class CommonModule { }
