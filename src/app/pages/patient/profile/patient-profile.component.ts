import { Component, OnInit } from '@angular/core';
import {PatientsService} from "../../../services/patients.service";
import {ActivatedRoute} from "@angular/router";
import {Patients} from "../../../types/patients";


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
})
export class PatientProfileComponent implements OnInit {

  patientId: string;
  patient!: Patients;

  constructor(private route: ActivatedRoute ,private patientService: PatientsService) {
    this.patientId = route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.getPatient()
  }

  getPatient() {
    this.patientService.getPatientById(this.patientId).subscribe((data: any) =>{
      this.patient = data;
    })
  }

  updatePatient() {
    this.patientService.update(this.patient.id, this.patient)
      .subscribe(datos => {
        console.log(datos)
      }, error => console.log(error));
  }
}
