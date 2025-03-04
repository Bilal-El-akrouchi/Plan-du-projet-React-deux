import { useState } from 'react'
import './App.css'
import Carte from './carte/Carte'
import data from './data/data.json'

function App() {
  const [stock, setStock] = useState(0)
  const ajouter=()=>{
    setStock (stock+1)
    console.log('ff');
    
  }

  return (
    // LES CARTES BOUCLE
    <div>
      {stock === 0 ? (
        data.map((datas, index) => (
          <Carte key={index} nom={datas.nom} prix={datas.prix} stock={datas.stock} ajouter={ajouter} />
        ))
      ) : null}
    </div>
  )
}
    // Fin Des Cartes

export default App
