import { ResolvedEmployeeList } from './resolved-employeelist.model';
import { EmployeeService } from './employee.service';
import { Employee } from './../models/employee.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, catchError, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[] | string> {
  constructor(
    private _employeeService: EmployeeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string>{
      return this._employeeService.getEmployees(Number(localStorage.getItem("id")))
              .pipe(
                catchError((err:string) => of(err )
                ));
  }
}
