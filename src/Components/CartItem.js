import trashIcon from './Images/trash.png'

const CartItem = ({ item, index, deleteCartItem, Card, Button }) => {

  return (
    <Card>
        <Card.Header as={Button} variant="link" eventKey={1 + index} onClick={() => deleteCartItem(index)} className="deleteHeader">
          <img src={trashIcon} alt="trash icon" id="deleteIcon" />
        </Card.Header>
        <Card.Body>
          {item.name} <br />
          ${item.cost} from {item.country}
        </Card.Body>
    </Card>
  )
}

export default CartItem
