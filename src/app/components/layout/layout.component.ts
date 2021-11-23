import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Input() domain!: string | null;

  patient_id: number = 0;

  patientOptions = [
    { name: "Home", route: "home-patient/1", icon: "home" },
    { name: "Psychologists", route: 'psychologists', icon: 'psychology' },
    { name: "Profile", route: 'profile/1', icon: 'person' },
  ]
  psychologistOptions = [
    { name: "Home", route: "psychologist/1", icon: 'home'}
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.patient_id = this.route.snapshot.params['id'];
  }

  profile() {
    this.router.navigate(['profile', this.patient_id])
  }

  options() {
    if (this.domain == 'psychologist')
      return this.psychologistOptions;
    else
      return this.patientOptions;
  }

  psychoList() {
    this.router.navigate(['psychologists/list', this.patient_id])
  }

  appointment() {
    this.router.navigate(['patient/appointments', this.patient_id])
  }
}
