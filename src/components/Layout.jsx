import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';

function Layout(props) {
    // Preluam props-urile de interes.
    const {user, signOut} = props;

    return(
        <div className="layout">
            {/* Pasam props-urile mai departa catre header. */}
            <Header
                user={user}
                signOut={signOut}
            />
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;