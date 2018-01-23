import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.css']
})
export class NumericalPasswordInputComponent implements OnInit {

  onPassword(password: number) {
    this.currentNumber = password;
    console.log(this.currentNumber)
  }
  currentNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
