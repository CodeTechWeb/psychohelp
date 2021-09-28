import { Routes } from '@angular/router';
import { PsychologistsComponent } from "../pages/psychologists/psychologists.component";
import { SignInComponent } from "../pages/sign-in/sign-in.component";
import { SignUpComponent } from "../pages/sign-up/sign-up.component";
import {PageNotFoundComponent} from "../pages/common/page-not-found/page-not-found.component";

const index: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'psychologists', component: PsychologistsComponent },
  { path: '**', component: PageNotFoundComponent }
];

export default index;
