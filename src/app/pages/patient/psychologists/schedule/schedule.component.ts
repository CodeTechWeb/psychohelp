import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PsychologistService } from "../../../../services/psychologist.service";
import { Psychologist } from "../../../../types/psychologist";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit {
  psychologistId: string;
  selected: Date | null;
  psychologist: Psychologist;

  constructor(private route: ActivatedRoute, private psychologistService: PsychologistService) {
    this.psychologistId = route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.getPsychologist()
  }

  getPsychologist() {
    this.psychologistService.getPsychologist(this.psychologistId).subscribe((data: any) => {
      this.psychologist = data;
    })
  }
}
