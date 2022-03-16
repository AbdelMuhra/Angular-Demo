import { Component } from '@angular/core';
import { Person } from './models/person.model';
import { NameGenerator } from './models/services/namegenerator.service';
import { RandomNameGenerator } from './models/services/randomnamegenerator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nameService: NameGenerator;
  persons : Person[];

  constructor () {
    this.nameService = new RandomNameGenerator();
    this.persons = [];

    for (let idx = 0; idx < 10; ++idx) {
      this.persons.push(
        {
          name: this.nameService.generateName(),
          surname: this.nameService.generateSurname(),
          phonenumber: this.nameService.generatePhoneNumber(),

        }
      );
    }
  }
}
