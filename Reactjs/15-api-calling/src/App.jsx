import React from 'react'

// api call 
// 2 types
// 1) fetch method
// 2) through axios - 3rd party calling

const fetchData = async() => {
  console.log("fatched data");
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') // async things so put async and await
  const data = await response.json();
  console.log(data);
  console.log(data.id);
  console.log(data.title);
}

const App = () => {
  return (
    <div>
      <button onClick={fetchData}>button</button>
    </div>
  )
}

export default App