import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppointmentPatientComponent} from "../../pages/patient/appointment-patient/appointment-patient.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog-patient',
  templateUrl: './dialog-patient.component.html',
  styleUrls: ['./dialog-patient.component.css']
})
export class DialogPatientComponent implements OnInit {

  receivedPsychologist:any;

  constructor(
    public dialogRef:MatDialogRef<AppointmentPatientComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any) {
    this.receivedPsychologist=data;
  }

  closeDialog(){
    this.dialogRef.close();
  }

  Join(){
    this.dialogRef.close();
    this.router.navigate(['room', this.receivedPsychologist.id]);
  }

  ngOnInit(): void {
  }

}
