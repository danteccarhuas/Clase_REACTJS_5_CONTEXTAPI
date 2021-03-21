import React, { Component } from 'react';
import { LaLigaContext } from './LaLiga';

class Equipo extends Component {

    render() {
        //const {nombre, titulos}  = this.props.info;
        return (
            <LaLigaContext.Consumer>
                {(value)=>{
                    return Object.keys(value.state).map(idEquipo => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={idEquipo}>
                                <p className="m-0">
                                    {value.state[idEquipo].nombre}
                                    <span className="ml-4 badge badge-danger ">
                                        {value.state[idEquipo].titulos}
                                    </span>
                                </p>

                                <button className="btn btn-success" type="button" onClick={()=>{
                                    value.esCampeon(idEquipo);
                                }}>
                                    Es Campeón
                                </button>
                            </li>
                        )
                    })
                }}
            </LaLigaContext.Consumer>
            /*<li className="list-group-item d-flex justify-content-between align-items-center">
                <p className="m-0">
                    {nombre}
                </p>
                <span className="badge badge-danger">
                    {titulos}
                </span>
            </li>*/
         );
    }
}
 
export default Equipo;