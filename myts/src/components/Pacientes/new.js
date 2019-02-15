

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from 'react-redux';
import { agregarConsejeria } from '../data/actionCreators';

import store from '../data/store';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const nacionalidades = [
  {
    value: '0',
    label: 'Argentina',
  },
  {
    value: '1',
    label: 'Uruguaya',
  },
  {
    value: '2',
    label: 'Venezolana',
  },
];

const cogestante = [
  {
    value: '0',
    label: 'Conviviente',
  },
  {
    value: '1',
    label: 'No Conviviente',
  },
  {
    value: '2',
    label: 'Sin Pareja',
  },
];

const nivelEstudio = [
  {
    value: '0',
    label: 'Sin Estudios',
  },
  {
    value: '1',
    label: 'Primario',
  },
  {
    value: '2',
    label: 'Secundario',
  },
  {
    value: '3',
    label: 'Terciario',
  },
  {
    value: '4',
    label: 'Universitario'
  },
];

const nivelEstudioAlcanzado = [
  {
    value: '0',
    label: 'Completo',
  },
  {
    value: '1',
    label: 'En Curso',
  },
  {
    value: '2',
    label: 'Incompleto',
  }
];

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '90%',
  },
  textField: {
    marginLeft: theme.spacing.unit * 10,
    marginRight: theme.spacing.unit,
    width: '90%'
  },
  textFieldFecha: {
    marginLeft: theme.spacing.unit * 10,
    marginRight: theme.spacing.unit,
    width: '80%'
  },
  
  group: {
    color: green[600],
    marginLeft: theme.spacing.unit * 5,
    '&$checked': {
      color: green[600]
    }
  },
  row: {
    flexGrow: 1,
    color: green[600]
  },
  divider:{
    marginLeft: theme.spacing.unit * 10,
    color:grey[900],
    backgroundColor:grey[900],
    width: '95%'
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
  }
});



class PacienteNew extends React.Component {
  state = {
    value: 0
  };

  constructor(props){
        super(props);
        this.state = {paciente : []};
      }

  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

  // handleChangeIndex = index => {
  //   this.setState({ value: index });
  // };

  handleChangeCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  // addPaciente(consejeria){
  //   store.dispatch(agregarConsejeria(consejeria))
  // };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth>
            <Tab label="Datos Filiatorios" />
            <Tab label="Antecedentes Personales y Ginecologicos" />
            <Tab label="Gesta Actual" />
            <Tab label="Estudios Complementarios" />
            <Tab label="Entrevista Post Aborto" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir={theme.direction}>
            <form className={classes.container} noValidate autoComplete="off">
              <TabContainer dir={theme.direction}>
                <Grid container spacing={24}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="nombre"
                      label="Nombre"
                      className={classes.textField}
                      value={this.state.paciente && this.state.paciente.nombre}
                      //   onChange={this.handleChange('nombre')}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="apellido"
                      label="Apellido"
                      value={this.state.paciente && this.state.paciente.apellido}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      required
                      id="edad"
                      label="Edad"
                      className={classes.textField}
                      value={this.state.paciente && this.state.paciente.edad}
                    />
                  </Grid>
                  <Grid item xs={3} >
                    <TextField 
                      id="fechaNacimiento"
                      label="Fecha de Nacimiento"
                      type="date"
                      // defaultValue="2017-05-24"
                      value={this.state.paciente && this.state.paciente.fechaNacimiento}
                      className={classes.textFieldFecha}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      select
                      label="Nacionalidad"
                      className={classes.textField}
                      value={this.state.paciente && this.state.paciente.nacionalidad}
                    // onChange={this.handleChange('weightRange')}
                    // InputProps={{
                    //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                    // }}
                    >
                      {nacionalidades.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      id="documento"
                      label="Documento"
                      className={classes.textFieldFecha}
                      value={this.state.paciente && this.state.paciente.documento}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="direccion"
                      label="Direccion"
                      className={classes.textField}
                      value={this.state.paciente && this.state.paciente.direccion}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="telefono"
                      label="Telefono"
                      className={classes.textField}
                      value={this.state.paciente && this.state.paciente.telefono}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel control={
                      <Checkbox
                        checked={this.state.checkedG}
                        // onChange={this.handleChange('checkedG')}
                        value={this.state.paciente && this.state.paciente.usuarioCentroSalud}
                        classes={{
                          root: classes.check,
                          checked: classes.checked
                        }} />
                    }
                      label="Usuaria del Centro de Salud?"
                    />
                  </Grid>
                  
                  {/* <Grid item xs={12}>
                  <Divider className={classes.divider} style={{ padding: '0.05em' }} />
                </Grid> */}
                </Grid>
                <Grid container spacing={24}>
                  <Grid item lg={12}>
                    <FormLabel component="legend" className={classes.textField}> Como conoce la concejeria?</FormLabel>
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkedG}
                          onChange={this.handleChangeCheck('checkedG')}
                          value={this.state.paciente && this.state.paciente.conocePorConocido}
                          classes={{
                            root: classes.check,
                            checked: classes.checked,
                          }}
                        />
                      } label="Pareja/Familiar/Amigo?"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkedG}
                          onChange={this.handleChangeCheck('checkedG')}
                          value={this.state.paciente && this.state.paciente.conocePorUS}
                          classes={{
                            root: classes.check,
                            checked: classes.checked,
                          }}
                        />
                      } label="Personal de la US?"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkedG}
                          onChange={this.handleChangeCheck('checkedG')}
                          value={this.state.paciente && this.state.paciente.conocePorOrganizacion}
                          classes={{
                            root: classes.check,
                            checked: classes.checked,
                          }}
                        />
                      } label="Organizacion Social?"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkedG}
                          onChange={this.handleChangeCheck('checkedG')}
                          value={this.state.paciente && this.state.paciente.conocePorReferente}
                          classes={{
                            root: classes.check,
                            checked: classes.checked,
                          }}
                        />
                      } label="Referente Comunitario?"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkedG}
                          onChange={this.handleChangeCheck('checkedG')}
                          value={this.state.paciente && this.state.paciente.conocePorMedios}
                          classes={{
                            root: classes.check,
                            checked: classes.checked,
                          }}
                        />
                      } label="Medios de Comunicacion?"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel variant="caption"
                      control={
                        <Checkbox
                          checked={this.state.checkedG}
                          onChange={this.handleChangeCheck('checkedG')}
                          value={this.state.paciente && this.state.paciente.conocePorUsuarioConcejeria}
                          classes={{
                            root: classes.check,
                            checked: classes.checked,
                          }}
                        />
                      } label="Otra usuaria de la Consejeria?"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkedG}
                          onChange={this.handleChangeCheck('checkedG')}
                          value={this.state.paciente && this.state.paciente.conocePorInsititucionSalud}
                          classes={{
                            root: classes.check,
                            checked: classes.checked,
                          }}
                        />
                      } label="Otra Institucion?"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id="direccion"
                      label="Cual Institucion?"
                      className={classes.textField}
                      value={this.state.paciente && this.state.paciente.conocePorInsititucionSaludObs}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="direccion"
                      label="Otro Comentario?"
                      className={classes.textField}
                      value={this.state.paciente && this.state.paciente.conocePorOtro}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={24}>
                {/* <Grid item xs={12}>
                  <Divider className={classes.divider} style={{ padding: '0.05em' }} />
                </Grid> */}
                <Grid item xs={12}>
                </Grid>
                  <Grid item xs={4}>
                    <TextField
                      select
                      label="Cogestante"
                      className={classes.textField}
                      value={this.state.paciente && this.state.paciente.cogestante}
                    // onChange={this.handleChange('weightRange')}
                    // InputProps={{
                    //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                    // }}
                    >
                      {cogestante.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    {/* <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      className={classes.group}
                      value={this.state.value}
                      onChange={this.handleChange}>
                      <FormControlLabel value={this.state.paciente && this.state.paciente.parejaConViviente} control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="Conviviente" />
                      <FormControlLabel value={this.state.paciente && this.state.paciente.parejaNoConViviente} control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="No Conviviente" />
                      <FormControlLabel value={this.state.paciente && this.state.paciente.sinPareja} control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="Sin Pareja" />
                    </RadioGroup> */}
                  </Grid>
                  
                  <Grid item xs={4}>
                    {/* <FormLabel component="legend" className={classes.textField}>Mayor Nivel de Instruccion</FormLabel>
                    <Grid container>
                      <Grid item xs={6}>
                        <RadioGroup
                          aria-label="Gender"
                          name="gender1"
                          className={classes.group}
                          value={this.state.value}
                          onChange={this.handleChange}>
                          <FormControlLabel value={this.state.paciente && this.state.paciente.sinPareja} control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="Primario" />
                          <FormControlLabel value={this.state.paciente && this.state.paciente.sinPareja} control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="Secundario" />
                          <FormControlLabel value={this.state.paciente && this.state.paciente.sinPareja} control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="Terciario" />
                          <FormControlLabel value={this.state.paciente && this.state.paciente.sinPareja} control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="Universitario" />
                        </RadioGroup> */}
                           <TextField
                            select
                            label="Nivel de Estudios"
                            className={classes.textField}
                            value={this.state.paciente && this.state.paciente.nivelInstruccion}
                          // onChange={this.handleChange('weightRange')}
                          // InputProps={{
                          //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                          // }}
                          >
                            {nivelEstudio.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                      </Grid>
                      <Grid item xs={4}>
                      <TextField
                            select
                            label="Estudios en estado?"
                            className={classes.textField}
                            value={this.state.paciente && this.state.paciente.nivelInstruccionEstado}
                          // onChange={this.handleChange('weightRange')}
                          // InputProps={{
                          //     startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                          // }}
                          >
                            {nivelEstudio.map(option => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        {/* <RadioGroup
                          aria-label="Gender"
                          name="gender1"
                          className={classes.group}
                          value={this.state.value}
                          onChange={this.handleChange}>
                          <FormControlLabel value="female" control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="Completo" />
                          <FormControlLabel value="male" control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="Incompleto" />
                          <FormControlLabel value="other" control={<Radio classes={{ root: classes.group, checked: classes.checked }} />} label="En Curso" />
                        </RadioGroup> */}
                      </Grid>
                    </Grid>
              </TabContainer>
            </form>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container spacing={24}>

            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>3</TabContainer>
          <TabContainer dir={theme.direction}>4</TabContainer>
          <TabContainer dir={theme.direction}>5</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}


// handleChange = (event, value) => {
//   this.setState({ value });
// };

// handleChangeIndex = index => {
//   this.setState({ value: index });
// };

// handleChangeCheck = name => event => {
//   this.setState({ [name]: event.target.checked });
// };

// addPaciente(consejeria){
//   store.dispatch(agregarConsejeria(consejeria))
// };

const mapStateToProps = state => {
  return{
    consejerias: state.consejerias
  };
}

const mapDispatchToProps =  dispatch =>{
  return {
    agregarConsejeria(consejeria){
      dispatch(agregarConsejeria(consejeria))
    }
    // ,
    // getNewProduct(){
    //   dispatch(getNewProduct())
    // }
  };
}


// PacienteNew.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

//export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default withStyles(styles, { withTheme: true })(PacienteNew);
