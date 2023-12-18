import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investiment } from '../../models/investiment';

@Injectable({
  providedIn: 'root'
})
export class InvestimentsService {
  private url: string = 'http://localhost:3000/investiments'

  constructor(private httpClient: HttpClient) { }

  public investiments() : Observable<Array<Investiment>>{
    return this.httpClient.get<Array<Investiment>>(this.url)
  }
}
