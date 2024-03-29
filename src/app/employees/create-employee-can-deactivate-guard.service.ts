import { Injectable } from '@angular/core';
import { CreateEmployeeComponent } from './create-employee.component';
import { CanDeactivate,  } from "@angular/router";

@Injectable()
export class CreatEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent>{
  canDeactivate(component: CreateEmployeeComponent): boolean {
      if(component.createEmployeeForm?.dirty){
        return confirm('Are you sure you want to discard your changes?');
      }

      return true;
  }
}
