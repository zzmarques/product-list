import { IoMdCloseCircleOutline } from "react-icons/io";
import '../../sass/components/Cart.scss';
import img from '../../../public/assets/images/icon-carbon-neutral.svg'
import imgAddCart from '../../../public/assets/images/illustration-empty-cart.svg'
import { useContext, useState } from "react";
import { DadosContext } from "../../context/DadosContext";

const Cart = () => {
    const { dados } = useContext(DadosContext);   

    const cartDados = dados.filter(item => item !== undefined);
    let total = 0;
    let totalPrice = 0;

    for (const element of cartDados) {
        let priceX = 0;
        if (element.qtde > 1) {
            priceX = element.price * element.qtde
            totalPrice += priceX
        } else {
            totalPrice += element.price
        }
        total += element.qtde
        
    }

    const closeP = (btn) => {
        const pedidoCart = btn.closest('.details');
        const price = +pedidoCart.querySelector('.price2').innerText.replace('$', '');
        const pedidoQtde = +pedidoCart.querySelector('.qnt').innerText.replace('x', '')
        const priceTotal = document.querySelector('.price-total');
        const totalPedido = document.querySelector('.totalPedido');
        const pedios = document.querySelectorAll('.details');
        const qtde = document.querySelector('.qntd');
        const qtdeTotalPedidos = +totalPedido.innerText.replace('Your Cart ', '') - pedidoQtde
        
        if(pedidoQtde > 1) {
            let priceX = 0;
            priceX = pedidoQtde * price
            totalPrice -= priceX;
            priceTotal.innerHTML = `$${totalPrice}`
            
        } else {
            totalPrice -= price;
            priceTotal.innerHTML = `$${totalPrice}`
        }
        
        totalPedido.innerHTML = `Your Cart ${qtdeTotalPedidos}`
        pedidoCart.remove();
    }

    return (
        <div className="cart">
            {<h1 className="totalPedido">Your Cart {(`${total}`)}</h1>}

            {
                cartDados.length > 0 ? (
                    <div className="cart">
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
                                
                                <div className="close"
                                    onClick={(event) => {
                                        closeP(event.target)
                                    }}
                                >
                                    <IoMdCloseCircleOutline />
                                </div>
                            </div>
                        ))
                        }
                            <div className="confirm-content">
                                <div className="info-total">
                                    <span className="order">Order Total</span>
                                    <span className="price-total">${totalPrice}</span>
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

