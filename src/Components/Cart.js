import CartItem from "./CartItem"

const Cart = ({ cart, deleteCartItem, Card, Button}) => {

  let cartList = cart.map((item, index) => {
    return(
    <CartItem item={item} key={index} index={index} deleteCartItem={deleteCartItem} Card={Card} Button={Button} />)
  });

  return (
    <div className="small-container">
      <h2>Shopping Cart</h2>
      {cartList.length > 0 ? cartList : <p>Your shopping cart is empty.</p>}
    </div>
  )
}

export default Cart
