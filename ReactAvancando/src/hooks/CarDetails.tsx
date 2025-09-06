
type CarDetailsProps = {
  name: string;
  km: number;
  cor: string;
};


const CarDetais = ({ name, km, cor }: CarDetailsProps) => {
    return (
        <div>
            <h2>detalhes sobre o carro:</h2>
            <ul>
                <li>Marca: {name}</li>
                <li>Km: {km}</li>
                <li>Cor: {cor}</li>
            </ul>
        </div>
    )
}

export default CarDetais