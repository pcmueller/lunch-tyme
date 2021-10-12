import React from 'react';
import backBtn from '../../assets/cuts/ic_webBack@2x.png';
import mapBtn from '../../assets/cuts/icon_map@2x.png';

const Header = ({ drawer, handlePaneClose, setIsPaneOpen, setSelected }) => {

  const handleClick = () => {
    setSelected({ location: { lat: 32.9618, lng: -96.829169}});
    setIsPaneOpen(true);
  }

  return (
    <header className='app-header'>
      <div className='drawer-header-left'>
        {drawer && 
          <button onClick={handlePaneClose}>
            <img src={backBtn} alt='back icon'/>
          </button>
        }
      </div>
      <div className='drawer-header-center'>
        <h1>Lunch Tyme</h1>
      </div>
      <div className='drawer-header-right'>
        <button onClick={handleClick}>
          <img src={mapBtn} alt='map icon'/>
        </button>
      </div>
    </header>
  )
}

export default Header;