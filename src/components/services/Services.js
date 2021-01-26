import './Services.css';
import React, { Component } from 'react'


export default class Services extends Component {
    render() {
           //Destructing
           const {title,text,li1,li2,li3,li4}=this.props;
           return (

                   
                        <div >
                                <p class="card-title" style={{color:"#4682B4",textAlign:"left"}}>{title}</p>
                                
                                <p class="card-text" style={{}}>{text}</p>
                                <ul>
                                        <li class="card-list" style={{}}>{li1}</li>
                                        <li class="card-list" style={{}}>{li2}</li>
                                        <li class="card-list" style={{}}>{li3}</li>
                                        <li class="card-list" style={{}}>{li4}</li>
                                        
                                </ul>
                

                       

                   </div>

           )
    }
}
