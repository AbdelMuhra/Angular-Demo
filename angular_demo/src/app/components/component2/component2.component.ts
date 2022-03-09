import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  somePersons : Person[];
  
  constructor() { 
    this.somePersons = [];
    for (var index = 0; index < 10; index++) {
      this.somePersons.push(
        {
          name: this.getRandomSt(),
          surname: this.getRandomSt(),
          socialsecurity: this.getRandomSt()
        });
    }
  }

  ngOnInit(): void {
  }

  getRandomSt() : string {
    var res = "";
    var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var nl = letters.length;
    for (var index = 0; index < 5; index++){
      var charpos = Math.floor(Math.random() * nl);
      res += letters.charAt(charpos);
    }
    return res;
  }
}
