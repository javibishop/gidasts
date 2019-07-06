import { Component, OnInit, Input } from '@angular/core';
import { ConsejeriasHttpService } from '../../services/consejerias-http.service';
import { EstudioComplementario } from '../../models/consejeria.model';

@Component({
  selector: 'app-estudio-complementario',
  templateUrl: './estudio-complementario.component.html',
  styleUrls: ['./estudio-complementario.component.scss']
})
export class EstudioComplementarioComponent implements OnInit {

  @Input() consejeriaId: number;
  estudioComplementario: EstudioComplementario;
  
  constructor(private consejeriaService: ConsejeriasHttpService) { }

  ngOnInit() {
    if(this.consejeriaId > 0){
      let estudio = null;
      this.consejeriaService.getEstudioByConsejeriaId(this.consejeriaId).subscribe(estudioRequest => 
        {
          estudio = estudioRequest;
          if(!estudio){
            this.inicializar(this.consejeriaId);
          }else{
            this.estudioComplementario = estudio;
          }
        });
    }
    else{
      this.inicializar(this.consejeriaId);
    }
    
  }

  inicializar(consejeriaId: number){
    this.estudioComplementario = new EstudioComplementario(0,'',new Date(), '', false, 0, false, '', false, false, false, '', new Date(), '', false, 0, false, '', false, false, false, 
    new Date(), '', '', '','', '', '', consejeriaId, new Date());
  }

  guardarEstudioComplementario(form: any) {
    if(this.consejeriaId > 0 && this.estudioComplementario.id > 0){
      this.consejeriaService.updateEstudio(this.estudioComplementario).subscribe(
        (_) => {}
      ); 
   }else{
    this.consejeriaService.insertEstudio(this.estudioComplementario).subscribe(
      (_) => {
        //this.usuariaIdInsert.emit(result.id);    
      }
    ); 
   }
  }
  cancelarEdicionEstudioComplementario() {

  }
}
