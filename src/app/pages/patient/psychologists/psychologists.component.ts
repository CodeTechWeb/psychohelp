import {Component, OnInit } from '@angular/core';
import { PsychologistService } from "../../../services/psychologist.service";
import {Psychologist} from "../../../types/psychologist";
import {MatDialog} from "@angular/material/dialog";
import {PsychologistDialogComponent} from "../../../components/psychologist-dialog/psychologist-dialog.component"
import Response from "../../../types/response";
import {ActivatedRoute, Router} from "@angular/router";
import {Patients} from "../../../types/patients";
import {PatientsService} from "../../../services/patients.service";
import {ScheduleDialogComponent} from "../../../components/schedule-dialog/schedule-dialog.component";
import {data} from "autoprefixer";

@Component({
  selector: 'app-psychologists',
  templateUrl: './psychologists.component.html'
})
export class PsychologistsComponent implements OnInit{
  displayedColumns: string[] = ['name', 'photo'];
  // dataSource: MatTableDataSource<any>;
  //
  // @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  psychologists!: Psychologist[];
  patients!: Patients;
  filterGenre!: Psychologist[];
  searchKey:string="";
  genreSelected: string="";
  typeSessionSelected:string="";
  patientId!: string;
  psychologistId!: string;
  genres: string[]= ['Femenino', 'Masculino'];
  typeSessions: string[]= ['Individual', 'Pareja'];

  constructor(private psychologistService: PsychologistService, private dialog: MatDialog, private route: ActivatedRoute, private router: Router, private patientService: PatientsService) {
    this.patientId = route.snapshot.paramMap.get('id') || '';
    // this.dataSource = new MatTableDataSource<any>();
  }


  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.getAllPsychologists();
    this.getById();
    this.getPsychoSchedule()
    //this.filter('Masculino');
  }

  getAllPsychologists() {
    this.psychologistService.getAllPsychologists().subscribe((data: any) => {
      this.psychologists = data;
      this.filterGenre = data;
    })
  }

  getById(){
    this.patientService.getPatientById(this.patientId).subscribe((data: any) =>{
      this.patients = data;
    })
  }

  getPsychoSchedule() {
    this.psychologistService.findPsychologistSchedule(this.psychologistId).subscribe((data: any) =>{
      this.psychologists = data;
    })
  }



  openPsychologistDialog(selectedPsychologist: any) {
    const dialogRef= this.dialog.open(PsychologistDialogComponent,{
      width: '700px',
      height: '700px',
      data:{
        name: selectedPsychologist.name,
        email: selectedPsychologist.email,
        img: selectedPsychologist.img,
        about: selectedPsychologist.about,
        specialization: selectedPsychologist.specialization,
        formation: selectedPsychologist.formation,
      }
    });
  }

  openScheduleDialog(selectedPsychologist: any, selectedSchedule: any) {
    const dialogSch= this.dialog.open(ScheduleDialogComponent, {
      width: '700px',
      height: '700px',
      data: {
        id: selectedPsychologist.id,
        name: selectedPsychologist.name,
        img: selectedPsychologist.img,
        lastName: selectedSchedule.lastName,
        firstName: selectedSchedule.firstName,
      }
    });
  }

  filterDeleting(genre:string){
    this.psychologists.forEach((value,index)=>{
      if(value.genre==genre) this.psychologists.splice(index,1);
    });
  }

  filter(genre:string, sessionType:string){
    this.filterGenre = this.psychologists
      .filter((a:any)=>{
        if(a.genre == genre && sessionType =='' ||genre==''&& sessionType==''){
          return a;
        }
        if(a.sessionType==sessionType && genre==''|| sessionType==''&& genre==''){
          return a;
        }
        if(a.genre==genre && a.sessionType==sessionType || sessionType==''&& genre==''){
          return a;
        }
      })
  }
}
