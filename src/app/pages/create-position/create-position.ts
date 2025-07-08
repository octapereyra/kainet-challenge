import { Component, inject } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';
import { ProductsService } from '../../services/products.service';
import { PositionsService } from '../../services/positions.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-position',
  imports: [ReactiveFormsModule],
  templateUrl: './create-position.html',
  styleUrl: './create-position.css',
})
export class CreatePosition {
  public companiesService = inject(CompaniesService);
  public productsService = inject(ProductsService);
  public positionService = inject(PositionsService);
  public routerService = inject(Router);

  positionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.positionForm = this.formBuilder.group({
      idEmpresa: ['', Validators.required],
      idProducto: ['', Validators.required],
      fechaEntregaInicio: ['', Validators.required],
      moneda: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.positionForm.valid) {
      const positionData = this.positionForm.value;
      console.log('Position Data:', positionData);
      this.positionService.createPosition(positionData);
      this.routerService.navigate(['listPositions']);
    } else {
      console.log('Form is invalid');
    }
  }
}
