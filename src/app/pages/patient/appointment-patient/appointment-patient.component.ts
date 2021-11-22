import { Component, OnInit } from '@angular/core';
import {Appointments} from "../../../types/appointments";
import {Patients} from "../../../types/patients";
import {ActivatedRoute} from "@angular/router";
import {PsychologistService} from "../../../services/psychologist.service";
import {AppointmentsService} from "../../../services/appointments.service";
import {MatDialog} from "@angular/material/dialog";
import {DetailsDialogComponent} from "../../../components/details-dialog/details-dialog.component";
import {Psychologist} from "../../../types/psychologist";
import {DialogPatientComponent} from "../../../components/dialog-patient/dialog-patient.component";

@Component({
  selector: 'app-appointment-patient',
  templateUrl: './appointment-patient.component.html',
  styleUrls: ['./appointment-patient.component.css']
})
export class AppointmentPatientComponent implements OnInit {

  id!: number;
  appointments!: Appointments[];
  psychologists!: Psychologist[];
  appointmentId!: number;
  selectedPsychologist!: Psychologist;
  psychologistId!: number;

  constructor(private route: ActivatedRoute, private psychologistService: PsychologistService,
              private appointmentsService: AppointmentsService, private dialog: MatDialog) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.retrieveAppointments();
  }

  retrieveAppointments() {
    this.appointmentsService.getAppointmentsById(this.id).subscribe((data: any) => {
      this.appointments = data;
      console.log(this.appointments);
    })
  }

  retrieveAllPsychologists() {
    this.psychologistService.getAllPsychologists().subscribe((data: any) => {
      this.appointments = data;
      console.log(this.appointments);
    })
  }

  openDetails(appointmentId: number, psychologistId: number) {
    this.appointmentId = appointmentId;
    this.psychologistService.getById(psychologistId).subscribe((data: any) => {
      this.selectedPsychologist = data;
      console.log(this.selectedPsychologist);
      const dialogRef= this.dialog.open(DialogPatientComponent,{
        width: '400px',
        height: '200px',
        data:{
          id: this.selectedPsychologist.id,
          firstName: this.selectedPsychologist.name,
          email: this.selectedPsychologist.email,
          img: this.selectedPsychologist.image,
        }
      });
    })
  }


}
