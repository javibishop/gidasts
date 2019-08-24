const express = require('express')
const app = express()
const _ = require('underscore')
const Consejeria = require('../models/consejeria')
const { verificaToken } =  require('../middlewares/authentication');

//cada vez q hago un get, se ejecuta el middleware
app.get('/consejeria/:id', verificaToken, (req, res)  => {
    Consejeria.findById(req.params.id)
    .exec((err, consejeria) => {
        
        if(err){
            return res.status(400).json({ok: false, err});
        }else{
            consejeria.count((err, cantidad) =>{
                return res.json(consejeria);
            })
            
        }
    });   
})

//cada vez q hago un get, se ejecuta el middleware
app.get('/consejeria', verificaToken, (req, res)  => {

    //esto es loq ue viene en el payload del token luego del middle verificaToken 
    //return res.json(req.usuarie);

    let desde = Number(req.query.desde || 0);
    let hasta = Number(req.query.hasta || 50);

    Consejeria.find()
    .skip(desde) /* salta los 5 registros por get */
    .limit(hasta) /* 5 registros por get */
    .exec((err, consejeria) => {
        
        if(err){
            return res.status(400).json({ok: false, err});
        }else{
            Consejeria.count((err, cantidad) =>{
                return res.json(consejeria);
            })
            
        }
    });     
})

app.post('/consejeria', [verificaToken],  (req, res) => {
    let body = req.body;
    let consejeria = new consejeria({
        nombre: body.nombre
    });
    
    consejeria.save((err, consejeriaDB) => {
        if(err){
            return res.status(400).json({ok: false, err});
        }else{
            return res.json({ok: true, usuarie: consejeriaDB});
        }
    })
})

app.put('/consejeria/:id', [verificaToken],  (req, res) => {
    //el :id aparece en params, si es otro nombre, aparece otro nombre.
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre']);
    //new, es para que retorne el usuario actualizado. runV es para que corra las validaciones definidas antes de grabar. Sino no las corre
    let optionsMongoose = {
        new: true, 
        runValidators:true
    }
    Consejeria.findByIdAndUpdate(id, body, optionsMongoose, (err, consejeriaDB) =>{
        if(err){
            return res.status(400).json({ok: false, err});
        }else{
            //usuarioDB.password = null;
            return res.json({ok: true, usuario: consejeriaDB});
        }
    })
    
})

module.exports = app;