import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent implements OnInit {

  private resume = [
    {skill: 'Love', level: 'Good'},
    {skill: 'Coding', level: 'Bad'},
    {skill: 'Music', level: 'Good'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
