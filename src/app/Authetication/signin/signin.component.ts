import { Component, OnInit } from '@angular/core';
import { FormControl,AbstractControl,ValidatorFn,Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthgardService } from 'src/app/Service/authgard.service';
import { SigninService } from 'src/app/Service/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myReactiveForm: FormGroup;
  username:string='';
password:string='';
data:any
  constructor(private router:Router,private signin:SigninService) {
    if (this.signin.loggedIn){
      this.router.navigate(['signup']);
    }


    this.myReactiveForm = new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'password':new FormControl(null,[Validators.required,Validators.minLength(6)])
      })
   }
   login(){
     console.log("login",this.myReactiveForm.valid)
     if(this.myReactiveForm.valid){
        // this.signin.loginUser(this.myReactiveForm.value).subscribe(data=>{
        //   console.log("hi")
        //   console.log(data);
       
    }
  }
   onsubmit(){
    console.log(this.myReactiveForm.value);
    this.signin.loginUser(this.myReactiveForm.value).subscribe((data:any)=>{
      console.log(data.status)
      if (data.status==200) {
        localStorage.setItem("currentUser","admin")
        //some more code
        this.router.navigate(['signup']) 
      } 
    })
}
  ngOnInit(): void {

  }
}
