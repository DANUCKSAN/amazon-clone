import React from 'react';
import "./LeftSidePanel.css";

function LeftSidePanel(props){
return(
<div className="leftSide_main">
 <div className="leftSide__header">
    Brand</div>
 <div className="leftSide__brandname">
 <label className="brandname">
 <input type="checkbox" value="Apple" />Apple</label>
   <label className="brandname">
  <input type="checkbox" value="Samsung" />Samsung</label>
  <label className="brandname">
  <input type="checkbox" value="MI" />Mi</label>
 </div>
</div>


);
}
export default LeftSidePanel;