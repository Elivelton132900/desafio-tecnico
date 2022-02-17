import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Indicacoes } from './indicacoes';

@Injectable({
  providedIn: 'root'
})
export class IndicacoesService {

  baseURL = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/Indicacoes'

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  read(): Observable<Indicacoes[]>{
    return this.http.get<Indicacoes[]>(this.baseURL)
  }

  create(indicacao: Indicacoes): Observable<Indicacoes>{
    return this.http.post<Indicacoes>(this.baseURL, indicacao)
  }

  readId(id: string): Observable<Indicacoes>{
    const url = `${this.baseURL}/${id}`
    return this.http.get<Indicacoes>(url)
  }

  upgrade(indicacao: Indicacoes, id: string): Observable<Indicacoes> {
    const url = `${this.baseURL}/${id}`
    return this.http.put<Indicacoes>(url, indicacao)
  }

  delete(id: number | string): Observable<Indicacoes> {
    const url = `${this.baseURL}/${id}`
    console.log(url)
    return this.http.delete<Indicacoes>(url)
  }
}
