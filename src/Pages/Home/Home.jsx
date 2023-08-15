import  { useState } from 'react'; 
import './Home.scss';
import { products } from '../../Products';
import bagIcon from '../../assets/add.png';

export const Home = () => {
    const [filteredProducts, setFilteredProducts] = useState(products); // Use state to manage filtered products

    const filterProducts = (e) => {
        const search = e.target.value.toLowerCase();
        const filtered = products.filter(product => 
            product.title.toLowerCase().includes(search) ||
            product.subTitle.toLowerCase().includes(search)
        );
        setFilteredProducts(filtered); // Update filtered products
    };

    return (
        <section className='home'>
            <label htmlFor="">
                Search Item
                <input type="text" placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' onChange={(e) => filterProducts(e)}/>
            </label>
            <div className="products">
                {filteredProducts.map((product) => (
                    <div className="product" key={product.id}>
                        <div className="imageContainer">
                            <img src={product.img} alt="product image" loading='lazy' />
                        </div>
                        <h2>{product.title}</h2>
                        <h3>{product.subTitle}</h3>
                        <div className='price'>
                            <p>{`$${product.price}`}</p>
                            <div className="addToCart">
                                <img src={bagIcon} alt="add to cart" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
