// import React, { Component } from 'react';

// class PacientesView extends Component {
//     constructor(props){
//         super(props);
//         this.state = {paciente : null};
//       }

//       componentDidMount(){
//           const {match : {params}} = this.props;
//           if(params.id > 0){
//             fetch('http://localhost:58764/api/pacientes/'+ params.id)
//             .then(response => response.json())
//             .then(paciente => this.setState({paciente}))
//           }
//       }

      

//     render(){
//         return(
//             <div className="PacientesList">
//                 <h1>
//                     {this.state.paciente && this.state.paciente.nombre}
//                     {this.state.paciente && this.state.paciente.apellido}
//                 </h1>
                
//             </div>
//         );
//     }
// }

// export default PacientesView;


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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

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
  group: {
    color: green[600],
    marginLeft: theme.spacing.unit * 5,
    '&$checked': {
      color: green[600]
  }},
  row: {
    flexGrow: 1,
    color: green[600]
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

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleChangeCheck = name => event => {
    this.setState({ [name]: event.target.checked });
  };

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
            fullWidth
          >
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
          onChangeIndex={this.handleChangeIndex}
        >
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
              className={classes.textField}
              value={this.state.paciente && this.state.paciente.edad}
            />
        </Grid>
        <Grid item xs={4} >
            <TextField className={classes.container}
                id="fechaNacimiento"
                label="fechaNacimiento"
                type="date"
                defaultValue="2017-05-24"
                value={this.state.paciente && this.state.paciente.fechaNacimiento}
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
        </Grid>
        <Grid item xs={4}>
            <TextField
            select
            label="Nacionalidad"
            className={classes.textField}
            value={this.state.weightRange}
            // onChange={this.handleChange('weightRange')}
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
        <Grid item xs={4}>
            <TextField
                id="direccion"
                label="Direccion"
                className={classes.textField}
                value={this.state.paciente && this.state.paciente.direccion}
                />
        </Grid>
        <Grid item xs={4}>
            <TextField
                id="telefono"
                label="Telefono"
                className={classes.textField}
                value={this.state.paciente && this.state.paciente.telefono}
            />
        </Grid>
        <Grid item xs={4}>   
            <FormControlLabel control={
                    <Checkbox
                    checked={this.state.checkedG}
                    // onChange={this.handleChange('checkedG')}
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
          <FormLabel component="legend" className={classes.textField}>Situacion de Pareja</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}>
            <FormControlLabel value="female" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="Conviviente" />
            <FormControlLabel value="male" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="No Conviviente" />
            <FormControlLabel value="other" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="Sin" />
          </RadioGroup>
          </Grid>
          <Grid item xs={3}>   
            <FormLabel component="legend" className={classes.textField}>Mayor Nivel de Instruccion</FormLabel>
            <Grid container>
              <Grid item xs={6}>   
                <RadioGroup
                  aria-label="Gender"
                  name="gender1"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <FormControlLabel value="female" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="Primario" />
                  <FormControlLabel value="male" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="Secundario" />
                  <FormControlLabel value="other" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="Terciario" />
                  <FormControlLabel value="female" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="Universitario" />
                </RadioGroup>
              </Grid>
              <Grid item xs={6}>   
                <RadioGroup
                  aria-label="Gender"
                  name="gender1"
                  className={classes.group}
                  value={this.state.value}
                  onChange={this.handleChange}>
                  <FormControlLabel value="female" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="Completo" />
                  <FormControlLabel value="male" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="Incompleto" />
                  <FormControlLabel value="other" control={<Radio classes={{root: classes.group, checked: classes.checked}} />} label="En Curso" />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>   
              <FormControlLabel
                  control={
                      <Checkbox
                      checked={this.state.checkedG}
                      onChange={this.handleChangeCheck('checkedG')}
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

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
