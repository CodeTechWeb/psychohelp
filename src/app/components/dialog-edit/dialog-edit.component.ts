import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PublicationsService} from "../../services/publications.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HomePsychologistComponent} from "../../pages/psychologist/home/home-psychologist.component";
import {Publication} from "../../types/publication";

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {
  form: FormGroup;
  receivePublication: any;

  constructor(private fb: FormBuilder,
              private _publicationsService: PublicationsService,
              public dialogRef: MatDialogRef<HomePsychologistComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) {
    this.receivePublication = data;
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['', Validators.required],
      photoUrl: ['']
    })
  }

  ngOnInit(): void {
  }

  editPost(){
    const publication: Publication = {
      id: this.form.value.id,
      title: this.form.value.title,
      description: this.form.value.description,
      content: this.form.value.content,
      tags: this.form.value.tags,
      photoUrl: "https://gentequebrilla.azurewebsites.net/wp-content/uploads/2019/04/12014-1024x604.jpg",
    }

    this._publicationsService.editPublication(this.receivePublication.id,publication)
      .subscribe(
        rt => console.log(rt),
        er =>console.log(er),
        ()=>console.log('Terminado'),
      );


  }

}
