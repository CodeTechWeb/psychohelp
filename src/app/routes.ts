import { Routes } from '@angular/router';
import {PsychologistsComponent} from "./components/psychologists/psychologists.component";
import {SigninComponent} from "./pages/signin/signin.component";
import {SignupComponent} from "./pages/signup/signup.component";

const routes: Routes = [
  { path: 'login', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'psicologos', component: PsychologistsComponent }
];

export default routes;
