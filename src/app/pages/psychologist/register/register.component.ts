import { Component, OnInit } from '@angular/core';
import {PsychologistService} from "../../../services/psychologist.service";
import {map} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {Psychologist} from "../../../types/psychologist";
import {Router, RouterLink} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  disableSelect = new FormControl(false);
  form: FormGroup;
  userId!: number;
  constructor(private fb: FormBuilder, private psychologistsSvc: PsychologistService, private route: Router) {
    this.form = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      age: 0,
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9),
        Validators.pattern("^[0-9]*$")]],
      specialization: [''],
      formation: [''],
      about: [''],
      active: [''],
      img: [''],
      new: [''],
      genre: ['', Validators.required],
      sessionType: [''],
      cmp: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {

  }

  addPsychologist() {
    if(this.form.valid) {
      let psychologist: Psychologist = {
        id: this.form.value.id,
        name: this.form.value.name,
        age: this.form.value.age,
        email: this.form.value.email,
        phone: parseInt(this.form.value.phone),
        specialization: [''],
        formation: [''],
        about: this.form.value.about,
        active: true,
        new: true,
        genre: this.form.value.genre,
        sessionType: '',
        cmp: parseInt(this.form.value.cmp),
        password: this.form.value.password,
        img: "https://gentequebrilla.azurewebsites.net/wp-content/uploads/2019/04/12014-1024x604.jpg",
      }
      this.psychologistsSvc.login(this.form.value.email)
        .subscribe(res =>{
          if(res.length == 1) {
            alert('Email already registered')
            return;
          } else {
            this.psychologistsSvc.create(psychologist)
              .subscribe(res =>{
                  alert("Succesfully Registered");
                  this.form.reset();
                  this.route.navigate(['psychologistLogin']);
                },
                err=>{
                  alert('Something is wrong');
                })
          }
        })
    }
  }

  get nameField() {
    return this.form.get('name');
  }
  get emailField() {
    return this.form.get('email');
  }
  get phoneField() {
    return this.form.get('phone');
  }
  get genreField() {
    return this.form.get('genre');
  }
  get cmpField() {
    return this.form.get('cmp');
  }
  get passwordField() {
    return this.form.get('password');
  }
  get nameError() {
    if (this.nameField?.hasError('required')) {
      return 'This field is required ';
    }
    return 'You must enter a value ';
  }
  get emailError() {
    if (this.emailField?.hasError('required')) {
      return 'This field is required';
    }
    return this.emailField?.hasError('email') ? 'You must enter a valid email ': '';
  }
  get phoneError() {
    if (this.phoneField?.hasError('required')) {
      return 'This field is required '
    } else if(this.phoneField?.hasError('maxlength')) {
      return 'You must enter a valid phone';
    }
      else if (this.phoneField?.hasError('minlength')) {
        return 'You must enter a valid phone';
      }
    return this.phoneField?.hasError('pattern') ? 'You must enter a phone number': '';
    }
  get genreError() {
    if (this.genreField?.hasError('required')) {
      return 'This field is required ';
    }
    return 'You must enter a value ';
  }
  get cmpError() {
    if (this.cmpField?.hasError('required')) {
      return 'This field is required '
    } else if(this.cmpField?.hasError('pattern')) {
      return 'You must enter a valid cmp';
    }
    return this.cmpField?.hasError('maxlength') ? 'You must enter a valid cmp': '';
  }
  get passwordError() {
    if (this.passwordField?.hasError('required')) {
      return 'This field is required '
    } else if (this.passwordField?.hasError('maxlength')){
      return 'The password must contain at most 20 characters';
    }
    return this.passwordField?.hasError('minlength') ? 'The password must contain at least 8 characters': '';
  }
}
