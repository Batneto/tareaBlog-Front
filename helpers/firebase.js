const{ initializeApp }=require('firebase/app')

const{getAuth}=require('firebase/auth')

const{ firebaseConfig }=require('../config/firebaseconf')


const firebaseapp=initializeApp(firebaseConfig)

const autentificadora = getAuth(firebaseapp)


module.exports={
    autentificadora
}