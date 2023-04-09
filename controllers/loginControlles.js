

const { signInWithEmailAndPassword, signOut } = require('firebase/auth');

const { autentificadora } = require('../helpers/firebase')



const formCrear = async (req, res) => {

    res.render('login');

};

const signIn = async (req, res) => {

    const { mail, pass } = req.body

    try {
       
        const userCredentials = await signInWithEmailAndPassword(autentificadora, mail, pass)
        console.log(userCredentials._tokenResponse.idToken);
        res.cookie('xtoken', userCredentials._tokenResponse.idToken)

        

        res.redirect('/admin')


    } catch (error) {
        console.log(error);
        res.render('login', {
            error
        });

    }
};

const logOut = async (req, res) => {

    try {

        await signOut(autentificadora)
        console.log("signup out of ");
        res.redirect('/')

    } catch (error) {

        console.log(error)
    }
};


module.exports={
    signIn,
    formCrear,
    logOut
}