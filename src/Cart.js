import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data"
import Receipt from "./Receipt"

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.state = {
      cartItems: []
    };
  }

  handleAddToCart(productName, price) {
    console.log("handle cart")
    let oldArray = this.state.cartItems;
    let set = false; 
    for (var i = 0; i < oldArray.length; i++) {
      if (oldArray[i]['productName'] == productName) {
        oldArray[i]['count'] = oldArray[i]['count']+1;
        this.setState({
          cartItems: oldArray
        });
        set = true;
      }
    };

    if (set == false) {
      let my_obj = {"productName": productName, "price": price, "count": 1};
      this.setState({
        cartItems: [...oldArray, my_obj]
      });
    }
  }

  handleRemoveFromCart(productName) {
    console.log(productName)
    let oldArray = this.state.cartItems;
    console.log(oldArray)
    let arr = oldArray.filter(item => item["productName"] != productName);
    console.log(arr);
    this.setState({
      cartItems: arr
    });
  }
  

  render() {
    return (
        <div className="page-content">
            {ProductData.products.map(d => (<Product productName={d["name"]} price={d["cost"]} onAddToCart={this.handleAddToCart} onRemoveFromCart={this.handleRemoveFromCart}/>))}
            <Receipt items={this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
