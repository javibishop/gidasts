import { Usuarie } from '../models/usuarie.model';
import { Injectable } from '@angular/core';

export class UsuarieApi {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public activo: boolean,
        public userName: string,
        public password: string,
        public especialidadId: number
    ){
    }
}

// si aca solo pongo @Injectable me da un error de que nadie lo provee, y se debe poner el en providers del module.ts Entonces se pone el root como abajo
@Injectable({
    providedIn: 'root'
  })

export class UsuariesAdapter {
    constructor(
    ){}

    adapt(usuariesApi: UsuarieApi) :Usuarie {
        return new Usuarie(usuariesApi.id, usuariesApi.nombre, usuariesApi.apellido,  usuariesApi.activo, 
            usuariesApi.userName, usuariesApi.password, usuariesApi.especialidadId );
    }

    adaptToApi(usuarie: Usuarie) :UsuarieApi {
        return new UsuarieApi(usuarie.id, usuarie.nombre, usuarie.apellido, usuarie.activo, usuarie.userName,
             usuarie.password, usuarie.especialidadId );
    }

    parseJsonDate(jsonDateString): Date {
        return new Date(parseInt(jsonDateString.replace('/Date(', '')));
    }
}
