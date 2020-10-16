import './Services.css';
import React, { Component } from 'react'


export default class Services extends Component {
    render() {
           //Destructing
           const {title,text}=this.props;
           return (

                   <div>
                        <div className="col-12 m-4 pl-5 pr-5 pt-2 pb-2" style={{backgroundColor:"#FDC269",borderRadius:"10px",textAlign:"center"}}>
                                <h3 class="card-title" style={{color:"darkblue"}}>{title}</h3>
                                <p class="card-text" style={{fontSize:"16px"}}>{text}</p>
                

                        </div>

                   </div>

           )
    }
}
