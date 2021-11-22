import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppointmentsComponent} from "../../pages/psychologist/appointments/appointments.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})
export class DetailsDialogComponent implements OnInit {
  receivedPatient:any;

  constructor(
    public dialogRef:MatDialogRef<AppointmentsComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data:any) {
    this.receivedPatient=data;
  }

  closeDialog(){
    this.dialogRef.close();
  }

  Join(){
    this.dialogRef.close();
    this.router.navigate(['room', this.receivedPatient.id]);
  }

  ngOnInit(): void {
  }

}
