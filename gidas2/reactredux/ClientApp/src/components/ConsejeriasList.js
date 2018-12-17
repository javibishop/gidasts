import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { actionCreators } from '../store/Consejerias';

class ConsejeriasList extends Component {
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
        <h1>Weather consejeria</h1>
        <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
        {renderConsejeriasTable(this.props)}
        {renderPagination(this.props)}
      </div>
    );
  }
}

function renderConsejeriasTable(props) {
    return (
        <div> 
            <span>dsadasd</span>
        
      <Table className='table' responsive striped bordered condensed hover>
      <thead>
                    <tr>
                        <th>Id</th>
            <th>Numero</th>
            <th>Fecha</th>
            <th>Usuario1</th>
            <th>Usuario2</th>
            <th>Accion</th>
        </tr>
      </thead>
      <tbody>
        {props.consejerias.map(consejeria =>
            <tr key={consejeria.id}>
                            <td>{consejeria.numero}</td>
                            <td>{consejeria.fecha}</td>
                            <td>{consejeria.usuario1}</td>
                            <td>{consejeria.usuario2}</td>
                <td><Link className='btn-xs btn-primary pull-left' to={`/consejeria/${consejeria.id}`}>Editar</Link></td>
          </tr>
        )}
      </tbody>
            </Table>
        </div>
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

export default connect(
  state => state.consejerias,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ConsejeriasList);
