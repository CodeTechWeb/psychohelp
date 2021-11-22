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
import {ActivatedRoute} from "@angular/router";
import {PsychologistDialogComponent} from "../../../components/psychologist-dialog/psychologist-dialog.component";
import {DialogEditComponent} from "../../../components/dialog-edit/dialog-edit.component";


@Component({
  selector: 'app-home-psychologist',
  templateUrl: './home-psychologist.component.html'
})
export class HomePsychologistComponent implements OnInit {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  publications!: Publication[];
  psychologists!: Psychologist[];
  psychologist!: Psychologist;
  psychologistId: any;
  show!: boolean;

  constructor(public dialog: MatDialog,
              public dialog2: MatDialog,
              public publicationsSvc: PublicationsService,
              private psychologistsSvc: PsychologistService,
              private route: ActivatedRoute)
  {
    this.psychologistId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPublicationsByPsychologistId();
    this.getPsychologists();
    this.getPsychologistLogued();
  }

  openDialog(): void {
    console.log(this.psychologistId);
    let dialogRef = this.dialog.open(DialogComponent, {
      height:'600px',
      width: '800px',
      data: {
        psychologistId: this.psychologistId,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  // getPsychologist(): void{
  //   this.psychologistsSvc.getAllPsychologists()
  //     .pipe(
  //       tap((response: Response<Psychologist[]>) => this.psychologist = response.content)
  //     )
  //     .subscribe();
  // }

  getPsychologists() {
    this.psychologistsSvc.getAllPsychologists().subscribe((data: any) => {
      this.psychologists = data;
      console.log(this.psychologists);
    })
  }

  getPublicationsByPsychologistId(){
    this.publicationsSvc.getPublicationsByPsychologistId(this.psychologistId).subscribe((data: any) => {
      this.publications = data;
      console.log(this.publications);
    })
  }

  getPsychologistLogued(){
    this.psychologistsSvc.getPsychologist(this.psychologistId).subscribe((data: any) =>{
      this.psychologist = data;
    })
  }

  openPsychologistDialog(selectedPsychologist: any) {
    const dialogRef= this.dialog.open(PsychologistDialogComponent,{
      width: '600px',
      maxHeight: '600px',
      data:{
        name: selectedPsychologist.name,
        email: selectedPsychologist.email,
        image: selectedPsychologist.image,
        about: selectedPsychologist.about,
        specialization: selectedPsychologist.specialization,
        formation: selectedPsychologist.formation,
      }
    });
  }

  openPublicationEditDialog(selectedPublication: any){
    const dialogRef2 = this.dialog2.open(DialogEditComponent, {
      width: '600px',
      maxHeight: '600px',
      data: {
        id: selectedPublication.id,
        title: selectedPublication.title,
        description: selectedPublication.description,
        content: selectedPublication.content,
        tags: selectedPublication.tags,
        photoUrl: selectedPublication.photoUrl
      }
    })
  }

  deletePublication(selectedPublication: any){
    this.publicationsSvc.deletePublication(selectedPublication.id)
      .subscribe((data: any) =>{
      });
    this.getPublicationsByPsychologistId();
  }
}
