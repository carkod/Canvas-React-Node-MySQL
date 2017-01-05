import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import {Grid, Row, Col} from 'react-bootstrap'


class Search extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this)
    this.onClear = this.onClear.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }
  onChange(e)
  {
    if(e.target.value ===""){
      this.props.fetchData({firstName: "*"})
    }
    else {
      this.props.fetchData({firstName: e.target.value})
    }
  }

  onClear(e)
  {
    let searchInput = ReactDOM.findDOMNode(this.refs.searchInput)
    searchInput.value=""
    this.props.fetchData({firstName: "*"})

  }

  onSubmit(e)
  {
    //prevents full page reload
    e.preventDefault();
  }

  renderTitleAndForm(){
    let titleAndForm = (
      <Grid>
      <Row className="show-grid">
        <Col smOffset={1} sm={11}> <h2> Filter Authors Database by First Name</h2></Col>
      </Row>
      <Row className="show-grid">
        <Col md={4}>
          <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="formInlineEmail">
             <Col   smOffset={3} sm={4}>
              <FormControl
               ref="searchInput"
               type="text"
               placeholder="First Name"
               onChange={this.onChange}
               />
             </Col>
             <Col  sm={2}>
               <Button type="button" onClick={ this.onClear }>
                 Clear
               </Button>
             </Col>
          </FormGroup>
          </Form>
        </Col>
      </Row>
      </Grid>
    );

    return titleAndForm;
  }

  renderFullForm(){
    let fullForm = (
      <Grid>
      <Row className="show-grid">
        <Col smOffset={1} sm={11}> <h2> Filter Authors Database by First Name</h2></Col>
      </Row>
      <Row className="show-grid">
        <Col md={4}>
          <Form horizontal onSubmit={this.onSubmit}>
          <FormGroup controlId="formInlineEmail">
             <Col   smOffset={3} sm={4}>
              <FormControl
              type="text"
              placeholder="First Name"
              onChange={this.onChange}
              />
             </Col>
             <Col  sm={2}>
               <Button type="button" onClick={ this.onClear }>
                 Clear
               </Button>
             </Col>
          </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row className="top-buffer"/>
      <Row className="show-grid">
        <Col smOffset={1} sm={10}>
        <BootstrapTable data={ this.props.searchData } search={ false }>
        <TableHeaderColumn dataField='first_name'>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='last_name'isKey={ true } >Last Name</TableHeaderColumn>
        </BootstrapTable>
        </Col>
      </Row>
      </Grid>
    );
    return fullForm
  }

  render() {

   if( this.props.searchData.length !== 0){
      return (
        this.renderFullForm()
      );
    }else{
      return (
        this.renderTitleAndForm()
      );
    }
  }
}

function mapStatetoProps(state){
  return {
    searchData: state.searchData
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchData: firstName => dispatch({type: 'FETCH_SEARCH_DATA', payload:firstName}),
  }
}

const ConnectedSearch = connect(mapStatetoProps, mapDispatchToProps)(Search)

export default ConnectedSearch
