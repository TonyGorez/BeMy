import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-numerical-password-input',
  templateUrl: './numerical-password-input.component.html',
  styleUrls: ['./numerical-password-input.component.css']
})
export class NumericalPasswordInputComponent implements OnInit {

  @Input()
  userPassword: string;

  currentNumberStr: string = ''; 

  ngOnInit() {
  }

  onPassword(password: string) {
    this.currentNumberStr = password;
    if (this.currentNumberStr == this.userPassword) {
      alert("C'est le bon mot de passe !");
      this.currentNumberStr = ''; 
    } else if (this.currentNumberStr.length == 9) {
      alert("Ce n'est pas le bon mot de passe !");
      this.currentNumberStr = ''; 
    }
  }

}
