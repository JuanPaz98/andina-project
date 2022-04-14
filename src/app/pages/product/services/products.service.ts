import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prod } from '../interfaces/prod.interface'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  getProducts():Observable<Prod[]> { 
    return this.http.get<Prod[]>(this.apiURL)
  }

  postProducts(data: Prod[]) {
    return this.http.post<any>(this.apiURL, data)
    .pipe(map((res: any) =>{
      return res
    }))
  }

  updateProducts(data: any, id: number) {
    return this.http.put<any>(this.apiURL+id, data)
    .pipe(map((res: any) =>{
      return res
    }))
  }

  deleteProducts(id: number){
    return this.http.delete<any>(this.apiURL+id)
    .pipe(map((res: any) =>{
      return res
    }))
  }
}
