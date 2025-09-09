import styles from './Car.module.css'

type CarDetailsProps = {
  name: string;
  km: number;
  cor: string;
  newCar: boolean;
};

const Car = ({name, km, cor}: CarDetailsProps) => {
    return(
        <div className={styles.card}>
            <h1>{name}</h1>
            <p>Km:{km}</p>
            <p>Cor:{cor}</p>
        </div>
    )
}

export default Car