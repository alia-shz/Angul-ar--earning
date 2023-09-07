import { Component } from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})


export class FirstComponentComponent {

  fname: string = '';
  lname: string = '';
  email: string = '';
  gender: string = '';
  language: string = '';

}
