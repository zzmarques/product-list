import { IoMdCloseCircleOutline } from "react-icons/io";
import '../../sass/components/Cart.scss';
import img from '../../../public/assets/images/icon-carbon-neutral.svg'
import imgAddCart from '../../../public/assets/images/illustration-empty-cart.svg'
import { useContext, useState } from "react";
import { DadosContext } from "../../context/DadosContext";
import ConfirmOrder from "../ConfirmOrder";

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
        const pedidoQtde = +pedidoCart.querySelector('.qnt').innerText.replace('x', '');
        const namePedido = pedidoCart.querySelector('.cat').innerText.replace(' ', '-').replace(' ', '-');
        const priceTotal = document.querySelector('.price-total');
        const containerPedidos = document.querySelector('.containerPedidos');
        const containerCart = document.querySelector('.cart');
        const totalPedido = document.querySelector('.totalPedido');
        const qtde = document.querySelectorAll('.qntd');
        const qtdeTotalPedidos = +totalPedido.innerText.replace('Your Cart ', '').replace('(', '').replace(')', '') - pedidoQtde;
        
        qtde.forEach((p) => {
            if (p.classList.contains(namePedido)) {
                p.innerHTML = 0;
            }
        });
        
        if(pedidoQtde > 1) {
            let priceX = 0;
            priceX = pedidoQtde * price;
            totalPrice -= priceX;
            priceTotal.innerHTML = `$${totalPrice}`;
            
        } else {
            totalPrice -= price;
            priceTotal.innerHTML = `$${totalPrice}`;
        }

        if (qtdeTotalPedidos === 0) {
            const figureElement = document.createElement('figure'); 
            figureElement.className = 'cart-vazio'; 
            const imgElement = document.createElement('img'); 
            imgElement.src = imgAddCart; imgElement.alt = ''; 
            const spanElement = document.createElement('span'); 
            spanElement.innerText = 'Your added items will appear here'; 

            figureElement.appendChild(imgElement); 
            figureElement.appendChild(spanElement);
            containerPedidos.remove();
            containerCart.appendChild(figureElement);
            
    
        }
        
        totalPedido.innerHTML = `Your Cart (${qtdeTotalPedidos})`;
        console.log()
        pedidoCart.remove();
    }

    return (
        <div className="cart">
            {<h1 className="totalPedido">Your Cart ({`${total}`})</h1>}
            {
                cartDados.length > 0 ? (
                    <div className="containerPedidos">
                        {
                        cartDados.map((data, i) => (
                            <div className="details" key={i}>
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

            <ConfirmOrder/>
        </div>
    );
}

export default Cart;

