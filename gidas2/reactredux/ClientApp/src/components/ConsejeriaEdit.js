import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { render } from 'react-dom'; 
import { Panel, Tabs, Tab, FormControl, FormGroup, ControlLabel, Button, Grid, Row, Col, Label, MenuItem, Checkbox, Dropdown, Glyphicon, InputGroup } from 'react-bootstrap'; 


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
        
        event.preventDefault();
        this.props.saveUsuaria(this.props.consejeria.usuariaDto);
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
        const { saveUsuaria } = this.props;
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

                    
                    </Col>
                </Row>
           
      </div>
    );
  }
}

function renderConsejeria(props) {
    const { handleChangeUsuaria, handleChangeAntecedente, handleChangeGestaActual, handleChangeEstudioComplementario, handleChangeEntrevista,
        saveUsuaria, saveAntecedente, saveGestaActual, saveEstudioComplementario, saveEntrevista } = props;
    return (
        <Grid className='form'>
            <Row>
                <Col xs={12} md={12}>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Datos Filiatorios">
                            <Panel header={'Datos correspondiente a la Usuaria'}>
                                <Row className="show-grid">
                                    <Col xs={6} md={6}>
                                        <Label>Nombre</Label>
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
                                        <Label>Apellido</Label>
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
                                        <Label>Edad</Label>
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
                                        <Label>Fecha Nacimiento</Label>
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
                                        <Label>Nacionalidad</Label>
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
                                        <Label>Telefono</Label>
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
                                        <Label>Direccion</Label>
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
                                            <Label>Otros</Label>
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
                                        <Label>Mayor Nivel de Instruccion</Label>
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
                                        <Label>Alcance</Label>
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
                                <Row>
                                    <Button onClick={() => { props.consejeria.usuariaDto.consejeriaId = props.consejeria.consejeriaDto.id; saveUsuaria(props.consejeria.usuariaDto) }}>  Guardar </Button>
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
                                        <Label>Antecedentes de relevancia</Label>
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

                                <Row>
                                    <Button onClick={() => { props.consejeria.antecedenteDto.consejeriaId = props.consejeria.consejeriaDto.id; saveAntecedente(props.consejeria.antecedenteDto) }}>  Guardar </Button>
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
                                            <Label>FUM</Label>
                                            <FormControl
                                                id="fUM"
                                                type="text"
                                                label="FUM"
                                                placeholder="FUM"
                                                value={props.consejeria.gestaActualDto.fUM || ''}
                                                onChange={handleChangeGestaActual}
                                            />
                                            <Label>GFUM</Label>
                                            <FormControl
                                                id="eGFUM"
                                                type="text"
                                                label="GFUM"
                                                placeholder="GFUM"
                                                value={props.consejeria.gestaActualDto.eGFUM || ''}
                                                onChange={handleChangeGestaActual}
                                            />
                                            <Label>Fecha en la que se entero</Label>
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
                                            <Label>Como lo intento?</Label>
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
                                            <Label>A quien se lo comento?</Label>
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
                                            <Checkbox id="causaSinVE" checked={props.consejeria.gestaActualDto.causaSinVE || ''} onChange={handleChangeGestaActual}>Si/No</Checkbox>
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
                                <Row>
                                    <Button onClick={() => { props.consejeria.gestaActualDto.consejeriaId = props.consejeria.consejeriaDto.id; saveGestaActual(props.consejeria.gestaActualDto); }}>  Guardar </Button>
                                </Row>
                            </Panel>
                        </Tab>
                        <Tab eventKey={4} title="Estudios Complementarios">
                            <Panel header={'Otros estudios realizados'}>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Eco 1</ControlLabel>
                                        <FormGroup>
                                            <Label>Fecha de realizacion</Label>
                                            <FormControl
                                                id="eco1Fecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.estudioComplementarioDto.eco1Fecha || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Label>EG</Label>
                                            <FormControl
                                                id="eco1EG"
                                                type="text"
                                                label="EG"
                                                placeholder="EG"
                                                value={props.consejeria.estudioComplementarioDto.eco1EG || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Checkbox id="eco1LFC" checked={props.consejeria.estudioComplementarioDto.eco1LFC || ''} onChange={handleChangeEstudioComplementario}>LFC</Checkbox>
                                            <Checkbox id="eco1Embrion" checked={props.consejeria.estudioComplementarioDto.eco1Embrion || ''} onChange={handleChangeEstudioComplementario}>Embrion</Checkbox>
                                            <Checkbox id="eco1Saco" checked={props.consejeria.estudioComplementarioDto.eco1Saco || ''} onChange={handleChangeEstudioComplementario}>Saco</Checkbox>
                                            <Label>Ubicacion</Label>
                                            <FormControl
                                                id="eco1Ubicacion"
                                                type="text"
                                                label="Ubicacion"
                                                placeholder="Ubicacion"
                                                value={props.consejeria.estudioComplementarioDto.eco1Ubicacion || ''}
                                                onChange={handleChangeUsuaria}
                                            />
                                            <Checkbox id="eco1Normoincerto" checked={props.consejeria.estudioComplementarioDto.eco1Normoincerto || ''} onChange={handleChangeEstudioComplementario}>Normoincerto</Checkbox>
                                            <Checkbox id="eco1Ectopico" checked={props.consejeria.estudioComplementarioDto.eco1Ectopico || ''} onChange={handleChangeEstudioComplementario}>Ectopico</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Eco 2</ControlLabel>
                                        <FormGroup>
                                            <Label>Fecha de realizacion</Label>
                                            <FormControl
                                                id="eco2Fecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.estudioComplementarioDto.eco2Fecha || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Label>EG</Label>
                                            <FormControl
                                                id="eco2EG"
                                                type="text"
                                                label="EG"
                                                placeholder="2EG"
                                                value={props.consejeria.estudioComplementarioDto.eco2EG || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Checkbox id="eco2LFC" checked={props.consejeria.estudioComplementarioDto.eco2LFC || ''} onChange={handleChangeEstudioComplementario}>LFC</Checkbox>
                                            <Checkbox id="eco2Embrion" checked={props.consejeria.estudioComplementarioDto.eco2Embrion || ''} onChange={handleChangeEstudioComplementario}>Embrion</Checkbox>
                                            <Checkbox id="eco2Saco" checked={props.consejeria.estudioComplementarioDto.eco2Saco || ''} onChange={handleChangeEstudioComplementario}>Saco</Checkbox>
                                            <Label>Ubicacion</Label>
                                            <FormControl
                                                id="eco2Ubicacion"
                                                type="text"
                                                label="Ubicacion"
                                                placeholder="Ubicacion"
                                                value={props.consejeria.estudioComplementarioDto.eco2Ubicacion || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Checkbox id="eco2Normoincerto" checked={props.consejeria.estudioComplementarioDto.eco2Normoincerto || ''} onChange={handleChangeEstudioComplementario}>Normoincerto</Checkbox>
                                            <Checkbox id="eco2Ectopico" checked={props.consejeria.estudioComplementarioDto.eco2Ectopico || ''} onChange={handleChangeEstudioComplementario}>Ectopico</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>Laboratorio</ControlLabel>
                                        <FormGroup>
                                            <Label>Fecha de realizacion</Label>
                                            <FormControl
                                                id="labFecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.estudioComplementarioDto.labFecha || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Label>GB</Label>
                                            <FormControl
                                                id="labGB"
                                                type="text"
                                                label="GB"
                                                placeholder="GB"
                                                value={props.consejeria.estudioComplementarioDto.labGB || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Label>GR</Label>
                                            <FormControl
                                                id="labGR"
                                                type="text"
                                                label="GR"
                                                placeholder="GR"
                                                value={props.consejeria.estudioComplementarioDto.labGR || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Label>Hb</Label>
                                            <FormControl
                                                id="labHb"
                                                type="text"
                                                label="Hb"
                                                placeholder="Hb"
                                                value={props.consejeria.estudioComplementarioDto.labHb || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Label>Hto</Label>
                                            <FormControl
                                                id="labHto"
                                                type="text"
                                                label="Hto"
                                                placeholder="Hto"
                                                value={props.consejeria.estudioComplementarioDto.labHto || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Label>Grupo</Label>
                                            <FormControl
                                                id="labGrupo"
                                                type="text"
                                                label="Grupo"
                                                placeholder="Grupo"
                                                value={props.consejeria.estudioComplementarioDto.labGrupo || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                            <Label>Rh</Label>
                                            <FormControl
                                                id="labRh"
                                                type="text"
                                                label="Rh"
                                                placeholder="Rh"
                                                value={props.consejeria.estudioComplementarioDto.labRh || ''}
                                                onChange={handleChangeEstudioComplementario}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button onClick={() => { props.consejeria.estudioComplementarioDto.consejeriaId = props.consejeria.consejeriaDto.id; saveEstudioComplementario(props.consejeria.estudioComplementarioDto) }}>  Guardar </Button>
                                </Row>
                            </Panel>
                        </Tab>
                        <Tab eventKey={5} title="Entrevista Post Aborto">
                            <Panel header={'Datos relacionados al post aborto'}> 
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>A-Realizo el procedimiento?</ControlLabel>
                                        <Label>Fecha</Label>
                                        <FormGroup>
                                            <FormControl
                                                id="fecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.entrevistaPostAbortoDto.fecha || ''}
                                                onChange={handleChangeEntrevista}
                                            />
                                            <Checkbox id="procedimientoHecho" checked={props.consejeria.entrevistaPostAbortoDto.procedimientoHecho || ''} onChange={handleChangeEntrevista}>Realizo?</Checkbox>
                                            <ControlLabel>Sino continua</ControlLabel>
                                            <Checkbox id="procedimientoNoContinua" checked={props.consejeria.entrevistaPostAbortoDto.procedimientoNoContinua || ''} onChange={handleChangeEntrevista}>Continua la gesta</Checkbox>
                                            <Checkbox id="procedimientoNoAbortoEspontaneo" checked={props.consejeria.entrevistaPostAbortoDto.procedimientoNoAbortoEspontaneo || ''} onChange={handleChangeEntrevista}>Aborto espontaneo</Checkbox>
                                            <Label>Otro procedimiento</Label>
                                            <FormControl
                                                id="procedimientoNoOtro"
                                                type="text"
                                                label="Otro"
                                                placeholder="Otro procedimiento"
                                                value={props.consejeria.entrevistaPostAbortoDto.procedimientoNoOtro || ''}
                                                onChange={handleChangeEntrevista}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <FormGroup>
                                            <ControlLabel>Si continua</ControlLabel>
                                            <Checkbox id="procedimientoSiInformado" checked={props.consejeria.entrevistaPostAbortoDto.procedimientoSiInformado || ''} onChange={handleChangeEntrevista}>S/ informado</Checkbox>
                                            <Checkbox id="procedimientoSiOtra" checked={props.consejeria.entrevistaPostAbortoDto.procedimientoSiOtra || ''} onChange={handleChangeEntrevista}>Otra</Checkbox>
                                            <Checkbox id="procedimientoSiViaV" checked={props.consejeria.entrevistaPostAbortoDto.procedimientoSiViaV || ''} onChange={handleChangeEntrevista}>Via V</Checkbox>
                                            <Checkbox id="procedimientoSiViaSL" checked={props.consejeria.entrevistaPostAbortoDto.procedimientoSiViaSL || ''} onChange={handleChangeEntrevista}>Via SL</Checkbox>
                                            <Label>Otra via</Label>
                                            <FormControl
                                                id="procedimientoSiOtro"
                                                type="text"
                                                label="Otra"
                                                placeholder="Otra via"
                                                value={props.consejeria.entrevistaPostAbortoDto.procedimientoSiOtro || ''}
                                                onChange={handleChangeEntrevista}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>B-Como accedio al metodo?</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="accedioPorFarmacia" checked={props.consejeria.entrevistaPostAbortoDto.accedioPorFarmacia || ''} onChange={handleChangeEntrevista}>Farmacia</Checkbox>
                                            <Checkbox id="accedioPorConocido" checked={props.consejeria.entrevistaPostAbortoDto.accedioPorConocido || ''} onChange={handleChangeEntrevista}>Conocido</Checkbox>
                                            <Checkbox id="accedioPorInternet" checked={props.consejeria.entrevistaPostAbortoDto.accedioPorInternet || ''} onChange={handleChangeEntrevista}>Internet</Checkbox>
                                            <Checkbox id="accedioPorOrgSocial" checked={props.consejeria.entrevistaPostAbortoDto.accedioPorOrgSocial || ''} onChange={handleChangeEntrevista}>Org.Social</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>C-Presentacion</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="presentacionSuelto" checked={props.consejeria.entrevistaPostAbortoDto.presentacionSuelto || ''} onChange={handleChangeEntrevista}>Suelto</Checkbox>
                                            <Checkbox id="presentacionCaja20" checked={props.consejeria.entrevistaPostAbortoDto.presentacionCaja20 || ''} onChange={handleChangeEntrevista}>Caja x 20</Checkbox>
                                            <Checkbox id="presentacionCaja16" checked={props.consejeria.entrevistaPostAbortoDto.presentacionCaja16 || ''} onChange={handleChangeEntrevista}>Caja x 16</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>D-Efecto adverso MSP</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="efectoAdversoNo" checked={props.consejeria.entrevistaPostAbortoDto.efectoAdversoNo || ''} onChange={handleChangeEntrevista}>Si/No</Checkbox>
                                            <Checkbox id="efectoAdversoGastro" checked={props.consejeria.entrevistaPostAbortoDto.efectoAdversoGastro || ''} onChange={handleChangeEntrevista}>Gastrointestinal</Checkbox>
                                            <Checkbox id="efectoAdversoTemperatura" checked={props.consejeria.entrevistaPostAbortoDto.efectoAdversoTemperatura || ''} onChange={handleChangeEntrevista}>Temperatura 38ºC</Checkbox>
                                            <Checkbox id="efectoAdversoCafalea" checked={props.consejeria.entrevistaPostAbortoDto.efectoAdversoCafalea || ''} onChange={handleChangeEntrevista}>Cafalea</Checkbox>
                                            <Label>Otro efecto adverso</Label>
                                            <FormControl
                                                id="efectoAdversoOtro"
                                                type="text"
                                                label="Otro efecto adverso"
                                                placeholder="Otro efecto adverso"
                                                value={props.consejeria.entrevistaPostAbortoDto.efectoAdversoOtro || ''}
                                                onChange={handleChangeEntrevista}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>E-Complicaciones asociadas al procedimiento</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="complicacionNo" checked={props.consejeria.entrevistaPostAbortoDto.complicacionNo || ''} onChange={handleChangeEntrevista}>Si/No</Checkbox>
                                            <Checkbox id="complicacionHemorragia" checked={props.consejeria.entrevistaPostAbortoDto.complicacionHemorragia || ''} onChange={handleChangeEntrevista}>Hemorragia</Checkbox>
                                            <Checkbox id="complicacionInfeccion" checked={props.consejeria.entrevistaPostAbortoDto.complicacionInfeccion || ''} onChange={handleChangeEntrevista}>Infeccion</Checkbox>
                                            <Label>Otra complicacion</Label>
                                            <FormControl
                                                id="complicacionOtro"
                                                type="text"
                                                label="Otra complicacion"
                                                placeholder="Otra complicacion"
                                                value={props.consejeria.entrevistaPostAbortoDto.complicacionOtro || ''}
                                                onChange={handleChangeEntrevista}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>F-Indicaciones de gammaglobulina</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="indicacionGammaglobulina" checked={props.consejeria.entrevistaPostAbortoDto.indicacionGammaglobulina || ''} onChange={handleChangeEntrevista}>Si/No</Checkbox>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                    <Col xs={4} md={4}>
                                        <ControlLabel>G-Ecografia post</ControlLabel>
                                        <FormGroup>
                                            <Label>Fecha</Label>
                                            <FormControl
                                                id="ecografiaPostFecha"
                                                type="date"
                                                label="Fecha"
                                                placeholder="Fecha"
                                                value={props.consejeria.entrevistaPostAbortoDto.ecografiaPostFecha || ''}
                                                onChange={handleChangeEntrevista}
                                            />
                                            <Checkbox id="ecografiaPostNoRealizo" checked={props.consejeria.entrevistaPostAbortoDto.ecografiaPostNoRealizo || ''} onChange={handleChangeEntrevista}>Si/No</Checkbox>
                                            <Checkbox id="ecografiaPostAbortoCompleto" checked={props.consejeria.entrevistaPostAbortoDto.ecografiaPostAbortoCompleto || ''} onChange={handleChangeEntrevista}>Aborto completo</Checkbox>
                                            <Checkbox id="ecografiaPostHMR" checked={props.consejeria.entrevistaPostAbortoDto.ecografiaPostHMR || ''} onChange={handleChangeEntrevista}>HMR</Checkbox>
                                            <Checkbox id="ecografiaPostAbortoIncompleto" checked={props.consejeria.entrevistaPostAbortoDto.ecografiaPostAbortoIncompleto || ''} onChange={handleChangeEntrevista}>Aborto incompleto</Checkbox>
                                            <Checkbox id="ecografiaPostEmbrionViable" checked={props.consejeria.entrevistaPostAbortoDto.ecografiaPostEmbrionViable || ''} onChange={handleChangeEntrevista}>Embrion viable</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <FormGroup>
                                            <ControlLabel>Intervencion</ControlLabel>
                                            <Checkbox id="ecografiaPostNuevaConsejeria" checked={props.consejeria.entrevistaPostAbortoDto.ecografiaPostNuevaConsejeria || ''} onChange={handleChangeEntrevista}>Nueva consejeria</Checkbox>
                                            <Checkbox id="ecografiaPostDerivacion2Nivel" checked={props.consejeria.entrevistaPostAbortoDto.ecografiaPostDerivacion2Nivel || ''} onChange={handleChangeEntrevista}>Derivacion a 2º nivel</Checkbox>
                                            <Checkbox id="ecografiaPostConductaExpectante" checked={props.consejeria.entrevistaPostAbortoDto.ecografiaPostConductaExpectante || ''} onChange={handleChangeEntrevista}>Conducta expectante</Checkbox>
                                        </FormGroup>
                                    </Col>
                                    <Col xs={4} md={4}>
                                        <ControlLabel>I-Consejeria MAC</ControlLabel>
                                        <FormGroup>
                                            <Checkbox id="consejeriaMACNo" checked={props.consejeria.entrevistaPostAbortoDto.consejeriaMACNo || ''} onChange={handleChangeEntrevista}>Si/No</Checkbox>
                                            <Checkbox id="consejeriaMACACO" checked={props.consejeria.entrevistaPostAbortoDto.consejeriaMACACO || ''} onChange={handleChangeEntrevista}>ACO</Checkbox>
                                            <Checkbox id="consejeriaMACACI" checked={props.consejeria.entrevistaPostAbortoDto.consejeriaMACACI || ''} onChange={handleChangeEntrevista}>ACI</Checkbox>
                                            <Checkbox id="consejeriaMACDIU" checked={props.consejeria.entrevistaPostAbortoDto.consejeriaMACDIU || ''} onChange={handleChangeEntrevista}>DIU</Checkbox>
                                            <Checkbox id="consejeriaMACPreservativo" checked={props.consejeria.entrevistaPostAbortoDto.consejeriaMACPreservativo || ''} onChange={handleChangeEntrevista}>Preservativo</Checkbox>
                                            <Checkbox id="consejeriaMACImplanteHormonal" checked={props.consejeria.entrevistaPostAbortoDto.consejeriaMACImplanteHormonal || ''} onChange={handleChangeEntrevista}>Implante hormonal</Checkbox>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button onClick={() => { props.consejeria.entrevistaPostAbortoDto.consejeriaId = props.consejeria.consejeriaDto.id;  saveEntrevista(props.consejeria.entrevistaPostAbortoDto)}}>  Guardar </Button>
                                </Row>
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
