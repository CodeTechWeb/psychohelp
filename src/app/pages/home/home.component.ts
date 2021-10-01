import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../components/dialog/dialog.component";
import {Publications} from "../../types/publications";
import {PublicationsService} from "../../services/publications.service";
import {tap} from "rxjs/operators";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {


 //** constructor(public dialog: MatDialog) { }

  publications!: Publications[];
  constructor(private publicationsSvc: PublicationsService) { }

  ngOnInit(): void {
    this.publicationsSvc.getPublications()
      .pipe(
        tap( (publications: Publications[]) => this.publications =publications)
      )
      .subscribe();

  }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(DialogComponent, {
  //     height:'600px',
  //     width: '800px',
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

}
