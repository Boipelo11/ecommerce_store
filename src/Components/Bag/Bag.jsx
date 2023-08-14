import './Bag.scss';
import iphone from '../../assets/products/iphone11.png';

export const Bag = () => {
    return (
        <div className="bag">
            <h1>Bag</h1>
            <div className="items">
                <div className="imageContainer">
                    <img src={iphone} alt="" loading='lazy' />
                </div>
            </div>
        </div>
    );
} 