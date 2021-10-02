import { NgModule } from '@angular/core';
import { RoomComponent } from "./room/room.component";
import { PageNotFoundComponent } from "./common/page-not-found/page-not-found.component";
import {PatientProfileComponent} from "./patient-profile/patient-profile.component";
import {PsychologistProfileComponent} from "./psychologist-profile/psychologist-profile.component";


import { ComponentsModule } from "../components/components.module";
import { LayoutModule } from "../components/layout/layout.module";
import { CommonModule} from "@angular/common";
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";
import {PatientModule} from "./patient/patient.module";
import {PsychologistModule} from "./psychologist/psychologist.module";



//@ts-ignore
const config: SocketIoConfig = {url: environment.socketUrl, options: {withCredentials: '*'}};

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PatientProfileComponent,
    PsychologistProfileComponent,
    RoomComponent,
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
