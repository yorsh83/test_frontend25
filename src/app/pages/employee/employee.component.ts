import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';
import { NgFor } from '@angular/common';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-employee',
  imports: [NgFor],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data.filter(data => data.status === true);
      console.log(data);
    });
  }

  delete(idPatient: number){
    this.employeeService.delete(idPatient)
    .pipe(switchMap(()=> this.employeeService.findAll()))
    .subscribe(data => {
    this.employees = data;
    });
  }
}
