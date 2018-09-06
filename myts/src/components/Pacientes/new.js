import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit * 10,
      marginRight: theme.spacing.unit,
      width: 600,
    },

    textField400: {
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit,
        width: 400,
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
          marginLeft: theme.spacing.unit * 10,
        '&$checked': {
          color: green[500],
          marginLeft: theme.spacing.unit * 10,
        },
      },
      checked: {},
      row: {
        flexGrow: 1,
      },
      margin: {
        margin: theme.spacing.unit,
      },
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
  const ranges = [
    {
      value: '0-20',
      label: '0 to 20',
    },
    {
      value: '21-50',
      label: '21 to 50',
    },
    {
      value: '51-100',
      label: '51 to 100',
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
<div className={classes.root}>
    <Grid container spacing={24}>
    <form className={classes.container} noValidate autoComplete="off">
        <Grid item xs={6}>
          <TextField
              required
              id="nombre"
              label="Nombre"
              className={classes.textField}
              value={this.state.paciente && this.state.paciente.nombre}
            //   onChange={this.handleChange('nombre')}
              margin="normal"
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                    required
                    id="apellido"
                    label="Apellido"
                    value={this.state.paciente && this.state.paciente.apellido}
                    className={classes.textField}
                    margin="normal"
                />
        </Grid>
        <Grid item xs={4}>
        <TextField
              required
              id="edad"
              label="Edad"
              className={classes.textField400}
              value={this.state.paciente && this.state.paciente.edad}
              margin="normal"
            />
        </Grid>
        <Grid item xs={4}>
        <TextField
            //   error
              id="fechaNacimiento"
              label="Fecha de Nacimiento"
              className={classes.textField400}
              value={this.state.paciente && this.state.paciente.fechaNacimiento}
              margin="normal"
            />
        </Grid>
        <Grid item xs={4}>
            <TextField
            select
            label="Nacionalidad"
            className={classNames(classes.margin, classes.textField400)}
            value={this.state.weightRange}
            onChange={this.handleChange('weightRange')}
            // InputProps={{
            //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            // }}
            >
            {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </Grid>
        <Grid item xs={6}>
            <TextField
                id="direccion"
                label="Direccion"
                className={classes.textField}
                margin="normal"
                value={this.state.paciente && this.state.paciente.direccion}
                />
        </Grid>
        <Grid item xs={6}>
            <TextField
                id="telefono"
                label="Telefono"
                className={classes.textField}
                margin="normal"
                value={this.state.paciente && this.state.paciente.telefono}
            />
        </Grid>
        
        
        <Grid item xs={3}>   
            <FormControlLabel control={
                    <Checkbox
                    checked={this.state.checkedG}
                    onChange={this.handleChange('checkedG')}
                    value={this.state.paciente && this.state.paciente.usuarioCentroSalud}
                    classes={{
                        root: classes.check,
                        checked: classes.checked
                    }}/>
                }
                label="Usuaria del Centro de Salud?"
                />
        </Grid>
        <Grid item xs={3}>   
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
        </Grid>
        <Grid item xs={3}> 
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
        </Grid>
        <Grid item xs={3}>   
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
        </Grid>
           
            
               
               
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
             </FormControl>
             
             <FormControl fullWidth className={classes.margin}>

                <TextField
                id="conocePorOtro"
                label="ConocePorOtro"
                className={classes.textFieldObs}
                margin="normal"
                value={this.state.paciente && this.state.paciente.conocePorOtro}
                />
            </FormControl>
          </form>
    </Grid>
</div>
           

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
