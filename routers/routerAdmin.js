const express = require('express')
const app = express()
const router = express.Router();
const{mostrarArticulos,actualizar,crear,formActualizar,formCrear,eliminando}=require('../controllers/adminControllers')

const upload = require('../middleware/upload');
const {validarJwt} = require('../middleware/validarJwt')


router.get('/',mostrarArticulos)


//*CREAR PELICULA

router.get('/crearArticulo',formCrear)
router.post('/crearArticulo',[upload],crear)


//* ACTUALIZAR PELICULA

router.get('/editarArticulo/:id',formActualizar)

router.post('/editarArticulo/:id',actualizar)



//*ELIMINAR

router.get('/elimiarArticulo/:id',eliminando)







module.exports = router;