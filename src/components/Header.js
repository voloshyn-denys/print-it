import React from "react"
import { NavLink  } from 'react-router-dom';

const Header = () => {
    return(
      <header className="header">
        <div className="container">
          <nav className="header_nav">
            <NavLink  to='/' className="unbordered">
              <strong>PRINT IT</strong>
            </NavLink >
            <div>
              <NavLink exact activeClassName="selected" to='/' className="unbordered">Home</NavLink >
              <NavLink activeClassName="selected" to='/products' className="unbordered">Products</NavLink >
            </div>
          </nav>
        </div>
      </header>
    )
}

export default Header;