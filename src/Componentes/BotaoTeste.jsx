import React from 'react';
import './BotaoTeste.css';

function BotaoT(props){
    return(
        <div className="BTeste">
            <h3>Botão sem função nenhuma </h3>
            <button onClick={1+1}></button>
        </div>
    );
}

export default BotaoT;
