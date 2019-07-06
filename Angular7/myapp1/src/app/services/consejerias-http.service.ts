import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Consejeria, EntrevistaPostAborto, EstudioComplementario, GestaActual, Antecedente } from '../models/consejeria.model';
import { Usuaria } from '../models/usuaria.model';
import { environment } from '../../environments/environment.prod';
import { ConsejeriasAdapter, ConsejeriaApi } from './conejerias.adapter';
import { EntrevistaAdapter, EntrevistaApi } from './entrevista.adapter';
import { GestaActualAdapter, GestaActualApi } from './gestaactual.adapter';
import { EstudioComplementarioAdapter, EstudioApi } from './estudio.adapter';
import { AntecedentesAdapter, AntecedenteApi } from './antecedente.adapter';
import { UsuariasAdapter, UsuariaApi } from './usuarias.adapter';
import { map, tap } from 'rxjs/operators';
import { StateService } from './state.service';


@Injectable({
  providedIn: 'root'
})
export class ConsejeriasHttpService {
  private url = environment.baseUrl + 'consejerias/';
  private urlConsejeria = this.url + 'consejerias';
  private urlEntrevista = this.url + 'entrevistaspostabortos';
  private urlEstudio = this.url + 'estudioscomplementarios';
  private urlGestas = this.url + 'gestasactuales';
  private urlAntecedente = this.url + 'antecedentes';
  private urlUsuaria = this.url + 'usuarias';
  constructor(
    private HttpClient: HttpClient,
    private stateService: StateService,
    private consejeriasAdapter: ConsejeriasAdapter,
    private entrevistaAdapter: EntrevistaAdapter,
    private gestaActualAdapter: GestaActualAdapter,
    private estudioComplementarioAdapter: EstudioComplementarioAdapter,
    private antecedentesAdapter: AntecedentesAdapter,
    private usuariasAdapter: UsuariasAdapter,

  ) {
    this.getAll();
   }

  getAll() {
    return this.HttpClient.get<ConsejeriaApi[]>(this.urlConsejeria)
    .pipe(
      map(consejeriasApi => consejeriasApi.map(consejeriaApi => this.consejeriasAdapter.adapt(consejeriaApi)))
    )
    .subscribe(consejerias => this.stateService.setConsejeria(consejerias));
  }
  
  getById(id: number) : Observable<Consejeria> {
    const url = `${this.urlConsejeria}/${id}`; /*interpolacion */
    return this.HttpClient.get<ConsejeriaApi>(url)
    .pipe(
      map(consejeriaApi => this.consejeriasAdapter.adapt(consejeriaApi))
    )
  }

  getEntrevistaByConsejeriaId(idConsejeria: number) : Observable<EntrevistaPostAborto> {
    const url = `${this.url}${idConsejeria}/entrevistaspostabortos`; /*interpolacion */
      return this.HttpClient.get<EntrevistaApi>(url)
      .pipe(
        map(entrevistaApi => this.entrevistaAdapter.adapt(entrevistaApi))
      )
  }

  getEstudioByConsejeriaId(idConsejeria: number) : Observable<EstudioComplementario> {
    
    const url = `${this.url}${idConsejeria}/estudioscomplementarios`; /*interpolacion */
    return this.HttpClient.get<EstudioApi>(url)
    .pipe(
      map(estudioApi => this.estudioComplementarioAdapter.adapt(estudioApi))
    )
}

  getGestasByConsejeriaId(idConsejeria: number) : Observable<GestaActual> {
    
    const url = `${this.url}${idConsejeria}/gestasactuales`; /*interpolacion */
    return this.HttpClient.get<GestaActualApi>(url)
    .pipe(
      map(gestaActualApi => this.gestaActualAdapter.adapt(gestaActualApi))
    )
  }

  getAntecedenteByConsejeriaId(idConsejeria: number) : Observable<Antecedente> {
    const url = `${this.url}${idConsejeria}/antecedentes`; /*interpolacion */
    return this.HttpClient.get<AntecedenteApi>(url)
    .pipe(
      map(antecedenteApi => this.antecedentesAdapter.adapt(antecedenteApi))
    )
  }

  getUsuariaByConsejeriaId(idConsejeria: number) : Observable<Usuaria> {
    
    const url = `${this.urlUsuaria}/${idConsejeria}`; /*interpolacion */
    return this.HttpClient.get<UsuariaApi>(url)
    .pipe(
      map(usuariaApi => this.usuariasAdapter.adapt(usuariaApi))
    )
  }

