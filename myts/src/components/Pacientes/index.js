import React, { Component } from 'react';
import { Redirect } from 'react-router';

class PacientesList extends Component {
    constructor(props){
        super(props);
    
        this.state = {pacientes:[], redirect: false, id:0};

        fetch('http://localhost:58764/api/pacientes')
        .then(response => response.json())
        .then(pacientes => this.setState({pacientes}))
        
        this.handleDelete = this.handleDelete.bind(this);  
        this.handleEdit = this.handleEdit.bind(this);  
    }


    //   editar(id) {
    //       this.setState({redirect:true, id:id});
    // }

    // Handle Delete request for an employee  
    handleDelete(id) {  
        // if (!confirm("Do you want to delete employee with Id: " + id))  
        //     return;  
        // else {  
            fetch('api/Employee/Delete/' + id, {  
                method: 'delete'  
            }).then(data => {  
                this.setState(  
                    {  
                        empList: this.state.empList.filter((rec) => {  
                            return (rec.employeeId != id);  
                        })  
                    });  
            });  
        // }  
    }  
  
    handleEdit(id) {  
        this.props.history.push("/paciente/ver/" + id);  
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
                            <td>
                                <a className="action" onClick={(id) => this.handleEdit(item.id)}>Edit</a>  |  
                                <a className="action" onClick={(id) => this.handleDelete(item.id)}>Delete</a>  
                            </td>
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
