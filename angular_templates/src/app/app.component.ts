import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular_templates';

  tmate1 : string = ""
  tmate2 : string = ""
  tmate3 : string = ""

  hasSecondTeamMate(): Boolean {
    return this.tmate2.trim().length > 0;

  }

  aFormHasbeenSubmitted(someForm : NgForm) {
    console.log(`My Form: ${someForm}`);

    console.log(someForm.controls['tmate1'].value);
  }
  thisForm!: FormGroup;
  constructor(formbuilder : FormBuilder) {

  }

}
