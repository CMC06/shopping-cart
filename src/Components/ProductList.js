import Product from "./Product"

const ProductList = ({ items, Image, addToCart, Button }) => {

  let products = items.map((item, index) => {
    return (<Product item={item} Image={Image} addToCart={addToCart} index={index} key={index} Button={Button} />
  )});

  return(
    <div className="small-container">
      <h2>Available Products</h2>
      <ul>
        {products}
      </ul>
    </div>
  )
}

export default ProductList
