interface PropsType {
  name: string;
}

const Props = (props: PropsType) => {
  return (
    <div>
      <h2>Nome do usuário: {props.name}</h2>
    </div>
  );
};

export default Props;

//podemos passar valores criados direto no componente exportado, exportar por chaves e por userstate.
