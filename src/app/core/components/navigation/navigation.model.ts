export interface RecentUpdate {
  date: string;
  update: string;
}

export interface Stock {
  item: string;
  quantity: string;
}

export interface Sale {
  invoicenumber: string;
  client: string;
  date: string;
  status: string;
}
