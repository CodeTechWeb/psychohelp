import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  passwordHide = true;
  passwordConfirmationHide = true;
  constructor() { }

  ngOnInit(): void {
  }

}
