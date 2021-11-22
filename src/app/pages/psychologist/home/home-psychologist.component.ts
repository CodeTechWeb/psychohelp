import { Component, OnInit } from '@angular/core';
import {ICarouselItem} from "../../../components/carousel/Icarousel-item.metadata"
import {CAROUSEL_DATA_ITEMS} from "../../../components/carousel/carousel.const";
import {Psychologist} from "../../../types/psychologist";
import {PsychologistService} from "../../../services/psychologist.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../components/dialog/dialog.component";
import {Publication} from "../../../types/publication";
import {PublicationsService} from "../../../services/publications.service";
import {tap} from "rxjs/operators";
import Response from "../../../types/response";


@Component({
  selector: 'app-home-psychologist',
  templateUrl: './home-psychologist.component.html'
})
export class HomePsychologistComponent implements OnInit {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  publications!: Publication[];
  psychologist!: Psychologist[];
  show!: boolean;

  constructor(
    public dialog: MatDialog,
    private publicationsSvc: PublicationsService,
    private psychologistsSvc: PsychologistService
  ) { }

  ngOnInit(): void {
    this.publicationsSvc.getAllPublications()
      .pipe(
        tap( (response: Response<Publication[]>) => this.publications = response.content))
      .subscribe();

    this.getPsychologist();
  }

  getPsychologist(): void{
    this.psychologistsSvc.getAllPsychologists()
      .subscribe((data: any) => {
        this.psychologist = data;
        console.log(this.psychologist);
      })
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
