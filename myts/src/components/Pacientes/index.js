import React, { Component } from 'react';
import { Redirect } from 'react-router';

class PacientesList extends Component {
    constructor(props){
        super(props);
    
        this.state = {pacientes:[], redirect: false, id:0};

        fetch('http://localhost:58764/api/pacientes')
        .then(response => response.json())
        .then(pacientes => this.setState({pacientes}))
      }

      editar(id) {
          this.setState({redirect:true, id:id});
    }

    render(){
        
        const { redirect, id } = this.state;

        if (redirect) {
            return <Redirect to='/view/${id}'/>;
          }
        return(
            <div className="container"> 
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Member name</th>
                                <th>Member email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.pacientes && this.state.pacientes.map((item, key) =>
                            <tr key={item.id}>
                            <td>{item.nombre} </td>
                            <td>{item.apellido}</td>
                            <td><a>Edit</a>|<a>Delete</a></td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        
            // <div className="PacientesList">
            //     <h1>
            //         {this.state.pacientes && this.state.pacientes.map((item, key) =><span> <li key={key}>{item.nombre} - {item.apellido}</li> <button onClick={() => this.editar(item.id)} key={key}>Edit</button> </span>)}
            //     </h1>
                
            // </div>
        );
    }
}

export default PacientesList;
