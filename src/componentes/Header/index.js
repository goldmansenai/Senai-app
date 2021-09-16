import React from 'react';
import './style.css';
import logo from './images/logo.png';

function Header() {
    return(
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <div className="center">
                        <a class="navbar-brand" href="https://suicobrasileira.sp.senai.br/" target="_blank" rel="noreferrer">
                            <img src={logo} width="50" height="50" class="d-inline-block align-text-top" alt="Senai"/>
                        </a>
                        <span class="navbar-brand">Escola SENAI Suíço-Brasileira Paulo Ernesto Tolle</span>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;