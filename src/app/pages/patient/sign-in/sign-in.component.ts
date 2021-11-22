import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientsService} from "../../../services/patients.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private _patientsService: PatientsService, private route: Router) {
    this.form = this.fb.group({
      id: 0,
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }

  validateSignIn() {
    const formValue = this.form.value;
    this._patientsService.getEmail(formValue.email)
      .subscribe((res) =>{
        console.log(res)
        if(res.length==0)
        {
          alert('Email or password are wrong')
        } else if(res.length==1) {
          console.log(res.password);
          if (res[0].password===formValue.password) {
            this.route.navigate(['/home-patient/', res[0].id])
          } else {
            alert('Email or passwaord are wrong')
          }
        }
      })
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  hide = true;

}
