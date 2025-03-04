import './Carte.css'
export default Carte
function Carte({nom, prix, stock, ajouter}){
return(
<>
<div className='flex gap-2.5 justify-around'>
    <div className='w-[30vw] bg-fuchsia-700 ' >
        <div className='flex gap-2.5 flex-col '>
            <div>
                nom:{nom}
            </div> 
            <div>
                prix:{prix}
            </div>
            <div>
                stock:{stock}
        </div> 
    </div>
        <button className='bg-fuchsia-300 w-full' onClick={(ajouter)} >ajouter</button>
    </div>
</div>

</>
)
}
