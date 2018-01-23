import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
    let arrayTemp = this.digits.slice();

    do {
      let rand = Math.floor(Math.random() * arrayTemp.length);
      shuffledArray.push(arrayTemp[rand]);
      arrayTemp.splice(rand, 1);
    } while (arrayTemp.length);
    return shuffledArray;
  }

  ngOnInit() {
    this.digitRandom = this.randomize();
  }

  onClick(number: string) {
    if (this.digitRandom[number] === ' ') return;
    this.currentNumberStr += this.digitRandom[number];
    this.currentNumber = parseInt(this.currentNumberStr);
    this.onCurrentNumberChanged.emit(this.currentNumber);
  }
}
