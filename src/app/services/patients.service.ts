import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patients} from "../types/patients";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  private apiURL = 'http://localhost:8080/patients';
  constructor(private http: HttpClient) { }
  getPatients(): Observable<any> {
    return this.http.get<Patients[]>(this.apiURL);

  }
}
