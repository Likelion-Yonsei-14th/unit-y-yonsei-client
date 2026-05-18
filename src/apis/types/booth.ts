export type BoothResponse = {
  id: number;
  adminId: number;
  name: string;
  organization: string;
  description: string;
  date: number;
  openTime: string;
  closeTime: string;
  sector: string;
  location: number;
  status: string;
  isFood: boolean;
  instagram: string;
  isReservable: boolean;
  account: string;
  locationId: number;
  profileComplete: boolean;
  waitingCount: number;
};

export type BoothListResponse = {
  success: boolean;
  data: BoothResponse[];
  error: {
    code: string;
    message: string;
  } | null;
};