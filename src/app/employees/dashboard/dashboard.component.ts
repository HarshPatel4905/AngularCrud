import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  LoggedUser } from 'src/app/models/employee.model';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  phoneNumber?:SignupComponent
  selectedEmployeeId?: number;
  loginForm: any;
  httpClient: any;
  people:LoggedUser = new LoggedUser();

  detailurl = 'https://angular-json-server.herokuapp.com/signup/';

  constructor(private _http: HttpClient,
              private _router:Router) { }

  ngOnInit(): void {
    this.viewEmployee();

}

  viewEmployee(): LoggedUser{

    var id = localStorage.getItem('id');
    this._http.get(this.detailurl+id).subscribe((e)=>{
      this.people=e;
    });
    return this.people;
  }

}


