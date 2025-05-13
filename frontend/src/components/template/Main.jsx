import './Main.css'
import React from 'react'
import Header from './Header'

export default props =>
  <React.Fragment>
    <Header />
    <main className='content'>
      <h1>Conteúdo</h1>
    </main>
  </React.Fragment>