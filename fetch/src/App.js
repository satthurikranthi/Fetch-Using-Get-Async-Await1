import './App.css';
import { useEffect, useState } from "react";
function App() {
  let [products, setProducts] = useState([]);
    useEffect(()=>{
    getProductFromServer();
  },[]);

  let getProductFromServer = async () => {
    let reqOptions = {
      method: "GET",
    }
    let response = await fetch("https://fakestoreapi.com/products", reqOptions);
    let data = await response.json();
    setProducts(data); 
    console.log(data);
  }
   return (
    <div className="App">
      <button onClick={getProductFromServer}>Get Products</button>
      <div className="productsContainer">
      {Array.isArray(products) && products.map((ele, i) => {
        return(
          <div className="productDiv" key={i}>
            <p>
          {ele.id} . {ele.title}
          </p>
          <img  className="productpic"
           src={ele.image}
           title={ele.description}
           ></img>
          <p> $.{ele.price}</p>
          </div>
         );
})}
 </div>
    </div>
  );
}

export default App;
