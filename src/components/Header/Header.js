import React from 'react';
import backBtn from '../../assets/cuts/ic_webBack@2x.png';

const Header = ({ drawer, handlePaneClose}) => {

  return (
    <>
    {!drawer &&
      <header className='app-header'>
        <h1>Lunch Tyme</h1>
      </header>
    }
    {drawer && 
      <header className='drawer-header'>
        <div className='drawer-header-left'>
          <button onClick={handlePaneClose}>
            <img src={backBtn}/>
          </button>
        </div>
        <div className='drawer-header-center'>
          <h1>Lunch Tyme</h1>
        </div>
        <div className='drawer-header-right'></div>
      </header>
    }
    </>
  )
}





export default Header;
