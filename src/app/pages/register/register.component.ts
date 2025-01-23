import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [NgIf, FormGroup],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private empleadosService: EmployeeService) {
    this.registroForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      paternalSurname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      maternalSurname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      curp: ['', [Validators.required, Validators.pattern('^[A-Z]{4}[0-9]{6}[A-Z]{6}[0-9]{2}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      sex: ['', Validators.required],
    });
  }

  registrarEmpleado() {
    if (this.registroForm.valid) {
      this.empleadosService.addEmployee(this.registroForm.value);
      this.registroForm.reset();
    }
  }
}
