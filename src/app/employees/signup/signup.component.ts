import { LoggedUser } from 'src/app/models/employee.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, AbstractControl, FormsModule ,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  employees: LoggedUser = new LoggedUser();
  panelTitle?: string;
  signupForm!:FormGroup;
  constructor(private _formBuilder: FormBuilder,
              private _http:HttpClient,
              private _router:Router) {}

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      name:['',{validators:[Validators.required], asyncValidators:[]}],
      email:new FormControl('',[Validators.required, Validators.email],),
      phoneNumber:['',[Validators.required,Validators.maxLength(10)]],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    },{
      validator:[this.ConfirmPasswordValidator("password", "confirmPassword")]
    });
  }

  public ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName]
    if (
    matchingControl.errors &&
    !matchingControl.errors['confirmPasswordValidator']
    ) {
    return;
    }
    if (control.value !== matchingControl.value) {
    matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
    matchingControl.setErrors(null);
    }
    };
    }



  signUp(){
    if(this.signupForm.valid){
    this._http.post<any>("https://angular-json-server.herokuapp.com/signup",this.signupForm.value ).subscribe(
      res=>{alert("Registration Successfull");
      this.signupForm.reset();
      this._router.navigate(['login'])
    }, err=>{
      alert("Registration Error");
    }
    )}else{
      alert("Enter Valid Fields")
    }
  }

  public checkUserError = (controlName: string, errorName: string) => {
    return this.signupForm.controls[controlName].hasError(errorName);
    }

}
