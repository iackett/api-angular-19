import { Routes } from '@angular/router';
import { PracticaComponent } from './practica/practica.component';

export const routes: Routes = [
    {path: 'practica' , component: PracticaComponent},
];
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ //decorador - permite utilizar el servicio en cualquier componente
  providedIn: 'root'
})
export class DataService {

  private endpoint = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  public getPosts() : Observable<any[]> {
    return this.http.get<any[]>(this.endpoint); //select
  }

}// cierra la clase