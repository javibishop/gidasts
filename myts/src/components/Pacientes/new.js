import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    textFieldObs: {
        flexBasis: 600,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
      },
    menu: {
      width: 200,
    },
    check: {
        color: green[600],
        '&$checked': {
          color: green[500],
        },
      },
      checked: {},
  });
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
class PacientesNew extends Component {
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

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render(){
        
        const { classes } = this.props;

        return(
            // this.state.paciente && this.state.paciente.nombre

            <form className={classes.container} noValidate autoComplete="off">
            <TextField
              required
              id="nombre"
              label="Nombre"
              className={classes.textField}
              value={this.state.paciente && this.state.paciente.nombre}
            //   onChange={this.handleChange('nombre')}
              margin="normal"
            />
            <TextField
              required
              id="apellido"
              label="Apellido"
              value={this.state.paciente && this.state.paciente.apellido}
              className={classes.textField}
              margin="normal"
            />
            <TextField
              required
              id="edad"
              label="Edad"
              className={classes.textField}
              value={this.state.paciente && this.state.paciente.edad}
              margin="normal"
            />
            <TextField
            //   error
              id="fechaNacimiento"
              label="Fecha de Nacimiento"
              className={classes.textField}
              value={this.state.paciente && this.state.paciente.fechaNacimiento}
              margin="normal"
            />
            <TextField
              id="direccion"
              label="Direccion"
              className={classes.textField}
              margin="normal"
              value={this.state.paciente && this.state.paciente.direccion}
            />
            <TextField
              id="telefono"
              label="Telefono"
              className={classes.textField}
              margin="normal"
              value={this.state.paciente && this.state.paciente.telefono}
            //   InputProps={{
            //     readOnly: true,
            //   }}
            />
            <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.usuarioCentroSalud}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="Usuaria del Centro de Salud?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.ParejaConViviente}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="ParejaConViviente?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.ParejaNoConViviente}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="ParejaNoConViviente?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.SinPareja}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="SinPareja?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.ConocePorConocido}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="ConocePorConocido?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.ConocePorUS}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="ConocePorUS?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.ConocePorOrganizacion}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="ConocePorOrganizacion?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.ConocePorMedios}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="ConocePorMedios?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.ConocePorUsuarioConcejeria}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="ConocePorUsuarioConcejeria?"
            />
               <FormControlLabel
            control={
                <Checkbox
                checked={this.state.checkedG}
                onChange={this.handleChange('checkedG')}
                value={this.state.paciente && this.state.paciente.ConocePorInsititucionSalud}
                classes={{
                    root: classes.check,
                    checked: classes.checked,
                }}
                />
            }
            label="ConocePorInsititucionSalud?"
            />
             <FormControl fullWidth className={classes.margin}>
            <TextField
              id="conocePorInsititucionSaludObs"
              label="ConocePorInsititucionSaludObs"
              className={classes.textFieldObs}
              margin="normal"
              value={this.state.paciente && this.state.paciente.conocePorInsititucionSaludObs}
            />
            <TextField
                id="conocePorOtro"
                label="ConocePorOtro"
                className={classes.textFieldObs}
                margin="normal"
                value={this.state.paciente && this.state.paciente.conocePorOtro}
                />
             </FormControl>
             
             <FormControl fullWidth className={classes.margin}>

                
            </FormControl>
          </form>

            // <div className="PacientesList">
            //     <h1>ssssssssssssssssss
            //         {this.state.paciente && this.state.paciente.nombre}
            //         {this.state.paciente && this.state.paciente.apellido}
            //     </h1>
                
            // </div>
        );
    }
}

PacientesNew.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PacientesNew);
