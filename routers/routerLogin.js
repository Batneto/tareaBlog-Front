const express = require('express');
const router = express.Router();

const {formCrear, signIn,logOut} =require('../controllers/loginControlles')

router.get('/login', formCrear );

router.post('/signin', signIn );

router.get('/logout', logOut );


module.exports = router;