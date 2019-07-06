import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Partido } from '../models/partido.model';
import { environment } from '../../environments/environment.prod';
import { PartidoAdapter, PartidoApi } from './partido.adapter';
import { map, tap } from 'rxjs/operators';
import { StateService } from './state.service';


@Injectable({
  providedIn: 'root'
})
export class PartidoHttpService {
  private url = environment.baseUrl + 'consejerias/partidos';
  constructor(
    private HttpClient: HttpClient,
    private partidoAdapter: PartidoAdapter,
    private stateService: StateService
  ) {
    //this.getAll();
   }

  getByProvincia(provinciaId: number) : Observable<PartidoApi[]>  {
    const url = `${this.url}/${provinciaId}/porprovincia`; 
    return this.HttpClient.get<PartidoApi[]>(url)
    .pipe(
      map(partidosApi => partidosApi.map(partidoApi => this.partidoAdapter.adapt(partidoApi)))
    )
  }

  getAll() {
    return this.HttpClient.get<PartidoApi[]>(this.url)
    .pipe(
      map(paisesApi => paisesApi.map(paisApi => this.partidoAdapter.adapt(paisApi)))
    )
    .subscribe(paises => this.stateService.setPartidos(paises));
  }
  
  filterByNombreApellido(nombre: string) : Observable<Partido[]>{
      return this.HttpClient.get<PartidoApi[]>(this.url)
      .pipe(
        map(paisesApi => paisesApi.map(paisApi => this.partidoAdapter.adapt(paisApi))),
        map(paises => paises.filter(a => a.nombre.toLowerCase().includes(nombre.toLowerCase())))
      )
  }
}
