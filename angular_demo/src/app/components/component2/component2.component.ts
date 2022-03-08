import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  somePerson : Person;
  
  constructor() { 
    this.somePerson ={
      name: "Abdel",
      surname: "Muhra",
      socialsecurity: "123456789"
    }
  }

  ngOnInit(): void {
  }

}
