import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");

// Disable auto cancellation
pb.autoCancellation(false);

export interface Guest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
  date_of_birth?: string;
  created: string;
  updated: string;
}


export interface CreateGuestData {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  address?: string;
  date_of_birth?: string;
  user?: string; // Add this line
}



export interface UpdateGuestData extends Partial<CreateGuestData> {}
