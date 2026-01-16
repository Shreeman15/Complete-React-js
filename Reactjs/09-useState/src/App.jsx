import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState({userName : "shreeman" , userAge : 21})
  
  // for changing users name and data function
  const changeUserData = () => {
    const newNum = {...num}
     newNum.userName = "rahul"
     newNum.userAge = 22
     setnum(newNum)
  }
  
  return (
    <div>
      <h1>{num.userName} , {num.userAge}</h1>
      <button onClick={changeUserData}>Click</button>
    </div>
  )
}

export default App