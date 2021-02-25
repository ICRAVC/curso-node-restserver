const {response} = require('express');


const usuariosGet = (req,res = response)=>{

  const {q, nombre, apikey} = req.query;

  res.json({
    msg: 'get API - controlador', 
    q, 
    nombre,
    apikey
  });
}

const usuariosPut = (req,res = response)=>{

  const id = req.params.id;

  res.json({
    msg: 'Put API - controlador',
    id
  });
}

const usuariosPost = (req,res = response)=>{

  const body = req.body;

  res.json({
    msg: 'Post API - controlador',
    body
  });
}

const usuariosDelete = (req,res = response)=>{
  res.json({
    msg: 'Delete API - controlador'
  });
}

const usuariosPatch = (req,res = response)=>{
  res.json({
    msg: 'patch API - controlador'
  });
}
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch
}