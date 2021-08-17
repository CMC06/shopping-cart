const Checkout = ({ total, setTotal, cart, Button, useEffect, finalCart, setFinalCart }) => {
  
  

  let finalList = () => {
    let totalHoldTemp = handleTotal();
    // let final = cart.map((item, index) => {
    //   return (
    //     <div key={index} index={index}>
    //       {item.name}
    //     </div>
    //   );
    // });
    // console.log(JSON.stringify(final));
    setTotal(totalHoldTemp)
    // setFinalCart(...final);
    
  };

  const handleTotal = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    return newTotal;
  };


  const handleCheckout = (e) => {
    e.preventDefault();
    console.log('Click');
  }


  useEffect(finalList, [cart])

  return (
    <div className="small-container">
      <h2>Checkout </h2>
          <Button type="submit" onClick={handleCheckout}>Checkout ${total}</Button>
          
    </div>
  )
}

export default Checkout
