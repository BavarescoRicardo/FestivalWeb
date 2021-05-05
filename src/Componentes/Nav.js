import React from 'react';
import { Link } from 'react-router-dom'
import './ComponenteBase.css';
function Navegacao(){
    return(
        <nav>
            <h3> 
                <Link to='/Sobre'>
                    <ul>Sobre</ul>
                </Link>
                <Link to='/outro'>
                    <ul>Teste clique</ul>
                </Link>
            </h3>
        </nav>
    );    
}


export default Navegacao;
