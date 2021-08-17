const Product = ({ item, Image, addToCart, index, Button }) => {
  
  let n = index + 1049;
  let url = "https://picsum.photos/id/" + n + "/50/50"
    

  return (
    <li key={index}>
      <Image src={url} width={50} roundedCircle></Image>
      <Button type="submit" name={item.name} onClick={addToCart}>
        {item.name}: ${item.cost} <br />
        Current Stock: {item.instock}
      </Button>
    </li>
  );
}

export default Product
