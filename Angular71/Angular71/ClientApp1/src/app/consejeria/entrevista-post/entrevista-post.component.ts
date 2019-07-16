import { Component, OnInit, Input } from '@angular/core';
import { ConsejeriasHttpService } from '../../services/consejerias-http.service';
import { EntrevistaPostAborto } from '../../models/consejeria.model';

@Component({
  selector: 'app-entrevista-post',
  templateUrl: './entrevista-post.component.html',
  styleUrls: ['./entrevista-post.component.scss']
})
export class EntrevistaPostComponent implements OnInit {

  @Input() consejeriaId: number;
  entrevista: EntrevistaPostAborto;

  constructor(private consejeriaService: ConsejeriasHttpService) { }

  ngOnInit() {
    if(this.consejeriaId > 0){
      let ante = null;
      this.consejeriaService.getEntrevistaByConsejeriaId(this.consejeriaId).subscribe(antecedenteRequest => 
        {
          ante = antecedenteRequest;
          if(!ante){
            this.inicializar(this.consejeriaId);
          }else{
            this.entrevista = ante;
          }
        });
    }
    else{
      this.inicializar(this.consejeriaId);
    }
    
  }

  inicializar(consejeriaId: number){
    this.entrevista =  new EntrevistaPostAborto(0,new Date(),'',false,false,false,'',false,false,0,false,false,'',false,false,false,false,false,false,false,false,
    false,false,false,'',false,false,false,'',false,new Date(),false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, consejeriaId);
  }

  guardarEntrevista(form: any) {
    if(this.consejeriaId > 0 && this.entrevista.id > 0){
      this.consejeriaService.updateEntrevista(this.entrevista).subscribe(
        (_) => {}
      ); 
   }else{
    this.consejeriaService.insertEntrevista(this.entrevista).subscribe(
      (_) => {
        //this.usuariaIdInsert.emit(result.id);    
      }
    ); 
   }
  }
  cancelarEdicionEntrevista() {

  }
}