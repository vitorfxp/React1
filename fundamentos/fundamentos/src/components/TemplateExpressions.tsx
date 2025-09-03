 const TemplateExpressions = () => {

    const name = "Matheus";
    const data ={
        age : 17,
        trabalho: "programador",

    };

    return(
        <div>
            <p>Olá {name}, tudo bem?</p>
            <p>Você atua como: {data.trabalho}</p>
            <p>{4+4}</p>
        </div>
    )

 }

 export default TemplateExpressions