import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Publications} from "../../types/publications";
import {PublicationsService} from "../../services/publications.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form: FormGroup;
  // publications!: Publications[];

  constructor(private fb: FormBuilder,
              private _publicationsService: PublicationsService) {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['', Validators.required],
      img: ['']
    })
  }

  ngOnInit(): void {

  }

  addPost(){
    // console.log(this.form);
    const publication: Publications ={
      id: Date.now(),
      title: this.form.value.title,
      description: this.form.value.description,
      tags: this.form.value.tags,
      img: "https://gentequebrilla.azurewebsites.net/wp-content/uploads/2019/04/12014-1024x604.jpg",
    }

    this._publicationsService.addPublications(publication)
      .subscribe(rt => console.log(rt),
                 er =>console.log(er),
                 ()=>console.log('Terminado'),

            );


  }





}




