export interface Asset {
  id: number;
  name: string;
  serialNumber: string;
  model: string;
  status: 'OPERATIONAL' | 'UNDER_MAINTENANCE' | 'OUT_OF_SERVICE';
}
