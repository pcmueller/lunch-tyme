import React from 'react';
import webBtn from '../../assets/cuts/tab_internets@2x.png';
import lunchBtn from '../../assets/cuts/tab_lunch@2x.png';

const Footer = () => {

  return (
    <footer className='app-footer'>
      <div className='footer-left'>
        <button>
          <div className='btn-contents'>
            <img src={lunchBtn} alt='map icon'/>
            <span>lunch</span>
          </div>
        </button>
      </div>
      <div className='footer-right'>
        <button>
          <div className='btn-contents'>
            <img src={webBtn} alt='map icon'/>
            <span>internets</span>
          </div>
        </button>
      </div>
    </footer>
  )
}

export default Footer;