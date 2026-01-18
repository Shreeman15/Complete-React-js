import React, { useState } from 'react'

const App = () => {

  const [first, setfirst] = useState('')
  const [details, setDetails] = useState('')
  const [Show, setShow] = useState([])

  const submitHandler = (event) => {
    event.preventDefault()
    if (!first || !details) return alert("Please fill in all fields")

    const copyTasks = [...Show]
    copyTasks.push({first, details})
    setShow(copyTasks);
    console.log(copyTasks);
    
    
    setfirst('')
    setDetails('')
  }

  return (
    <div className='overflow-y-auto h-screen bg-gray-900 text-white p-10 gap-8 lg:flex'>
      <form 
        onSubmit={submitHandler} 
        className='flex flex-col gap-4 items-start lg:w-1/2 p-10' 
      >
        <h1 className='text-3xl font-bold'>Create Notes</h1>
        <input
          value={first}
          onChange={(e) => setfirst(e.target.value)}
          className='px-5 rounded w-full py-2 border-2 outline-none  font-medium'
          type="text"
          placeholder='Enter Notes Heading'
        />

        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className='px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded  items-start'
          placeholder='Write Details'
        />

        <button className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'>
          Enter
        </button>

      </form>

      <div className=' p-10 lg:border-l-2 lg:w-1/2'>
      <h1 className='text-3xl font-bold'>Notes</h1>
      <div className=' flex gap-2 overflow-auto no-scrollbar flex-wrap mt-5 h-full p-4'>
      {Show.map((elem) => (
        <div
  key={elem.id}
  className="
    px-4 py-4
    h-56 w-52
    rounded bg-cover bg-center
    bg-[url(https://plus.unsplash.com/premium_photo-1751106852077-5b918fcb195d)]
  "
>
  <h3 className="leading-tight wrap-break-word font-bold text-black">
    {elem.first}
  </h3>

  <p
    className="
      mt-3
      h-36
      overflow-y-auto
      overflow-x-hidden
      wrap-break-word
      leading-relaxed
      font-medium
      text-gray-700
      no-scrollbar
    
    "
  >
    {elem.details}
  </p>
</div>
))}

 
      </div>
      </div>
    </div>
  )
}

export default App
