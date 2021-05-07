import react, {useEffect, useState} from 'react';
import './App.css'
import Canva from './Desenho/Canva.jsx';
import Sobre from './Componentes/Sobre';
import Evento from './Componentes/Eventos';
import Login from './Componentes/Login';
import Navegacao from './Componentes/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){

    const [edicao, setEdicao]  = useState(1);
    const [logado, setLogado]  = useState(false);    
    const incrementar = () => {
        setEdicao (edicao + 1);
    }
    const Logar = () => {        
        setLogado((logado) => !logado);
    }
    const estilo = {
        color: 'darkgray'
    };

    function RetornarTela () {
        return (
            <div>
               {logado == true? <Evento/> :'Nada acontece'}
            </div>
        );
    }   


    return(      
        <div>            
            <h1 style={estilo}> Olar festival em react </h1>
            <Router>
                <Route path="/Login" component={Login} />
                <Navegacao  /> 
                <Route path="/Sobre" component={Sobre} />            
                <Route path="/Evento" component={Evento} />
                <Route path="/Canva" component={Canva} />
            </Router>

            {/* <Canva nomeDesenho="Quadrado"/>
            <h1> {edicao} </h1>
            <button onClick={incrementar}> Aumentar</button>           
            <form className='formulario'>                
            <h3>{logado == true ? <Evento nomeEvento="Logado"/> : <Login nome="Usuario"/>}</h3> 
                <b> Fazer condição para trocar tela </b>
                {RetornarTela}
                <button type="button" onClick={Logar}> Teste Print</button>
            </form>
            */}
            
        </div>
    );
}
export default App;