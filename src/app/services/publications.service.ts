import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Publication } from "../types/publication";
import { catchError, retry } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import Response from "../types/response";

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
  constructor(private http: HttpClient) {}

  getAllPublications(): Observable<Response<Publication[]>> {
    return this.http.get<Response<Publication[]>>(this.apiURL)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: string): Observable<Publication> {
    return this.http.get<Publication>(`${this.apiURL}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  addPublications(psychologistId: string, publication: Publication){
    return this.http.post(`${environment.apiUrl}/publications/publication/${psychologistId}`, JSON.stringify(publication), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getPublicationsByPsychologistId(psychologistId: string): Observable<Publication>{
    return this.http.get<Publication>(`${environment.apiUrl}/publications/psychologist/${psychologistId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  editPublication(publicationId: string, publication: Object): Observable<Publication>{
    return this.http.put<Publication>(`${environment.apiUrl}/publications/${publicationId}`, publication, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));

  }

  deletePublication(publicationId: string): Observable<Publication>{
    return this.http.delete<Publication>(`${environment.apiUrl}/publications/${publicationId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
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
}
