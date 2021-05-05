import React from 'react';
import { Link } from 'react-router-dom'
import './ComponenteBase.css';
function Navegacao(){
    return(
        <nav>
            <h3>
                <Link to='/'>
                    <ul>Começo</ul>
                </Link>

                <Link to='/Login'>
                    <ul>Login</ul>
                </Link>

                <Link to='/Sobre'>
                    <ul>Sobre</ul>
                </Link>

                <Link to='/Canva'>
                    <ul>Desenho</ul>
                </Link>

            </h3>
        </nav>
    );    
}


export default Navegacao;
