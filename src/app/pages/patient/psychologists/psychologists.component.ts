import {Component, OnInit } from '@angular/core';
import { PsychologistService } from "../../../services/psychologist.service";
import {Psychologist} from "../../../types/psychologist";
import {MatDialog} from "@angular/material/dialog";
import {PsychologistDialogComponent} from "../../../components/psychologist-dialog/psychologist-dialog.component"
import Response from "../../../types/response";

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
  filterGenre!: Psychologist[];
  searchKey:string="";
  genreSelected: string="";
  typeSessionSelected:string="";
  genres: string[]= ['Femenino', 'Masculino'];
  typeSessions: string[]= ['Individual', 'Pareja'];

  constructor(private psychologistService: PsychologistService, private dialog: MatDialog) {
    // this.dataSource = new MatTableDataSource<any>();
  }


  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
    this.getAllPsychologists();
    //this.filter('Masculino');

  }

  getAllPsychologists() {
    this.psychologistService.getAllPsychologists().subscribe((response: Response<Psychologist[]>) => {
      this.psychologists = response.content;
      this.filterGenre = response.content;
    })
  }

  openPsychologistDialog(selectedPsychologist: any) {
    const dialogRef= this.dialog.open(PsychologistDialogComponent,{
      width: '500px',
      height: '500px',
      data:{
        name: selectedPsychologist.name,
        email: selectedPsychologist.email,
        image: selectedPsychologist.image,
        about: selectedPsychologist.about,
        specialization: selectedPsychologist.specialization,
        formation: selectedPsychologist.formation,
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
