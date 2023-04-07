import React,{useContext} from 'react';
import "./CheckOut.css";
import Grid from '@mui/material/Grid';
import CheckOutItems from './CheckOutItems'
import {CartContext} from '../CartContext';

function CheckOut(props){
const {item,size,increment}=useContext(CartContext);
const cartValue = function(){
        let price=0;
        for(let i=0;i<item.length;i++){
            price+=parseInt(item[i].price);
        }
        return price;
    }
return (
<div className="CheckOut_body">
<Grid container>
<Grid item={10}>
<div className="CheckOut_container">
<div  style={{fontSize: "30px" , fontWeight: "500" , padding : "20px 0px 0px 20px"}}>Shopping Cart</div>
<div>
{
item.map((value) => (
<CheckOutItems definition={value}/>
))

}
{/*<CheckOutItems/>
<CheckOutItems/>
<CheckOutItems/>*/}
</div>

</div>
</Grid>
<Grid item={2}>
<div>
<div style={{ fontSize: "26px"}}>SubTotal (2 Items):<strong>{cartValue()}</strong></div>
<div style={{width:"300px",height:"200px", padding: "20px", marginTop: "25px",backgroundColor:"white"}}>

<button className="placeorder__button">Proceed to Pay</button>
</div>

</div>
</Grid>
</Grid>
</div>



);
}
export default CheckOut;