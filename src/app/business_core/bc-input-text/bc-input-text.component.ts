import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bc-input-text',
  templateUrl: './bc-input-text.component.html',
  styleUrls: ['./bc-input-text.component.scss']
})
export class BcInputTextComponent implements OnInit {

  @Input() bcLabel: string = '';
  @Input() bcDisabled: boolean = false;

  private _bcModel: string = '';
  @Output() bcModelChange: EventEmitter<string> = new EventEmitter();
  @Input() set bcModel(val: string) {
    this._bcModel = val;
    this.bcModelChange.emit(this._bcModel);
  }

  get bcModel() {
    return this._bcModel;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
