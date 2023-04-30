import { useState, useEffect } from 'react'
import './App.css'



function App() {

  const [count, setCount] = useState(0);
  const [fullPrice, setFullPrice] = useState(0);
  const [price, SetPrice] = useState(0)
  const myPrice = (event) => SetPrice(event.target.value)

  useEffect(() => { }, [count, fullPrice])

  const add = () => {
    setCount(count + 1);
    setFullPrice(fullPrice + Number(price));
  };
  const remove = () => {
    count > 0 ?
      setCount(count - 1) :
      setCount(0);

    fullPrice > 0 && myPrice > 0 && myPrice !== '' ?
      setFullPrice(fullPrice - Number(price)) :
      setFullPrice(0);
  };

  return (

    <>
      <div className="container">
        <div className="inputPrice">
          <label htmlFor="price">Digite o preço: </label>
          <input onChange={myPrice} type="number" name='price' id='price' />
        </div>
        <div>
          <h1>{count}</h1>
          <h2>Total:{fullPrice}</h2>
        </div>
        <div className='btn-box'>
          <button onClick={add}>Adicionar</button>
          <button onClick={remove}>Remover</button>
        </div>
      </div>
    </>
  )
}

export default App
