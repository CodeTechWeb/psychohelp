import { NgModule } from '@angular/core';
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { PsychologistsComponent } from "./psychologists/psychologists.component";
import { CommonModule } from "./common/common.module"
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    PsychologistsComponent,
    PageNotFoundComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ComponentsModule { }
