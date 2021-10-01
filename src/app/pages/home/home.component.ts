import { Component, OnInit } from '@angular/core';
import {Publications} from "../../types/publications";
import {PublicationsService} from "../../services/publications.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  publications!: Publications[];
  constructor(private publicationsSvc: PublicationsService) { }

  ngOnInit(): void {
    this.publicationsSvc.getPublications()
      .pipe(
        tap( (publications: Publications[]) => this.publications =publications)
      )
      .subscribe();

  }

}
