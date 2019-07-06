import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-asistencias-manager',
  templateUrl: './asistencias-manager.component.html',
  styleUrls: ['./asistencias-manager.component.scss']
})
export class AsistenciasManagerComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.stateService.setAppTitulo('Administracion de asistencias');
  }

}
