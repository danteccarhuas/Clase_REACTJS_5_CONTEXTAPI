import React, { Component } from 'react';
import Equipo from './Equipo';

class Equipos extends Component {
    render() { 
        return (
            <Equipo /> 
            /*<React.Fragment>
                {this.props.equipos.map(equipo => (
                    <Equipo 
                        key={equipo.nombre}
                        info={equipo}
                    />
                ))}
            </React.Fragment>*/
         );
    }
}
 
export default Equipos;