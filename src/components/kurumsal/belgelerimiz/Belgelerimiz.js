
import belge from './belgeler.jpg';
import React from 'react'

function Belgelerimiz() {
    return (
        <div className="belge" style= {{margin:"auto"}}>
        <h3 style={{textAlign:"center",color:"orange"}}>Belgelerimiz</h3>
            <img
              
              style={{ height: "auto", width: "100%",margin:"auto"}}
              src={belge}
              alt="certificates"
              
            ></img>
            
            
        </div>
        
      
    
       
    )
}  

export default Belgelerimiz
