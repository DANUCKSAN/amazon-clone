import React, { useEffect, useState } from 'react';
import "./RightSidePanel.css";
import Product from './Product';
import { Link } from 'react-router-dom';


function RightSidePanel(props) {

    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{

        let list =[
            {  id:1,name : "Iphone10", rating: "34565", price: "4534", image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196557749"},
            {id:2,name : "Iphone11", rating: "656", price:"76543456", image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196557561"},
            { id:3,name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196556394"},
            { id:4, name : "Iphone13", rating:"78668" , image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196558625"},
            {  id:5,name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196557561"},
            {id:6,  name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/qajjv17e0f/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?updatedAt=1679196557561"}

        ]

        setListOfProducts(list);
    },[]);

    return (
        <div className="rightSide__main">
            {/* <Product rating="234444" price="21342" name="iphone 11" image="https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578" />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}

            {
                listOfProduct.map((item) => (
                <Link to={`/order/`+item.id}>
                <Product definition={item}/></Link>  )

                )
            }

        </div>
    );
}

export default RightSidePanel;