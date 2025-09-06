import { useState } from "react";

const Manage = () => {
    let [number, setNumber] = useState(15);

    return (
        <div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(10)}>Mudar Varíavel</button>
            </div>
        </div>
    )
}

export default Manage;