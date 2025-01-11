import { createContext, useState } from "react";



export const DadosContext = createContext();

export const DadosProvider = ({ children }) => {
    
    const [dados, setDados] = useState([]);
    const [ qtdeOrder, setQtdeOrder] = useState();

        const addDado = (i, item) => {
                setDados((prevDados) => {
                    const novosDados =  [...prevDados]
                    novosDados[i] = item
                    return novosDados;
                })
        }

        const resetDados = () => {
            setDados([]); 
        };

        const verificarOrder = (qtd) => {
            setQtdeOrder(0)
        }


    return (
        <DadosContext.Provider value={{ dados, addDado, resetDados, verificarOrder, qtdeOrder }}>
            { children }
        </DadosContext.Provider>
    )
}
