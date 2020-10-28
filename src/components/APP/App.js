import { useState, useEffect } from 'react'
import List from '../List/List'
import CartItem from '../Cart/CartItem'
import Resize from '../Resize/Resize'
import Title from '../Title'

function App(){

  // const [article, setArticles] = useState([]);
  // const url = 'http://localhost:3001/articles'

  // useEffect(() => {
  //   fetch(url)
  //     .then(Response => Response.json)
  //     .then(data => setArticles(data))
  // },[setArticles]);

  const [title, setTitle] = useState('Homepage');
  function handleClick(){
    setTitle('contact')
  }

  const items = {
    "price": 3,
    "name": "stylo"
  }

  return(
    <div>
      {/* <List articles={article}/> */}
      <CartItem product={items}/>
      <Resize/>
      <Title title={title}/>
      <button onClick={handleClick}>change name</button>
    </div>
  )
}

export default App