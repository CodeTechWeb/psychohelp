import { Component, OnInit } from '@angular/core';
import { PatientsService } from "../../../services/patients.service";
import { Patients } from "../../../types/patients";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html'
})
export class PatientsComponent implements OnInit {
  patients: Patients[] = [];
  columns: string[] = ['name', 'email', 'phone', 'logbook']
  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientsService.getAllPsychologistPatients('1').subscribe((data: any) => {
      this.patients = data;
    })
  }
}
