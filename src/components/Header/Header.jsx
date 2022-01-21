import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

// how to import an svg in reacr
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'

const Header = () =>{
    return(
        <div className="header">
            <Link to="/" className='logo-container'>
                <Logo className = "logo"/>
            </Link>

            <div className='options'>
                <Link classname = "option" to="/shop">SHOP</Link>
                <Link className='option' to="/contact">CONTACT</Link>
                {/* <Link></Link> */}
            </div>
        </div>
    )
}

export default Header 