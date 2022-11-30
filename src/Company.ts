import { faker } from '@faker-js/faker';
import { Markable } from './CustomMap';

export class Company implements Markable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  markerPopupContent(): string {
    return `Company : ${this.companyName}`;
  }
}
