
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Especialidad } from '../../models/especialidad.model';
import { EspecialidadHttpService } from '../../services/especialidad-http.service';
import { StateService } from '../../services/state.service';


@Component({
  selector: 'app-especialidad-edit',
  templateUrl: './especialidad-edit.component.html',
  styleUrls: ['./especialidad-edit.component.scss']
})
export class EspecialidadEditComponent implements OnInit {

  especialidad: Especialidad;

  constructor(
    private especialidadsData: EspecialidadHttpService, //EspecialidadsArrayService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stateService: StateService
  ) { }

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    /*cuando me llega la data la asigno al especialidad */
    if(id > 0)
      this.especialidadsData.getById(id).subscribe(especialidad => this.especialidad = especialidad); 
    else{
      this.especialidad = new Especialidad(0, '');
    }
    /*aca puede que sea nul cuando se muestra la pantalla y da un error , entonces en el html se pone el *ngIf="especialidad" para que se muestre cuando el valor esta
    asignado al alumnno */

    this.stateService.setAppTitulo('Edicion de especialidad');
  }

  guardar(form: any) {
      if(this.especialidad.id > 0){
        this.especialidadsData.update(this.especialidad).subscribe(
          (_) => this.router.navigate(['especialidades'])
        ); /*si aca no hago subscribe no se ejecuta el update. Ademas falta (JS tiene un solo hilo de ejecucion). Entonces
        cuando el hilo quede libre tengo que navegar a la ruta de especialidads, sino no se ve ya que es asincronico.)
        (_) es para indicar que tiene un parametro vacio*/  
      }else{
        this.especialidadsData.insert(this.especialidad).subscribe(
          (_) => this.router.navigate(['especialidades'])
        ); /*si aca no hago subscribe no se ejecuta el update. Ademas falta (JS tiene un solo hilo de ejecucion). Entonces
        cuando el hilo quede libre tengo que navegar a la ruta de especialidads, sino no se ve ya que es asincronico.)
        (_) es para indicar que tiene un parametro vacio*/
      }
  }

  cancelarEdicion() {
    this.router.navigate(['especialidades']);
  }

}
