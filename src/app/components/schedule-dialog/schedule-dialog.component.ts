import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PsychologistsComponent} from "../../pages/patient/psychologists/psychologists.component";
import {PsychologistService} from "../../services/psychologist.service";

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
})
export class ScheduleDialogComponent implements OnInit {
  receivedPsychologist:any;
  receivedPatient: any;
  schedules!: any;


  constructor(public dialogRef: MatDialogRef<PsychologistsComponent>, private psychologist: PsychologistService,
              @Inject(MAT_DIALOG_DATA) public data:any) {
    this.receivedPsychologist=data;
    this.receivedPatient=data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  retrieveSchedule(){
    console.log(this.receivedPsychologist.id)
    this.psychologist.findPsychologistSchedule(this.receivedPsychologist.id).subscribe(
      (data) => {
        this.schedules = data;
        console.log(this.schedules);
      }
    );
  }

  ngOnInit(): void {

    this.retrieveSchedule();
  }

}
