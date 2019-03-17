import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data"

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            {ProductData.products.map(d => (<Product productName={d["name"]} price={d["cost"]} limit={d["stock"]}/>))}
        </div>
    );
  }

}

export default Cart;
