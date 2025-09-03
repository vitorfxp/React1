const Challenge = () => {
    let a: number = 7
    let b: number = 7

    const handeleSoma = () => {
        console.log(a + b)
    };

    return(
        <div>
            <div>
                <p>B = {a}</p>
                <p>A = {b}</p>
            </div>
            <div>
            <button onClick={handeleSoma}>Soma!</button>
            </div>
        </div>
    );
};

export default Challenge;