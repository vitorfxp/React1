import type { ReactNode } from "react";  

type childrenType = {
    children: ReactNode;
}

const Container = ({children}: childrenType) => {
    return (
        <>
        <h2>Este é o título do container</h2>
        {children}
        </>
    )
}

export default Container