import BtnAdd from "../BtnAdd";
import '../../sass/components/CardProducts.scss';


const CardProducts = ({ name, category, price, imgs, idB}) => {

    const wv = innerWidth;
    let img;
    
    if (wv >= 1024) {
        img = imgs.desktop;
    } else if (wv >= 768) {
        img = imgs.tablet;
    } else {
        img = imgs.mobile;
        
    }

    return (
            <div className="cards">
                <figure>
                    <img src={img} alt="comida" />
                    <BtnAdd
                        id={idB}
                        name={name}
                    ></BtnAdd>
                </figure>

                <div className="text-cards">
                    <span className="name">{name}</span>
                    <span className="category">{category}</span>
                    <span className="price">${price}</span>
                </div>
            </div>
    );
}

export default CardProducts;