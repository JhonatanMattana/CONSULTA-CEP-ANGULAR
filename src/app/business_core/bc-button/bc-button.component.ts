import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bc-button',
  templateUrl: './bc-button.component.html',
  styleUrls: ['./bc-button.component.scss']
})
export class BcButtonComponent implements OnInit {

  @Input() bcLabel: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
