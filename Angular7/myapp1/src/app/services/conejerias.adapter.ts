import { Consejeria } from '../models/consejeria.model';
import { Injectable } from '@angular/core';
import {Usuarie } from '../models/usuarie.model';
import {Usuaria } from '../models/usuaria.model';
import {UsuarieHttpService} from './usuarie-http.service';
import {UsuariaHttpService} from './usuaria-http.service';
import { StateService } from './state.service';
import { UsuarieApi } from './usuaries.adapter';

export class ConsejeriaApi {
    constructor(
        public _id :string,
        public numero :number,
        public fechaIngreso: Date,
        public observacion :string,
        public usuariaId :string,
        public usuarie1Id :string,
        public usuarie2Id :string
        // ,
        // public usuariaNombre :String,
        // public usuarie1Nombre :String,
        // public usuarie2Nombre :String
    ){
       
    }
}

export class ConsejeriaList {
    constructor(
        public _id :string,
        public numero :number,
        public fechaIngreso: Date,
        public observacion :string,
        public usuariaNombre :string,
        public usuarie1Nombre :string,
        public usuarie2Nombre :string,
        public usuariaApellido :string,
        public usuarie1Apellido :string,
        public usuarie2Apellido :string
    ){
       
    }
}

// si aca solo pongo @Injectable me da un error de que nadie lo provee, y se debe poner el en providers del module.ts Entonces se pone el root como abajo
@Injectable({
    providedIn: 'root'
  })

export class ConsejeriasAdapter {
    private profesionales : Usuarie [];
    constructor(private usuariaHttpService : UsuariaHttpService, private usuarieHttpService : UsuarieHttpService, private stateService : StateService)
    {
        this.stateService.usuaries$.subscribe(usuaries => this.profesionales = usuaries);
    }

    adapt(consejeriasApi: ConsejeriaApi) :Consejeria {
        return new Consejeria(consejeriasApi._id, consejeriasApi.numero, this.parseJsonDate(consejeriasApi.fechaIngreso), consejeriasApi.observacion, consejeriasApi.usuariaId, 
            consejeriasApi.usuarie1Id, consejeriasApi.usuarie2Id);
    }

    adaptToList(consejeriasApi: ConsejeriaApi) :ConsejeriaList {
        let usuarie1 = this.getProfesional(consejeriasApi.usuarie1Id);
        let usuarie2 = this.getProfesional(consejeriasApi.usuarie2Id);
        let usuaria : Usuaria;
        this.usuariaHttpService.getById(consejeriasApi.usuariaId).subscribe(usuariaApi => usuaria = usuariaApi);
        return new ConsejeriaList(consejeriasApi._id, consejeriasApi.numero, this.parseJsonDate(consejeriasApi.fechaIngreso), consejeriasApi.observacion, usuaria.nombre, 
        usuarie1.nombre, usuarie2.nombre, usuaria.apellido, usuarie1.apellido, usuarie2.apellido);
    }

    adaptToApi(consejeria: Consejeria) :ConsejeriaApi {
        return new ConsejeriaApi(consejeria._id, consejeria.numero, consejeria.fechaIngreso, consejeria.observacion, consejeria.usuariaId, 
            consejeria.usuarie1Id, consejeria.usuarie2Id);
    }
    
    getProfesional(id : string) : Usuarie {
        return this.profesionales.find(c => c._id === id);
    }
    
     parseJsonDate(jsonDateString): Date {
        if(jsonDateString)
            return new Date(parseInt(jsonDateString.replace('/Date(', '')));
        else
            return null;
    }
}
