import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-layout-patient',
  templateUrl: './layout-patient.component.html',
  styleUrls: ['./layout-patient.component.css']
})
export class LayoutPatientComponent implements OnInit {
  @Input() domain!: string | null;

  psychologist_id: number = 0;
  userType: string = "patient"

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.psychologist_id = this.route.snapshot.params['id'];
  }

  profile() {
    this.router.navigate(['profile', this.psychologist_id])
  }

}
