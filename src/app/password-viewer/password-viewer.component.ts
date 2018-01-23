import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-viewer',
  templateUrl: './password-viewer.component.html',
  styleUrls: ['./password-viewer.component.css']
})
export class PasswordViewerComponent implements OnInit {

  @Input()
  currentNumber: number;

  ngOnInit() {
  }

}
