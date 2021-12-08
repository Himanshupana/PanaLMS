import { Component, OnInit } from '@angular/core';
import { FormControl,AbstractControl,ValidatorFn,Validator, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myReactiveForm: FormGroup;
  constructor() { 
    this.myReactiveForm = new FormGroup({
      'fullName':new FormControl(null,[Validators.required]),
      'email':new FormControl(null,[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
      'Mobile':new FormControl(null,[Validators.required,Validators.pattern("^[0-9]$")])
      })
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
  ngOnInit(): void {
  }
}
