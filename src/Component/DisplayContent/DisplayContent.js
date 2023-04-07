import React from 'react';
import LeftSidePanel from './leftside/LeftSidePanel';
import RightSidePanel from './rightside/RightSidePanel';
function DisplayContent(props){
return(
<div style={{display:'flex'}}>
<div>
<LeftSidePanel/>

</div>
<div>
<RightSidePanel/>
</div>
</div>


);
}
export default DisplayContent;