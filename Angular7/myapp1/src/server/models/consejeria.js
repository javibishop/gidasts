const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

let Shcema = mongoose.Schema;
let consejeriaSchema = new Shcema({
    numero:{
        type:String,
        required: [true, 'El Numero es requerido']
    },
    fechaIngreso:{
        type:Date,
        required: [true, 'La fechaIngreso es requerido']
    },
    observacion:{
        type:String
    },
    usuariaId:{
        type:String,
        required: [true, 'Usuaria es requerido']
    },
    usuarie1Id:{
        type:String,
        required: [true, 'Usuarie 1 es requerido']
    },
    usuarie2Id:{
        type:String,
        required: [true, 'Usuarie 1 es requerido']
    },
    estado:{
        type:Boolean,
        default:true
    }
});

consejeriaSchema.methods.toJSON = function (){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

consejeriaSchema.plugin(uniqueValidator, {message:'{PATH} debe de ser unico'});

module.exports = mongoose.model('Consejerias', consejeriaSchema);
