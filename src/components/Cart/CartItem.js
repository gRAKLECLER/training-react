import { useState  } from 'react'

function CartItem(props){

  const {product} = props;
  const {price, name} = product;
  const [quantity, setQuantity] = useState(1)

  function increment() {
    setQuantity(quantity + 1)
  }

  function decrement() {
    setQuantity(quantity > 1 ? quantity - 1 : 1)
  }

  let result = price * quantity


  return(
    <div className="Quantity">
        <h1>{name}</h1>
        <button onClick={increment}>+</button>
        <p>{ quantity }</p>
        <button onClick={decrement}>-</button>
        <p>le prix est de : {result}</p>
    </div>
  )
}


export default CartItem