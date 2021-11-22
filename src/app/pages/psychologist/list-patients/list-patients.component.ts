import { Component, OnInit } from '@angular/core';
import {Patients} from "../../../types/patients";
import {PatientsService} from "../../../services/patients.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppointmentsService} from "../../../services/appointments.service";
import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  patients!: Patients[];
  psychologistId: number;

  constructor(private patientsService: PatientsService,
              private router: Router,private route: ActivatedRoute, private appointmentsService: AppointmentsService, private dialog: MatDialog) {
    this.psychologistId = route.snapshot.params['id'];
    console.log(this.psychologistId);
  }

  ngOnInit(): void {
    this.retrievePatients();
  }

  redirectTo(patientId:number, psychoId:number){
    this.router.navigate(['psychologist/', psychoId, patientId]);
  }

  retrievePatients(){
    this.appointmentsService.getPatientsByPsychologistId(this.psychologistId).subscribe(
      (data) => {
        this.patients = data;
        console.log(this.patients);
      }
    );
  }

}
