import { Component, OnInit } from '@angular/core';
import {ICarouselItem} from "../../../components/carousel/Icarousel-item.metadata"
import {CAROUSEL_DATA_ITEMS} from "../../../components/carousel/carousel.const";
import {Psychologist} from "../../../types/psychologist";
import {PsychologistService} from "../../../services/psychologist.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../components/dialog/dialog.component";
import {Publications} from "../../../types/publications";
import {PublicationsService} from "../../../services/publications.service";
import {tap} from "rxjs/operators";


@Component({
  selector: 'app-home-psychologist',
  templateUrl: './home-psychologist.component.html'
})
export class HomePsychologistComponent implements OnInit {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  publications!: Publications[];
  psychologist!: Psychologist[];
  show!: boolean;
  constructor(public dialog: MatDialog, private publicationsSvc: PublicationsService, private psychologistsSvc: PsychologistService) { }

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
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      height:'600px',
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
