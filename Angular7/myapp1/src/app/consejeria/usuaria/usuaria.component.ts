import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuaria } from '../../models/usuaria.model';
import { ConsejeriasHttpService } from '../../services/consejerias-http.service';

import { PaisHttpService } from '../../services/pais-http.service';
import { ProvinciaHttpService } from '../../services/provincia-http.service';
import { PartidoHttpService } from '../../services/partido-http.service';
import { LocalidadHttpService } from '../../services/localidad-http.service';
import { StateService } from '../../services/state.service';
import { Pais } from '../../models/pais.model';
import { Provincia } from '../../models/provincia.model';
import { Partido } from '../../models/partido.model';
import { Localidad } from '../../models/localidad.model';
import {NivelEstudioListService, EstadoEstudioListService} from '../../services/list-item.service'
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-usuaria',
  templateUrl: './usuaria.component.html',
  styleUrls: ['./usuaria.component.scss']
})
export class UsuariaComponent implements OnInit {
  @Input() usuariaId: number;
  @Output() usuariaIdInsert = new EventEmitter <number>();
  
  usuaria: Usuaria;
  paises: Pais [];
  provincias: Provincia [];
  partidos: Partido[];
  localidades: Localidad[];
  nivelEstudios: ListItem[];
  estadoEstudios: ListItem[];

  constructor(private consejeriaService: ConsejeriasHttpService, private paisHttpService: PaisHttpService, private provinciaHttpService: ProvinciaHttpService,
    private partidoHttpService: PartidoHttpService, private localidadHttpService: LocalidadHttpService, private stateService: StateService,
    private nivelEstudioListService: NivelEstudioListService, private estadoEstudioListService: EstadoEstudioListService)
    { }

  ngOnInit() {
    this.nivelEstudios = this.estadoEstudioListService.list;
    this.estadoEstudios = this.nivelEstudioListService.list;
    this.paisHttpService.getAll();
    this.provinciaHttpService.getPorPais("1");
    
    if(this.usuariaId > 0){
      this.consejeriaService.getUsuariaById(this.usuariaId).subscribe(usuariaRequest => this.usuaria = usuariaRequest);
    }
    else{
      this.usuaria = new Usuaria(0,'','',0, true, new Date(),'','','','','','', false, false, false, false, false, false, false, false, false, false, false, '','',0,0,'');
    }

    this.stateService.paises$.subscribe(paises => this.paises = paises);
    this.stateService.provincias$.subscribe(provincias => this.provincias = provincias);
  }

  guardarUsuaria(form: any) {
    if(this.usuariaId > 0){
      this.consejeriaService.updateUsuaria(this.usuaria).subscribe(
        (_) => {}
      ); 
   }else{
    this.consejeriaService.insertUsuaria(this.usuaria).subscribe(
      (result: Usuaria) => {
        this.usuariaIdInsert.emit(result.id);    
      }
    ); 
   }
   
   //this.router.navigate(['consejerias']);
}

  selectProvincia(provinciaid: string){
    this.partidoHttpService.getByProvincia(provinciaid).subscribe(partidos => this.partidos = partidos);
  }
  selectPartido(partidoid: string){
    this.localidadHttpService.getByPartido(partidoid).subscribe(localidades => this.localidades = localidades);
  }
  
  cancelarEdicionUsuaria() {
    
  }

}
