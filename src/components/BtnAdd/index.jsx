import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
import '../../sass/components/BtnAdd.scss';
import React, { useContext, useState } from "react";
import { DadosContext } from "../../context/DadosContext";
import { GiQueenCrown } from "react-icons/gi";
import data from "../../data/data.json";


const BtnAdd =  ({ id }) => {

    const { dados, addDado } = useContext(DadosContext)

    const [ toggle, setToggle ] = useState(true)

    const altBtn = () => {
        setToggle(!toggle)
    }

    const [ qnt, setQnt ] = useState(0)

    const aumentar = () => {
        setQnt(qnt + 1)
    }

    const diminuir = () => {
        if (qnt > 0) setQnt(qnt - 1)
        
    }

    const mudarDados = (event) => {
        let novoDado = 0

        if ( event.target.className === 'add') {
            novoDado = qnt + 1
        } else if (event.target.className === 'sub') {
            if (qnt > 0) novoDado = qnt - 1
        }
        
        addDado(id, {
            name: data[id].name,
            price: data[id].price,
            qtde: novoDado
        });

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
                        <div className="sub" onClick={() => {
                            diminuir() 
                            mudarDados(event)
                        }}>
                            <GrSubtractCircle />
                        </div>
                        <span className="qntd">{qnt}</span>
                        <div className="add" onClick={() => {
                            aumentar()
                            mudarDados(event)
                        }}>
                        <GrAddCircle />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default BtnAdd;