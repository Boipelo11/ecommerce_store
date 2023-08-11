import '../Homepage/Homepage.scss';
import iPhone from '../../assets/Product Images/Name=Iphone-12-01.png'
import appleWatch from '../../assets/Product Images/Name=Watch.png'
import iPhone2 from '../../assets/Product Images/Name=Iphone-12-02.png'
import headphones from '../../assets/Product Images/Name=Headphones.png'
import iPhone3 from '../../assets/Product Images/Name=Iphone-12-03.png'
import iPhone4 from '../../assets/Product Images/Name=Iphone-12-04.png'
import iPhone5 from '../../assets/Product Images/Name=Iphone-12-Pro-01.png'
import iPhone6 from '../../assets/Product Images/Name=Iphone-12-Pro-02 (1).png'
import iPhone7 from '../../assets/Product Images/Name=Iphone-13-Pro-01.png'
import iPhone8 from '../../assets/Product Images/Name=Iphone-13-Pro-02.png'
import iPhone9 from '../../assets/Product Images/Name=Iphone-13-Pro-03.png'
import Samsung1 from '../../assets/Product Images/Name=Samsung-Note21.png'
import Samsung2 from '../../assets/Product Images/Name=Samsung-S21-Pro.png'
import Samsung3 from '../../assets/Product Images/Name=Samsung-S21.png'
import macbook from '../../assets/Product Images/Name=Macbook.png'
import Dell1 from '../../assets/Product Images/Name=Dell-XPS-13-Black.png'
import Dell2 from '../../assets/Product Images/Name=Dell-XPS-13-White.png'
import Dell3 from '../../assets/Product Images/Name=Dell-XPS-15-Black.png'
import storefront from '../../assets/Icons/Name=storefront.svg'
import menuIcon from '../../assets/Icons/Name=menu.svg'
import bag from '../../assets/Icons/Name=bag-handle.svg'
import bagAdd from '../../assets/Icons/Name=bag-add.svg'




export const Homepage = () =>{
    return(
    <>
    
     <div className="navbar"> 
        <ul className="nav-links">
               <a><img src={bag}/></a> 
                <a><img src={menuIcon}/></a> 
            
                <a><img src={storefront}/></a> 
                <a><img src={bagAdd}/></a> 
         </ul>
    </div> 
    <div className="content-frame">
    <div className="search-bar"> 
        <input className="input-bar" type="text" placeholder="Apple Watch, Samsung S21,Macbook Pro, ..."/>
    </div>
    <div className="cart">
        <h2>Bag</h2>
        <div className="cart-items">

        </div>
    </div>
    <div className="content-area">
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
            <div className="item-display">
            <img className="product" src={iPhone5}/>
            </div>
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone6}/>
            </div>
            <h5>Sony ZX33OBT </h5>
            <p>Light Grey</p>
            <h5>$ 39.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone7}/>
            </div>
            <h5>iPhone 11</h5>
            <p>Serious Black</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone8}/>
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
            <img className="product" src={iPhone9}/>
            </div>
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Samsung1}/>
            </div>
            <h5>Sony ZX33OBT </h5>
            <p>Light Grey</p>
            <h5>$ 39.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Samsung2}/>
            </div>
            <h5>iPhone 11</h5>
            <p>Serious Black</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Samsung3}/>
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
            <img className="product" src={Dell3}/>
            </div>
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={macbook}/>
            </div>
            <h5>Sony ZX33OBT </h5>
            <p>Light Grey</p>
            <h5>$ 39.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Dell1}/>
            </div>
            <h5>iPhone 11</h5>
            <p>Serious Black</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Dell2}/>
            </div>
            <h5>iPhone 11</h5>
            <p>Subway Blue</p>
            <h5>$ 619.99</h5>
            <i></i>
        </div>
    </div>
    </div>
    </div>
    </div>
    
    
    </>
 )
}