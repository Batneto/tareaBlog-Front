const {consultaInt}=require('../helpers/fecthApi')



const mostrarArticulos = async (req, res) => {

    const page=req.query.page

    const respuesta = await consultaInt(`/articulos/?page=${page}`, 'get');
    const {data} = await respuesta.json()
    const {docs}=data

    

    res.render('./admin/indexAdmin',{

        articulos: docs
    });

};


const formActualizar=async(req,res)=>{
    
    try {

        const id=req.params.id

       const url=`/articulos/${id}`
       
        const respuesta= await consultaInt(url,'get')

        const unArticulo= await respuesta.json()


        res.render('../views/admin/actualizarArticulo',{
           articulo:unArticulo
        })
         
    } catch (error) {
        console.log(error);
    }

}

const actualizar= async(req,res)=>{

    try {

        const id=req.params.id

        const url=`/articulos/${id}`

       

        consultaInt(url,'put',req.body)

    res.redirect('/admin/')

    } catch (error) {
        console.log(error);
    }
    
}


const formCrear=(req,res)=>{

    res.render('./admin/crearArticulo')

}


const crear= async(req,res)=>{

    try {

    req.body.image= `http://localhost:4000/uploads/${req.file.filename}`   
    
    
    consultaInt("/articulos",'post',req.body)

    res.redirect('/admin/')

    } catch (error) {

        console.log(error);
    }
    
}



const eliminando=async(req,res)=>{
    try {
        const id=req.params.id

        const urlDeUnaPelicula=`/articulos/${id}`

        consultaInt(urlDeUnaPelicula,'delete',req.body)

        res.redirect('/admin/')
        
    } catch (error) {
        
    }
}





module.exports={
    mostrarArticulos,
    formCrear,
    crear,
    formActualizar,
    actualizar,
    eliminando
}