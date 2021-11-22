import { HomePatientComponent } from "../pages/patient/home/home-patient.component";
import { PsychologistsComponent } from "../pages/patient/psychologists/psychologists.component";
import { SignInComponent } from "../pages/patient/sign-in/sign-in.component";
import { SignUpComponent } from "../pages/patient/sign-up/sign-up.component";
import { ScheduleComponent } from "../pages/patient/psychologists/schedule/schedule.component";
import { AppointmentsComponent } from "../pages/psychologist/appointments/appointments.component";

export default [
  { path: 'home-patient/:id', component: HomePatientComponent },
  { path: 'psychologists/list/:id', component: PsychologistsComponent },
  { path: 'psychologists/:id/schedule', component: ScheduleComponent },
  { path: 'login', component: SignInComponent },
  { path: 'patient/appointments/:id', component: AppointmentsComponent },
  { path: 'register', component: SignUpComponent }
]
