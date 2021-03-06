import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';


function Navbar(props) {
  
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const linkItems = props.links.filter(item => item.isLink).map((item, index) =>
  (
    <li className="nav-link" key={index}>
      <Link to={item.link} className="nav-link">
      {t(`${item.title}.1`)}
      </Link>
    </li>

  )
  )
  const linkItems2 = props.links.filter(item => item.isTrue).map((item2, index) =>
  (
    <li className="nav-link" key={index}>
      <Link to={item2.link} className="nav-link">
      {t(`${item2.title1}.1`)}
      </Link>
    </li>

  )
  )

  return (
    <div className="row">
      <div className="col">
        <nav className="navbar navbar-expand-lg bg-transparent " id="navbarColor">
          <div className="container-fluid">
            <div id="topnav-centered">
              <Link className="navbar-brand" id="navTitle" to="/">MENÜ SEPETİ</Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {linkItems}
              </div>
              <div className="navbar-nav ml-auto pe-5" >
                {linkItems2}
                <nav id="navEN">
                <button className="btn btn-dark btn-sm" id="buton1" onClick={() =>handleClick ('en')}>
            EN
            </button>
            <button className="btn btn-dark btn-sm" id="buton2" onClick={() =>handleClick ('tr')}>
            TR
            </button>
            </nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default Navbar