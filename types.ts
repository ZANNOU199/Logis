
export enum ResourceType {
  DRIVER = 'DRIVER',
  VEHICLE = 'VEHICLE'
}

export interface Driver {
  id: string;
  name: string;
  badgeId: string;
  licenseType: string;
  licenseValidity: string;
  status: 'active' | 'inactive' | 'on_duty';
  location?: string;
}

export interface Vehicle {
  id: string;
  model: string;
  plateNumber: string;
  type: 'heavy' | 'light' | 'utility';
  maxLoad: string;
  volume: string;
  fuelType: string;
  location: string;
  status: 'available' | 'maintenance' | 'in_transit';
  insuranceValid: boolean;
  techControlValid: 'valid' | 'warning' | 'expired';
}

export interface Shipment {
  id: string;
  externalId: string;
  destination: string;
  weight: number;
  vehicleType: string;
  status: 'valid' | 'error' | 'warning';
  notes: string;
  urgent?: boolean;
}
