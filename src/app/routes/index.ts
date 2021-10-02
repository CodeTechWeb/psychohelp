import { Routes } from '@angular/router';
import { PsychologistsComponent } from "../pages/psychologists/psychologists.component";
import { SignInComponent } from "../pages/sign-in/sign-in.component";
import { SignUpComponent } from "../pages/sign-up/sign-up.component";
import { PageNotFoundComponent } from "../pages/common/page-not-found/page-not-found.component";
import { HomeComponent } from "../pages/home/home.component";
import { RoomComponent } from "../pages/room/room.component";
import { HomePatientComponent } from "../pages/home-patient/home-patient.component";

const index: Routes = [
  { path: '', component: HomeComponent },
  { path: 'room/:id', component: RoomComponent },
  { path: 'login', component: SignInComponent },
  { path: 'homepatient', component: HomePatientComponent},
  { path: 'register', component: SignUpComponent },
  { path: 'psychologists', component: PsychologistsComponent },
  { path: '**', component: PageNotFoundComponent },
];

export default index;
