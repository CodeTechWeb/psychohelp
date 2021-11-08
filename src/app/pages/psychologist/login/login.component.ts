import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Psychologist} from "../../../types/psychologist";
import {Router, RouterLink} from "@angular/router";
import {PsychologistService} from "../../../services/psychologist.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  form: FormGroup;
  constructor(private fb: FormBuilder, private psychologistsSvc: PsychologistService, private route: Router) {
    this.form = this.fb.group({
      id: 0,
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  validateLogin() {
    const formValue = this.form.value;
    this.psychologistsSvc.login(formValue.email)
      .subscribe((res)=>{
        console.log(res)
        if(res.length==0)
        {
          alert('Email or password are wrong')
        } else {
          console.log(res.password);
          if (res[0].password===formValue.password) {
            this.route.navigate(['home-psychologist'])
          } else {
            alert('Email or password are wrong')
          }
        }
      })
  }

  togglePassword() {
    if(this.show) {
      this.show =false;
    } else {
      this.show= true;
    }
  }
}
