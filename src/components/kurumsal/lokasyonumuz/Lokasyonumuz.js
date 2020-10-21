import loca from './assLoc.jpg';
import React from 'react'

function Lokasyonumuz() {
    return (
        <div class="row" style={{justify: "center"}}>
            
           
            
        <div className="referans" style= {{margin:"auto"}}>
        <h3 style={{textAlign:"center",color:"orange",fontFamily:'Comic Sans MS, cursive, sans-serif'}}>Lokasyonumuz</h3>
            <img
              
              style={{ height: "auto", width: "100%",paddingLeft:"5%",paddingRight:"5%"}}
              src={loca}
              alt="location"
              
            ></img>
            
            
        </div>
        
      
    </div>
    )
}

export default Lokasyonumuz