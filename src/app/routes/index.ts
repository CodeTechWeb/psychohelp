import { Routes } from '@angular/router';
import { PsychologistsComponent } from "../components/psychologists/psychologists.component";
import { SignInComponent } from "../components/sign-in/sign-in.component";
import { SignUpComponent } from "../components/sign-up/sign-up.component";
import {PageNotFoundComponent} from "../components/page-not-found/page-not-found.component";

const index: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'registrarse', component: SignUpComponent },
  { path: 'psicologos', component: PsychologistsComponent },
  { path: '**', component: PageNotFoundComponent }
];

export default index;
