import { Routes } from '@angular/router';
import { PageNotFoundComponent } from "../pages/common/page-not-found/page-not-found.component";
import { RoomComponent } from "../pages/room/room.component";
import { PsychologistProfileComponent } from "../pages/psychologist/profile/psychologist-profile.component";
import { PatientProfileComponent } from "../pages/patient/profile/patient-profile.component";
import psychologistRoutes from "./psychologist";
import patientRoutes from "./patient"

const index: Routes = [
  { path: 'room/:id', component: RoomComponent },
  ...patientRoutes,
  ...psychologistRoutes,
  { path: 'psychologist/profile', component: PsychologistProfileComponent },
  { path: 'profile', component: PatientProfileComponent },
  { path: '**', component: PageNotFoundComponent }
];

export default index;
