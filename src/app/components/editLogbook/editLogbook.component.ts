import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LogbookComponent} from "../../pages/psychologist/logbook/logbook.component";
import {AppointmentsService} from "../../services/appointments.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-logbook-dialog',
  templateUrl: './editLogbook.component.html',
})
export class editLogbookComponent implements OnInit {
  form: FormGroup;
  receivedAppointment:any;

  constructor(private fb: FormBuilder,
    public dialogRef:MatDialogRef<LogbookComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private appointmentService:AppointmentsService ) {
    this.receivedAppointment=data;
    this.form = this.fb.group({
      motive: [''],
      personalHistory: [''],
      testRealized: [''],
      treatment: [''],
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  saveAppointment(){
    let object = {
      meetUrl: this.receivedAppointment.meetUrl,
      motive: this.form.value.motive,
      personalHistory: this.form.value.personalHistory,
      testRealized: this.form.value.testRealized,
      treatment: this.form.value.treatment,
      scheduleDate: this.receivedAppointment.scheduleDate,
    };
    this.appointmentService.updateAppointment(this.receivedAppointment.id, object).subscribe(
      data=>{
        console.log(data);
        this.dialogRef.close();

      },
      error=>{
        console.log(error);
      }
    );
  }
}
