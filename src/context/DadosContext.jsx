import { createContext, useState } from "react";


export const DadosContext = createContext();

export const DadosProvider = ({ children }) => {
    
    const [ dados, setDados ] = useState([]);
    const [ qtdeOrder, setQtdeOrder] = useState();

        const addDado = (i, item) => {
                setDados((prevDados) => {
                    const novosDados =  [...prevDados];

                    if (item.qtde !== 0) {
                        novosDados[i] = item;
                    } else if (item.qtde === 0 && novosDados[i]) {
                        novosDados[i] = undefined;
                    }
                    return novosDados;
                })
        }

        const resetDados = () => {
            setDados([]); 
        };

        const verificarOrder = (qtd) => {
            setQtdeOrder(qtd);
        }


    return (
        <DadosContext.Provider value={{ dados, addDado, resetDados, verificarOrder, qtdeOrder }}>
            { children }
        </DadosContext.Provider>
    )
}
