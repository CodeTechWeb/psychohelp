import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from "./layout/layout.module";
import { BottomMenuComponent } from './room/bottom-menu/bottom-menu.component';
import { VideoPlayerComponent } from './room/video-player/video-player.component';
import {editLogbookComponent} from "./editLogbook/editLogbook.component";
import { CommonModule } from "@angular/common";
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CarouselComponent} from "./carousel/carousel.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { PsychologistDialogComponent } from './psychologist-dialog/psychologist-dialog.component';
import { AppointmentSelectedComponent } from './appointment-selected/appointment-selected.component';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';
import { DialogPatientComponent } from './dialog-patient/dialog-patient.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';



@NgModule({
  declarations: [
    BottomMenuComponent,
    VideoPlayerComponent,
    DialogComponent,
    CarouselComponent,
    PsychologistDialogComponent,
    editLogbookComponent,
    AppointmentSelectedComponent,
    DetailsDialogComponent,
    DialogPatientComponent,
    DialogEditComponent
  ],
  exports: [
    VideoPlayerComponent,
    CarouselComponent,
    BottomMenuComponent
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
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
