import './Carte.css'

export default function Carte({ produits, ajouter, budget}) {
  return (
    <>
 
      {produits.map((datas, index) => (
        <div key={index} className="flex gap-2.5 justify-around">
          <div className={`w-[30vw] ${datas.stock === 1 ? 'bg-amber-600' :datas.stock===0 ? `bg-red-900 text-amber-50` : 'bg-fuchsia-700'}`}
>
            <div className="flex gap-2.5 flex-col ">
              <div>Nom: {datas.nom}</div>
              <div>Prix: {datas.prix}</div>
              <div>Stock: {datas.stock}</div>
              <div><img src={datas.image} alt="" /></div>
            </div>
            {(datas.stock > 0 && budget>=datas.prix)
            ?
            <button className="bg-fuchsia-300 w-full" onClick={() => ajouter(datas)} >
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
