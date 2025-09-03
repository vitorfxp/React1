import MyComponent from "./MyComponent";

const FirstName = () => {

    const name = "matheus";
    const data = {
        age: 31,
        trablho: "programador",
    };

    return (
        <div>
            <h3>Olá {name}, tudo bem?</h3>
            <p>e o trabalho e: {data.trablho}</p>
            <MyComponent/>
        </div>
    )
}

export default FirstName