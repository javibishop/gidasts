import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { render } from 'react-dom'; 
import { Panel, Tabs, Tab, FormControl, FormGroup, ControlLabel, Button, Grid, Row, Col, DropdownButton, MenuItem, Checkbox, Dropdown, Glyphicon, InputGroup } from 'react-bootstrap'; 


import { actionCreators } from '../store/Consejeria';

class ConsejeriaEdit extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
        //const buttonsInstance = (
        //    <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
        //);
    }


    componentWillMount() {
        //const { saveConsejeria } = this.props;

        // This method runs when the component is first added to the page
        const id = parseInt(this.props.match.params.id) || 0;
        this.props.newConsejeria();

        if (this.props.match.params.id > 0) {
            this.props.editConsejeria(id);
        } else {
            this.props.newConsejeria();
        }

    }
    

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleClick1() {
        
    }


    handleClick(e) {
        this.props.editConsejeria(1);

        //debugger;
        //e.preventDefault()
        //const { dispatch, consejeria } = this.props
        
        //dispatch(saveConsejeria())
    }

    handleChange(event) {
        //this.setState({ value: event.target.value });

    }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
      //const id = parseInt(nextProps.match.params.id) || 0;
      //this.props.editConsejeria(id);
      if (nextProps.consejeria)
        renderConsejeria(this.props);
    }

    onPickColor(e) {
        console.log('[onPickColor]', this.inputEl)
        this.setState({ color: this.inputEl.value });
    }

    render() {
        //const { saveConsejeria, hola } = this.props;
        const { hola } = this.props;
    return (
        <div>
            <h1>Weather consejeria</h1>
            <p>This component demonstrates fetching data from the server and working with URL parameters.</p>

            <Row className="show-grid">
                <Col xs={12} md={12}>

                    {renderConsejeria(this.props)} 
                </Col>
            </Row>
            
                

                <Row className="show-grid">
                    <Col xs={6} md={6}>
                    
                    <Button onClick={hola}>  Submit2 </Button>
                    </Col>
                </Row>
           
      </div>
    );
  }
}

