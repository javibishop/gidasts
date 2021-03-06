
export class Usuaria {

    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public edad: number,
        public activo: boolean,
        public fechaNacimiento: Date,
        public nacionalidadId: number,
        public documento: string,
        public provinciaId: number,
        public partidoId: number,
        public telefono: string,
        public direccion: string,
        public usuarioCentroSalud: boolean,
        public parejaConViviente : boolean,
        public parejaNoConViviente : boolean,
        public sinPareja : boolean,
        public conocePorConocido : boolean,
        public conocePorUS : boolean,
        public conocePorOrganizacion : boolean,
        public conocePorMedios : boolean,
        public conocePorUsuarioConsejeria: boolean, 
        public conocePorInsititucionSalud : boolean,
        public conocePorReferente : boolean,
        public conocePorInsititucionSaludObs : string,
        public conocePorOtro : string,
        public nivelInstruccion : number,
        public nivelInstruccionEstado : number,
        public localidadId: number
        )
        {}
}