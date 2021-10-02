import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Psychologist} from "../types/psychologist";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PsychologistService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  getPsychologists(): Observable<any> {
    return this.http.get<Psychologist[]>('http://localhost:8080/psychologists', this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred')
    } else {
      console.error('AAA')
    }
    return throwError('Something happened with request, please try again later')
  }
}
