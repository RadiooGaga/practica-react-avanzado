import React from 'react'
import './App.css'
import { Timer } from './components/Timer/Timer'
import { Calculator } from './components/Calculator/Calculator'


export const App = () => {

  return (
    <>
      <div className='App'>
        <h1 className='practica'>Práctica React Avanzado</h1>
        <Timer />
        <Calculator />
      </div>
      
    </>
  )
}


