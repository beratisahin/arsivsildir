import React from "react";
import Services from "../services/Services";
import Slider from "../slider/Slider";

function Home() {
  return (
    <div>
      <div className="col-12 mt-4 p-0" style={{ borderRadius: "50px" }}>
        <Slider />
      </div>

      <div className="row mr-4">
        <div className="col-md-6 col-sm-12 col-12" >
          <Services
            title="1- Adli sicil kaydı belgesi nereden alınır?"
            text="Sabıka kaydını nasıl alabilirim? Derseniz kendi imkânlarınız ile şu mercilerden temin edebilirsiniz:
            Adliyelerde bulunan Adli Sicil Müdürlüklerinden,
            Kaymakamlıklardan,
            Yurt dışında Büyükelçiliklerden ve konsolosluklardan,
            E – devlet sistemiyle internet üzerinden kolaylıkla alınabilmektedir."
            


          />
        </div>

        <div className="col-md-6 col-sm-12 col-12">
          <Services
            title="2- Adli sicil kaydı nasıl alınır veya Adli sicil kaydına nasıl bakılır?"
            text="TC kimlik numaranız ve e-devlet şifreniz ile birlikte e-devlete giriş yaptıktan sonra arama butonunun/çubuğunun olduğu sayfaya “adli sicil kaydı sorgulama” yazıldığı takdirde karşınıza çıkan sayfayı “dosya indir” seçeneği ile telefonunuza ya da bilgisayarınıza indirebilirsiniz. Bu şekilde sabıka kaydı e-devletten çıkar."
            
          />
        </div>

        <div className="col-md-6 col-sm-12 col-12">
          <Services
            title="3- Sabıka kaydı ve adli sicil kaydı aynı şey mi?"
            text="Kesinleşmiş ceza ve güvenlik tedbirleri ile mahkûmiyete ilişkin bilgilerinin bulunduğu kayda adli sicil kaydı ya da halk arasında bilinen adıyla sabıka kaydı denilmektedir. Dolayısıyla her ikisi de aynı şeyi ifade etmektedir. Kişinin işlediği herhangi bir suç nedeniyle hükmedilen ceza veya güvenlik tedbiri yaptırımının adli sicil kaydına işlenebilmesi için mahkeme kararının kesinleşmesi gerekir. Kesinleşmeyen mahkeme kararları adli sicil kaydında yer almaz. Kural olarak, ceza veya güvenlik tedbiri yaptırımı içeren her mahkumiyet kararı adli sicil kaydına işlenir."
            
          />
        </div>

        <div className="col-md-6 col-sm-12 col-12">
          <Services
            title="4-Sabıka kaydı silinir mi?"
            text="Adli sicil kaydı veya diğer ifadesiyle sabıka kaydı silinebilmektedir. Ancak bunun için bazı şartları yerine getirmek gerekir. Normalde Kanunda geçen kurala göre, hükümlüye ait adli sicil kaydı cezanın infaz edilmesinden (denetim süreleri ve şartları da dâhil olmak üzere bittikten) sonra silinerek arşiv kaydına alınır. Bunun için Ankara’da bulunan Adli Sicil ve İstatistik Genel Müdürlüğü’ne başvuru yapmak gerekir. Müracaat için gerekli olan belgeler şunlardır:

            Kurallarına uygun şekilde yazılmış dilekçe
            Adli Sicil kaydı belgesi
            Yerine Getirme Fişleri
            Kimlik Fotokopisi"
            
          />
        </div>

        <div className="col-md-6 col-sm-12 col-12">
          <Services
            title="5- Adli sicil kaydı silinmesi kaç gün sürer?"
            text="Normal şartlarda dilekçelere bir ay, bazen bir buçuk ay içerisinde cevap verilmekte ve ancak kurallarına uygun olanlar silinmektedir.  Ancak Ankara Adli Sicil Sildirme uzmanı olarak gerekli belgeleri en hızlı şekilde temin ederek başvurularınızın çok daha kısa sürede sonuçlanmasına yardımcı olabiliriz."
            
          />
        </div>

        <div className="col-md-6 col-sm-12 col-12">
          <Services
            title="6- E devlet şifresi nereden ve nasıl alınır?"
            text="Türkiye Cumhuriyeti Kimlik Belgesi ile bizzat veya üzerinde “e–Devlet Kapısı şifresi almaya yetkilidir” ibaresi olan vekalet ya da ilgili adli birimlerce temin edilmiş vesayet belgesi aracılığıyla PTT şubelerinden e-devlet şifresi temin edilebilmektedir. Ayrıca, E-Devlet şifresi yurt dışında Elçilik ve Konsolosluklardan temin edilebilmektedir."
            
          />
        </div>

        <div className="col-sm-12 col-12">
          <Services
            title="7- Ankara haricinde diğer illerde başvurular nereye yapılabilir?"
            text="Adliyelerde bulunan Adli Sicil Müdürlüğüne dilekçe vermek suretiyle de başvurular yapılabilir. Ancak silme işlemini Adli Sicil ve İstatistik Genel Müdürlüğü gerçekleştirmektedir. Örneğin İzmir’de ikamet ediyorsanız İzmir Bayraklı Adliyesi içerisinde, İstanbul’da ikamet ediyorsanız Çağlayan Adliyesi veya İstanbul Anadolu Adliyesi içerisinde Adli Sicil Müdürlüğü veya Adli Sicil Şefliği aracılığıyla dilekçenizi ve gerekli diğer evrakları gönderebilirsiniz. Başvuru için cezayı almış olduğunuz mahkemenin bulunduğu ilde veya ilçede olmanız şart değildir."
            
          />
        </div>

        
        

        <div className="col-sm-12 col-12">
          <Services
            title="8- Adli Sicil ve İstatistik Genel Müdürlüğü Nerededir?"
            text="Devlet Mah., Vekaletler Cd., 06420 Çankaya/Ankara – (0312) 549 50 50
             Yukarıda yer alan veya sorabileceğiniz diğer sorular için danışmanlık ve her türlü destek, başvuru takibi ve dilekçe talepleri için bizimle irtibata geçebilirsiniz. Dilekçelerinizi yazıp başvurularınızı bizzat fiziksel olarak Adli Sicil ve İstatistik Genel Müdürlüğüne teslim edebiliriz.
             Adli Sicil ve Arşiv Kaydı Nasıl Silinir? Sorusuna dair her türlü yardıma hazırız. Lütfen uzman ekibimizle iletişime geçiniz. Saygılarımızla.
            Adli sicil ve arşiv kaydı sildirmek ve temiz bir sabıka kaydına sahip olmak için her türlü destek ve danışmanlık için Ankara’da bulunan ofisimiz ile iletişime geçebilirsiniz."
            
          />
        </div>

        

        <div className="col-sm-12 col-12">
          <Services
            title="9- Adli sicil arşiv kaydı nasıl silinir?"
            text="Arşiv kaydı belli koşulların gerçekleşmesi halinde silinebilir. Hükümlüye ait arşiv kaydı Adli Sicil Kanunu’na göre en erken 5 yıl sonra silinir.

            Bazı suç kategorilerinde (uyuşturucu ve kaçakçılık gibi) Adli sicil (sabıka) ve arşiv kayıtlarının silinebilmesi için yetkili mahkemeden  “Yasaklanmış (Memnu) Hakların Geri Verilmesi Kararı” alınması kararı alınması gerekmektedir. Bu şekilde arşivden silinme süresi 15 yıla indirilmiş olacaktır. Bu 5 ve 15 yıllık süreler infazın tamamlandığı tarihten itibaren başlamaktadır.
            
            Bu karar ile birlikte arşiv kaydının silinmesi için yazacağınız bir dilekçe ile Adli Sicil ve İstatistik Genel Müdürlüğüne başvurmanız yeterlidir."
            
          />
        </div>

      


        <div className="col-sm-12 col-12">
          <Services
            title="10- Memnu hakların iadesi kararı nedir?"
            text="Memnu hakların iadesi, bir başka ifadeyle yasaklanmış hakların geri verilmesi 5352 sayılı Adli Sicil Kanunu madde 13/A’da düzenlenmiştir. Hükmü kesinleşen kişi hakkında bir cezaya mahkumiyet nedeniyle Türk Ceza Kanunu (TCK) dışındaki kanunların meydana getirdiği yasaklılıkları ortadan kaldıran bir ceza hukuku kurumudur.

            Bazı işlerde ve mesleklerde özellikle karşımıza çıkmaktadır. Mesela, hükümlünün TCK’ya göre cezası infaz edildiği halde; milletvekilliği, avukatlık, devlet memurluğu, mali müşavirlik gibi meslekleri yapması ilgili mesleklerin özel kanunları ile yasaklanmıştır. Hükümlünün bu yasaklılık halinden kurtulmak için ayrıca mahkemeye başvurarak memnu hakların iadesi (yasaklanmış hakların geri verilmesi) kararı alması gerekir.
            
            Hükümlü hakkında memnu hakların iadesi kararı verilirse yasaklanmış tüm haklarına kavuşur.
            
            Memnu Hakların İadesi (Yasaklanmış Hakların Geri Verilmesi) için bazı şartlar bulunmaktadır. 5352 sayılı Adli Sicil Kanununa 6/12/2006 tarihinde eklenen 13/A maddesi gereğince, memnu hakların iadesi talebinde bulunabilmek için üç şartın bir arada bulunması zorunluluk arz etmektedir:
            
            Mahkum olunan cezanın infaz edilmesi,
            Cezanın infazından itibaren 3 yıllık bir sürenin geçmiş olması,
            Cezanın infazından başlamak ve cezanın infazından sonra geçirilmesi gereken 3 yıllık süre de dahil olmak üzere, bu süre içerisinde, hükümlünün yeni bir suç işlememesi ve yaşamını “iyi halli” olarak sürdürdüğüne dair mahkemede kanaat oluşturmasıdır.
            Yasaklanmış hakların geri verilmesine ilişkin karar, kesinleşmesi halinde, adlî sicil arşivine kaydedilir."
            
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
