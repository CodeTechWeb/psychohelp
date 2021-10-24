import {HomePsychologistComponent} from "../pages/psychologist/home/home-psychologist.component";
import {RegisterComponent} from "../pages/psychologist/register/register.component";
import {LoginComponent} from "../pages/psychologist/login/login.component";

export default [
  { path: 'home-psychologist', component: HomePsychologistComponent },
  { path: 'psychologistRegister', component: RegisterComponent },
  { path: 'psychologistLogin', component: LoginComponent },
]