function renderConsejeria(props) {
    const { handleChangeUsuaria } = props;
    return (
        <Grid className='form'>
            <Row>
                <Col xs={12} md={12}>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Datos Filiatorios">
                            <Panel header={'Borderless table Example'}>
                                <Row className="show-grid">
                                    <Col xs={6} md={6}>
                                        <ControlLabel>Nombre</ControlLabel>
                                        <FormControl
                                            id="nombre"
                                            type="text"
                                            label="Nombre"
                                            placeholder="Ingrese su nombre"
                                            value={props.consejeria.usuariaDto.nombre || ''}
                                            onChange={handleChangeUsuaria}
                                        />
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <ControlLabel>Apellido</ControlLabel>
                                        <FormControl
                                            id="apellido"
                                            type="text"
                                            label="Apellido"
                                            placeholder="Ingrese su apellido"
                                            value={props.consejeria.usuariaDto.apellido || ''}
                                            onChange={handleChangeUsuaria}
                                        />
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Edad</ControlLabel>
                                        <FormControl
                                            id="edad"
                                            type="number"
                                            label="edad"
                                            placeholder="Ingrese su Edad"
                                            value={props.consejeria.usuariaDto.edad || 0}
                                            onChange={handleChangeUsuaria}
                                        />
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Fecha Nacimiento</ControlLabel>
                                        <FormControl
                                            id="fechaNacimiento"
                                            type="date"
                                            label="Fecha Nacimiento"
                                            placeholder="Ingrese su Fecha Nacimiento"
                                            value={props.consejeria.usuariaDto.fechaNacimiento || ''}
                                            onChange={handleChangeUsuaria}
                                        />
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Nacionalidad</ControlLabel>
                                        <FormControl
                                            value={props.consejeria.usuariaDto.nacionalidadId || ''}
                                            id="nacionalidadId"
                                            onChange={handleChangeUsuaria}
                                            componentClass="select" placeholder="select">
                                            <option value="1">Argentine</option>
                                            <option value="2">Paraguaye</option>
                                            <option value="3">Boliviane</option>
                                        </FormControl>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Telefono</ControlLabel>
                                        <FormControl
                                            id="telefono"
                                            type="text"
                                            label="Telefono"
                                            placeholder="Ingrese su Telefono"
                                            value={props.consejeria.usuariaDto.telefono || ''}
                                            onChange={handleChangeUsuaria}
                                        />
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <ControlLabel>Direccion</ControlLabel>
                                        <FormControl
                                            id="direccion"
                                            type="text"
                                            label="direccion"
                                            placeholder="Ingrese su Direccion"
                                            value={props.consejeria.usuariaDto.direccion || ''}
                                            onChange={handleChangeUsuaria}
                                        />
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <FormGroup>
                                            <Checkbox checked={props.consejeria.usuariaDto.usuarioCentroSalud || ''} onChange={handleChangeUsuaria}>Usuaria del Centro de Salud</Checkbox>
                                        </FormGroup>

                                        <FormGroup>
                                            <ControlLabel>Situacion de Pareja</ControlLabel>
                                            <Checkbox id="parejaConViviente" checked={props.consejeria.usuariaDto.parejaConViviente || ''} onChange={handleChangeUsuaria}>Pareja Conviviente</Checkbox>
                                            <Checkbox id="sinPareja" checked={props.consejeria.usuariaDto.sinPareja || ''} onChange={handleChangeUsuaria}>Sin Pareja</Checkbox>
                                            <Checkbox id="parejaNoConViviente" checked={props.consejeria.usuariaDto.parejaNoConViviente || ''} onChange={handleChangeUsuaria}>Pareja no Conviviente</Checkbox>
                                        </FormGroup>


                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Como conoce la Consejeria</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="conocePorConocido" checked={props.consejeria.usuariaDto.conocePorConocido || ''} onChange={handleChangeUsuaria}>Pareja/Familiar/Amigo</Checkbox>
                                            <Checkbox id="conocePorUS" checked={props.consejeria.usuariaDto.conocePorUS || ''} onChange={handleChangeUsuaria}>Personal de la US</Checkbox>
                                            <Checkbox id="conocePorOrganizacion" checked={props.consejeria.usuariaDto.conocePorOrganizacion || ''} onChange={handleChangeUsuaria}>Organizacion Social</Checkbox>
                                            <Checkbox id="conocePorReferente" checked={props.consejeria.usuariaDto.conocePorReferente || ''} onChange={handleChangeUsuaria}>Referente Comunitario</Checkbox>
                                            <Checkbox id="conocePorMedios" checked={props.consejeria.usuariaDto.conocePorMedios || ''} onChange={handleChangeUsuaria}>Medios de Comunicacion</Checkbox>
                                            <Checkbox id="conocePorUsuarioConcejeria" checked={props.consejeria.usuariaDto.conocePorUsuarioConcejeria || ''} onChange={handleChangeUsuaria}>Otra usuaria de la Consejeria</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel></ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="conocePorInsititucionSalud" checked={props.consejeria.usuariaDto.conocePorInsititucionSalud || ''} onChange={handleChangeUsuaria}>Otra Institucion de Salud</Checkbox>
                                            <FormControl
                                                id="conocePorInsititucionSaludObs"
                                                type="text"
                                                label=""
                                                placeholder="Otra Institucion de Salud?"
                                                value={props.consejeria.usuariaDto.conocePorInsititucionSaludObs || ''}
                                                onChange={handleChangeUsuaria}
                                            />
                                            <ControlLabel>Otros</ControlLabel>
                                            <FormControl
                                                componentClass="textarea"
                                                id="conocePorOtro"
                                                type="text"
                                                label=""
                                                placeholder="Otra Institucion de Salud?"
                                                value={props.consejeria.usuariaDto.conocePorOtro || ''}
                                                onChange={handleChangeUsuaria}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={6} md={6}>
                                        <ControlLabel>Mayor Nivel de Instruccion</ControlLabel>
                                        <FormControl
                                            value={props.consejeria.usuariaDto.nivelInstruccion || ''}
                                            id="nivelInstruccion"
                                            onChange={handleChangeUsuaria}
                                            componentClass="select" placeholder="select">
                                            <option value="1">Primario</option>
                                            <option value="2">Secundario</option>
                                            <option value="3">Terciario</option>
                                            <option value="4">Universitario</option>
                                        </FormControl>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <ControlLabel>Alcance</ControlLabel>
                                        <FormControl
                                            value={props.consejeria.usuariaDto.nivelInstruccionEstado || ''}
                                            id="nivelInstruccionEstado"
                                            onChange={handleChangeUsuaria}
                                            componentClass="select" placeholder="select">
                                            <option value="1">Completo</option>
                                            <option value="2">En Curso</option>
                                            <option value="3">Incompleto</option>
                                        </FormControl>
                                    </Col>
                                </Row>
                            </Panel>
                        </Tab>
                        <Tab eventKey={2} title="Antecedentes">
                            <Panel header={'Borderless table Example'}>
                                <Col xs={4} md={4}>
                                    <ControlLabel>Como conoce la Consejeria</ControlLabel>

                                </Col>

                            </Panel>
                        </Tab>
                        <Tab eventKey={3} title="Gesta Actual">
                            <Panel header={'Borderless table Example'}>
                                ssss

                            </Panel>
                        </Tab>
                        <Tab eventKey={4} title="Estudios Complementarios">
                            <Panel header={'Borderless table Example'}>
                                ssss

                            </Panel>
                        </Tab>
                        <Tab eventKey={5} title="Entrevista Post Aborto">
                            <Panel header={'Borderless table Example'}> 
                                ssss

                            </Panel>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>



        </Grid>
        //<div className='editor'>
        //    {props.isLoading ? <span>Cargando datos...</span> : []}
        //    <div>Nombre</div>
        //    <div>{props.consejeriaDto.nombre}</div>
        //</div>
    );
}

function renderPagination(props) {
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return <p className='clearfix text-center'>
    <Link className='btn btn-default pull-left' to={`/fetchdata/${prevStartDateIndex}`}>Previous</Link>
    <Link className='btn btn-default pull-right' to={`/fetchdata/${nextStartDateIndex}`}>Next</Link>
    {props.isLoading ? <span>Loading...</span> : []}
  </p>;
}
//const mapDispatchToProps = (dispatch, ownProps) => ({
//    //handleSubmit: () => dispatch(saveConsejeria(ownProps.formName))
//    //handleSubmit: () => dispatch({ type: 'NAME_CHANGED', payload: name }),
//})

//const mapStateToProps = (state)  => ({
//    state : state.consejeriaDto
//})

//export default connect(mapStateToProps, mapDispatchToProps)(ConsejeriaEdit);



export default connect(
    state => state.consejeria,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ConsejeriaEdit);
