import { Routes } from '@angular/router';
import { PageNotFoundComponent } from "../pages/common/page-not-found/page-not-found.component";
import { RoomComponent } from "../pages/room/room.component";
import psychologistRoutes from "./psychologist";
import patientRoutes from "./patient"

const index: Routes = [
  { path: 'room/:id', component: RoomComponent },
  ...patientRoutes,
  ...psychologistRoutes,
  { path: '**', component: PageNotFoundComponent }
];

export default index;
