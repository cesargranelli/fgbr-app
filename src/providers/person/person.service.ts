import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Person } from './../../models/person.model';

@Injectable()
export class PersonService {

  private _person: Person;

  constructor(public http: HttpClient) {
    this._person = {
      id: 1,
      imageIcon: "assets/imgs/person-default.png",
      name: "Cesar Granelli",
      teamFan: "São Paulo"
    };
  }

  get(): Person {
    return this._person;
  }

}
