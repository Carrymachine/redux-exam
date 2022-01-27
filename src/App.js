import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function App() {
  const products = useSelector((state) => {
    console.log(state);
    return state.product.products;
  });

  const productList = products.map(({ id, name, description }) => {
    return (
      <>
        <li>{id}</li>
        <li>{name}</li>
        <li>{description}</li>
      </>
    );
  });
  console.log(products);
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <ul>{productList}</ul>
      </header>
    </div>
  );
}

export default App;
