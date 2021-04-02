import react, {useEffect, useState} from 'react';
import style from './App.css'
import Canva from './Desenho/Canva.jsx';
import BotaoT from './Componentes/BotaoTeste';
import Evento from './Componentes/Eventos';
import Login from './Componentes/Login';

function App(){

    const [edicao, setEdicao]  = useState(1);
    const [logado, setLogado]  = useState(false);
    const incrementar = () => {
        setEdicao (edicao + 1);
    }
    const Logar = () => {        
        setLogado((logado) => !logado);
    }
    function RetornarTela () {
        return (
            <div>
               {logado == true? <Evento/> :'Nada acontece'}
            </div>
        );
    }

    


    return(      
        <div>            
            <h1> Olar festival em react </h1>
            <Evento nomeEvento="FIMUSIC"/>
            <Evento nomeEvento="GAITAÇO"/>

            <h1> {edicao} </h1>
            <button onClick={incrementar}> Aumentar</button>           

            <form className='formulario'>                
            <h3>{logado == false ? <Evento nomeEvento="Logado"/> : <Evento nomeEvento="nao logado"/>}</h3> 
                <b> Fazer condição para trocar tela </b>
                {RetornarTela}
                <button type="button" onClick={Logar}> Teste Print</button>
            </form>    
            
        </div>
    );
}
export default App;