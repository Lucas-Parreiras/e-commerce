import React, { Component } from 'react';

class  Header extends Component {
    render() {
        return (
            <>
                <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="dysplay-4 fw-bolder"> Loja Genérica</h1>
                    <p className="lead fw-normal text-white-50 mb-0"> Estudos sobre lojas virtuais e seus layouts </p>
                </div>
            </div>
                </header>
            </>
        )
    }
}

export default Header;