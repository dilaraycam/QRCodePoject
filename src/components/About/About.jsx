import React from 'react';
import hakkimizda from '../../images/hakkimizda2.jpg';
import arkaplan from '../../images/arkaplanindex.jpg';
import './About.css'

function About(props){
    return(
        <>
<div classNamr="row">
    <div  id="aboutRow">
        <img id="back" src={arkaplan}></img>
        <img id="about" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800" src={hakkimizda}></img>
        </div>
        </div>
        <div className="row">
            <div className="col">
            <h1 id="us">Biz Kimiz?Ne Yapıyoruz?</h1>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <p id="paragraf" >Bu site Kodluyoruz Adana Full Stack Development Bootcamp bitirme projesidir.
                    <br/>Şuanda içinde bulunduğumuz pandemi sürecinde restoranların kullanabileceği bir OR kod dijital menü
                    oluşturmak ve teması azaltmayı amaçlıyoruz.<br/>
                    Projemiz 2 ana kısımdan oluşmaktadır:<br/>1)NodeJS ile api oluşturmak.<br/>
                    2)React kütüphanesi ile önyüz oluşturmak.
                    
                </p>
                <h4 id="align" >NodeJs'de neler yaptık?</h4>
                <p id="align">+MongoDB'ye kayıt olup amazonun bulut sunucusunda database'mizi oluşturduk.
                    <br/>+Express ile uygulamamızı oluşturduk ne mongoose ile bulut sunucudaki veritabanımıza bağlandık.
                    <br/>+Restoranlar için User modeli oluşturduk,kullanıcı şifrelerini bcrypt kütüphanesi ile veritabanımıza
                    şifreledik.Bu sayede Json Web Token ile rahatça oturum kontrolü sağlayabildik.<br/> 
                    +Menü modeli oluşturduk,burada modeli 2 parçaya böldük.Örneğin yemek bölümü ve yemek bölümünün detayı 
                    adlı 2 modelimiz olmuş oldu.Bunları aggregate ile gruplama işlemi yaparak oluşturduk.<br/> 
                    Son olarak yayına hazır olmadan önce oluşturduğumuz yapılara Unit test yazdık.Yayına alırken heroku ile 
                    travisCI kullanıp sürekli entegrasyon işlemleri yaptık.
                </p>
                <h4 id="align">React kısmında neler yaptık?</h4>
                <p id="align" >+Bootstrap,Html ve CSS kullanarak tasarımın iskeletini çıkardık.<br/>
                +Componentlerimizi parçalayarak modüler bir sistem halinde,tüm componentlerimizi oluşturduk.<br/>
                +React-router-dom kullanarak navbarımızı işlevsel hale getirdik.<br/>
                +Bootstrap card kullanarak menümüzü oluşturduk.<br/>
                +Restoran menümüzü oluşturduktan sonra, menünün detaylarını ayrı bir sayfada oluşturduk.<br/>
                +Tüm detayları bir json dosyasında tuttuk ve map fonksiyonu ile sayfamıza yazdık.<br/>
                +React'ın bize sağladığı "qrcode.react" adlı kütüphaneyi kullanarak her restorana özel QR kod oluşturan bir 
                component oluşturduk.
                <br/>+Her yeni restoran veri tabanına kayıt yaptığında dinamik şekilde mekanın ismine göre qrcode'u oluşturduk.<br/>
                +Api çekerken context kullandık.useReducer ile belirli post,update,delete methodlarını uyguladık.
                </p>
            </div>
        </div>
</>
    )
}

export default About