import React from "react";
import Services from "../services/Services";
import Slider from "../slider/Slider";
import Hakkımızda from "../kurumsal/hakkimizda/Hakkimizda";
import Mail from "../contact-page/mail/Mail";
import İstatistik from "../slider/reference.jpg";
import "./Home.css"

function Home() {
  return (
    <div >
      <div className="col-12 " style={{ borderRadius: "1rem"}}>
        <Slider />
      </div>

      <div className="col-12 hakkımız" style={{ borderRadius: "1rem"}}>
        <Hakkımızda />
      </div>

      <div className="row m-2">
        <div className="col-md-6 col-sm-6 col-12" >
        <div className="c1" style={{}}>
          <Services
            title="1- Adli Sicil Kaydı nedir? Sabıka Kaydı ve Adli Sicil Kaydı aynı şey midir?"
           
            text={<>Kesinleşmiş ceza ve güvenlik tedbirleri ile mahkûmiyete ilişkin bilgilerinin bulunduğu kayda <strong>adli sicil kaydı</strong>  ya da halk arasında bilinen ismiyle <strong>sabıka kaydı</strong> denilmektedir.</>}/>
        </div>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
        <div className="c2" style={{}}>
          <Services
            title="2- Adli sicil kaydı nasıl alınır veya Adli sicil kaydına nasıl bakılır?"
            text={<>TC kimlik numaranız ve e-devlet şifreniz ile birlikte e-devlet sistemine  giriş yaptıktan sonra arama butonunun olduğu sayfaya <strong>“adli sicil kaydı sorgulama”</strong>  yazıldığı takdirde karşınıza çıkan sayfayı “dosya indir” seçeneği ile indirebilirsiniz. Bu şekilde adli sicil kaydınıza ulaşmış olursunuz.</>}
            
          />
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
        <div className="c3" style={{}}>
          <Services
            title="3- Sabıka kaydı olarak da bilinen Adli Sicil Belgesini  nereden alınabilir? "
            li1={<>•	Bulunduğunuz yerdeki Adliye içindeki <strong>Adli Sicil Müdürlüklerinden</strong>,</>}
            li2="•	Kaymakamlıklardan,"
            li3="•	Yurt dışında Büyükelçiliklerden ve Konsolosluklardan,"
            li4="•	E–devlet sistemiyle internet üzerinden kolaylıkla alınabilmektedir."
            
            
            
          />
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
        <div className="c4" style={{}}>
          <Services
            title="4- Adli sicil kaydı silinmesi kaç gün sürer?"
            text={<>Olağan şartlarda dilekçelere bir ay, bazen bir buçuk ay içerisinde cevap verilmekte ve ancak kurallarına uygun olanlar silinmektedir.  Ancak <strong>Ankara Adli Sicil Sildirme uzmanı olarak gerekli belgeleri en hızlı şekilde temin ederek başvurularınızın çok daha kısa sürede sonuçlanmasına yardımcı olabiliriz</strong>.</>}
          />
          </div>
        </div>
        

        <div className="col-md-6 col-sm-6 col-12">
        <div className="c5" style={{}}>
          <Services
            title="5- Adli Sicil Kaydı silinebilir mi?"
  text={<> Adli sicil kaydı veya diğer bir ifadeyle sabıka kaydı silinebilmektedir. Ancak bunun için bazı şartları yerine getirilmiş olması gerekmektedir. Kanuni düzenlemeye göre, hükümlüye ait adli sicil kaydı cezanın infaz edilmesinden (denetim süreleri ve şartları da dâhil olmak üzere bittikten) sonra silinerek arşiv kaydına alınır. Bunun için Ankara’da bulunan Adli Sicil ve İstatistik Genel Müdürlüğü’ne başvuru yapmak gerekir. Müracaat için gerekli olan belgeler şunlardır:</>}
            li1="•	Usulüne  uygun şekilde yazılmış dilekçe,"
            li2="•	Adli Sicil Kaydı Belgesi,"
            li3="•	Yerine Getirme Fişleri,"
            li4="•	Kimlik Fotokopisi "
          />
          </div>
        </div>

        

        <div className="col-md-6 col-sm-6 col-12">
          <div className="c6" style={{}}>
          <Services
            title="6- Adli sicil arşiv kaydı nasıl silinir?"
            
            li1="•	Arşiv kaydı belli koşulların gerçekleşmesi halinde silinebilir. Hükümlüye ait arşiv kaydı Adli Sicil Kanunu’na göre en erken 5 yıl sonra silinir."
            li2="•	Bazı suç kategorilerinde (uyuşturucu ve kaçakçılık gibi) Adli sicil (sabıka) ve arşiv kayıtlarının silinebilmesi için yetkili mahkemeden  “Yasaklanmış (Memnu) Hakların Geri Verilmesi Kararı” alınması kararı alınması gerekmektedir. Bu şekilde arşivden silinme süresi 15 yıla indirilmiş olacaktır. Bu 5 ve 15 yıllık süreler infazın tamamlandığı tarihten itibaren başlamaktadır."
            li3="•	Bu karar ile birlikte arşiv kaydının silinmesi için yazacağınız bir dilekçe ile Adli Sicil ve İstatistik Genel Müdürlüğüne başvurmanız yeterlidir."
            
            
          />


          </div>
         
        </div>

      
        <div className="col-md-6 col-sm-6 col-12">
        <div className="c7" style={{}}>
          <Services
            title="7- E devlet şifresi nereden ve nasıl alınır?"
            text={<>Türkiye Cumhuriyeti Kimlik Belgesi ile bizzat veya üzerinde “e–Devlet Kapısı şifresi almaya yetkilidir” ibaresi olan vekalet ya da ilgili adli birimlerce temin edilmiş vesayet belgesi aracılığıyla <strong>PTT şubelerinden</strong> e-devlet şifresi temin edilebilmektedir. Ayrıca, E-Devlet şifresi yurt dışında <strong>Elçilik ve Konsolosluklardan</strong> temin edilebilmektedir.</>}
            
          />
          </div>
        </div>

        

        <div className="col-md-6 col-sm-6 col-12">
        <div className="c8" style={{}}>
          <Services
            title="8- Ankara haricinde diğer illerde başvurular nereye yapılabilir?"
            text="Adliyelerde bulunan Adli Sicil Müdürlüğüne dilekçe vermek suretiyle başvurular yapılabilir. Ancak silme işlemini Adli Sicil ve İstatistik Genel Müdürlüğü gerçekleştirmektedir. Örneğin İzmir’de ikamet ediyorsanız İzmir Bayraklı Adliyesi içerisinde, İstanbul’da ikamet ediyorsanız Çağlayan Adliyesi veya İstanbul Anadolu Adliyesi içerisinde Adli Sicil Müdürlüğü veya Adli Sicil Şefliği aracılığıyla dilekçenizi ve gerekli diğer evrakları gönderebilirsiniz. Başvuru için cezayı almış olduğunuz mahkemenin bulunduğu ilde veya ilçede olmanız şart değildir."
            
          />
          </div>
        </div>

        <div className="col-md-6 col-sm-6 col-12">
        <div className="c9" style={{}}>
          <Services 
            title="9- Memnu hakların iadesi kararı nedir?"
            text={<><strong>Memnu hakların iadesi</strong>, bir başka ifadeyle <strong>yasaklanmış hakların geri verilmesi</strong> 5352 sayılı Adli Sicil Kanunu madde 13/A’da düzenlenmiştir. Hükmü kesinleşen kişi hakkında bir cezaya mahkumiyet nedeniyle Türk Ceza Kanunu (TCK) dışındaki kanunların meydana getirdiği yasaklılıkları ortadan kaldıran bir ceza hukuku kurumudur.
            <br/>
            <br/>
            Bazı işlerde ve mesleklerde özellikle karşımıza çıkmaktadır. Mesela, hükümlünün TCK’ya göre cezası infaz edildiği halde; milletvekilliği, avukatlık, devlet memurluğu, mali müşavirlik gibi meslekleri yapması ilgili mesleklerin özel kanunları ile yasaklanmıştır. Hükümlünün bu yasaklılık halinden kurtulmak için ayrıca mahkemeye başvurarak memnu hakların iadesi (yasaklanmış hakların geri verilmesi) kararı alması gerekir.
            <br/>
            <br/>
            Hükümlü hakkında memnu hakların iadesi kararı verilirse yasaklanmış tüm haklarına kavuşur.
            <br/>
            <br/>
            <strong>Memnu Hakların İadesi (Yasaklanmış Hakların Geri Verilmesi) için bazı şartlar bulunmaktadır</strong>. 5352 sayılı Adli Sicil Kanununa 6/12/2006 tarihinde eklenen 13/A maddesi gereğince, memnu hakların iadesi talebinde bulunabilmek için üç şartın bir arada bulunması zorunluluk arz etmektedir:
            <br/>
            <br/>
            Yasaklanmış hakların geri verilmesine ilişkin karar, kesinleşmesi halinde, adlî sicil arşivine kaydedilir.
            </>}
            li1="•	Mahkum olunan cezanın infaz edilmesi,"
            li2="•	Cezanın infazından itibaren 3 yıllık bir sürenin geçmiş olması,"
            li3={<>•	Cezanın infazından başlamak ve cezanın infazından sonra geçirilmesi gereken 3 yıllık süre de dahil olmak üzere, bu süre içerisinde, hükümlünün yeni bir suç işlememesi ve yaşamını “iyi halli” olarak sürdürdüğüne dair mahkemede kanaat oluşturmasıdır.

            </>}
            
          />
          </div>
        </div>

      


        <div className="col-md-6 col-sm-6 col-12">
        <div className="c10" style={{}}>
          <Services
            title="10- Adli Sicil ve İstatistik Genel Müdürlüğü Nerededir?"
            text={<>Devlet Mah., Vekaletler Cd., 06420 Çankaya/Ankara – (0312) 549 50 50
            <br/>
            <br/>
            Yukarıda yer alan veya sorabileceğiniz diğer sorular için danışmanlık ve her türlü destek, başvuru takibi ve dilekçe talepleri için bizimle irtibata geçebilirsiniz. Dilekçelerinizi yazıp başvurularınızı bizzat fiziksel olarak <strong>Adli Sicil ve İstatistik Genel Müdürlüğüne</strong> teslim edebiliriz.
            <br/>
            <br/>
            Adli Sicil ve Arşiv Kaydı Nasıl Silinir? Sorusuna dair her türlü yardıma hazırız. Lütfen uzman ekibimizle iletişime geçiniz. 
            <br/>
            <br/>
            Adli sicil ve arşiv kaydınızı en hızlı şekilde  sildirmek, temiz bir sabıka kaydına sahip olmak ve her türlü destek için <strong>Ankara’da bulunan</strong> ofisimiz ile iletişime geçebilirsiniz.
            </>}
            
          />
          <img className="istatistik" src={İstatistik} style={{width:"100%",height:"36rem"}}></img>
          </div>
        </div>
        
        

        <div className="col-sm-12 col-12 mail">
          <Mail/>
        </div>

        <div className="col-sm-12 col-12 harita" style={{align:"center",display:"block",margin:"auto"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1133685566365!2d32.85313495091108!3d39.91647909373412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fa98c0228db%3A0xc9a7c33401732590!2sMe%C5%9Frutiyet%2C%20Karanfil%20Sk.%20No%3A38%2C%2006420%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1611506437965!5m2!1str!2str" 
                className="googleharita" style={{width:"100%", height:"45rem", frameBorder:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0",paddingBottom:"0.5rem",paddingTop:"0.5rem",border:"2px solid #499078"}}> </iframe>
        </div> 
        <br/>

      </div>
    </div>
  );
}

export default Home;
