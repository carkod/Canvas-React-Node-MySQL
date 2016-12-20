import React, { Component } from 'react';
import Client from '../Client';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'

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
  render() {

    return (
        <div>
            <Form inline>
            <FormGroup controlId="formInlineEmail">
              <FormControl type="text" placeholder="Last Name" />
            </FormGroup>
            {' '}
            <Button type="submit" onClick={ this.handleClearBtnClick }>
              Clear
            </Button>
            </Form>
              <BootstrapTable data={ products } search={ false } options={ options }>
                  <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='name' >Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='price' searchable={ false }>Product Price</TableHeaderColumn>
              </BootstrapTable>
      </div>
    );
  }
}

export default Search
