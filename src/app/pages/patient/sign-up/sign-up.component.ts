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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      img: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  register() {

    const patient: Patients ={
      id: this.form.value.id,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      password: this.form.value.password,
      phone: this.form.value.phone,
      date: this.form.value.date,
      gender: this.form.value.gender,
      img: this.form.value.img
    }

    this._patientsService.create(patient)
      .subscribe(res =>{
        this.form.reset();
        this.route.navigate(['/login'])
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
