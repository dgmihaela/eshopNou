import React from 'react';

const Header = () => {

    return(
      <div className='flex-row'>
          <div className="logo inline-block min-w-min w-52">
              <img alt="logo-mage" />
              <span className="logoText">Ela's Kitchen</span>
          </div>
          <div className="inline-block min-w-min w-52">
              <span>Hello Ela</span>
              <span>Logout</span>
              <div>
              <img className="shopCart" alt="shopCart" />
          </div>
          </div>
          
      </div>  	
    )
}

export default Header;