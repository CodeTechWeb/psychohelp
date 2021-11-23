import {Component, OnInit} from '@angular/core';
import {Publication} from "../../../types/publication";
import {ActivatedRoute} from "@angular/router";
import {PublicationsService} from "../../../services/publications.service";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html'
})
export class PublicationComponent implements OnInit {
  publicationId: string;
  publication: Publication;

  constructor( route: ActivatedRoute, private publicationsService: PublicationsService) {
    this.publicationId = route.snapshot.paramMap.get('id') || '';
  }
  ngOnInit(): void {
    this.getPublicationById();
  }

  getPublicationById() {
    this.publicationsService.getById(this.publicationId)
      .subscribe((data: any) => {
        this.publication = data;
        console.log(data)
      })
  }
}
