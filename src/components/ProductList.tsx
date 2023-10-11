import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductList extends Component {
    render() {
        return (
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-md-3 row-cols-x1-4 justify-content-center">
                        <ProductCard/>
                    </div>
                </div>
            </section>
        );
    };
}

export default ProductList;