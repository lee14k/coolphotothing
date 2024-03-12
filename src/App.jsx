import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import coolPhotoThing from '../components/coolPhotoThing'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <coolPhotoThing/>
      </div>
     
    </>
  )
}

export default App
