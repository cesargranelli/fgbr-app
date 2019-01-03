import { Component } from '@angular/core';

import { PersonService } from '../../providers/person/person.service';

import { Person } from '../../models/person.model';

@Component({
  selector: 'person-component',
  templateUrl: 'person.component.html'
})
export class PersonComponent {

  person: Person;

  constructor(private _personService: PersonService) {
    this.person = this._personService.get();
  }

  ionViewDidLoad() {
    return this.person;
  }

}
