const express = require('express')

const { consultaInt } = require('../helpers/fecthApi')




const getIndex = async (req, res) => {

  const page=req.query.page
    try {

      const respuesta = await consultaInt(`/articulos/?page=${page}`, 'get');
      const {data} = await respuesta.json()
      const {docs}=data
    
    res.render('index', {
    titulo: 'Blog',
    articulos:docs,
  })

    } catch (error) {

        console.log(error);
    }

  
}

const detalle=async(req,res)=>{

  try {

    const id=req.params.id

    const urlDeUnArticulo=`/articulos/${id}`

    const respuesta= await consultaInt(urlDeUnArticulo,'get',req.body)

    const articuloEncontrado= await respuesta.json()

     res.render('vistaDetalle',articuloEncontrado)
  } catch (error) {
      console.log(error);
  }
 
}


const login=async(req,res)=>{

  res.render('login')
}

const comprobarLogin=async(req,res)=>{

 

  try {
         const respuesta= await consultaInt("/vip/",'post',req.body)

         const data= await respuesta.json()

         console.log(data);
        
      if (data.ok==false) {

          res.redirect('/login')
      }else{
        
        res.cookie('xtoken', data.data.token)
          res.redirect('/admin')
      }

      
  } catch (error) {
      
  }
  
}

const busqueda=async(req,res)=>{

  try {

    const busqueda=req.query.query

   

  const respuesta= await consultaInt(`/articulos/search/?query=${busqueda}`,'get',req.body)

  const search= await respuesta.json()

  

  res.render('busqueda', {

    titulo: 'Blog',

    data:search.articulos,

  })



    
  } catch (error) {
    console.log(error);
  }

 
  
}


module.exports = {
    getIndex,
    detalle,
    busqueda,
    login,
    comprobarLogin,
    

  }