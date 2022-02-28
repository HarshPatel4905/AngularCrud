import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;
  constructor(private _formBuilder: FormBuilder,
              private _http:HttpClient,
              private _router:Router) { }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      name:[''],
      email:[''],
      phoneNumber:[''],
      password:[''],
    })
  }

  signUp(){
    this._http.post<any>("https://angular-json-server.herokuapp.com/signup",this.signupForm.value ).subscribe(
      res=>{alert("Registration Successfull");
      this.signupForm.reset();
      this._router.navigate(['login'])
    }, err=>{
      alert("Registration Error");
    }
    )
  }

}
