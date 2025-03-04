import { useState } from 'react'
import './App.css'
import Carte from './carte/Carte'
import data from './data/data.json'

function App() {
  const [panier, setPanier] = useState(0)
  const [produits, setProduits] = useState(data)

  const ajouter = (index) => {
    setPanier(prev => prev + 1)
    const updateProduits = [...produits]
    if (updateProduits[index].stock > 0) {
      updateProduits[index].stock -= 1
      setProduits(updateProduits)
    }
  }

  return (
    <div>
      <Carte produits={produits} ajouter={ajouter} />
      {panier === 0 ? null : (
        <div>Panier (ajouter des produits ici)</div>
      )}
    </div>
  )
}

export default App
