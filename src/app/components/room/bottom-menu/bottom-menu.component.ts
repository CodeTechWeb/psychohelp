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

  audioMute: boolean = false;
  videoHidden: boolean = false;
  options: Array<Option> = [
    { icon: 'mic', color: { button: 'primary', icon: 'basic'}, label:'microphone', action: () => this.muteAction() },
    { icon: 'videocam', color: { button: 'primary', icon: 'basic'}, label: 'video camera', action: () => this.hideAction() },
    { icon: 'present_to_all', color: { button: 'primary', icon: 'basic'}, label: 'presentation'},
    { icon: 'more_vert', color: { button: 'primary', icon: 'basic'}, label: 'options'},
    { icon: 'call_end', color: { button: 'warn', icon: 'basic'}, label: 'hang', action: () => this.router.navigate(['/'])}
  ]
  constructor(private router: Router) { }

  muteAction() {
    this.muteAudio.emit()
    const button = this.options[0]
    this.audioMute = !this.audioMute
    if (this.audioMute) {
      button.icon = 'mic_off'
      button.color.button = 'warn'
    } else {
      button.icon = 'mic'
      button.color.button = 'primary'
    }
  }

  hideAction() {
    this.stopVideo.emit()
    const button = this.options[1]
    this.videoHidden = !this.videoHidden
    if (this.videoHidden) {
      button.icon = 'videocam_off'
      button.color.button = 'warn'
    } else {
      button.icon = 'videocam'
      button.color.button = 'primary'
    }
  }
}
