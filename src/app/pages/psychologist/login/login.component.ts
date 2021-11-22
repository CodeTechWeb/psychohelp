import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Psychologist} from "../../../types/psychologist";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {PsychologistService} from "../../../services/psychologist.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  //psychologistId: string;
  show: boolean = false;
  form: FormGroup;
  constructor(private fb: FormBuilder, private psychologistsSvc: PsychologistService, private route: Router, private routes: ActivatedRoute) {
    this.form = this.fb.group({
      id: 0,
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
    //this.psychologistId = routes.snapshot.paramMap.get('id') || '';
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
          if (res.password===formValue.password) {
            this.route.navigate(['psychologist/home', res.id])
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
