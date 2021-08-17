import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card, Container, Row, Col, Image, Button  } from 'react-bootstrap';
import ProductList from './Components/ProductList';
import Restock from './Components/Restock';
import Cart from './Components/Cart';
import { useState, useEffect } from 'react'
import Checkout from './Components/Checkout';

function App() {

  const [items, setItems] = useState([{name:'Apple', country:'USA', cost:3.00, instock: 10}, {name:'Beans', country:'USA', cost:2.00, instock:8}, {name:'Cabbage', country:'USA', cost:1.00, instock:4}]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("http://localhost:1337/products");
  

  //function to pull product list from Strapi database
  const restockProducts = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let newItems = data.map((item) => {
      let { name, country, cost, instock } = item;
      return { name, country, cost, instock };
    });
    setItems([...newItems]);
  };

  //useEffect to populate items list with database information
  useEffect(()=>{
    restockProducts("http://localhost:1337/products");
  }, [])

  //add to cart function deducts item from item instock state object
  const addToCart = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let item = items.filter((item) => item.name === name);
    console.log(`add to Cart ${JSON.stringify(item)}`);
    if(item[0].instock <= 0) return;
    let updatedItems = items.map((item) => {
      if(e.target.name === item.name) {
        item.instock = item.instock - 1;
      }
      return item;
    });
    console.log(JSON.stringify(updatedItems));
    setCart([...cart, ...item]);
    //doFetch(query);
  };

  //delete items from the cart, adds item back to item instock state object
  const deleteCartItem = (index) => {
    let productName = cart[index].name;
    let updatedProducts = [...items]; 
    updatedProducts.forEach((item) => {
      if(productName === item.name){
        item.instock = item.instock + 1;
      }
    });
    
    let newCart = cart.filter((item, i) => index !== i);
    setCart(newCart);
  };

  return (
    <div className="App">
      <h1>Shopping Cart Exercise</h1>
      <Container>
        <Row>
          <Col>
            <ProductList items={items} Image={Image} addToCart={addToCart} Button={Button} />
          </Col>
          <Col>
            <Cart cart={cart} deleteCartItem={deleteCartItem} Card={Card} Button={Button} />
          </Col>
          <Col>
            <Checkout cart={cart} total={total} setTotal={setTotal} Button={Button} />
          </Col>
        </Row>
        <Row>
          <Restock query={query} setQuery={setQuery} setItems={setItems} restockProducts={restockProducts} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
