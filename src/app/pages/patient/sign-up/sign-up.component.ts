import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PatientsService} from "../../../services/patients.service";
import {Patients} from "../../../types/patients";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _patientsService: PatientsService) {
    this.form = this.fb.group({
      id: [''],
      firstname: [''],
      lastname: [''],
      email: [''],
      password: [''],
      state: [''],
      phone: [''],
      birthdayDate: [''],
      gender: ['']
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
      .subscribe(rt=> console.log(rt),
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
