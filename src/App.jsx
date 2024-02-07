import React from 'react'
import './App.scss'

import { About, Footer, Header, Work, Skills } from './container'
import { Navbar } from './components'

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
      <h4 className='moto'>Maybe Not Immediately But Definitely!</h4>
    </div>
    </>
  )
}

export default App