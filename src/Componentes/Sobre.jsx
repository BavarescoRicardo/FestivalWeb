import React, { useEffect, useState } from 'react';
import './ComponenteBase.css';
function Sobre(){

    useEffect(() => {
        pegarProjetos();
    },[]);

    const [itens,setItens] = useState([]);

    const pegarProjetos = async () => 
    {
        // link que criei para request no servidor
        const dados = await fetch('https://api.github.com/users/Valhala23/repos?');
        const itens = await dados.json();
        console.log(itens);
        setItens(itens);
    }
    


    return(
        <div className="Sobremim">
            <h4> 
                Sobremim:
                Ricardo Bavaresco
                1997

                Lista de repositorios
                github: https://github.com/Valhala23/
                <div className="ListaProjetos">
                    {itens.map(item => (
                        <h5>{item.name}</h5>
                    ))}
                </div>
            </h4>
        </div>
    );    
}


export default Sobre;
