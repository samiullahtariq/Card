import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
const App=()=>{
    
    const [time , setTime] = useState(0)
    let Incre =()=>{
        setTime(time + 1)
       
    }

    let Dec=()=>{
        if(time>0){setTime(time - 1)}else {
            alert("Please Stop it is the lowest Value")
            setTime(0)  }
        
    }
    return(
           <>
           <div className="main_div">
               <div className="content_div">
                   <h1 style={{textAlign:"center", backgroundColor:'#efe8e7' , marginTop:'70px'}}>{time}</h1>
                   <br />
                   <div className="display" style={{marginLeft:'40px'}}>
                        <Button onClick={Incre} style={{height:'50px', width:'90px' }}><AddIcon/></Button> <Button onClick={Dec} style={{height:'50px', width:'90px' }}><DeleteIcon/></Button>
                   </div>
               </div>
           </div>
           </> 
    )
}

export default App;