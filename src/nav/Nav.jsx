function Nav({ ellementSéléctionné, tabEllementSéléctionné, budget, retirerPanier }) {
    return (
        <nav>
            <h2>Panier</h2>
            {budget <= 10 ?
                <div className="text-amber-300">
                    BUDGET: {budget}
                </div> :
                <div>
                    BUDGET: {budget}
                </div>
            }
            <p className="flex flex-col">
                {tabEllementSéléctionné.map((item, index) => (
                    <span key={index}>
                        {item.nom} x{item.quantity}
                        {}
                        <button className="bg-amber-400" onClick={() => retirerPanier(index)}>Retirer</button>
                        {index < tabEllementSéléctionné.length - 1 ? ", " : ""}
                    </span>
                ))}
            </p>
        </nav>
    );
}

export default Nav;
