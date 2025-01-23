import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './pages/employee/employee.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test_frontend';
}
