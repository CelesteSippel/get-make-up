import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MakeUp = () => {
  const [makeUp, setMakeUp] = useState([])

  const getMakeUpData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Item')
    setMakeUp(resp.data)
  }
  useEffect(() => {
    getMakeUpData()
  }, [])

  return (
    <>
      <section>
        {makeUp.map(item => {
          return (
            <ul>
              <li>key={item.id}</li>
              <li>name={item.name}</li>
              <li>sku={item.sku}</li>
              <li> dateOrdered={item.dateOrdered}</li>
              <li>price={item.price}</li>
              <li>numberInStock={item.numberInStock}</li>
              <li>description={item.description}</li>
            </ul>
          )
        })}
      </section>
    </>
  )
}
export default MakeUp
