import { useState } from 'react'
import './App.css'
import Carte from './carte/Carte'
import data from './data/data.json'
function App() {

  return (
    data.map(
      (datas, index)=>(<Carte nom={datas.nom} prix={datas.prix} stock={datas.stock} />) 
    )
  )
}

export default App
