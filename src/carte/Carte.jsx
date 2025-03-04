import './Carte.css'

export default function Carte({ produits, ajouter }) {
  return (
    <>
      {produits.map((datas, index) => (
        <div key={index} className="flex gap-2.5 justify-around">
          <div className="w-[30vw] bg-fuchsia-700">
            <div className="flex gap-2.5 flex-col">
              <div>Nom: {datas.nom}</div>
              <div>Prix: {datas.prix}</div>
              <div>Stock: {datas.stock}</div>
            </div>
            {datas.stock > 0
            ?
            <button className="bg-fuchsia-300 w-full" onClick={() => ajouter(index)} >
                Ajouter
            </button>
            :
            null
        }
            
          </div>
        </div>
      ))}
    </>
  )
}
