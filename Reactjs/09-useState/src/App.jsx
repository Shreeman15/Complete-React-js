import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({userName : "shreeman" , userAge : 21})
  const [Number, setNumber] = useState([12,11,12,13])
  const [counter, setcounter] = useState(0)
  // for changing users name and data function
  const changeUserData = () => {
    const newNum = {...num}
     newNum.userName = "rahul"
     newNum.userAge = 22
     setnum(newNum)
  }
  const ChangeNumber = () => {
    const NewNumber = [...Number,22]
    //NewNumber.push(11)
    setNumber(NewNumber)
  }

   const increaseNumber = () => {
    // concept of batch update in react
      setcounter(prev => prev + 1)
      setcounter(prev => prev + 1)
      setcounter(prev => prev + 1)
   }
  
  return (
    <div>
      <h1>{num.userName} , {num.userAge}</h1>
      <button onClick={changeUserData}>Click</button>

      <h1>{Number}</h1>
      <button onClick={ChangeNumber}>Change</button>

      <h1>{counter}</h1>
      <button onClick={increaseNumber}>by 3</button>
    </div>
  )
}

export default App