import React from 'react';
import { Link } from 'react-router-dom';
// importam componente noi
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css'

// ATENTIE! Cu toate ca Login are constante si functii, nu e nevoie sa fie declarata
// drept class, pentru ca nu are un state propriu.
function Login(props) {
    // Daca nu suntem siguri ce props-uri vin, le dam console.log.
    console.log(props);
    // Facem destructuring la props-urile de care avem nevoie.
    // signInWithGoogle vine de la Firebase, history de la componenta Route.
    const {signInWithGoogle, history} = props;

    // Functia va fi apelata la click-ul pe butonul de logare cu Google.
    function handleGoogleLogin() {
        // Apelul functiei signInWithGoogle intoarce un PROMISE.
        const googleLoginRespone = signInWithGoogle();
        // In caz de succes, Promise-ul va intra pe metoda .then.
        // ATENTIE, .then se executa cand Promise-ul a fost rezolvat(a iesit din starea PENDING).
        // Daca logarea ar esua, nu s-ar intra pe .then, ci pe .catch.
        googleLoginRespone.then(() => {
            // Abia DUPA ce s-a terminat logarea trebuie sa fim redirectati catre Home.
            // Cu history.push schimbam ruta.
            history.push('/');
        });
    }

    return(
        <div className="login-page">
            {/* Logo-ul va duce catre Home. */}
            <Link to='/'>
                <img src={Logo} alt="logo" className="mb-5"/>
            </Link>

            <h1 className="h2">Login</h1>
            <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

            {/* Butonul de login cu Google, la pachet cu  */}
            <button
                // Clasele sunt de Bootstrap, din nou, daca nu le stiti, cautati-le!
                className="btn btn-outline-dark d-flex align-items-center"
                // La click apelam functia handleGoogleLogin
                onClick={handleGoogleLogin}
            >
                <Google className="w-50 mr-3"/>
                {/* text-nowrap nu lasa textul sa se intinda pe mai multe randuri */}
                <span className="text-nowrap">Loghează-te cu Google</span>
            </button>
        </div>
    );
}

export default Login;