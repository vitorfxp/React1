type ExecuteFunctionProps = {
  myFunction: () => void; // aqui você define que espera uma função sem parâmetros e sem retorno
};

const ExecuteFunction = ({myFunction}: ExecuteFunctionProps) => {
    return (
        <div>
            <button onClick={myFunction}>Mudar</button>
        </div>
    )
}

export default ExecuteFunction