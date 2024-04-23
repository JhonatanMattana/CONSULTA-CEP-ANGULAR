import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Cep } from 'src/app/modelo/cep';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  private readonly URL: string = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  public buscarCep(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`${this.URL}/${cep}/json`);
  }
}
