import { IoMdCloseCircleOutline } from "react-icons/io";
import '../../sass/components/Cart.scss';
import img from '../../../public/assets/images/icon-carbon-neutral.svg'
import imgAddCart from '../../../public/assets/images/illustration-empty-cart.svg'
import { useContext, useState } from "react";
import { DadosContext } from "../../context/DadosContext";

const Cart = () => {
    const { dados } = useContext(DadosContext);   
    
    console.log(dados)

    return (
        <div className="cart">
            <h1>Your Cart (0)</h1>

            {/* <figure className="cart-vazio">
                <img src={imgAddCart} alt="" />
                <span>Your added items will appear here</span>
            </figure> */}

            <div>
                <div className="details">
                <div className="infos">
                        <span className="cat">{}</span>
                        <div className="info-quant">
                            <span className="qnt">{}x</span>
                            <span className="price1">@{}</span>
                            <span className="price2">${}</span>
                        </div>
                    </div>
                    
                    <div className="close">
                        <IoMdCloseCircleOutline />
                    </div>
                </div>


            </div>

            <div className="confirm-content">
                <div className="info-total">
                    <span className="order">Order Total</span>
                    <span className="price-total">$46.50</span>
                </div>

                <div className="neutral ">
                    <img src={img} alt=""/>
                    <p>This is a <span>carbon-neutral</span> delivery</p>
                </div>

                <button className="btn-confirm">Confirm Order</button>
            </div>
        </div>

    );
}

export default Cart;