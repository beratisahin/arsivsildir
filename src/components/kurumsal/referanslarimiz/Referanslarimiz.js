
import ref from './referans.jpg';
import React from 'react'

function Referanslarimiz() {
    return (
        <div class="row" style={{border:"2px dotted red",justify: "center"}}>
            
           
            
        <div className="referans" style= {{margin:"auto"}}>
        <h3 style={{textAlign:"center",color:"orange"}}>Referanslarımız</h3>
            <img
              
              style={{ height: "auto", width: "100%",margin:"auto"}}
              src={ref}
              alt="universities"
              
            ></img>
            
            
        </div>
        
      
    </div>
    )
}

export default Referanslarimiz
