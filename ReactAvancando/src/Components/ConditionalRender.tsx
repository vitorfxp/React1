import { useState } from "react";

const CondiotionalRender = () => {
    const [x] = useState (true)

    const [name, setName] = useState("João")

    


    return (
        <div>
            <h1>isso será exibido?</h1>
            {x && <p>Se x for true sim!</p>}
            {!x && <p>Se x for true sim!</p>}
            {name === "João" ? (
                <div>
                    <p>Seu nome é joão!</p>
                </div>
            ) : (
                <div>
                    <p>
                        Seu nome é matheus
                    </p>
                </div>
            ) }
            <button onClick={() => setName ("Matheus")}>Mudar nome</button>
        </div>
    )
}

export default CondiotionalRender