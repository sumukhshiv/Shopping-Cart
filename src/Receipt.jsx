import React from "react";

class Receipt extends React.Component {
    constructor(props) {
        super(props);
      }

    renderItem(item) {
        return (
            <div className="receipt-item" key={item.name}>
                <div className="receipt-text">
                    {item["productName"]} x {item["count"]}
                </div>
                <div className="receipt-text">
                    ${item["count"]*item["price"]}
                </div>
            </div>
        );
    }

    totalCostHelper(items) {
      let totalCost = 0;
      for (var i = 0; i < items.length; i++) {
        totalCost += (items[i]["price"] * items[i]["count"]);
      }
      return totalCost.toFixed(2);
    }

  render() {
    // const items = [{ name: "Apple", price: 3 }, { name: "Banana", price: 3 }];
    let items = this.props.items;
    let totalCost = this.totalCostHelper(items);

    console.log(totalCost);
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${totalCost}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;