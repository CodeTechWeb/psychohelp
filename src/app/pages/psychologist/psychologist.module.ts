import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePsychologistComponent} from "./home/home-psychologist.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {ComponentsModule} from "../../components/components.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {LayoutModule} from "../../components/layout/layout.module";
import {PsychologistProfileComponent} from "./profile/psychologist-profile.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    HomePsychologistComponent,
    PsychologistProfileComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    ComponentsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSelectModule,
  ]
})
export class PsychologistModule { }
