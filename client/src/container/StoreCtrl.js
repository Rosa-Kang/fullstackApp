import React, { Component } from "react";
import axios from "axios";
import Store from "../components/Stores";

const storeUrl = `https://github.com/mkimsing/BrainFlix/blob/master/sprint3/server/helpers/helper.js`;
export default class StoreCtrl extends Component {
  state = {
    stores: []
  };
  componentDidMount() {
    axios.get(storeUrl).then(store => {
      console.log(store.data);
      const newStores = store.data.map(storeList => {
        return {
          name: storeList.name,
          price: storeList.price,
          image: storeList.url,
          description: storeList.description
        };
      });
      this.setState({
        stores: newStores
      });
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="store">
        {this.state.stores.map(store => (
          <Store
            name={store.name}
            price={store.price}
            image={store.image}
            description={store.description}
          />
        ))}
      </div>
    );
  }
}
