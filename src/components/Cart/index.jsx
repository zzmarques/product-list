import { useContext, useEffect, useRef, useState } from "react";
import { DadosContext } from "../../context/DadosContext";
import { IoMdCloseCircleOutline } from "react-icons/io";
import img from '../../../public/assets/images/icon-carbon-neutral.svg'
import imgAddCart from '../../../public/assets/images/illustration-empty-cart.svg'
import ConfirmOrder from "../ConfirmOrder";
import '../../sass/components/Cart.scss';

const Cart = () => {
    const { dados, resetDados, verificarOrder } = useContext(DadosContext);  
    const [ status, setStatus ] = useState(false);
    const [key, setKey] = useState(0);
    const containerRef = useRef(null);
    let total = 0;
    let totalPrice = 0;

    const cartDados = dados.filter(item => {
        return item !== undefined;
    });
    

    useEffect(() => {
        if (status && containerRef.current) {
            containerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
        }
    }, [status]);

    const handleChange = () => {
        setStatus(true)    
    }

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
        const nameOrder = btn.closest('.details').querySelector('.cat').innerText.split(" ").join("-");
        const pedidoCart = btn.closest('.details');
        const price = +pedidoCart.querySelector('.price2').innerText.replace('$', '');
        const pedidoQtde = +pedidoCart.querySelector('.qnt').innerText.replace('x', '');
        const priceTotal = document.querySelector('.price-total');
        const totalPedido = document.querySelector('.totalPedido');
        const qtde = document.querySelectorAll('.qntd');
        const qtdeTotalPedidos = +totalPedido.innerText.replace('Your Cart ', '').replace('(', '').replace(')', '') - pedidoQtde;

        qtde.forEach((p) => {
            if (p.classList.contains(nameOrder)) {
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
            cartDados.splice(0, cartDados.length);
            setKey(prevKey => prevKey + 1); 
            resetDados();
            verificarOrder(qtdeTotalPedidos);
        }
        
        totalPedido.innerHTML = `Your Cart (${qtdeTotalPedidos})`;
        pedidoCart.remove();
    }

    return (
        <div className="cart" key={key}>
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

                                <button 
                                    className="btn-confirm" 
                                    onClick={handleChange}
                                >Confirm Order</button>
                            </div>
                    </div>
                ) : (
                        <figure className="cart-vazio">
                            <img src={imgAddCart} alt="" />
                            <span>Your added items will appear here</span>
                        </figure>
                    )
            }

            {status && 
                    <ConfirmOrder priceTotal={totalPrice} infos={cartDados} ref={containerRef}/>
            }
        </div>
    );
}

export default Cart;

