{/*forma de importa o componente sem uma div, ou seja, o componente fragments, vai para o elemento pai, div de app.tsx, onde esta importado*/}

type prop = {
    propFragment: string;
}

const Fragment = ({propFragment}: prop) => {
        return (
            <>
                <h2>Primeiro titulo</h2>
                <h3>Segundo titulo</h3>
                <h4>{propFragment}</h4>
            </>
        )
}

export default Fragment