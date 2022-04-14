import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prod } from '../interfaces/prod.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getProducts():Observable<Prod[]> { 
    return this.http.get<Prod[]>(this.apiURL)
  }
}
