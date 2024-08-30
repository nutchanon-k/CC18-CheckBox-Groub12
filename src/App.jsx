import { useState } from "react"
import { toppings } from "./data"


export default function App() {
  const [price, setPrice] = useState(0)
  const [list, setList] = useState([])
  const [show, setShow] = useState(false)


  const hldChange = (listName, listPrice, e) => {
    console.log(e.target.checked)
    if (e.target.checked) {
      setPrice(prev => (prev + listPrice))
      setList(prev => [...prev, { name: listName, price: listPrice }])
      console.log(list)
    }
    else {
      setPrice(prev => (prev - listPrice))
      setList(prev => prev.filter(el => el.name !== listName))

    }
    console.log(price)
  }


  // const hdlSubmit = (e) => {
  //   e.preventDefalt()
  // }

  return (
    <div>

      <div className="border w-2/4 p-5 flex flex-col m-auto mt-5 ">

        <h1 className="text-4xl mb-4 ">Select Topping</h1>
        {toppings.map(el => (
          <div className="flex flex-row justify-between border p-2">
            <label className="flex gap-2"><input type="checkbox" name={el.name} onChange={(e) => (hldChange(el.name, el.price, e))} />{el.name}</label>
            <p>&#xE3F;{el.price.toFixed(2)}</p>
          </div>
        ))}
        <hr />
        <div className="flex justify-between mt-4 font-bold  p-2">
          <p>Total</p>
          <p>&#xE3F;{price.toFixed(2)}</p>
        </div>
        <button className={`border bg-${show ? 'red' : 'blue'}-300 rounded-md hover:scale-105 transition-all hover:-translate-y-1 shadow-md  p-2`} onClick={() => setShow(!show)}>Check out</button>

      </div>
      {show ? (
        <div className="border w-1/2 p-5 flex flex-col m-auto mt-5 ">
          {list.map(el => (
            <div className=" flex justify-between bg-blue-300  p-2">
              <p>{el.name}</p>
              <p>{el.price.toFixed(2)}</p>
            </div>
          ))}
          <div className=" flex justify-between font-bold  p-2 ">
            <h4>Total</h4>
            <h4>{price.toFixed(2)}</h4>
          </div>


        </div>)


        : null}


    </div>
  )
}


