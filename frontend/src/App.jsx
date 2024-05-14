import { useState } from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import Messages from './components/Messages'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='bg-[#282C34]'>
      <Nav />
      <Messages />
      <Main />
    </div>

  )
}

export default App
