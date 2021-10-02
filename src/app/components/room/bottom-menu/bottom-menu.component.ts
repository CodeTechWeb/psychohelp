import { Component, OnInit } from '@angular/core';

type Option = {
  icon: string;
  label: string;
  color: {
    button: string;
    icon: string;
  };
}
@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html'
})
export class BottomMenuComponent implements OnInit {

  options: Array<Option> = [
    { icon: 'mic_off', color: { button: 'primary', icon: 'basic'}, label:'microphone' },
    { icon: 'videocam_off', color: { button: 'primary', icon: 'basic'}, label: 'video camera' },
    { icon: 'present_to_all', color: { button: 'primary', icon: 'basic'}, label: 'presentation'},
    { icon: 'more_vert', color: { button: 'primary', icon: 'basic'}, label: 'options'},
    { icon: 'call_end', color: { button: 'warn', icon: 'basic'}, label: 'hang'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
