export interface ICompany {
  companyCode: number | "";
  companyName: string;
  country: string;
}

export interface IPerson {
  name: string;
  surname: string;
  jobTitle: string;
  email: string;
  countryCode: string | number;
  phoneNumber: number | string;
}
