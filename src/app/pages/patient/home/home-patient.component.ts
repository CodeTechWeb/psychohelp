import { Component, OnInit } from '@angular/core';
import {PublicationsService} from "../../../services/publications.service";
import {Publications} from "../../../types/publications";
import {tap} from "rxjs/operators";
import {ICarouselItem} from "../../../components/carousel/Icarousel-item.metadata"
import {CAROUSEL_DATA_ITEMS} from "../../../components/carousel/carousel.const";
import {Psychologist} from "../../../types/psychologist";
import {PsychologistService} from "../../../services/psychologist.service";
import {Patients} from "../../../types/patients";
import {PatientsService} from "../../../services/patients.service";
import patient from "../../../routes/patient";
import {identity} from "rxjs";

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {

  id: any;
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  publications!: Publications[];
  psychologist!: Psychologist[];
  patient!: Patients[];
  show!: boolean;
  constructor(private publicationsSvc: PublicationsService, private psychologistsSvc: PsychologistService, private patientsSvc: PatientsService) { }

  ngOnInit(): void {
    this.publicationsSvc.getPublications()
      .pipe(
        tap( (publications: Publications[]) => this.publications =publications))
      .subscribe();

    this.psychologistsSvc.getPsychologists()
      .pipe(
        tap((psychologist: Psychologist[]) => this.psychologist = psychologist)
      )
      .subscribe();
    this.patientsSvc.getAll()
      .pipe(
        tap((patient: Patients[]) => this.patient = patient)
      )
      .subscribe();
  }


}
