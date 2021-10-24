import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientsService} from "../../../services/patients.service";
import {Patients} from "../../../types/patients";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _patientsService: PatientsService,
              private route: Router) {
    this.form = this.fb.group({
      id: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required],
      birthdayDate: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  register() {

    const patient: Patients ={
      id: this.form.value.id,
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      password: this.form.value.password,
      state: this.form.value.state,
      phone: this.form.value.phone,
      birthdayDate: this.form.value.birthdayDate,
      gender: this.form.value.gender
    }

    this._patientsService.create(patient)
      .subscribe(res =>{
        this.form.reset();
        this.route.navigate(['/sign-in'])
      },
        er => console.log(er),
        ()=>console.log('Terminado'),
        );
  }


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  hide = true;

}
