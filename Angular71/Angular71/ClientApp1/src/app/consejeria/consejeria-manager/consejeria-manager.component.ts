import { Component, OnInit } from '@angular/core';
import { Consejeria } from '../../models/consejeria.model';
import { Router } from '@angular/router';
import { ConsejeriasHttpService } from '../../services/consejerias-http.service';
import { StateService } from '../../services/state.service';
import { ConsejeriaList } from 'src/app/services/conejerias.adapter';

@Component({
  selector: 'app-consejeria-manager',
  templateUrl: './consejeria-manager.component.html',
  styleUrls: ['./consejeria-manager.component.scss'],
})
export class ConsejeriaManagerComponent implements OnInit {

  //consejerias: Consejeria[];
  consejerias: ConsejeriaList[];
  consejeriaSeleccionado: Consejeria;

  constructor(
    private consejeriasData: ConsejeriasHttpService,//ConsejeriaArrayService,
    private router: Router,
    private stateService: StateService
  ) { }

  ngOnInit() {
    
    this.stateService.consejerias$.subscribe(consejerias => this.consejerias = consejerias);
    this.stateService.setAppTitulo('Administracion de consejerias');
  }

  filtrarConsejeria(filtro: string) {
    this.consejeriasData.filterByNombreApellido(filtro).subscribe(consejerias => this.consejerias = consejerias);
  }

  seleccionarConsejeria(consejeria: Consejeria) {
    this.router.navigate(['consejerias', consejeria.id.toString()]);
  }

  cancelarEdicion() {
    this.consejeriaSeleccionado = null;
  }

  nuevoConsejeria(){
    this.router.navigate(['consejerias', 0]);
  }
  //pasa al consejerias edit.
  // actualizarConsejeria(consejeria: Consejeria) {
  //   this.consejeriasData.update(consejeria);
  //   this.consejeriaSeleccionado = null;

  // }

}
