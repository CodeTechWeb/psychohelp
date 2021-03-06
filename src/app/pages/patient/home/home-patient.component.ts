import { Component, OnInit } from '@angular/core';
import { Publication } from "../../../types/publication";
import { Psychologist } from "../../../types/psychologist";
import { ICarouselItem } from "../../../components/carousel/Icarousel-item.metadata";
import { CAROUSEL_DATA_ITEMS } from "../../../components/carousel/carousel.const";
import { PsychologistService } from "../../../services/psychologist.service";
import { PublicationsService } from "../../../services/publications.service";
import { ActivatedRoute } from "@angular/router";

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
  patientId!: string;


  constructor(
    private publicationsService: PublicationsService,
    private psychologistsService: PsychologistService, private route: ActivatedRoute) {
    this.patientId = route.snapshot.params['patient_id']
  }

  ngOnInit(): void {
    this.getPublications();
    this.getPsychologist();
  }

  getPublications(): void{
    this.publicationsService.getAllPublications()
      .subscribe((data: any) => {
        this.publications = data;
        console.log(this.publications);
      })
    this.getPsychologist();
  }

  getPsychologist() {
    this.psychologistsService.getAllPsychologists().subscribe((data: any) => {
      this.psychologists = data;
      console.log(this.psychologists);
    })
  }

}

