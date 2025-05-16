import React, { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [state, setState] = useState([]);
  const [cat, setCat] = useState('all');

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (cat !== "all") {
      if (cat === "electronics") url = 'https://fakestoreapi.com/products/category/electronics';
      if (cat === "men") url = "https://fakestoreapi.com/products/category/men's clothing";
      if (cat === "women") url = "https://fakestoreapi.com/products/category/women's clothing";
    }

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setState(res);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, [cat]); // triggers fetch on cat change

  return (
    <div className="wrapper">
      <div className="app-container">
        <button onClick={() => setCat("all")}>Original_Api's</button>
        <button onClick={() => setCat("electronics")}>Electronics_Api's</button>
        <button onClick={() => setCat("men")}>Men's_Api's</button>
        <button onClick={() => setCat("women")}>Women's_Api's</button>
      </div>

      <div className="products">
        {state.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
