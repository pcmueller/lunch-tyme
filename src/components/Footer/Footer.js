import React from 'react';
import webBtn from '../../assets/cuts/tab_internets@2x.png';
import lunchBtn from '../../assets/cuts/tab_lunch@2x.png';

const Footer = () => {

  return (
    <header className='app-footer'>
      <div className='footer-left'>
          <img src={lunchBtn} alt='map icon'/>
      </div>
      <div className='footer-right'>
        <button>
          <img src={webBtn} alt='map icon'/>
        </button>
      </div>
    </header>
  )
}

export default Footer;