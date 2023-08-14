import '../Homepage/Homepage.scss';
import iPhone from '../../assets/Product Images/Name=Iphone-12-02.jpg'
import appleWatch from '../../assets/Product Images/Name=Watch.jpg'
import iPhone2 from '../../assets/Product Images/Name=Iphone-12-01.jpg'
import headphones from '../../assets/Product Images/Name=Headphones.jpg'
import iPhone3 from '../../assets/Product Images/Name=Iphone-12-03.jpg'
import iPhone4 from '../../assets/Product Images/Name=Iphone-12-04.jpg'
import iPhone5 from '../../assets/Product Images/Name=Iphone-13-Pro-01.jpg'
import iPhone6 from '../../assets/Product Images/Name=Iphone-12-02.jpg'
import iPhone7 from '../../assets/Product Images/Name=Iphone-13-Pro-01.jpg'
import iPhone8 from '../../assets/Product Images/Name=Iphone-13-Pro-02.jpg'
import iPhone9 from '../../assets/Product Images/Name=Iphone-13-Pro-03.jpg'
import Samsung1 from '../../assets/Product Images/Name=Samsung-Note21.jpg'
import Samsung2 from '../../assets/Product Images/Name=Samsung-S21-Pro.jpg'
import Samsung3 from '../../assets/Product Images/Name=Samsung-S21.jpg'
import macbook from '../../assets/Product Images/Image.jpg'
import Dell1 from '../../assets/Product Images/Name=Dell-XPS-13-Black.jpg'
import Dell2 from '../../assets/Product Images/Name=Dell-XPS-13-White.jpg'
import Dell3 from '../../assets/Product Images/Name=Dell-XPS-15-Black.jpg'
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
    
    <div className="cart">
        <h2>Bag</h2>
        <div className="cart-items">

        </div>
    </div>
    <div className="search-bar"> 
        <input className="input-bar" type="text" placeholder="Apple Watch, Samsung S21,Macbook Pro, ..." />
    </div>
    <div className="content-area">
    <div className="Products">
    <div className="row">
        <div className="item">
            <div className="item-display">
            <img src={appleWatch}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={headphones}/>
            </div>
            <div className="item-content">
            <h5>Sony ZX33OBT </h5>
            <p>Light Grey</p>
            <h5>$ 39.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone}/>
            </div>
            <div className="item-content">
            <h5>iPhone 11</h5>
            <p>Serious Black</p>
            <h5>$ 619.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone2}/>
            </div>
            <div className="item-content">
            <h5>iPhone 11</h5>
            <p>Subway Blue</p>
            <h5>$ 619.99</h5>
            <i></i>
            </div>
        </div>
    </div>
    </div>
    
    
    <div className="Products">
    <div className="row">
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone3}/>
            </div>
            <div className="item-content">
            <h5>iPhone 11</h5>
            <p>Product RED</p>
            <h5>$ 619.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone4}/>
            </div>
            <div className="item-content">
            <h5>iPhone 11</h5>
            <p>Milky White</p>
            <h5>$ 619.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone3}/>
            </div>
            <div className="item-content">
            <h5>iPhone 13</h5>
            <p>Product RED</p>
            <h5>$ 619.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone3}/>
            </div>
            <div className="item-content">
            <h5>iPhone 14</h5>
            <p>Product RED</p>
            <h5>$ 619.99</h5>
            <i></i>
            </div>
        </div>
    </div>
    </div>
    <div className="Products">
    <div className="row">
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone5}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone6}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone7}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone8}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <a type="button">Add</a>
            </div>
        </div>
    </div>
    </div>
    <div className="Products">
    <div className="row">
        <div className="item">
            <div className="item-display">
            <img className="product" src={iPhone9}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Samsung1}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Samsung2}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Samsung3}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
    </div>
    </div>
    <div className="Products">
    <div className="row">
        <div className="item">
            <div className="item-display">
            <img className="product" src={Dell3}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={macbook}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Dell1}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <a><img src={bagAdd}/></a>
            </div>
        </div>
        <div className="item">
            <div className="item-display">
            <img className="product" src={Dell2}/>
            </div>
            <div className="item-content">
            <h5>Apple Watch</h5>
            <p>Series 5 SE</p>
            <h5>$ 529.99</h5>
            <i></i>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>

<div className="Products">
    
    <div className="product-info">
            <h2>{}</h2>
            <div className="images">
                <div className="img1">
                   
                </div>
                <div className="img2">
                   
                </div>
                <div className="img3">
                   
                </div>
                <div className="main-img">
                   
                    <p className="short-description"></p>
                </div>
            </div>
         </div> 
         
</div>
    
    
    </>
 )
}