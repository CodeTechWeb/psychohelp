import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html'
})
export class VideoPlayerComponent implements OnInit {
  @Input() stream: any
  constructor() { }

  ngOnInit(): void {
  }

}
