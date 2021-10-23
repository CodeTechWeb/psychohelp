import {HomePatientComponent} from "../pages/patient/home/home-patient.component";
import {PsychologistsComponent} from "../pages/patient/psychologists/psychologists.component";
import {SignInComponent} from "../pages/patient/sign-in/sign-in.component";
import {SignUpComponent} from "../pages/patient/sign-up/sign-up.component";

export default [
  { path: '', component: HomePatientComponent  },
  { path: 'psychologists', component: PsychologistsComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent}
]
