import { Component, inject, signal } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { ProductsService } from '../../services/products.service';
import { PositionsService } from '../../services/positions.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-position',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './create-position.component.html',
})
export class CreatePosition {
  public companiesService = inject(CompaniesService);
  public productsService = inject(ProductsService);
  public positionService = inject(PositionsService);

  today = signal(new Date());
  positionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.positionForm = this.formBuilder.group({
      idEmpresa: ['', Validators.required],
      idProducto: ['', Validators.required],
      fechaEntregaInicio: ['', Validators.required],
      moneda: ['USD', Validators.required],
      precio: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.positionForm.valid) {
      const positionData = this.positionForm.value;
      this.positionService.createPosition(positionData);
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  }
}
