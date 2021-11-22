import { HomePsychologistComponent } from "../pages/psychologist/home/home-psychologist.component";
import { RegisterComponent } from "../pages/psychologist/register/register.component";
import { LoginComponent } from "../pages/psychologist/login/login.component";
import { LogbookComponent } from "../pages/psychologist/logbook/logbook.component";
import { PatientsComponent } from "../pages/psychologist/patients/patients.component";
import { AppointmentsComponent } from "../pages/psychologist/appointments/appointments.component";
import { ListPatientsComponent } from "../pages/psychologist/list-patients/list-patients.component";

export default [
  { path: 'psychologist/home/:id', component: HomePsychologistComponent },
  { path: 'psychologist/register', component: RegisterComponent },
  { path: 'psychologist/login', component: LoginComponent },
  { path: 'psychologist/patients', component: PatientsComponent },
  { path: 'psychologist/:id/appointments',  component: AppointmentsComponent },
  { path: 'psychologist/:id/patients', component: ListPatientsComponent },
  { path: 'psychologist/:psycho_id/:patient_id', component: LogbookComponent }
]
