import React from "react";
import Cart from "./Cart";

let counter = 0;

const Product = props => {
    return (
        <div class="ui cards">
            <div class="card">
                <div class="content">
                <div class="header">{props.productName}</div>
                <div class="description"> Price: ${props.price}</div>
                </div>
                <div class="ui bottom attached button" onClick={() => addToCart(props.productName)}>
                <i class="add icon"></i>
                Add to Cart
                </div>
            </div>
        </div>
    );

    function addToCart(arg) {
        if (arg == "Apple") {
          counter++;
          if (props.limit == 0) {
            alert("This item is out of stock!");
          } else if (counter > props.limit) {
            alert("There are too many Apples in your cart!");
          } else {
            alert("There are " + counter +  " Apples in your cart!");
          }
        }
      }

};

export default Product;