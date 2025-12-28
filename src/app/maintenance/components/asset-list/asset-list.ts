import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MaintenanceApiService } from '../../services/maintenance-api.service';
import { Asset } from '../../models/asset';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {Order} from '../../models/order';


@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asset-list.html',
  styleUrls: ['./asset-list.css']
})


export class AssetList implements OnInit {
  assets: Asset[] = [];
  orders: Order[] = [];


  constructor(private api: MaintenanceApiService, private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // 1. Cargar Activos
    this.api.getAllAssets().subscribe(data => {
      this.assets = data;
      this.cd.detectChanges();
    });

    // 2. Cargar Órdenes (NUEVO)
    this.api.getAllOrders().subscribe(data => {
      // Filtramos solo las que no están completadas para que la lista no sea gigante
      this.orders = data.filter((o: any) => o.status !== 'COMPLETED');
      this.cd.detectChanges();
    });
  }

  goToNewAsset() {
    this.router.navigate(['/assets/new']);
  }

  goToMaintenance(assetId: number) {
    this.router.navigate(['/schedule', assetId]);
  }

  finishMaintenance(orderId: number) {
    if(confirm('¿Confirmar que el mantenimiento ha terminado?')) {
      this.api.completeOrder(orderId).subscribe(() => {
        alert('Orden completada. El activo ahora está OPERATIVO.');
        this.loadData(); // Recargamos todo para ver el cambio de color
      });
    }
  }
}
