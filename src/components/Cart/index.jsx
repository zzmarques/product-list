import { IoMdCloseCircleOutline } from "react-icons/io";
import '../../sass/components/Cart.scss';
import img from '../../../public/assets/images/icon-carbon-neutral.svg'
import imgAddCart from '../../../public/assets/images/illustration-empty-cart.svg'
import { useContext, useState } from "react";
import { DadosContext } from "../../context/DadosContext";

const Cart = () => {
    const { dados } = useContext(DadosContext);   

    dados.map((data) => {
        console.log(data)
    })

    return (
        <div className="cart">
            <h1>Your Cart (0)</h1>

            {
                dados.length > 0 ? (
                    <div className="content">
                        {
                        dados.map((data) => (
                                    <div className="details">
                                        <div className="infos">
                                            <span className="cat">{data[0].name}</span>
                                            <div className="info-quant">
                                                <span className="qnt">{data[0].qtde}x</span>
                                                <span className="price1">@{data[0].price}</span>
                                                <span className="price2">${data[0].price}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="close">
                                            <IoMdCloseCircleOutline />
                                        </div>
                                    </div>
                        ))
                        }
                    </div>
                ) : (
                        <figure className="cart-vazio">
                            <img src={imgAddCart} alt="" />
                            <span>Your added items will appear here</span>
                        </figure>
                    )
            }
            {/* <figure className="cart-vazio">
                <img src={imgAddCart} alt="" />
                <span>Your added items will appear here</span>
            </figure> */}

            {/* <div>
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


            </div> */}

            {/* <div className="confirm-content">
                <div className="info-total">
                    <span className="order">Order Total</span>
                    <span className="price-total">$46.50</span>
                </div>

                <div className="neutral ">
                    <img src={img} alt=""/>
                    <p>This is a <span>carbon-neutral</span> delivery</p>
                </div>

                <button className="btn-confirm">Confirm Order</button>
            </div> */}
        </div>

    );
}

export default Cart;

