import { createContext, useState } from "react";



export const DadosContext = createContext();

export const DadosProvider = ({ children }) => {
    
    const [dados, setDados] = useState([]);

        const addDado = (i, item) => {
                setDados((prevDados) => {
                    const novosDados =  [...prevDados]
                    novosDados[i] = item
                    return novosDados;
                })
        }

    return (
        <DadosContext.Provider value={{ dados, addDado }}>
            { children }
        </DadosContext.Provider>
    )
}
