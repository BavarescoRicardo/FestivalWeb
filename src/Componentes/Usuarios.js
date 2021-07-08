import React, {useEffect, useState} from 'react';

class Usuarios extends React.Component{    

    constructor(props){
        super(props);
        this.state={apiResponse:""};
    }

    callApi(){
        fetch("http://localhost:8081/")
        .then(res => res.text())        
        .then(res => this.setState({apiResponse: res}))
    }

    componentWillMount(){
        this.callApi();
    }
    passarParm() {
        
    }

    render(){
        return (
            <div>
            <h4> 
                <p>
                
                Ricardo Bavaresco - colaborador<br/>                
                </p>
                Lista de Usuarios cadastrados:<br/>
                    <div className="ListaProjetos">
                        <div className="Enviar usuario">                
                        {/* 
                            <h3>Digite seu login e senha</h3>
                                const[nome, alteraNome] = useState("");
                            const[senha, alteraSenha] = useState("");
                            <input type="text" value={nome} 
                                onChange = {e => alteraNome(e.target.value)}
                            />                    
                            <input type="text" value={senha} 
                                onChange = {e => alteraSenha(e.target.value)}
                            />
                            <button onClick={passarParm()}> Logar</button> 
                        */}
                    </div>


                    {/* {itens.map(item => ( */}
                        <p>{this.state.apiResponse}</p>
                     {/* ))}  */}
                </div> 
            </h4>
        </div>
        );
    }
}


export default Usuarios;