import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    button: {
        margin: theme.spacing.unit,
      },
  });

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
        this.props.history.push("/paciente/view/" + id);  
    }  

    handleNew() {  
        this.props.history.push("/paciente/new");  
    } 

    render(){
        
        const { redirect, id } = this.state;

        if (redirect) {
            return <Redirect to='/view/${id}'/>;
          }
        return(
            <div className="container"> 
            <Button variant="contained" color="primary" className={styles.button} onClick={() => this.handleNew()} >Nuevo</Button>
                <div className="panel panel-default p50 uth-panel">

                <Paper className={styles.root}>
                    <Table className={styles.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.pacientes && this.state.pacientes.map((row, key) => {
                            return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                {row.name}
                                </TableCell>
                                <TableCell numeric>{row.nombre}</TableCell>
                                <TableCell numeric>{row.apellido}</TableCell>
                                <TableCell numeric>{row.telefono}</TableCell>
                                <TableCell numeric>{row.direccion}</TableCell>
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                    </Paper>
                    
                    {/* <table className="table table-hover">
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
                    </table> */}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PacientesList);
