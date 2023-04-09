const express=require('express');
const router=express.Router();



const {getIndex,detalle,busqueda} = require('../controllers/frontContreollers')



router.get('/', getIndex);
router.get('/detalles/:id',detalle)
// router.get('/login',login)
// router.post('/login/admin',comprobarLogin)
router.get('/search/',busqueda)


module.exports = router;