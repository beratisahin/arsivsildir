import './Slider.css';
import law1 from './law1.jpg';
import law2 from './law2.jpg';
import law3 from './law3.jpg';
import law4 from './law4.jpg';
import law5 from './law5.jpg';
import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (

        <div style={{display:"flex", justifyContent:"center"}}>
            <div id="slide" >
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="3000">
                            <img src={law1} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>Adalet gücü bağımsız olmayan bir milletin, devlet halinde varlığı kabul olunmaz.</h4>
                         </div>
                        <div className="carousel-item" data-interval="2000">
                            <img src={law2} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>İyi olmak kolaydır, zor olan adil olmaktır.</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={law3} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>Geç kalan adalet adaletsizliktir.</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={law4} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>Ülkeler kılıçla alınır, ancak adaletle korunur.</h4>
                        </div>
                        <div className="carousel-item">
                            <img src={law5} className="d-block img-responsive w-100" alt="logo" style={{height:"400px"}}></img>
                            <h4 style={{display:"flex", justifyContent:"center",textAlign:"center"}}>Adaletin küçüldüğü ülkelerde, büyük olan artık suçlulardır.</h4>
                        </div>
                         
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
           
        )
    }
}
