import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaintenanceApiService } from '../../services/maintenance-api.service';

@Component({
  selector: 'app-asset-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './asset-form.html',
  styleUrl: './asset-form.css',
})
export class AssetForm {
  assetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: MaintenanceApiService,
    private router: Router
  ) {
    // Definimos los campos que coinciden con tu Backend
    this.assetForm = this.fb.group({
      name: ['', Validators.required],
      model: ['', Validators.required],
      serialNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.assetForm.valid) {
      console.log('Enviando activo:', this.assetForm.value);

      this.api.createAsset(this.assetForm.value).subscribe({
        next: (res) => {
          alert('¡Activo creado con éxito!');
          // Redirigir a la lista para verlo
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          alert('Error al crear el activo. Revisa que el número de serie no esté repetido.');
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
