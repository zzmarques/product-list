import React, { useContext, useEffect, useState } from "react";
import { DadosContext } from "../../context/DadosContext";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
import data from "../../data/data.json";
import '../../sass/components/BtnAdd.scss';


const BtnAdd =  ({ id, name}) => {

    const nameClass = name.split(" ").join("-");
    const { dados, addDado, resetDados, qtdeOrder, verificarOrder } = useContext(DadosContext);
    const [ toggle, setToggle ] = useState(true);
    const [ qnt, setQnt ] = useState(0);
    let novoDado = 0;

    const altBtn = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        (() => {
            if (qtdeOrder === 0) {
                if (qnt !== 0) {
                    setQnt(0)
                    novoDado = 0;
                    resetDados();
                    verificarOrder(null);
                    console.log(dados)
                }
                
            }
        })();
    }, [qtdeOrder]);

    const aumentar = () => {
        setQnt(qnt + 1);
    }

    const diminuir = () => {
        if (qnt > 0) setQnt(qnt - 1)
    }

    const mudarDados = (event) => {
        const btn = event.target.closest('.bnt');

        if (btn.classList.contains('add')) {
            novoDado = qnt + 1
        } else if (btn.classList.contains('sub')) {
            if (qnt > 0) novoDado = qnt - 1
        }
        
        if(novoDado < 0) {
            return
        } else {
            addDado(id, {
                name: data[id].name,
                price: data[id].price,
                qtde: novoDado
            });
        }
    }

    return (
        <>
            {
                toggle ? (
                    <div className="btn-Add" onClick={altBtn}>
                    <MdOutlineAddShoppingCart className="cart-icon"/>
                        Add to Cart
                    </div>
                ) : (
                    <div className="btn-qnt">
                        <div className="sub bnt" onClick={() => {
                            diminuir() 
                            mudarDados(event)
                        }}>
                            <GrSubtractCircle />
                        </div>
                            <span className={`qntd ${nameClass}`}>{qnt}</span>
                        <div className="add bnt" onClick={() => {
                            aumentar()
                            mudarDados(event)
                        }}>
                            <GrAddCircle/>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default BtnAdd;