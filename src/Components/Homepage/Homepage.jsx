import '../Homepage/Homepage.scss';
import iPhone from '../../assets/Product Images/Name=Iphone-12-01.png'
import appleWatch from '../../assets/Product Images/Name=Watch.png'
import iPhone2 from '../../assets/Product Images/Name=Iphone-12-02.png'
import headphones from '../../assets/Product Images/Name=Headphones.png'
import iPhone3 from '../../assets/Product Images/Name=Iphone-12-03.png'
import iPhone4 from '../../assets/Product Images/Name=Iphone-12-04.png'
import storefront from '../../assets/Icons/Storefront.png'




export const Homepage = () =>{
    return(
    <>
     <div className="navbar"> 
        <ul className="nav-links">
            
                <a><img src={storefront}/></a> 
            
            <li className="nav-link"> Cart </li>
            <li className="nav-link"> About </li>
            <li className="nav-link">Home </li>

        </ul>
    </div> 
    <div className="search-bar"> 
        <input className="input-bar" type="text" placeholder="Apple Watch, Samsung S21,Macbook Pro, ..."/>
    </div>
    <div className="cart">
        <h2>Bag</h2>
        <div className="cart-items">

        </div>
    </div>
    <div className="Products">
    <div className="row">
        <div className="item">
            <div className="item-display">
            <img className="product" src={appleWatch}/>
            </div>
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={headphones}/>
            </div>
            <h5>Sony ZX33OBT </h5>
            <p>Light Grey</p>
            <h5>$ 39.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone}/>
            </div>
            <h5>iPhone 11</h5>
            <p>Serious Black</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone2}/>
            </div>
            <h5>iPhone 11</h5>
            <p>Subway Blue</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
    </div>
    </div>
    <div className="Products">
    <div className="row">
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone3}/>
            </div>
            <h5>iPhone 11</h5>
            <p>Product RED</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone4}/>
            </div>
            <h5>iPhone 11</h5>
            <p>Milky White</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone3}/>
            </div>
            <h5>iPhone 13</h5>
            <p>Product RED</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone3}/>
            </div>
            <h5>iPhone 14</h5>
            <p>Product RED</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
    </div>
    </div>
    <div className="Products">
    <div className="row">
        <div className="item">
            <img className="product" src={iPhone}/>
            <p>fsrg</p>
            <i></i>
        </div>
        <div className="item">
            <img className="product" src={iPhone}/>
            <p>fsrg</p>
            <i></i>
        </div>
        <div className="item">
            <img className="product" src={iPhone}/>
            <p>fsrg</p>
            <i></i>
        </div>
        <div className="item">
            <img className="product" src={iPhone}/>
            <p>fsrg</p>
            <i></i>
        </div>
    </div>
    </div>
    <div className="Products">
    <div className="row">
        <div className="item">
            <img className="product" src={iPhone}/>
            <p>fsrg</p>
            <i></i>
        </div>
        <div className="item">
            <img className="product" src={iPhone}/>
            <p>fsrg</p>
            <i></i>
        </div>
        <div className="item">
            <img className="product" src={iPhone}/>
            <p>fsrg</p>
            <i></i>
        </div>
        <div className="item">
            <img className="product" src={iPhone}/>
            <p>fsrg</p>
            <i></i>
        </div>
    </div>
    
    </div>
    </>
        )
}