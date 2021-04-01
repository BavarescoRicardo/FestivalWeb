import react, {useState} from 'react';
import Canva from './Desenho/Canva.jsx';
import BotaoT from './Componentes/BotaoTeste'
import Evento from './Componentes/Eventos'

function App(){

    const [edicao, setEdicao]  = useState(1);
    const incrementar = () => {
        setEdicao (edicao + 1);
    }


    return(
        <div>
            <h1> Olar festival em react </h1>
            <Evento nomeEvento="FIMUSIC"/>
            <Evento nomeEvento="GAITAÇO"/>

            <h1> {edicao} </h1>
            <button onClick={incrementar}> Aumentar</button>

        </div>
    );
}
export default App;