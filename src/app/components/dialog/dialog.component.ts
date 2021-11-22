import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Publication} from "../../types/publication";
import {PublicationsService} from "../../services/publications.service";
import {ActivatedRoute, Router} from "@angular/router";
import {data} from "autoprefixer";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HomePsychologistComponent} from "../../pages/psychologist/home/home-psychologist.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  receivePsychologist: any;
  // publications!: Publications[];

  constructor(private fb: FormBuilder,
              private _publicationsService: PublicationsService,
              public dialogRef: MatDialogRef<HomePsychologistComponent>,
              @Inject(MAT_DIALOG_DATA,) public data:any,
              private route: ActivatedRoute,
              private router: Router
              ) {

    this.receivePsychologist = data;
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
    console.log(this.receivePsychologist.psychologistId);
  }

  addPost(){
    // console.log(this.form);
    const publication: Publication ={
      id: this.form.value.id,
      title: this.form.value.title,
      description: this.form.value.description,
      content: this.form.value.content,
      tags: this.form.value.tags,
      photoUrl: "https://gentequebrilla.azurewebsites.net/wp-content/uploads/2019/04/12014-1024x604.jpg",
    }

    this._publicationsService.addPublications(this.receivePsychologist.psychologistId,publication)
      .subscribe(datos => {
        // rt => console.log(rt);
        //   er => console.log(er);
        //() => console.log('Terminado');
        //this.router.navigate(['/psychologist/home/', this.receivePsychologist.psychologistId]);
        this._publicationsService.getPublicationsByPsychologistId(this.receivePsychologist.psychologistId);
        //this.updatePublications();
      });

    //this.updatePublications();
  }

  updatePublications(){
    this._publicationsService.getPublicationsByPsychologistId(this.receivePsychologist.psychologistId)
      .subscribe(
        rt => console.log(rt),
        er =>console.log(er),
        ()=>console.log('Terminado'),
      );
  }
}




