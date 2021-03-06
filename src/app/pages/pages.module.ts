import { NgModule } from '@angular/core';
import { RoomComponent } from "./room/room.component";
import { PageNotFoundComponent } from "./common/page-not-found/page-not-found.component";

import { ComponentsModule } from "../components/components.module";
import { LayoutModule } from "../components/layout/layout.module";
import { CommonModule} from "@angular/common";
import { PatientModule } from "./patient/patient.module";
import { PsychologistModule } from "./psychologist/psychologist.module";
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";

import { environment} from "../../environments/environment";
import { HomeComponent } from './common/home/home.component';
//@ts-ignore
const config: SocketIoConfig = { url: environment.socketUrl, options: {withCredentials: '*'} };

@NgModule({
  declarations: [
    PageNotFoundComponent,
    RoomComponent,
    HomeComponent,
  ],
  exports: [],
  imports: [
    ComponentsModule,
    LayoutModule,
    CommonModule,
    PatientModule,
    PsychologistModule,
    SocketIoModule.forRoot(config)
  ]
})
export class PagesModule { }
