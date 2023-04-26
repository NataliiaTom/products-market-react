import React from 'react';
import { Component } from 'react';
import './App.css';
import Table from './components/Table'
import { connect } from 'react-redux';
import Navigation from './router-modules.js/Navigation'
import { Route, Routes } from "react-router-dom";
import NewProductForm from './components/NewProductForm'
import { actions } from './redux-modules/reducers/actions';

class App extends Component {


  componentDidMount() {

    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((res) => res.json())
      .then(res => { return res })
      .then(res => {
        this.props.setProductsData(res);
      })
  }

  render() {
    return (
      <div>
        <h1>Welcome to our shop</h1>
        <div>
          <Navigation />
        </div>
        <Routes >
          <Route path="/table" exact element={<Table />} />
          <Route path="/form" exact element={<NewProductForm />} />
        </Routes>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProductsData: (productsData) => dispatch({ type: actions.SET_PRODUCTS_DATA, productsData })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
