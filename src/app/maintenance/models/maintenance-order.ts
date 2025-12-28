export interface CreateMaintenanceOrder {
  assetId: number;
  description: string;
  type: 'PREVENTIVE' | 'CORRECTIVE';
  scheduledDate: string;
}
