import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Publications} from "../types/publications";
import {catchError, retry} from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class PublicationsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  private apiURL = `${environment.apiUrl}/publications`;
  constructor(private http: HttpClient) {

  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Default error handling
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      //Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  getPublications(): Observable<any> {
    return this.http.get<Publications[]>(this.apiURL)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  addPublications(publication: Publications){
    return this.http.post(this.apiURL, JSON.stringify(publication), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );

  }
}
