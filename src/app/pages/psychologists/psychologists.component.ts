import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { PsychologistService } from "../../services/psychologist.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-psychologists',
  templateUrl: './psychologists.component.html'
})
export class PsychologistsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'photo'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private psychologistService: PsychologistService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllPsychologists()
  }

  getAllPsychologists() {
    this.psychologistService.getPsychologists().subscribe((res :any) => {
      this.dataSource.data = res;
    })
  }
}
