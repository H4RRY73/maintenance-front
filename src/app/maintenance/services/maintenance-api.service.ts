import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset';
import { CreateMaintenanceOrder } from '../models/maintenance-order';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceApiService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  // Assets
  getAllAssets(): Observable<Asset[]> {
    return this.http.get<Asset[]>(`${this.baseUrl}/assets`);
  }

  createAsset(asset: any): Observable<Asset> {
    return this.http.post<Asset>(`${this.baseUrl}/assets`, asset);
  }

  // Orders
  createOrder(order: CreateMaintenanceOrder): Observable<any> {
    return this.http.post(`${this.baseUrl}/maintenance-orders`, order);
  }

  completeOrder(orderId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/maintenance-orders/${orderId}/complete`, {});
  }

  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/maintenance-orders/all`);
  }
}
