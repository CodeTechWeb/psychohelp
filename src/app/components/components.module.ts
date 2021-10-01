import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "./layout/layout.module";
import { BottomMenuComponent } from './room/bottom-menu/bottom-menu.component';
import { VideoPlayerComponent } from './room/video-player/video-player.component';
import { CommonModule } from "@angular/common";
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    BottomMenuComponent,
    VideoPlayerComponent,
    DialogComponent
  ],
  exports: [
    VideoPlayerComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    CommonModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ComponentsModule { }
