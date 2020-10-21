import './Services.css';
import React, { Component } from 'react'


export default class Services extends Component {
    render() {
           //Destructing
           const {title,text,li1,li2,li3,li4}=this.props;
           return (

                   <div>
                        <div className="col-12 m-4 pl-5 pr-5 pt-2 pb-2" style={{backgroundColor:"#FFFAF0",borderRadius:"5px",textAlign:"float"}}>
                                <p class="card-title" style={{color:"#000080",textAlign:"left"}}>{title}</p>
                                
                                <p class="card-text" style={{fontSize:"18px",textAlign:"justify"}}>{text}</p>
                                <ul>
                                        <li class="card-list1" style={{fontSize:"18px",listStyleType:"none",textAlign:"justify"}}>{li1}</li>
                                        <li class="card-list2" style={{fontSize:"18px",listStyleType:"none",textAlign:"justify"}}>{li2}</li>
                                        <li class="card-list3" style={{fontSize:"18px",listStyleType:"none",textAlign:"justify"}}>{li3}</li>
                                        <li class="card-list4" style={{fontSize:"18px",listStyleType:"none",textAlign:"justify"}}>{li4}</li>
                                        
                                </ul>
                

                        </div>

                   </div>

           )
    }
}
