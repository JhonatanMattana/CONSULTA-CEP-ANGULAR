import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bcFormataCep'
})
export class BcFormataCepPipe implements PipeTransform {
  @Input() ativarPipe: boolean = false;

  transform(cep: string, ): string {
    if (this.ativarPipe && cep.length > 5) {
      return cep = cep.substring(0, 5) + '-' + cep.substring(5);
    }

    return cep;
  }

}
