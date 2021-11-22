import {Component, Input, OnInit} from '@angular/core';

interface Option {
  name: string,
  route: string,
  icon: string
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Input() domain!: string | null;

  options : Array<Option>= [
    { name: "Home", route: "", icon: "home" },
    { name: 'Psychologists', route: 'psychologists', icon: 'psychology' },
    { name: "Profile", route: "profile", icon: "person" },
    { name: "Logout", route: "", icon: "logout" }
  ]
  constructor() { }

  ngOnInit(): void {}
}
