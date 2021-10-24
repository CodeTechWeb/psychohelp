import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Patients } from "../types/patients";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  private apiURL = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) { }

  getPatients(): Observable<any> {
    return this.http.get<Patients[]>(this.apiURL);
  }
}
