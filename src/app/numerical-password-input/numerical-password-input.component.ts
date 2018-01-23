import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.css']
})
export class NumericalPasswordInputComponent implements OnInit {

  @Input()
  userPassword: number;

  currentNumber: number;

  ngOnInit() {
  }

  onPassword(password: number) {
    this.currentNumber = password;
    if (this.currentNumber === this.userPassword) {
      alert("C'est le bon mot de passe !");
    }
  }

}
