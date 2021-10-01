import { NgModule } from '@angular/core';
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { PsychologistsComponent } from "./psychologists/psychologists.component";
import { RoomComponent } from "./room/room.component";
import { PageNotFoundComponent } from "./common/page-not-found/page-not-found.component";

import { ComponentsModule } from "../components/components.module";
import { LayoutModule } from "../components/layout/layout.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { HomeComponent } from './home/home.component';
import {CommonModule} from "@angular/common";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {environment} from "../../environments/environment";

//@ts-ignore
const config: SocketIoConfig = {url: environment.socketUrl, options: {withCredentials: '*'}};

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    PsychologistsComponent,
    PageNotFoundComponent,
    RoomComponent,
    HomeComponent,
  ],
  exports: [],
  imports: [
    ComponentsModule,
    LayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    SocketIoModule.forRoot(config)
  ]
})
export class PagesModule { }
