import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "./layout/layout.module";

@NgModule({
  declarations: [
  ],
  exports: [
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    LayoutModule
  ]
})
export class ComponentsModule { }
