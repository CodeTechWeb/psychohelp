import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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

  patient_id: number = 0;
  userType: string = "psychologist"

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.patient_id = this.route.snapshot.params['id'];
  }

  profile() {
    this.router.navigate(['profile', this.patient_id])
  }

  psychoList() {
    this.router.navigate(['psychologists/list', this.patient_id])
  }
}
