import { IoMdCloseCircleOutline } from "react-icons/io";
import '../../sass/components/Cart.scss';
import img from '../../../public/assets/images/icon-carbon-neutral.svg'
import imgAddCart from '../../../public/assets/images/illustration-empty-cart.svg'
import { useContext, useState } from "react";
import { DadosContext } from "../../context/DadosContext";

const Cart = () => {
    const { dados } = useContext(DadosContext);   

    const cartDados = dados.filter(item => item !== undefined)

    return (
        <div className="cart">
            <h1>Your Cart (0)</h1>

            {
                cartDados.length > 0 ? (
                    <div className="cart">
                        <h1>Your Cart (0)</h1>
                        {
                        cartDados.map((data) => (
                                    <div className="details">
                                        <div className="infos">
                                            <span className="cat">{data.name}</span>
                                            <div className="info-quant">
                                                <span className="qnt">{data.qtde}x</span>
                                                <span className="price1">@{data.price}</span>
                                                <span className="price2">${data.price}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="close">
                                            <IoMdCloseCircleOutline />
                                        </div>
                                    </div>
                        ))
                        }
                            <div className="confirm-content">
                                <div className="info-total">
                                    <span className="order">Order Total</span>
                                    <span className="price-total">$</span>
                                </div>

                                <div className="neutral ">
                                    <img src={img} alt=""/>
                                    <p>This is a <span>carbon-neutral</span> delivery</p>
                                </div>

                                <button className="btn-confirm">Confirm Order</button>
                            </div>
                    </div>
                ) : (
                        <figure className="cart-vazio">
                            <img src={imgAddCart} alt="" />
                            <span>Your added items will appear here</span>
                        </figure>
                    )
            }
        </div>
    );
}

export default Cart;