  getUsuariaById(id: number) : Observable<Usuaria> {
    const url = `${this.urlUsuaria}/${id}`; /*interpolacion */
    return this.HttpClient.get<UsuariaApi>(url)
    .pipe(
      map(usuariaApi => this.usuariasAdapter.adapt(usuariaApi))
    )
  }

  parseJsonDate(jsonDateString): Date {
    return new Date(parseInt(jsonDateString.replace('/Date(', '')));
}
  
  filterByNombreApellido(nombre: string) : Observable<Consejeria[]>{
      /*esto devuelve un nuevo array, por eso el input del list component se repinta. Si fuera la misma istancia, no se refresca */
      //return this.consejerias.filter(a =>(a.nombre + ' ' + a.apellido).toLowerCase().includes(nombre.toLowerCase()) )
      // return this.getAll()
      // .pipe(
      //   map(consejerias => consejerias.filter(a =>(a.nombre + ' ' + a.apellido).toLowerCase().includes(nombre.toLowerCase())))
      // )
      //cambio luego del state service.
      return this.HttpClient.get<ConsejeriaApi[]>(this.urlConsejeria)
      .pipe(
        map(consejeriasApi => consejeriasApi.map(consejeriaApi => this.consejeriasAdapter.adapt(consejeriaApi))),
        map(consejerias => consejerias.filter(a =>(a.numero + ' ' + a.id).toLowerCase().includes(nombre.toLowerCase())))
      )

      //el primer map tiene como salida un array de objetos consejerias. se los pasa al otro map.
      
  }
  
    updateAntecedente(antecedente: Antecedente): Observable<void>{
        const url = `${this.urlAntecedente}/${antecedente.id}`; /*interpolacion */
        return this.HttpClient.put<void>(url, antecedente)
        .pipe(tap(() =>{return this.getAll()}));
    }

    insertAntecedente(antecedente: Antecedente): Observable<void>{
      return this.HttpClient.post<void>(this.urlAntecedente, antecedente);
    }

    updateEntrevista(entrevistaPostAborto: EntrevistaPostAborto): Observable<void>{
      const url = `${this.urlEntrevista}/${entrevistaPostAborto.id}`; /*interpolacion */
      return this.HttpClient.put<void>(url, entrevistaPostAborto)
      .pipe(tap(() =>{return this.getAll()}));
  }

  insertEntrevista(entrevistaPostAborto: EntrevistaPostAborto): Observable<void>{
    return this.HttpClient.post<void>(this.urlEntrevista, entrevistaPostAborto);
  }

  updateGestaActual(gestaActual: GestaActual): Observable<void>{
    const url = `${this.urlGestas}/${gestaActual.id}`; /*interpolacion */
    return this.HttpClient.put<void>(url, gestaActual)
    .pipe(tap(() =>{return this.getAll()}));
  }

  insertGestaActual(gestaActual: GestaActual): Observable<void>{
  return this.HttpClient.post<void>(this.urlGestas, gestaActual);
  }

  updateEstudio(estudioComplementario: EstudioComplementario): Observable<void>{
    const url = `${this.urlEstudio}/${estudioComplementario.id}`; /*interpolacion */
    return this.HttpClient.put<void>(url, estudioComplementario)
    .pipe(tap(() =>{return this.getAll()}));
  }

  insertEstudio(estudioComplementario: EstudioComplementario): Observable<void>{
  return this.HttpClient.post<void>(this.urlEstudio, estudioComplementario);
  }

  updateUsuaria(usuaria: Usuaria): Observable<void>{
    const url = `${this.urlUsuaria}/${usuaria.id}`; /*interpolacion */
    return this.HttpClient.put<void>(url, usuaria)
    .pipe(tap(() =>{return this.getAll()}));
  }

  insertUsuaria(usuaria: Usuaria): Observable<Usuaria>{
    return this.HttpClient.post<Usuaria>(this.urlUsuaria, usuaria);
  }

  update(consejeria: Consejeria): Observable<void>{
    const url = `${this.urlConsejeria}/${consejeria.id}`; /*interpolacion */
    return this.HttpClient.put<void>(url, this.consejeriasAdapter.adaptToApi(consejeria))
    .pipe(tap(() =>{return this.getAll()}));
  }

  insert(consejeria: Consejeria): Observable<void>{
    return this.HttpClient.post<void>(this.urlConsejeria, this.consejeriasAdapter.adaptToApi(consejeria));
  }

}
