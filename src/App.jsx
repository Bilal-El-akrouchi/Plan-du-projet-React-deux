import { useState } from 'react';
import './App.css';
import Carte from './carte/Carte';
import data from './data/data.json';
import Nav from './nav/Nav';

function App() {
  const [budget, setbudget] = useState(1000);
  const [produits, setProduits] = useState(data);
  const [tabEllementSéléctionné, setTabEllementSéléctionné] = useState([]);

  const ajouter = (produit) => {
    setProduits(prevProduits =>
      prevProduits.map(item =>
        item.nom === produit.nom ? { ...item, stock: item.stock - 1 } : item
      )
    );

    if (budget >= produit.prix) {
      setbudget(prevBudget => prevBudget - produit.prix);
    } else {
      console.log("Pas assez de budget");
      return;
    }

    setTabEllementSéléctionné(prev => {
      const existe = prev.find(item => item.nom === produit.nom);
      if (existe) {
        return prev.map(item =>
          item.nom === produit.nom ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...produit, quantity: 1 }];
      }
    });
  };

  const retirerPanier = (index) => {
    const produit = tabEllementSéléctionné[index];
    console.log("Produit à retirer:", produit);

    setProduits(prevProduits =>
      prevProduits.map(item =>
        item.nom === produit.nom ? { ...item, stock: item.stock + 1 } : item
      )
    );

    setbudget(prevBudget => prevBudget + produit.prix);
    console.log("Budget après mise à jour:", produit.prix);

    setTabEllementSéléctionné(prev => {
      const newTab = [...prev];
      console.log("Panier avant mise à jour:", newTab);

      if (newTab[index].quantity > 1) {
        newTab[index] = { ...newTab[index], quantity: newTab[index].quantity - 1 };
        console.log("Quantité après réduction:", newTab[index].quantity);
      } else {
        newTab.splice(index, 1);
        console.log("Produit retiré complètement, nouveau panier:", newTab);
      }

      return newTab;
    });
  };

  return (
    <>
      <div>
        <Nav 
          budget={budget} 
          tabEllementSéléctionné={tabEllementSéléctionné} 
          retirerPanier={retirerPanier} 
        />
      </div>
      <div>
        <Carte budget={budget} produits={produits} ajouter={ajouter} />
      </div>
    </>
  );
}

export default App;
