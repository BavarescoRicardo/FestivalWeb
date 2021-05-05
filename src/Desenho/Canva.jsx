import React from 'react';
import './Canva.css';
function Canva(props){
    return(
    <div className="Desenhinho">            
          <div class="container">
    <div class="coluna">
      <div class="linha">
        <h3>
          Tamanho padrão do elemento Canvas (HTML): 300x150<br/>
          Tamanho padrão da superfície de desenho do Canvas: 300x150
        </h3>
        <canvas class="canvasNormal" id="canvas1">
          Canvas não suportado
        </canvas>
      </div>
      <div class="linha">
        <h3>
          Tamanho do elemento Canvas (HTML): 150x75<br/>
          Tamanho da superfície de desenho do Canvas: 300x150
        </h3>
        <canvas class="canvasNormal" id="canvas2" width="150" height="75">
          Canvas não suportado
        </canvas>
      </div>
    </div>

    <div class="coluna">
      <div class="linha">
        <h3>
          Tamanho do Canvas: 600x300<br/>
          Tamanho da superfície de desenho do Canvas: 300x150
        </h3>
        <canvas class="canvasGrande" id="canvas3">
          Canvas não suportado
        </canvas>
      </div>
      <div class="linha">
          <h3>
            Tamanho do Canvas: 600x300<br/>
            Tamanho da superfície de desenho do Canvas: 600x300
          </h3>
          <canvas class="canvasGrande" id="canvas4" width="600" height="300">
            Canvas não suportado
          </canvas>
      </div>
    </div>
  </div>

    <script>    
      let canvas = document.getElementById(elemento);
      let contexto = canvas.getContext('2d');

      contexto.lineWidth = 3;
      contexto.strokeStyle = 'blue';
      contexto.strokeRect(10, 10, 280, 130);

      contexto.beginPath();
        contexto.moveTo(10, 10);
        contexto.lineTo(200, 100);
        contexto.stroke();
      contexto.closePath();
      
      
    desenharNoCanvas('canvas1'); 
    desenharNoCanvas('canvas2');        
    desenharNoCanvas('canvas3'); 
    desenharNoCanvas('canvas4'); 
    </script>

            
    </div>
    );
}

export default Canva;