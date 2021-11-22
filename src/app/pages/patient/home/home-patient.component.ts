import { Component, OnInit } from '@angular/core';
import { tap } from "rxjs/operators";
import { Patients } from "../../../types/patients";
import { Publication } from "../../../types/publication";
import { Psychologist } from "../../../types/psychologist";
import { ICarouselItem } from "../../../components/carousel/Icarousel-item.metadata";
import { CAROUSEL_DATA_ITEMS } from "../../../components/carousel/carousel.const";
import { PsychologistService } from "../../../services/psychologist.service";
import { PublicationsService } from "../../../services/publications.service";
import Response from "../../../types/response";

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {
  carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  publications!: Publication[];
  psychologists!: Psychologist[];
  show!: boolean;

  constructor(
    private publicationsService: PublicationsService,
    private psychologistsService: PsychologistService) { }

  ngOnInit(): void {
    this.getPublications();
    this.getPsychologist();
  }

  getPsychologist(): void{
    this.psychologistsService.getAllPsychologists()
      .subscribe((data: any) => {
        this.psychologists = data;
      console.log(this.psychologists);
    })
  }
  getPublications(): void{
    this.publicationsService.getAllPublications()
      .subscribe((data: any) => {
        this.publications = data;
        console.log(this.publications);
      })
  }
}

