import React, { Component } from 'react';
import Header from '../components/Header';
import NaviBar from '../components/NaviBar';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

class MainPage extends Component {
    render() {
        return (
        <>
            <NaviBar/>
            <Header/>
            <ProductList/>
            <Footer/>
        </>
        )
    }
}

export default MainPage;