const Event = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Evento ativado")//
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div onClick={() => {
                if (true) {
                    console.log("Isso n era pra ocorrer")
                }
            }}>Clica aqui 2</div>
        </div>
    )
};


export default Event;