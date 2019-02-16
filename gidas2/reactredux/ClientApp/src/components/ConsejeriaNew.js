import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControl, Button, Grid, Row, Col, Label, PageHeader } from 'react-bootstrap'; 
import { actionCreators } from '../store/ConsejeriaNew';
import moment from 'moment';
class ConsejeriaNew extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadUsuaries();
        this.props.newConsejeria();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectEdit) {
            this.props.history.push(`/consejeria/${nextProps.idConsejeria}`);
        }
    }

    render() {
    return (
        <div>
            <PageHeader>
                Nueva Consejeria
            </PageHeader>
            <Row className="show-grid">
                <Col xs={12} md={12}>
                    {renderNuevaConsejeria(this.props)} 
                </Col>
            </Row>
            <Row className="show-grid">
                <Col xs={6} md={6}></Col>
             </Row>
      </div>
    );
  }
}

function renderNuevaConsejeria(props) {
    const { handleChangeConsejeriaNew, saveConsejeriaNew } = props;
    return (
        <Grid fluid={true} bsClass="container" className='form'>
            <Row>
                <Col xs={12} md={12}>
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            <Label>Profesional 1</Label>
                            <FormControl
                                value={props.consejeriaNew.usuarie1Id || ''}
                                id="usuarie1Id"
                                onChange={handleChangeConsejeriaNew}
                                componentClass="select" placeholder="select">
                                {props.usuaries.map((option, index) =>
                                    <option value={option.value} key={index}> {option.label} </option>)}
                            </FormControl>
                        </Col>
                        <Col xs={6} md={6}>
                            <Label>Profesional 2</Label>
                            <FormControl
                                value={props.consejeriaNew.usuarie2Id || ''}
                                id="usuarie2Id"
                                onChange={handleChangeConsejeriaNew}
                                componentClass="select" placeholder="select">
                                {props.usuaries.map((option, index) =>
                                    <option value={option.value} key={index}> {option.label} </option>)}
                            </FormControl>
                        </Col>
                    </Row>
                    
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            <Label>Nombre</Label>
                            <FormControl
                                id="nombre"
                                type="text"
                                label="Nombre"
                                placeholder="Ingrese su nombre"
                                value={props.consejeriaNew.nombre || ''}
                                onChange={handleChangeConsejeriaNew}
                            />
                        </Col>
                        <Col xs={6} md={6}>
                            <Label>Apellido</Label>
                            <FormControl
                                id="apellido"
                                type="text"
                                label="Apellido"
                                placeholder="Ingrese su apellido"
                                value={props.consejeriaNew.apellido || ''}
                                onChange={handleChangeConsejeriaNew}
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
                                value={props.consejeriaNew.edad || 0}
                                onChange={handleChangeConsejeriaNew}
                            />
                        </Col>
                        <Col xs={4} md={4}>
                            <Label>Fecha Nacimiento</Label>
                            <FormControl
                                id="fechaNacimiento"
                                type="date"
                                label="Fecha Nacimiento"
                                date="yyyy-MM-dd"
                                placeholder="Ingrese su Fecha Nacimiento"
                                value={props.consejeriaNew.fechaNacimiento || ''}
                                onChange={handleChangeConsejeriaNew}
                            />
                        </Col>
                        <Col xs={4} md={4}>
                            <Label>Nacionalidad</Label>
                            <FormControl
                                value={props.consejeriaNew.nacionalidadId || ''}
                                id="nacionalidadId"
                                onChange={handleChangeConsejeriaNew}
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
                                value={props.consejeriaNew.telefono || ''}
                                onChange={handleChangeConsejeriaNew}
                            />
                        </Col>
                        <Col xs={8} md={8}>
                            <Label>Direccion</Label>
                            <FormControl
                                id="direccion"
                                type="text"
                                label="direccion"
                                placeholder="Ingrese su Direccion"
                                value={props.consejeriaNew.direccion || ''}
                                onChange={handleChangeConsejeriaNew}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <Row className='pull-right'>
                                <Button className='btn-sm btn-success pull-rigth' onClick={() => { saveConsejeriaNew(props.consejeriaNew) }}>  Guardar </Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
    );
}

//const mapDispatchToProps = (dispatch, ownProps) => ({
//    //handleSubmit: () => dispatch(saveConsejeria(ownProps.formName))
//    //handleSubmit: () => dispatch({ type: 'NAME_CHANGED', payload: name }),
//})

//const mapStateToProps = (state)  => ({
//    state : state.consejeriaNewDto
//})

//export default connect(mapStateToProps, mapDispatchToProps)(ConsejeriaEdit);



export default connect(
    state => state.consejeriaNew,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ConsejeriaNew);
