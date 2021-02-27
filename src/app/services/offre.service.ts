import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Offre } from '../beans/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private baseURL = "http://localhost:8080/api/v1/Offres";

  constructor(private httpClient: HttpClient) { }
  
  getOffresList(): Observable<Offre[]>{
    return this.httpClient.get<Offre[]>(`${this.baseURL}`);
  }

  createOffre(offre: Offre): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, offre);
  }

  getOffreById(id: number): Observable<Offre>{
    return this.httpClient.get<Offre>(`${this.baseURL}/${id}`);
  }

  updateOffre(id: number, offre: Offre): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, offre);
  }

  deleteOffre(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
