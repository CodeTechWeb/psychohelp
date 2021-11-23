import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PsychologistService } from "../../../../services/psychologist.service";
import { Psychologist } from "../../../../types/psychologist";
import {PatientsService} from "../../../../services/patients.service";
import {Patients} from "../../../../types/patients";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PsychologistsComponent} from "../psychologists.component";
import {PaymentsComponent} from "../../../../components/payments/payments.component";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit {
  psychologistId: string;
  patientId: string;
  psychologist!: Psychologist;
  patient!: Patients;

  constructor(
    private route: ActivatedRoute,
    private psychologistService: PsychologistService,
    private patientsService: PatientsService,
    public dialog: MatDialog
  ) {
    this.psychologistId = route.snapshot.paramMap.get('psychologistId') || '';
    this.patientId = route.snapshot.paramMap.get('patientId') || '';
  }

  openDialog() {
    const dialogRef = this.dialog.open(PaymentsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.getPsychologist();
    this.getPatient();
  }

  getPsychologist() {
    this.psychologistService.getPsychologist(this.psychologistId).subscribe((data: any) => {
      this.psychologist = data;
    })
  }

  getPatient() {
    this.patientsService.getPatientById(parseInt(this.patientId)).subscribe((data: any) => {
      this.patient = data
    })
  }

}
