import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaintenanceApiService } from '../../services/maintenance-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maintenance-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './maintenance-form.html',
  styleUrl: './maintenance-form.css',
})
export class MaintenanceForm {
  orderForm: FormGroup;
  assetId: number;

  constructor(
    private fb: FormBuilder,
    private api: MaintenanceApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.assetId = Number(this.route.snapshot.paramMap.get('id'));

    this.orderForm = this.fb.group({
      description: ['', Validators.required],
      type: ['PREVENTIVE', Validators.required],
      scheduledDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const formValue = this.orderForm.value;

      const payload = {
        assetId: this.assetId,
        description: formValue.description,
        type: formValue.type,
        scheduledDate: new Date(formValue.scheduledDate).toISOString()
      };

      this.api.createOrder(payload as any).subscribe({
        next: () => {
          alert('Orden creada con éxito. El activo pasará a mantenimiento.');
          this.router.navigate(['/']); // Volver a la lista
        },
        error: (err) => alert('Error al crear orden')
      });
    }
  }
  // En maintenance-form.ts
  cancel() {
    this.router.navigate(['/']); // Regresa a la lista
  }
}
