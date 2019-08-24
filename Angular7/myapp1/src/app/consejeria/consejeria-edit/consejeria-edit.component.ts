import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Consejeria, GestaActual, Antecedente } from '../../models/consejeria.model';
import { UsuarieHttpService } from '../../services/usuarie-http.service';
import { ConsejeriasHttpService } from '../../services/consejerias-http.service';
import { StateService } from '../../services/state.service';
import { Usuarie } from '../../models/usuarie.model';


import { EntrevistaPostAborto } from '../../models/consejeria.model';

@Component({
  selector: 'app-consejeria-edit',
  templateUrl: './consejeria-edit.component.html',
  styleUrls: ['./consejeria-edit.component.scss']
})
export class ConsejeriaEditComponent implements OnInit {

  consejeria: Consejeria;
  usuaries: Usuarie[];
  // usuaria: Usuaria;
  id: string;
  usuariaId : string;
  constructor(
    private usuarieService: UsuarieHttpService,
    private consejeriasData: ConsejeriasHttpService, //ConsejeriasArrayService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stateService: StateService
  ) { }

  ngOnInit() {
    
    this.stateService.usuaries$.subscribe(usuaries => this.usuaries = usuaries);
    if(this.usuaries.length == 0){
      this.usuarieService.getAll();
    }

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    /*cuando me llega la data la asigno al consejeria */
    if(this.id != '' && this.id != 'new'){
      this.consejeriasData.getById(this.id).subscribe(consejeria => {
        this.consejeria = consejeria;
        this.usuariaId = consejeria.usuariaId;
      }); 
      
    }
    else{
      this.consejeria = new Consejeria('',0 ,new Date(),'' , '', '', '');
    }
    /*aca puede que sea nul cuando se muestra la pantalla y da un error , entonces en el html se pone el *ngIf="consejeria" para que se muestre cuando el valor esta
    asignado al alumnno */

    this.stateService.setAppTitulo('Edicion de consejeria');
  }

  guardar(form: any) {
       if(this.consejeria._id != ''){
        this.consejeriasData.update(this.consejeria).subscribe((_) => this.router.navigate(['consejerias']));

         /*si aca no hago subscribe no se ejecuta el update. Ademas falta (JS tiene un solo hilo de ejecucion). Entonces
        cuando el hilo quede libre tengo que navegar a la ruta de consejerias, sino no se ve ya que es asincronico.)
        (_) es para indicar que tiene un parametro vacio*/  
      }else{
        this.consejeria.usuariaId = this.usuariaId;
        this.consejeriasData.insert(this.consejeria).subscribe((_) => this.router.navigate(['consejerias']));
      }
      
      //this.router.navigate(['consejerias']);
  }

  //evento que se ejecuto en el component de usuaria al hacer inserte de una usaria y devuelve el id.
  usuariaInserted(usuariaId: string) {
    this.usuariaId = usuariaId;
  }

  cancelarEdicion() {
    this.router.navigate(['consejerias']);
  }

}
