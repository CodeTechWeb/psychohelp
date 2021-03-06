import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Patients } from "../types/patients";
import { environment } from 'src/environments/environment';
import { catchError, retry}  from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  private apiURL = `${environment.apiUrl}/patients`;
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse)
  {
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

  create(patient: Patients):Observable<any> {
    return this.http.post(this.apiURL, JSON.stringify(patient), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getPatientById(patientId: number): Observable<Patients> {
    return this.http.get<Patients>(`${this.apiURL}/${patientId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiURL}/email/${email}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getAll(): Observable<any> {
    return this.http.get<Patients[]>(this.apiURL)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAllPsychologistPatients(psychologistId: string) : Observable<any> {
    return this.http.get<Patients[]>(`${this.apiURL}/${psychologistId}/patients`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  update(id: any, patientProfile: Object): Observable<any> {
    return this.http.put<Patients>(`${this.apiURL}/${id}`, patientProfile, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  delete(id: any) {
    return this.http.delete(`${this.apiURL}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
