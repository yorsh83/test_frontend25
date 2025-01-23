import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private empleados: Employee[] = [];

  private url: string = `${environment.HOST}/employees`;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Employee[]>(this.url);
  }

  findById(id: number){
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  save(employee: Employee){
    return this.http.post(this.url, employee);
  }

  update(id:number, employee: Employee){
    return this.http.put(`${this.url}/${id}`, employee);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
