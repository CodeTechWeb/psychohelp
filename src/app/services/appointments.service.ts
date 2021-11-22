import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Appointments } from "../types/appointments";
import { environment } from 'src/environments/environment';
import { catchError, retry}  from "rxjs/operators";
import {Patients} from "../types/patients";

@Injectable({
  providedIn: 'root'
})

export class AppointmentsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private apiURL = `${environment.apiUrl}/appointment`;
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

  getAppointmentsByPatientIdAndPsychologistId(patientId: number, psychologistId: number): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(`${this.apiURL}/psychologist/${psychologistId}/patient/${patientId}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  getAppointmentsById(id: number): Observable<Appointments> {
    return this.http.get<Appointments>(`${this.apiURL}/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  updateAppointment(id: number, appointment: Object): Observable<Appointments> {
    return this.http.put<Appointments>(`${this.apiURL}/${id}`, appointment, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  getAppointmentsByPsychologistId(id: number): Observable<Appointments[]> {
    return this.http.get<Appointments[]>(`${this.apiURL}/psychologist/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  getPatientsByPsychologistId(psychologistId: number): Observable<Patients[]> {
    return this.http.get<Patients[]>(`${this.apiURL}/psychologist/${psychologistId}/patient`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
}
