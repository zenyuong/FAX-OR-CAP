import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// App Components
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App /> , document.querySelector('#root'));