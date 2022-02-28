import { LoggedUser } from 'src/app/models/employee.model';
import { Department } from './../models/department.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm?: NgForm;
  previewPhoto = false;
  panelTitle?: string;
  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute) { }
  employees: Employee = new Employee();
  loggeduser?:LoggedUser;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ]
  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const id = Number(parameterMap.get('id'));
      this.getEmployee(id);
    });
    this.employees.loggedUserId = Number(localStorage.getItem('id'));
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employees = {
        email: '',
        department: "",
      };
      this.panelTitle = 'Create Employee';
      this.createEmployeeForm?.reset();
    }
    else {
      this.panelTitle = 'Edit Employee';
      this._employeeService.getEmployee(id).subscribe(
        (employee) => this.employees = employee,
        (err: any) => console.log(err)
      );
    }
  }

  saveEmployee(): void {
    if (this.employees?.id == null) {
      this._employeeService.addEmployee(this.employees!).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm?.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    }else{
      this._employeeService.updateEmployee(this.employees!).subscribe(
        () => {
          this.createEmployeeForm?.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    }
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto
  }
}
