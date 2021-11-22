import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PsychologistService} from "../../../services/psychologist.service";
import {Psychologist} from "../../../types/psychologist";


@Component({
  selector: 'app-psychologist-profile',
  templateUrl: './psychologist-profile.component.html',
})
export class PsychologistProfileComponent implements OnInit {
  psychologistId: string;
  psychologist!: Psychologist;
  //form: FormGroup;

  constructor(private route: ActivatedRoute, private psychologistService: PsychologistService) {
    this.psychologistId = route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.getPsychologistById();
  }

  getPsychologistById(){
    this.psychologistService.getPsychologist(this.psychologistId)
      .subscribe((data: any) => {
        this.psychologist = data;
      })
  }

  updatePsychologist(){
    this.psychologistService.update(this.psychologist.id, this.psychologist)
      .subscribe(data =>{
        console.log(data)
      }, error => console.log(error));

  }



}
