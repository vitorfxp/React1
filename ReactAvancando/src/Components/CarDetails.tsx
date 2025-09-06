
type CarDetailsProps = {
  name: string;
  km: number;
  cor: string;
  newCar: boolean;
};


const CarDetails = ({ name, km, cor, newCar }: CarDetailsProps) => {
    return (
        <div>
            <h2>detalhes sobre o carro:</h2>
            <ul>
                <li>Marca: {name}</li>
                <li>Km: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
            {newCar === true ? (
                <div>
                    <p>Esse carro é novo!</p>
                </div>
            ) : (
                <div>
                    <p>esse carro é antigo, porém só tem:{km}</p>
                </div>
            )}
        </div>
    )
}

export default CarDetails