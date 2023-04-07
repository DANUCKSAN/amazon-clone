import React ,{ useContext, useEffect, useState } from 'react';
import "./PlaceOrder.css";
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {CartContext} from '../CartContext';

function PlaceOrder(props){
const {item,size,increment}=useContext(CartContext);
const [productDetails,setProductDetails]=useState([]);
let {id} = useParams();

const addTOCart = function() {
 increment(productDetails);}

useEffect(()=>{
let list = [

            {  id:1,
            name : "Iphone10",
            rating: "34565",
            price: "4534",
            image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196557749",
            review: "1000",emi: "2401",
            status: "In stock",
            soldby: "Darshita Electronics",
             about: ["Desription for iphone 13 -bla mini bla",
                                "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                                "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                                "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                                "Face ID for secure authentication"]},
            {id:2,
            name : "Iphone11",
            rating: "656", price:"76543456",
            image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196557561",
            review: "1000",emi: "2401",status: "In stock",
                                                   soldby: "Darshita Electronics",
                                                    about: ["Desription for iphone 13 -bla mini bla",
                                                                       "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                                                                       "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                                                                       "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                                                                       "Face ID for secure authentication"]},
            { id:3,
            name : "Iphone12",
            rating: "8754", price:"76543",
            image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196556394",
            review: "1000",emi: "2401",status: "In stock",
                                                   soldby: "Darshita Electronics",
                                                    about: ["Desription for iphone 13 -bla mini bla",
                                                                       "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                                                                       "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                                                                       "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                                                                       "Face ID for secure authentication"]},
            { id:4,
            name : "Iphone13",
            rating:"78668" ,
            image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196558625",
            review: "1000",emi: "2401",status: "In stock",
                                                   soldby: "Darshita Electronics",
                                                    about: ["Desription for iphone 13 -bla mini bla",
                                                                       "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                                                                       "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                                                                       "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                                                                       "Face ID for secure authentication"]},
            {  id:5,
            name : "Iphone12",
            rating: "8754",
            price:"76543",
            image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196557561",
            review: "1000",emi: "2401",status: "In stock",
                                                   soldby: "Darshita Electronics",
                                                    about: ["Desription for iphone 13 -bla mini bla",
                                                                       "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                                                                       "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                                                                       "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                                                                       "Face ID for secure authentication"]},
            {id:6,
            name : "Iphone13",
            rating: "344574367565",
            price:"637357",
            image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196557561",
            review: "1000",emi: "2401",status: "In stock",
                                                   soldby: "Darshita Electronics",
                                                    about: ["Desription for iphone 13 -bla mini bla",
                                                                       "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                                                                       "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                                                                       "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                                                                       "Face ID for secure authentication"]}


        ]
        let itemfilter = list.filter( item => {
        if(item.id== id ) return item;
        })
        console.log(itemfilter);
       setProductDetails(itemfilter[0]);
},[]);
return (

<div>
<Grid container>
<Grid item xs={5}>
<img className="placeOrder_image" src={productDetails.image}/></Grid>
<Grid item xs={4}>
<div className="placeOrder_description">
<div style={{fontSize:"24px",lineHeight:"32px",fontWeight:500 }}>{productDetails.name}</div>
<div>
<Rating name="read-only" value="3" readOnly style={{fontSize:"20px"}}/>
{productDetails.ratings} ratings |
{productDetails.review}+ answered questions</div>
<hr></hr>
<div>
<div className="textgap">Price:	<span className="pricetag">{productDetails.price}</span></div>
 <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
 <div className="textgap">EMI starts at ₹ {productDetails.emi}. No Cost EMI available</div>
 <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
 <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
</div>
 <div>
  <br></br>
  <div style={{fontSize:"24px" }} className="textgap">About this item</div>
  <div>
  <ul>
{productDetails.about!=undefined ?
 productDetails.about.map ( (item) =>(
  <li>{item}</li>)) : <span></span>

 }
 </ul>
 </div>
   </div>
</div>
</Grid>
<Grid item xs={2}>
<Paper variant="outlined" className="placeorder_order">

<button className="placeorder_button addtocart" onClick={addTOCart}>Add to Cart</button>
<Link to="/checkout">
<button className="placeorder_button buynow">Buy Now</button></Link>
</Paper>



</Grid></Grid>



</div>

);

}
export default PlaceOrder;