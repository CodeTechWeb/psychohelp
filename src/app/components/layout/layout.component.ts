import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['layout.component.css']
})
export class LayoutComponent implements OnInit {
  showFiller = false;
  fillerNav= [
    {name: "home", routes: "", icon: "home"},
    {name: "contacto", routes: "", icon: "person"},
    {name: "calendario", routes: "", icon: "calendar_today"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
