import React, { Component } from 'react';

class PacientesView extends Component {
    constructor(props){
        super(props);
        this.state = {paciente : null};
      }

      componentDidMount(){
          const {match : {params}} = this.props;
          if(params.id > 0){
            fetch('http://localhost:58764/api/pacientes/'+ params.id)
            .then(response => response.json())
            .then(paciente => this.setState({paciente}))
          }
      }

      

    render(){
        return(
            <div className="PacientesList">
                <h1>
                    {this.state.paciente && this.state.paciente.nombre}
                    {this.state.paciente && this.state.paciente.apellido}
                </h1>
                
            </div>
        );
    }
}

export default PacientesView;
