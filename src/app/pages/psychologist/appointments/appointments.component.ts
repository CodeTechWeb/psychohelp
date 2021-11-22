import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppointmentsService} from "../../../services/appointments.service";
import {MatDialog} from "@angular/material/dialog";
import {Appointments} from "../../../types/appointments";
import {PatientsService} from "../../../services/patients.service";
import {Patients} from "../../../types/patients";
import {DetailsDialogComponent} from "../../../components/details-dialog/details-dialog.component";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  id!: number;
  appointments!: Appointments[];
  patients!: Patients[];
  appointmentId!: number;
  selectedPatient!: Patients;
  patientId!: number;

  constructor(private route: ActivatedRoute, private patientsService: PatientsService,
              private appointmentsService: AppointmentsService, private dialog: MatDialog) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.retrieveAppointments();
  }

  retrieveAppointments() {
    this.appointmentsService.getAppointmentsByPsychologistId(this.id).subscribe((data: any) => {
      this.appointments = data;
      console.log(this.appointments);
    })
  }

  retrieveAllPatients() {
    this.patientsService.getAll().subscribe((data: any) => {
      this.appointments = data;
      console.log(this.appointments);
    })
  }

  openDetails(appointmentId: number, patientId: number) {
    this.appointmentId = appointmentId;
    this.patientsService.getPatientById(patientId).subscribe((data: any) => {
      this.selectedPatient = data;
      console.log(this.selectedPatient);
      const dialogRef= this.dialog.open(DetailsDialogComponent,{
        width: '400px',
        height: '200px',
        data:{
          id: this.selectedPatient.id,
          firstName: this.selectedPatient.firstName,
          email: this.selectedPatient.email,
          img: this.selectedPatient.img,
        }
      });
    })
  }



}
