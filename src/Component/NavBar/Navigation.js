import React, {Component} from 'react';
import "./NavBar.css"
//import {Link} from 'react-router-dom';
import {CartContext} from '../CartContext';

class NavBar extends Component{
static contextType=CartContext;
constructor(props){
super(props);
this.state ={ };
}
render(){
let {item,size,increment}=this.context;
return (
<div>
<div className="Navbar_Component">
    <div className="navbar_logo"></div>
    <div className="navbar_locator">
         <div className="navbar_locatorImage"></div>
         <div className="navbar_location">Bangalore</div>
    </div>

    <div className="navbar_searchComponent">
         <div>
         <select className="nav__dropdown">
             <option value="All">All</option>
             <option value="Alexa">Alexa</option>
             <option value="Books">Books</option>
             <option value="Baby">Baby</option>
             <option value="Beauty">Beauty</option>
             <option value="Clothes">Clothes</option>
          </select>
         </div>
         <div>
         <input type="type" className="navbar_searchBox"/>
         </div>
         <div className="navbar_searchBoxDiv">
         <div className="navbar_searchIcon"/>
         </div>
    </div>

    <div className="navbar_text navbar_signIn">
    <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
    <div style={{ fontWeight: "bold" }}>Account & List</div></div>
    <div className="navbar_text navbar_returns">
    <div style={{ fontSize: "14px" }}>Returns</div>
    <div style={{ fontWeight: "bold" }}> & Order</div></div>
    <div className="navbar_text navbar_cart">
    <div src="" className="cart_image"></div>
    <div className="cart__item">{size}</div>
    <div className="navbar_text_cart">Cart</div></div>
 </div>
 <div className="navbar__footer">
                    <div className="navbar__footer_text">Best Seller</div>
                    <div className="navbar__footer_text">Mobile</div>
                    <div className="navbar__footer_text">Amazon Pay</div>
                    <div className="navbar__footer_text">Fashion</div>
                    <div className="navbar__footer_text">Electronics</div>
                    <div className="navbar__footer_text">Prime</div>
                    <div className="navbar__footer_text">New Release</div>
                    <div className="navbar__footer_text">Customer Service</div>
                    <div className="navbar__footer_text">Computers</div>
                    <div className="navbar__footer_text">Home & Kitchen</div>
                </div>
</div>



);
}
}

export default NavBar;