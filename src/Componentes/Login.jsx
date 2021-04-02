import react, {useEffect, useState} from 'react';
import './Login.css';

function Login(props){
    const [edicao, setEdicao]  = useState(1);
    const[nome, alteraNome] = useState("");
    const[senha, alteraSenha] = useState("");
    const [logado, setLogado]  = useState(false);
    const incrementar = () => {
        setEdicao (edicao + 1);
    }
    const Logar = () => {        
        setLogado((logado) => !logado);
    }

    return(
        <div>
            <h2>
                {props.nome}                             
            </h2>
            <div className="Logar">                
                <h3>Digite seu login e senha</h3>
                <input type="text" value={nome} 
                    onChange = {e => alteraNome(e.target.value)}
                />                    
                <input type="text" value={senha} 
                    onChange = {e => alteraSenha(e.target.value)}
                />
                <button onClick={Logar}> Logar</button>
            </div>
        </div>
    );
}

export default Login;