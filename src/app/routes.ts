import { Routes } from '@angular/router';
import { PsychologistsComponent } from "./components/psychologists/psychologists.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'registrarse', component: SignUpComponent },
  { path: 'psicologos', component: PsychologistsComponent },
  { path: '**', component: PageNotFoundComponent }
];

export default routes;
