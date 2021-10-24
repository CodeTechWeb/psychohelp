import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

type Option = {
  icon: string;
  label: string;
  color: {
    button: string;
    icon: string;
  };
  action?: any;
}
@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html'
})
export class BottomMenuComponent {
  @Output('muteAudio') muteAudio: EventEmitter<any> = new EventEmitter();
  @Output('stopVideo') stopVideo: EventEmitter<any> = new EventEmitter();

  options: Array<Option> = [
    { icon: 'mic_off', color: { button: 'primary', icon: 'basic'}, label:'microphone', action: () => this.muteAudio.emit() },
    { icon: 'videocam_off', color: { button: 'primary', icon: 'basic'}, label: 'video camera', action: () => this.stopVideo.emit() },
    { icon: 'present_to_all', color: { button: 'primary', icon: 'basic'}, label: 'presentation'},
    { icon: 'more_vert', color: { button: 'primary', icon: 'basic'}, label: 'options'},
    { icon: 'call_end', color: { button: 'warn', icon: 'basic'}, label: 'hang', action: () => this.router.navigate(['/'])}
  ]
  constructor(private router: Router) { }
}
