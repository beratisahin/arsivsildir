import law3_1 from './law3.jpg';
import './hakkımızda.css';
import React from 'react'

function Hakkimizda() {
    return (
        
        <div class="row" style={{justify: "center",margin:"auto"}}>
            
           
            
            <div className="hakkımızda" style={{fontFamily:'Comic Sans MS, cursive, sans-serif'}}>
                <h3 style={{textAlign:"center",color:"orange"}}>Hakkımızda</h3>
                <p className="hak" >
                Danışmanlık  ofisimiz, Ankara merkezli bir danışmanlık ofisi olup Türkiye genelindeki ve yurt dışındaki çok sayıdaki çözüm ortağı ve bünyesindeki avukatlarla  birlikte yerli ve yabancı danışanlarına  ticari ve hukuki danışmanlık hizmetleri sunmaktadır.


                </p>

                <p className="hak">
                Güncel hukuki ve ticari meseleleri takip eden Danışmanlık ofisimiz;  Anayasa Mahkemesi, Yargıtay ve Danıştay tarafından verilen güncel emsal kararları, ticari ve finansal değişimleri revizyonist bakış açısı ile bilimsel çalışmalar ışığında gözden geçirerek uygulamaya koyar.
                </p>

                <p className="hak">
                Vizyonumuz  ilkeler çerçevesinde müvekkillerimize, danışanlarımıza karşılaştığı problemlere, sahip olduğumuz tecrübe ve birikimlerle profesyonelce çözüm aramak ve uyuşmazlıkların en iyi, en hızlı ve en etkin bir şekilde ve çözüme yönelik olarak en kısa sürede bitirilmesini sağlamak ofisimizin yegâne amacıdır.
Ofisimiz, müvekkil-vekil, danışan-danışman arasındaki karşılıklı güven, insana saygı ve gizlilik prensipleri üzerine temellendirilmiş ve bu çerçevede değişen zaman koşullarına uygun olarak verdiğimiz hizmetin kalitesini arttırmak ve en üst düzeye çıkarmak amacıyla ofisimiz sürekli gelişim içerisinde olmuştur.
                </p>
                <br/>

                <img src={law3_1} className="d-block" alt="logo" style={{width:"100%",height:"300px", paddingLeft:"10%",paddingRight:"10%"}}></img>
                <br/>

              
            </div>
            
          
        </div>
    )
}

export default Hakkimizda
