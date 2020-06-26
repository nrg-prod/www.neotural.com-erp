import { Common } from "./common";

export class Customer extends Common {
  id: string;
  custcode: string;
  customerName: string;
  phoneNumber: string;
  mobileNumber: string;
  address: string;
  country: string;
  city: string;
  email: string;
  lastedit: string;
  addeddate: string;

  constructor(
    id?,
    custcode?,
    customerName?,
    phoneNumber?,
    mobileNumber?,
    address?,
    country?,
    city?,
    email?,
    lastedit?,
    addeddate?
  ) {
    super();
    this.id = id;
    this.custcode = custcode;
    this.customerName = customerName;
    this.phoneNumber = phoneNumber;
    this.mobileNumber = mobileNumber;
    this.address = address;
    this.country = country;
    this.city = city;
    this.email = email;
    this.addeddate = addeddate;
  }
}
