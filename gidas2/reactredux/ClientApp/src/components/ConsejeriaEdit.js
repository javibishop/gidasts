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
    const { handleChangeUsuaria, handleChangeAntecedente, handleChangeGestaActual, handleChangeEstudioComplementario } = props;
    return (
        <Grid className='form'>
            <Row>
                <Col xs={12} md={12}>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Datos Filiatorios">
                            <Panel header={'Datos correspondiente a la Usuaria'}>
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
                            <Panel header={'Antecedentes Personales y Ginecologicos'}>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel></ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="gestas" checked={props.consejeria.antecedenteDto.gestas || ''} onChange={handleChangeAntecedente}>Gestas</Checkbox> 
                                            <Checkbox id="partosVaginal" checked={props.consejeria.antecedenteDto.partosVaginal || ''} onChange={handleChangeAntecedente}>Parto Vaginal</Checkbox>
                                            <Checkbox id="cesareas" checked={props.consejeria.antecedenteDto.cesareas || ''} onChange={handleChangeAntecedente}>Cesareas</Checkbox>
                                            <Checkbox id="abortoEspontaneo" checked={props.consejeria.antecedenteDto.abortoEspontaneo || ''} onChange={handleChangeAntecedente}>Aborto Espontaneo</Checkbox>
                                            <Checkbox id="abortoVoluntario" checked={props.consejeria.antecedenteDto.abortoVoluntario || ''} onChange={handleChangeAntecedente}>Aborto Voluntario</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Mac Habitual</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="mACNoUsa" checked={props.consejeria.antecedenteDto.mACNoUsa || ''} onChange={handleChangeAntecedente}>No Usa</Checkbox>
                                            <Checkbox id="mACACO" checked={props.consejeria.antecedenteDto.mACACO || ''} onChange={handleChangeAntecedente}>ACO</Checkbox>
                                            <Checkbox id="mACACI" checked={props.consejeria.antecedenteDto.mACACI || ''} onChange={handleChangeAntecedente}>ACI</Checkbox>
                                            <Checkbox id="mACDIU" checked={props.consejeria.antecedenteDto.mACDIU || ''} onChange={handleChangeAntecedente}>DIU</Checkbox>
                                            <Checkbox id="mACPreservativo" checked={props.consejeria.antecedenteDto.mACPreservativo || ''} onChange={handleChangeAntecedente}>Preservativo</Checkbox>
                                            <Checkbox id="mACImplanteHormonal" checked={props.consejeria.antecedenteDto.mACImplanteHormonal || ''} onChange={handleChangeAntecedente}>Implante Hormonal</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Causa</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="noUsoMAC" checked={props.consejeria.antecedenteDto.noUsoMAC || ''} onChange={handleChangeAntecedente}>No Uso</Checkbox>
                                            <Checkbox id="falloMAC" checked={props.consejeria.antecedenteDto.falloMAC || ''} onChange={handleChangeAntecedente}>Fallo</Checkbox>
                                            <Checkbox id="aHEMAC" checked={props.consejeria.antecedenteDto.aHEMAC || ''} onChange={handleChangeAntecedente}>AHE?</Checkbox>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={12} md={12}>
                                        <ControlLabel>Antecedentes de relevancia</ControlLabel>
                                        <FormControl
                                            componentClass="textarea"
                                            id="observaciones"
                                            type="text"
                                            label=""
                                            placeholder="Otra Institucion de Salud?"
                                            value={props.consejeria.antecedenteDto.observaciones || ''}
                                            onChange={handleChangeAntecedente}
                                        />
                                    </Col>
                                </Row>
                            </Panel>
                        </Tab>
                        <Tab eventKey={3} title="Gesta Actual">
                            <Panel header={'Datos correspondientes a la Gesta Actual'}>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Como se entero</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="enteroPorTestOrina" checked={props.consejeria.gestaActualDto.enteroPorTestOrina || ''} onChange={handleChangeGestaActual}>Test de orina</Checkbox>
                                            <Checkbox id="enteroPorTestSangre" checked={props.consejeria.gestaActualDto.enteroPorTestSangre || ''} onChange={handleChangeGestaActual}>Test de sangre</Checkbox>
                                            <Checkbox id="enteroPorEcografia" checked={props.consejeria.gestaActualDto.enteroPorEcografia || ''} onChange={handleChangeGestaActual}>Ecografia</Checkbox>
                                            <FormControl
                                                id="fUM"
                                                type="text"
                                                label="fUM"
                                                placeholder="fUM"
                                                value={props.consejeria.gestaActualDto.fUM || ''}
                                                onChange={handleChangeGestaActual}
                                            />

                                            <FormControl
                                                id="eGFUM"
                                                type="text"
                                                label="eGFUM"
                                                placeholder="eGFUM"
                                                value={props.consejeria.gestaActualDto.eGFUM || ''}
                                                onChange={handleChangeGestaActual}
                                            />
                                            <FormControl
                                                id="enteroFecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.gestaActualDto.enteroFecha || ''}
                                                onChange={handleChangeGestaActual}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Intento suprimir embarazo?</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="intentoSuprimir" checked={props.consejeria.gestaActualDto.intentoSuprimir || ''} onChange={handleChangeGestaActual}>Si/No</Checkbox>
                                            <FormControl
                                                componentClass="textarea"
                                                id="intentoSuprimirObservaciones"
                                                type="text"
                                                label=""
                                                placeholder="Como lo intento?"
                                                value={props.consejeria.gestaActualDto.intentoSuprimirObservaciones || ''}
                                                onChange={handleChangeGestaActual}
                                            />
                                            <Checkbox id="lactancia" checked={props.consejeria.gestaActualDto.lactancia || ''} onChange={handleChangeGestaActual}>Lactancia?</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Pudo contarle a alguien?</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="loComento" checked={props.consejeria.gestaActualDto.loComento || ''} onChange={handleChangeGestaActual}>Si/No</Checkbox>
                                            <FormControl
                                                componentClass="textarea"
                                                id="loComentoAQuien"
                                                type="text"
                                                label=""
                                                placeholder="A quien?"
                                                value={props.consejeria.gestaActualDto.loComentoAQuien || ''}
                                                onChange={handleChangeGestaActual}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Causal????</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="iLE" checked={props.consejeria.gestaActualDto.iLE || ''} onChange={handleChangeGestaActual}>ILE?</Checkbox>
                                            <Checkbox id="causaViolacion" checked={props.consejeria.gestaActualDto.causaViolacion || ''} onChange={handleChangeGestaActual}>Violacion</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Causal Salud</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="causaSaludFisica" checked={props.consejeria.gestaActualDto.causaSaludFisica || ''} onChange={handleChangeGestaActual}>Salud Fisica</Checkbox>
                                            <Checkbox id="causaSaludPSI" checked={props.consejeria.gestaActualDto.causaSaludPSI || ''} onChange={handleChangeGestaActual}>Salud PSI</Checkbox>
                                            <Checkbox id="causaSaludSocial" checked={props.consejeria.gestaActualDto.causaSaludSocial || ''} onChange={handleChangeGestaActual}>Salud Social</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Causal sin visibilidad extra.</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="causaSinVE" checked={props.consejeria.gestaActualDto.causaSinVE || ''} onChange={handleChangeGestaActual}>causaSinVE</Checkbox>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row className="show-grid">
                                    <Col xs={6} md={6}>
                                        <ControlLabel>Contraindicacion uso MSP</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="cUMSPACO" checked={props.consejeria.gestaActualDto.cUMSPACO || ''} onChange={handleChangeGestaActual}>Trastorno coagulacion/ACO</Checkbox>
                                            <Checkbox id="cUMSPDisfuncionHepaticaSevera" checked={props.consejeria.gestaActualDto.cUMSPDisfuncionHepaticaSevera || ''} onChange={handleChangeGestaActual}>Disfuncion hepatica severa</Checkbox>
                                            <Checkbox id="cUMSPEmbarazoEctopico" checked={props.consejeria.gestaActualDto.cUMSPEmbarazoEctopico || ''} onChange={handleChangeGestaActual}>Embarazo ectopico</Checkbox>
                                            <Checkbox id="cUMSPAlergiaMisoDiclo" checked={props.consejeria.gestaActualDto.cUMSPAlergiaMisoDiclo || ''} onChange={handleChangeGestaActual}>Alergia a miso/diclo</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={6} md={6}>
                                        <ControlLabel>Factor de riesgo para realizar procedimiento</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="factorRiesgoHb7" checked={props.consejeria.gestaActualDto.factorRiesgoHb7 || ''} onChange={handleChangeGestaActual}>Hb 7</Checkbox>
                                            <Checkbox id="factorRiesgoCardiopatia" checked={props.consejeria.gestaActualDto.factorRiesgoCardiopatia || ''} onChange={handleChangeGestaActual}>Cardiopatia</Checkbox>
                                            <Checkbox id="factorRiesgoDIU" checked={props.consejeria.gestaActualDto.factorRiesgoDIU || ''} onChange={handleChangeGestaActual}>DIU</Checkbox>
                                            <Checkbox id="factorRiesgoCardiovascular" checked={props.consejeria.gestaActualDto.factorRiesgoCardiovascular || ''} onChange={handleChangeGestaActual}>Riesgo cardiovascular</Checkbox>
                                            <Checkbox id="factorRiesgoCorticoterapia" checked={props.consejeria.gestaActualDto.factorRiesgoCorticoterapia || ''} onChange={handleChangeGestaActual}>Corticoterapia prolongada</Checkbox>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Panel>
                        </Tab>
                        <Tab eventKey={4} title="Estudios Complementarios">
                            <Panel header={'Otros estudios realizados'}>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Eco 1</ControlLabel>
                                        <FormGroup>
                                            <FormControl
                                                id="eco1Fecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.gestaActualDto.eco1Fecha || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="eco1EG"
                                                type="text"
                                                label="eco1EG"
                                                placeholder="eco1EG"
                                                value={props.consejeria.gestaActualDto.eco1EG || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Checkbox id="eco1LFC" checked={props.consejeria.gestaActualDto.eco1LFC || ''} onChange={handleChangeEstudioComplementario}>eco1LFC</Checkbox>
                                            <Checkbox id="eco1Embrion" checked={props.consejeria.gestaActualDto.eco1Embrion || ''} onChange={handleChangeEstudioComplementario}>eco1Embrion</Checkbox>
                                            <Checkbox id="eco1Saco" checked={props.consejeria.gestaActualDto.eco1Saco || ''} onChange={handleChangeEstudioComplementario}>eco1Saco</Checkbox>
                                            <FormControl
                                                id="eco1Ubicacion"
                                                type="text"
                                                label="eco1Ubicacion"
                                                placeholder="eco1Ubicacion"
                                                value={props.consejeria.gestaActualDto.eco1Ubicacion || ''}
                                                onChange={handleChangeUsuaria}
                                            />
                                            <Checkbox id="eco1Normoincerto" checked={props.consejeria.gestaActualDto.eco1Normoincerto || ''} onChange={handleChangeEstudioComplementario}>eco1Normoincerto</Checkbox>
                                            <Checkbox id="eco1Ectopico" checked={props.consejeria.gestaActualDto.eco1Ectopico || ''} onChange={handleChangeEstudioComplementario}>eco1Ectopico</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Eco 2</ControlLabel>
                                        <FormGroup>
                                            <FormControl
                                                id="eco2Fecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.gestaActualDto.eco2Fecha || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="eco2EG"
                                                type="text"
                                                label="eco2EG"
                                                placeholder="eco2EG"
                                                value={props.consejeria.gestaActualDto.eco2EG || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Checkbox id="eco2LFC" checked={props.consejeria.gestaActualDto.eco2LFC || ''} onChange={handleChangeEstudioComplementario}>eco2LFC</Checkbox>
                                            <Checkbox id="eco2Embrion" checked={props.consejeria.gestaActualDto.eco2Embrion || ''} onChange={handleChangeEstudioComplementario}>eco2Embrion</Checkbox>
                                            <Checkbox id="eco2Saco" checked={props.consejeria.gestaActualDto.eco2Saco || ''} onChange={handleChangeEstudioComplementario}>eco2Saco</Checkbox>
                                            <FormControl
                                                id="eco2Ubicacion"
                                                type="text"
                                                label="eco2Ubicacion"
                                                placeholder="eco2Ubicacion"
                                                value={props.consejeria.gestaActualDto.eco2Ubicacion || ''}
                                                onChange={handleChangeUsuaria}
                                            />
                                            <Checkbox id="eco2Normoincerto" checked={props.consejeria.gestaActualDto.eco2Normoincerto || ''} onChange={handleChangeEstudioComplementario}>eco2Normoincerto</Checkbox>
                                            <Checkbox id="eco2Ectopico" checked={props.consejeria.gestaActualDto.eco2Ectopico || ''} onChange={handleChangeEstudioComplementario}>eco2Ectopico</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Laboratorio</ControlLabel>
                                        <FormGroup>
                                            <FormControl
                                                id="labFecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.gestaActualDto.labFecha || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="labGB"
                                                type="text"
                                                label="labGB"
                                                placeholder="labGB"
                                                value={props.consejeria.gestaActualDto.labGB || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="labGR"
                                                type="text"
                                                label="labGR"
                                                placeholder="labGR"
                                                value={props.consejeria.gestaActualDto.labGR || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="labHb"
                                                type="text"
                                                label="labHb"
                                                placeholder="labHb"
                                                value={props.consejeria.gestaActualDto.labHb || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="labGB"
                                                type="text"
                                                label="labGB"
                                                placeholder="labGB"
                                                value={props.consejeria.gestaActualDto.labGB || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="labGB"
                                                type="text"
                                                label="labGB"
                                                placeholder="labGB"
                                                value={props.consejeria.gestaActualDto.labGB || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="labHto"
                                                type="text"
                                                label="labHto"
                                                placeholder="labHto"
                                                value={props.consejeria.gestaActualDto.labHto || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="labGrupo"
                                                type="text"
                                                label="labGrupo"
                                                placeholder="labGrupo"
                                                value={props.consejeria.gestaActualDto.labGrupo || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <FormControl
                                                id="labRh"
                                                type="text"
                                                label="labRh"
                                                placeholder="labRh"
                                                value={props.consejeria.gestaActualDto.labRh || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

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
