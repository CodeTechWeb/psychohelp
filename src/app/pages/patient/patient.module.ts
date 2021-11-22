import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {PsychologistsComponent} from "./psychologists/psychologists.component";
import {HomePatientComponent} from "./home/home-patient.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {LayoutModule} from "../../components/layout/layout.module";
import {ComponentsModule} from "../../components/components.module";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {PatientProfileComponent} from "./profile/patient-profile.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { ScheduleComponent } from './psychologists/schedule/schedule.component';
import { AppointmentPatientComponent } from './appointment-patient/appointment-patient.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    PsychologistsComponent,
    PatientProfileComponent,
    HomePatientComponent,
    ScheduleComponent,
    AppointmentPatientComponent
  ],

  imports: [
    CommonModule,
    MatGridListModule,
    LayoutModule,
    ComponentsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatRadioModule,
    FormsModule,
    AppRoutingModule
  ]

})
export class PatientModule { }
