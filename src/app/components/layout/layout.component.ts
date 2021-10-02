import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['layout.component.css']
})
export class LayoutComponent implements OnInit {
  showFiller = false;
  fillerNav= [
    {name: "Home", routes: "", icon: "home"},
    {name: "Contacto", routes: "", icon: "person"},
    {name: "Calendario", routes: "", icon: "calendar_today"},
    {name: "Metodo de Pago", routes: "", icon: "credit_card"},
    {name: "Logout", routes: "", icon: "logout"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
