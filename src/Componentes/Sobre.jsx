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
        const dados = await fetch('https://192.168.0.106:5001/Weatherforecast');
        // const dados = await fetch('https://api.github.com/users/Valhala23/repos?');
        const itens = await dados.json();
        console.log(itens);
        setItens(itens);
    }
    


    return(
        <div className="Sobremim">
            <h4> 
                <p>
                Sobremim:<br/>
                Ricardo Bavaresco<br/>
                1997<br/>

                Lista de repositorios<b/>
                github: https://github.com/Valhala23/<br/><br/>
                </p>
                 <div className="ListaProjetos">
                    {itens.map(item => (
                        <h5>{item.summary}</h5>
                    ))}
                </div> 
            </h4>
        </div>
    );    
}


export default Sobre;
