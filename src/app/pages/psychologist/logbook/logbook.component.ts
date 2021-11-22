import { Component, OnInit } from '@angular/core';
import {Patients} from "../../../types/patients";
import {PatientsService} from "../../../services/patients.service";
import {AppointmentsService} from "../../../services/appointments.service";
import {ActivatedRoute} from "@angular/router";
import {Appointments} from "../../../types/appointments";
import {editLogbookComponent} from "../../../components/editLogbook/editLogbook.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html'
})
export class LogbookComponent implements OnInit {
  patient!: Patients;
  dataAppointment!: Appointments;
  appointments!: Appointments[];
  patientId: number;
  psychologistId: number;
  motive!: string;
  personalHistory!: string;
  testRealized!: string;
  treatment!:string;
  scheduleDate!: string;
  meetUrl!: string;
  id!: number;

  constructor(private patientsService: PatientsService, private route: ActivatedRoute, private appointmentsService: AppointmentsService, private dialog: MatDialog) {
    this.patientId = route.snapshot.params['patient_id'];
    console.log(this.patientId);
    this.psychologistId = route.snapshot.params['psycho_id'];
    console.log(this.psychologistId);
  }

  ngOnInit(): void {
    this.getPatient();
    this.retrieveAppointments();
  }

  getPatient() {
    this.patientsService.getPatientById(this.patientId).subscribe((data: any) => {
      this.patient = data;
      console.log(this.patient);
    })
  }

  retrieveAppointments() {
    this.appointmentsService.getAppointmentsByPatientIdAndPsychologistId(this.patientId, this.psychologistId).subscribe((data: any) => {
      this.appointments = data;
      console.log(this.appointments);
    })
  }

  retrieveAppointmentInfo(appointmentId: number) {
    this.appointmentsService.getAppointmentsById(appointmentId).subscribe((data: any) => {
      this.dataAppointment = data;
      this.id = this.dataAppointment.id;
      this.meetUrl = this.dataAppointment.meetUrl;
      this.motive = this.dataAppointment.motive;
      this.personalHistory = this.dataAppointment.personalHistory;
      this.testRealized = this.dataAppointment.testRealized;
      this.treatment = this.dataAppointment.treatment;
      this.scheduleDate = this.dataAppointment.scheduleDate;
    })
  }

  openAppointmentDialog() {
    const dialogRef= this.dialog.open(editLogbookComponent,{
      width: '500px',
      height: '500px',
      data:{
        id: this.id,
        scheduleDate: this.scheduleDate,
        motive: this.motive,
        personalHistory: this.personalHistory,
        testRealized: this.testRealized,
        treatment: this.treatment,
        meetUrl: this.meetUrl
      }
    });
  }
}
