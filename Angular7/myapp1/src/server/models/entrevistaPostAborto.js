const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

let Shcema = mongoose.Schema;
let entrevistaPostAbortoSchema = new Shcema({
    fecha:{
        type:Date,
        required: [true, 'La fecha es requerida']
    },
    procedimientoObservaciones:{
       type:String
    },
    procedimientoHecho:{
        type:Boolean,
        default:false
    },
    procedimientoNoContinua:{
        type:Boolean,
        default:false
    },
    procedimientoNoAbortoEspontaneo:{
        type:Boolean,
        default:false
    },
    procedimientoNoOtro:{
        type:String,
        required: [true, 'El nombre es requerido']
    },
    procedimientoNoOtro:{
        type:Boolean,
        default:false
    },
    procedimientoSiHecho:{
        type:Boolean,
        default:false
    },
    procedimientoSiInformado:{
        type:Boolean,
        default:false
    },
    procedimientoSiOtra:{
        type:Boolean,
        default:false
    },
    procedimientoSiViaV:{
        type:Boolean,
        default:false
    },
    procedimientoSiViaSL:{
        type:Boolean,
        default:false
    },
    procedimientoSiOtro:{
        type:Boolean,
        default:false
    },
    accedioPorFarmacia:{
        type:Boolean,
        default:false
    },
    accedioPorConocido:{
        type:Boolean,
        default:false
    },
    accedioPorInternet:{
        type:Boolean,
        default:false
    },
    pccedioPorOrgSocial:{
        type:Boolean,
        default:false
    },
    presentacionSuelto:{
        type:Boolean,
        default:false
    },
    presentacionCaja20:{
        type:Boolean,
        default:false
    },
    presentacionCaja16:{
        type:Boolean,
        default:false
    },
    efectoAdversoNo:{
        type:Boolean,
        default:false
    },
    efectoAdversoGastro:{
        type:Boolean,
        default:false
    },
    efectoAdversoTemperatura:{
        type:Boolean,
        default:false
    },
    efectoAdversoCafalea:{
        type:Boolean,
        default:false
    },
    efectoAdversoOtro:{
        type:String
    },
    complicacionNo:{
        type:Boolean,
        default:false
    },
    complicacionHemorragia:{
        type:Boolean,
        default:false
    },
    complicacionInfeccion:{
        type:Boolean,
        default:false
    },
    complicacionOtro:{
        type:String
    },
    indicacionGammaglobulina:{
        type:Boolean,
        default:false
    },
    ecografiaPostFecha:{
        type:Date
    },
    ecografiaPostNoRealizo:{
        type:Boolean,
        default:false
    },
    ecografiaPostAbortoCompleto:{
        type:Boolean,
        default:false
    },
    ecografiaPostAbortoIncompleto:{
        type:Boolean,
        default:false
    },
    ecografiaPostAbortoHMyR:{
        type:Boolean,
        default:false
    },
    ecografiaPostEmbrionViable:{
        type:Boolean,
        default:false
    },
    ecografiaPostNuevaConsejeria:{
        type:Boolean,
        default:false
    },
    ecografiaPostDerivacion2Nivel:{
        type:Boolean,
        default:false
    },
    ecografiaPostConductaExpectante:{
        type:Boolean,
        default:false
    },
    consejeriaMACNo:{
        type:Boolean,
        default:false
    },
    consejeriaMACACO:{
        type:Boolean,
        default:false
    },
    consejeriaMACACI:{
        type:Boolean,
        default:false
    },
    consejeriaMACDIU:{
        type:Boolean,
        default:false
    },
    consejeriaMACPreservativo:{
        type:Boolean,
        default:false
    },
    consejeriaMACImplanteHormonal:{
        type:Boolean,
        default:false
    },
    consejeriaMACACOLactancia:{
        type:Boolean,
        default:false
    },
    consejeriaId:{
        type:String
    }
});

entrevistaPostAbortoSchema.methods.toJSON = function (){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

entrevistaPostAbortoSchema.plugin(uniqueValidator, {message:'{PATH} debe de ser unico'});

module.exports = mongoose.model('Usuarias', entrevistaPostAbortoSchema);
