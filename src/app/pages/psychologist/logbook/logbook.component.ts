import { Component, OnInit } from '@angular/core';
import {Patients} from "../../../types/patients";
import {PatientsService} from "../../../services/patients.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html'
})
export class LogbookComponent implements OnInit {
  patient: Patients;
  patientId: string;

  constructor(private patientsService: PatientsService, private route: ActivatedRoute) {
    this.patientId = route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient() {
    this.patientsService.getPatientById(this.patientId).subscribe((data: any) => {
      this.patient = data;
    })
  }
}
