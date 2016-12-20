import React, { Component } from 'react';
import Client from '../Client';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'
import { connect } from 'react-redux'

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

function afterSearch(searchText, result) {
  console.log(`Your search text is ${searchText}`);
  console.log('Result is:');
  for (let i = 0; i < result.length; i++) {
    console.log('Product: ' + result[i].id + ', ' + result[i].name + ', ' + result[i].price);
  }
}

const options = {
  afterSearch: afterSearch,  // define a after search hook,
  clearSearch: true
};

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedFoods: [],
    };

    this.onChange = this.onChange.bind(this)
    this.onClear = this.onClear.bind(this)
  }
  onChange(e)
  {
    console.log("Change: ", e.target.value );
    this.props.fetchData({firstName: e.target.value})
  }

  onClear(e)
  {
    console.log("Clear");
  }
  render() {

    console.log(this.props.searchData);

    if( this.props.searchData.length !== 0){
      return (
        <div>
        <Form inline>
        <FormGroup controlId="formInlineEmail">
        <FormControl type="text" placeholder="Last Name"  onKeyUp={this.onChange}/>
        </FormGroup>
        {' '}
        <Button type="submit" onClick={ this.onClear }>
        Clear
        </Button>
        </Form>
        <BootstrapTable data={ this.props.searchData } search={ false } options={ options }>
        <TableHeaderColumn dataField='first_name'>First Name</TableHeaderColumn>
        <TableHeaderColumn dataField='last_name'isKey={ true } >Last Name</TableHeaderColumn>
        </BootstrapTable>
        </div>
      );
    }else{
      return (
        <div>
        <Form inline>
        <FormGroup controlId="formInlineEmail">
        <FormControl type="text" placeholder="Last Name"  onKeyUp={this.onChange}/>
        </FormGroup>
        {' '}
        <Button type="submit" onClick={ this.onClear }>
        Clear
        </Button>
        </Form>
        </div>
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
