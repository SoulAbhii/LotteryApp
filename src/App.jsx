import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Lottery from './Lot'


import './App.css'

function App() {


  return (
    <>
      <Lottery n={3} winningSum={15}/>
             
    </>
  )
}

export default App
