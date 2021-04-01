import React from 'react';
import './Evento.css';

function Evento(props){



    return(
        <div className="tituloEvento">
            <h3>
                {props.nomeEvento}               
            </h3>

        </div>
    );
}

export default Evento;