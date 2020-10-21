import ref from './reference.jpg';
import React from 'react'

function Referanslarimiz() {
    return (
        <div class="row" style={{justify: "center"}}>
            
           
            
        <div className="referans" style= {{margin:"auto"}}>
        <h3 style={{textAlign:"center",color:"orange",fontFamily:'Comic Sans MS, cursive, sans-serif'}}>Referanslarımız</h3>
            <img
              
              style={{ height: "auto", width: "100%",margin:"auto"}}
              src={ref}
              alt="references"
              
            ></img>
            
            
        </div>
        
      
    </div>
    )
}

export default Referanslarimiz
