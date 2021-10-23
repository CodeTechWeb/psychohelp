import {PsychologistsComponent} from "../pages/patient/psychologists/psychologists.component";
import {RegisterComponent} from "../pages/psychologist/register/register.component";
import {LoginComponent} from "../pages/psychologist/login/login.component";

export default [
  { path: 'psychologist/home/:id', component: PsychologistsComponent },
  { path: 'psychologistRegister', component: RegisterComponent },
  { path: 'psychologistLogin', component: LoginComponent },
]
