import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
import '../../sass/components/BtnAdd.scss';
import React, { useContext, useState } from "react";
import { DadosContext } from "../../context/DadosContext";
import data from "../../data/data.json";


const BtnAdd =  ({ id, name}) => {
    const nameClass = name.replace(' ', '-').replace(' ', '-');
    const { dados, addDado } = useContext(DadosContext);
    const [ toggle, setToggle ] = useState(true);
    const [ qnt, setQnt ] = useState(0);

    const altBtn = () => {
        setToggle(!toggle);
    }

    const aumentar = () => {
        setQnt(qnt + 1);
    }

    const diminuir = () => {
        if (qnt > 0) setQnt(qnt - 1)
    }

    const mudarDados = (event) => {
        const btn = event.target.closest('.bnt');
        let novoDado = 0;

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