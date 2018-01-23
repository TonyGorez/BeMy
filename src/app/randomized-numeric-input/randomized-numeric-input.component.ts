import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-randomized-numeric-input',
  templateUrl: './randomized-numeric-input.component.html',
  styleUrls: ['./randomized-numeric-input.component.css']
})
export class RandomizedNumericInputComponent implements OnInit {
  private readonly digits = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', ' ' ];

  @Output()
  onCurrentNumberChanged = new EventEmitter<number>();

  public currentNumber: number;
  public currentNumberStr: string = '';
  public digitRandom = []

  public randomize(): string[] {
    let shuffledArray = []
    let arr = this.digits.slice();

    do {
      let rand = Math.floor(Math.random() * arr.length);
      shuffledArray.push(arr[rand]);
      arr.splice(rand, 1);
    } while (arr.length);
    return shuffledArray;
  }

  constructor() { }

  ngOnInit() {
    this.digitRandom = this.randomize();
  }

  onClick(number: string) {
    // erreur : si string vide ou plus de 9 digits
    this.currentNumberStr += this.digitRandom[number];
    this.currentNumber = parseInt(this.currentNumberStr);
    this.onCurrentNumberChanged.emit(this.currentNumber);
    console.log(this.currentNumber)
  }
}

//
// Dans le composant parent, pour recuperer la valleur de l'utilasteur recupere par ce composant:
// <app-viewer [currentNumber]="334355"></app-viewer>
// <random (onCurrentNumberChanged)="onPassword($event)"></random>()
// <app-numerical-password-input (onCurrentNumberChanged)="onPassword($event)"></app-numerical-password-input>

// onPassword(password: number) {
//   console.log(password)
//   this.currentNumber = password;
// // }
// <app-password-viewer [currentNumber]="currentNumber" ></app-password-viewer>
// currentNumber: number;
// 

//
// onNumber(number: string[]) {
//   // passWord:
// }
