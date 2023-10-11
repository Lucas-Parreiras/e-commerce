import React, { Component } from "react";

class ProductCard extends Component {
    render() {
        return (
            <>
                <div className="col mb-5">
                        <div className="card h-100">
                            <div className="badge bg-dark text-white position-absolute">Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Special Item</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    <span className="text-muted">$20.00</span>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="nada">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default ProductCard;