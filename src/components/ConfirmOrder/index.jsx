import { GoCheckCircle } from "react-icons/go";
import data from '../../data/data.json'
import '../../sass/components/ConfirmOrder.scss';


const ConfirmOrder = ({ priceTotal, infos }) => {

    const handleConfirm = (btn) => {
        const containerOrder = btn.closest('.confirm-order');
        containerOrder.remove();
        window.location.reload()
    }


    return (
        <div className="confirm-order">

            <div className="container-title">
                <GoCheckCircle className="check"/>
                <h1>Order Confirmed</h1>
                <p>We hope you enjoy your food!</p>
            </div>

            <div className="card-order">

                <div className="container-orders">

                    <div className="container-order">
                        <figure className="order-photo">
                            <img src={data[0].image.thumbnail} alt="" />

                            <div className="infos-order">
                                <span className="order-name">Classic Tiramisu</span>

                                <div className="price-x-qtde">
                                    <span className="qtde-order">1x</span>
                                    <span className="price-order">@ $5.50</span>
                                </div>
                            </div>
                        </figure>

                        <div className="order-pirce-total">
                            <span>$5.50</span>
                        </div>
                    </div>

                </div>

                <div className="container-orders">
                    <div className="container-order">
                        <figure className="order-photo">
                            <img src={data[0].image.thumbnail} alt="" />

                            <div className="infos-order">
                                <span className="order-name">Vanilla Bean Crème Brûlée</span>

                                <div className="price-x-qtde">
                                    <span className="qtde-order">4x</span>
                                    <span className="price-order">@ $7.00</span>
                                </div>
                            </div>
                        </figure>

                        <div className="order-pirce-total">
                            <span>$28.00</span>
                        </div>
                    </div>
                </div>

                <div className="container-orders">
                    <div className="container-order">
                        <figure className="order-photo">
                            <img src={data[0].image.thumbnail} alt="" />

                            <div className="infos-order">
                                <span className="order-name">Vanilla Panna Cotta</span>

                                <div className="price-x-qtde">
                                    <span className="qtde-order">2x</span>
                                    <span className="price-order">@ $6.50</span>
                                </div>
                            </div>
                        </figure>

                        <div className="order-pirce-total">
                            <span>$13.00</span>
                        </div>
                    </div>
                </div>

                <div className="container-price-final">
                        <span className="txt-order">Order Total</span>
                        <span className="price-total-orders">${priceTotal}</span>
                </div>

            </div>
            
            <button className="btn-new-Order" onClick={(event) => handleConfirm(event.target)}>
                    Start New Order
            </button>
        </div>
    )
}

export default ConfirmOrder;