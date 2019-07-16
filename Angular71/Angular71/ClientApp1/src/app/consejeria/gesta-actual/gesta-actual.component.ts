import { Component, OnInit, Input } from '@angular/core';
import { ConsejeriasHttpService } from '../../services/consejerias-http.service';
import { GestaActual } from '../../models/consejeria.model';

@Component({
  selector: 'app-gesta-actual',
  templateUrl: './gesta-actual.component.html',
  styleUrls: ['./gesta-actual.component.scss']
})
export class GestaActualComponent implements OnInit {

  @Input() consejeriaId: number;
  gestaActual: GestaActual;
  
  constructor(private consejeriaService: ConsejeriasHttpService) { }

  ngOnInit() {
    if(this.consejeriaId > 0){
      let gesta = null;
      this.consejeriaService.getGestasByConsejeriaId(this.consejeriaId).subscribe(gestaRequest => 
        {
          gesta = gestaRequest;
          if(!gesta){
            this.inicializar(this.consejeriaId);
          }else{
            this.gestaActual = gesta;
          }
        });
    }
    else{
      this.inicializar(this.consejeriaId);
    }
    
  }

  inicializar(consejeriaId: number){
    this.gestaActual = new GestaActual(0,false,'',new Date(),new Date(),new Date(),false,'',false,'',false,false,false,false,'',false,false,false,false,false,false,false,false,false,'', consejeriaId);
  }

  guardarGestaActual(form: any) {
    if(this.consejeriaId > 0 && this.gestaActual.id > 0){
      this.consejeriaService.updateGestaActual(this.gestaActual).subscribe(
        (_) => {}
      ); 
   }else{
    this.consejeriaService.insertGestaActual(this.gestaActual).subscribe(
      (_) => {
        //this.usuariaIdInsert.emit(result.id);    
      }
    ); 
   }
  }
  cancelarEdicionGestaActual() {

  }
}
