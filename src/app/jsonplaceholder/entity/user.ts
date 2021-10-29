// interface for User
export interface User {
  name : string;
  username :string;
  website: string;
  phone: string;
  email : string;
  id: number,
  address : Address,
  company: Company,
}

interface Address {
  street : string;
  suite: string;
  city: string;
  zipcode: string;
  geo : {
    lat : string;
    lng: string;
  }
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
