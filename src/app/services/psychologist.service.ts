import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Psychologist } from "../types/psychologist";
import {catchError, retry } from "rxjs/operators";
import { environment } from 'src/environments/environment';

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
  getPsychologists(): Observable<Psychologist[]> {
    return this.http.get<Psychologist[]>(`${environment.apiUrl}/psychologists`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  getPsychologist(psychologistId: string): Observable<Psychologist> {
    return this.http.get<Psychologist>(`${environment.apiUrl}/psychologists/${psychologistId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  create(psychologist: Psychologist):Observable<any>{
    return this.http.post(`${environment.apiUrl}/psychologists`, JSON.stringify(psychologist), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  login(email:string):Observable<any> {
    return this.http.get(`${environment.apiUrl}/psychologists?email=${email}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
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
