const Events = () => {

    const handeleEvent = () => {
        console.log("Ativou o evento")
    };


    return(
        <div>
            <div>
            <button onClick={handeleEvent}>Clique aqui!</button>
            </div>
        </div>
    );
};

export default Events;