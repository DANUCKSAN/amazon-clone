import React, {Component} from 'react';
import "./mainPage.css";
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
class MainPage extends Component{
constructor(props){
super(props);
this.state ={ };
}
render(){
return (
<div className="mainPage">
<div style={{paddingTop:"300px" ,display:"flex" ,flexWrap:"wrap"}}>
<AdvertisementOne/>
<AdvertisementFour/>
<AdvertisementOne/>
<AdvertisementOne/>
<AdvertisementFour/>
<AdvertisementOne/>
<AdvertisementOne/>
<AdvertisementOne/>
</div>

</div>

);
}
}

export default MainPage;