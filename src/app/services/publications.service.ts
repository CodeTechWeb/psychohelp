import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Publications} from "../types/publications";


@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private apiURL = 'http://localhost:8080/publications';
  constructor(private http: HttpClient) { }
  getPublications(): Observable<any> {
    return this.http.get<Publications[]>(this.apiURL);
  }
}
