const Checkout = ({ setTotal, cart, Button }) => {

  let finalList = () => {
    let total = handleTotal();
    let final = cart.map((item, index) => {
      return (
        <div key={index} index={index}>
          {item.name}
        </div>
      );
    });
    setTotal(total);
    return { final, total };
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

  return (
    <div className="small-container">
      <h2>Checkout </h2>
          <Button type="submit" onClick={handleCheckout}>Checkout ${finalList().total}</Button>
          <div> {finalList().total > 0 && finalList().final} </div>
    </div>
  )
}

export default Checkout
