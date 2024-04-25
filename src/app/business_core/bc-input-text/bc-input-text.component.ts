import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bc-input-text',
  templateUrl: './bc-input-text.component.html',
  styleUrls: ['./bc-input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BcInputTextComponent implements OnInit {

  @Input() bcLabel: string = '';
  @Input() bcDisabled: boolean = false;
  @Input() bcPattern: string;

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

  getPattern(): RegExp {
    switch (this.bcPattern) {
      case 'cep':
        return /(\d{8}|\d{5}-\d{3})/;
      default:
        return /.*/;
    }
  }

}
