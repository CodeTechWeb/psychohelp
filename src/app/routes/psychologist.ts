import { HomePsychologistComponent } from "../pages/psychologist/home/home-psychologist.component";
import { RegisterComponent } from "../pages/psychologist/register/register.component";
import { LoginComponent } from "../pages/psychologist/login/login.component";
import {LogbookComponent} from "../pages/psychologist/logbook/logbook.component";
import {PatientsComponent} from "../pages/psychologist/patients/patients.component";

export default [
  { path: 'psychologist/home', component: HomePsychologistComponent },
  { path: 'psychologist/register', component: RegisterComponent },
  { path: 'psychologist/login', component: LoginComponent },
  { path: 'psychologist/patients', component: PatientsComponent },
  { path: 'psychologist/patients/:id/logbook', component: LogbookComponent }
]
