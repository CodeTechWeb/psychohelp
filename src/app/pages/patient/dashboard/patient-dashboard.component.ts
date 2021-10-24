import {Component, OnInit} from '@angular/core';
import {PatientsService} from "../../../services/patients.service";
import {Patients} from "../../../types/patients";

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
})
export class PatientDashboardComponent implements OnInit {

  public patients: Patients[]=[];

  constructor(private PatientsService: PatientsService) {
  }

  ngOnInit(): void {
    this.getAllPatients()
  }

  getAllPatients() {
    this.PatientsService.getPatients()
      .subscribe((response: any) => {
        this.patients = response;
      })
  }

  loadPatients() {
    this.PatientsService.getPatients()
      .subscribe(datos => {
        console.log(datos)
        this.patients = datos;
      })
  }
}
