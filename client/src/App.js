import React, { Component } from 'react';
import { Jumbotron, Grid, Row } from 'react-bootstrap';
import HeaderNavigation from './components/HeaderNavigation'

import './index.css';




class App extends Component {

    render() {

        const jumStyle = {
            backgroundColor: 'rgb(255,2,17)',
            color:'white'
        }

        return (
            <div className='App'>
            <HeaderNavigation />
            <div>
            <Grid>
            <Row>
            <Jumbotron style={jumStyle} className='jumbotron'>
            <h1> Sample App </h1>
            <p> Brown Center for Biomedical Informatics </p>
            </Jumbotron>
            </Row>
            <Row>
            {this.props.children}
            </Row>
            </Grid>
            </div>
            </div>
        );
    }
}

export default App;
