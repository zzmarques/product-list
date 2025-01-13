import { GoCheckCircle } from "react-icons/go";
import { forwardRef } from "react";
import data from '../../data/data.json'
import '../../sass/components/ConfirmOrder.scss';



const ConfirmOrder = forwardRef(({ priceTotal, infos }, ref) => {
    
    const thumb = infos.map(el => {
        for (const e of data) {

            if(e.name === el.name) {
                return e.image.thumbnail;
            }
        }
    });

    const orderPriceTotal = infos.map(el => {
        if(el.qtde > 1) {
            return el.qtde * el.price;
        } else {
            return el.price;
        }
    });

    

    const handleConfirm = (btn) => {
        const containerOrder = btn.closest('.confirm-order');
        containerOrder.remove();
        window.location.reload();
    }


    return (
        <>
            <div className="fundoEscuro"></div>
            <div className="confirm-order" ref={ref}>
            

            <div className="container-title">
                <GoCheckCircle className="check"/>
                <h1>Order Confirmed</h1>
                <p>We hope you enjoy your food!</p>
            </div>

            <div className="card-order">

                {
                    infos.length >= 0 ? (
                        <div className="container-cards">
                            {
                                infos.map((el, i) => (
                                    <div className="container-orders" key={i}>
                                        <div className="container-order">
                                            <figure className="order-photo">
                                                <img src={thumb[i]} alt="" />
                    
                                                <div className="infos-order">
                                                    <span className="order-name">{el.name}</span>
                    
                                                    <div className="price-x-qtde">
                                                        <span className="qtde-order">{el.qtde}x</span>
                                                        <span className="price-order">@ ${el.price}</span>
                                                    </div>
                                                </div>
                                            </figure>
                
                                            <div className="order-pirce-total">
                                                <span>${orderPriceTotal[i]}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <p>Error</p>
                    )
                
                }

                <div className="container-price-final">
                        <span className="txt-order">Order Total</span>
                        <span className="price-total-orders">${priceTotal}</span>
                </div>

            </div>
            
            <button className="btn-new-Order" onClick={(event) => handleConfirm(event.target)}>
                    Start New Order
            </button>
        </div>
        </>
        
    )
})

export default ConfirmOrder;