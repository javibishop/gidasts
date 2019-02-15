import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, ButtonGroup, PageHeader, Grid, Row, Col, FormGroup, Form, FormControl, Button  } from 'react-bootstrap';
import { actionCreators } from '../store/Consejerias';

class ConsejeriasList extends Component {
    constructor(props) {
        super(props);
        }

  componentWillMount() {
    // This method runs when the component is first added to the page
    const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
      this.props.requestConsejerias(startDateIndex);
  }

  componentWillReceiveProps(nextProps) {
    // This method runs when incoming props (e.g., route params) change
    const startDateIndex = parseInt(nextProps.match.params.startDateIndex, 10) || 0;
    this.props.requestConsejerias(startDateIndex);
    }
 
    
  render() {
    return (
        <div>
            <Grid fluid={true} bsClass="container">
                <Row>
                    <Col lg={12} xs={12} md={12}>
                        <PageHeader>
                            Consejerias
                        </PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Form inline >
                            <FormGroup controlId="formBasicText" bsSize="small">
                                <FormControl
                                    type="text"
                                    value={this.props.searchText || ''}
                                    placeholder="Texto a Buscar"
                                    onChange={this.props.handleChangeSearch}
                                />
                                <Button bsStyle="link" onClick={this.props.handleSearch} >Buscar</Button >
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col lg={6}>
                        <ButtonGroup className='pull-right'>
                            <Link className='btn-xs btn-success pull-left' role='button' to='/consejerianueva' >Nueva Consejeria</Link>
                        </ButtonGroup>
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col lg={12} xs={12} md={12}>
                        {renderConsejeriasTable(this.props)}
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col lg={12} xs={12} md={12}>
                        {renderPagination(this.props)}
                    </Col>
                </Row>
            </Grid>
      </div>
    );
  }
}
function renderConsejeriasTable(props) {
    return (
        <div >
            <Table className='table' responsive>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Fecha</th>
                        <th>Usuario1</th>
                        <th>Usuario2</th>
                        <th>Usuaria</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {props.consejerias.map(consejeria =>
                        <tr key={consejeria.id}>
                            <td>{consejeria.numero}</td>
                            <td>{consejeria.fechaIngreso}</td>
                            <td>{consejeria.usuario1}</td>
                            <td>{consejeria.usuario2}</td>
                            <td>{consejeria.usuaria}</td>
                            <td><Link className='btn-xs btn-primary pull-left' to={`/consejeria/${consejeria.id}`}>Editar</Link>
                                <Link className='btn-xs btn-primary pull-left' to={`/consejeria/${consejeria.id}`}>Eliminar</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
  );
}



//function renderToolBar(props) {
//    return <p className='clearfix text-center'>
//        <Link className='btn btn-default pull-right' to={`/consejeria/new`}>Nueva</Link>
//        {props.isLoading ? <span>Loading...</span> : []}
//    </p>;
//}

function renderPagination(props) {
    var cantidad = props.consejerias.length;
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return <p className='clearfix text-center'>
      <span>Cantidad de Consejerias: {cantidad}</span>
  </p>;
}


export default connect(
  state => state.consejerias,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ConsejeriasList);
