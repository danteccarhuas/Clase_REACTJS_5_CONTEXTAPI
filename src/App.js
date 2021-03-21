import React, { Component } from 'react';
import Equipos from './componentes/Equipos';
import LaLigaProvider from './componentes/LaLiga';

class App extends Component {
  /*state = {
    equipos : [
      {
        nombre: 'Real Madrid',
        titulos: 35
      },
      {
        nombre : 'Barcelona',
        titulos: 25
      },
      {
        nombre: 'Atlético de Madrid',
        titulos: 10
      }
    ]
}*/
  render(){
    return (
      <div className="container">
        <LaLigaProvider>
          <Equipos />
        </LaLigaProvider>
      </div>
    );
  }
}

export default App;
