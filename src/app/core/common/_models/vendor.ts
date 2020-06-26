import { Common } from "./common";

export class Vendor extends Common {
  id: string;
  vendorcode: string;
  vendorName: string;
  phoneNumber: string;
  mobileNumber: string;
  address: string;
  country: string;
  city: string;
  email: string;
  addeddate: Date;

  constructor(
    id?,
    vendorcode?,
    vendorName?,
    phoneNumber?,
    mobileNumber?,
    address?,
    country?,
    city?,
    email?,
    addeddate?
  ) {
    super();
    this.id = id;
    this.vendorcode = vendorcode;
    this.vendorName = vendorName;
    this.phoneNumber = phoneNumber;
    this.mobileNumber = mobileNumber;
    this.address = address;
    this.country = country;
    this.city = city;
    this.email = email;
    this.addeddate = addeddate;
  }
}
