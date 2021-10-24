import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PsychologistsComponent} from "../../pages/patient/psychologists/psychologists.component";

@Component({
  selector: 'app-psychologist-dialog',
  templateUrl: './psychologist-dialog.component.html',
  styleUrls: ['./psychologist-dialog.component.css']
})
export class PsychologistDialogComponent implements OnInit {
  receivedPsychologist:any;

  constructor(
    public dialogRef:MatDialogRef<PsychologistsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
    this.receivedPsychologist=data;
  }

  closeDialog(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
