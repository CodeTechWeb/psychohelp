import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "./layout/layout.module";
import { BottomMenuComponent } from './room/bottom-menu/bottom-menu.component';
import { VideoPlayerComponent } from './room/video-player/video-player.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    BottomMenuComponent,
    VideoPlayerComponent
  ],
  exports: [
    VideoPlayerComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    CommonModule
  ]
})
export class ComponentsModule { }
