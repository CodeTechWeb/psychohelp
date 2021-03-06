import { HomePatientComponent } from "../pages/patient/home/home-patient.component";
import { PsychologistsComponent } from "../pages/patient/psychologists/psychologists.component";
import { SignInComponent } from "../pages/patient/sign-in/sign-in.component";
import { SignUpComponent } from "../pages/patient/sign-up/sign-up.component";
import { ScheduleComponent } from "../pages/patient/psychologists/schedule/schedule.component";
import { AppointmentsComponent } from "../pages/psychologist/appointments/appointments.component";
import { PublicationComponent } from "../pages/patient/publication/publication.component";

export default [
  { path: 'home-patient/:id', component: HomePatientComponent },
  { path: 'psychologists/list/:id', component: PsychologistsComponent },
  { path: 'psychologists/:psychologistId/schedule/:patientId', component: ScheduleComponent },
  { path: 'login', component: SignInComponent },
  { path: 'patient/appointments/:id', component: AppointmentsComponent },
  { path: 'publications/:id', component: PublicationComponent },
  { path: 'register', component: SignUpComponent }
]
