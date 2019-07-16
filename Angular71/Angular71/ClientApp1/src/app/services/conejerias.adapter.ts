import { Consejeria } from '../models/consejeria.model';
import { Injectable } from '@angular/core';

export class ConsejeriaApi {
    constructor(
        public id :number,
        public numero :number,
        public fechaIngreso: Date,
        public observacion :string,
        public usuariaId :number,
        public usuarie1Id :number,
        public usuarie2Id :number
        // ,
        // public usuariaNombre :String,
        // public usuarie1Nombre :String,
        // public usuarie2Nombre :String
    ){
       
    }
}

export class ConsejeriaList {
    constructor(
        public id :number,
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
    constructor(){}

    adapt(consejeriasApi: ConsejeriaApi) :Consejeria {
        return new Consejeria(consejeriasApi.id, consejeriasApi.numero, this.parseJsonDate(consejeriasApi.fechaIngreso), consejeriasApi.observacion, consejeriasApi.usuariaId, 
            consejeriasApi.usuarie1Id, consejeriasApi.usuarie2Id);
    }

    adaptToList(consejeriasApi: ConsejeriaList) :ConsejeriaList {
        return new ConsejeriaList(consejeriasApi.id, consejeriasApi.numero, this.parseJsonDate(consejeriasApi.fechaIngreso), consejeriasApi.observacion, consejeriasApi.usuariaNombre, 
            consejeriasApi.usuarie1Nombre, consejeriasApi.usuarie2Nombre,consejeriasApi.usuariaApellido, consejeriasApi.usuarie1Apellido, consejeriasApi.usuarie2Apellido );
    }

    adaptToApi(consejeria: Consejeria) :ConsejeriaApi {
        return new ConsejeriaApi(consejeria.id, consejeria.numero, consejeria.fechaIngreso, consejeria.observacion, consejeria.usuariaId, 
            consejeria.usuarie1Id, consejeria.usuarie2Id);
    }
    
    
     parseJsonDate(jsonDateString): Date {
        if(jsonDateString)
            return new Date(parseInt(jsonDateString.replace('/Date(', '')));
        else
            return null;
    }
}
