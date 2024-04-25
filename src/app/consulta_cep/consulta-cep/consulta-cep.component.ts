import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ConsultaCepService } from '../service/consulta-cep.service';
import { Cep } from 'src/app/modelo/cep';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.scss']
})
export class ConsultaCepComponent implements OnInit {

  isLocalizouCep: boolean = false;

  public cep: Cep = new Cep();

  constructor(
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  public consultarCep() {
    const _cep: string = this.cep.cep.toString();
    if (_cep) {
      this.cepService.buscarCep(_cep).subscribe({
        next: (data: Cep) => {
          this.cep = data;
          this.isLocalizouCep = false
        },
        error: (error: any) => {
          this.isLocalizouCep = true
          this.cep = new Cep();
        }
      })
    }
  }
}
