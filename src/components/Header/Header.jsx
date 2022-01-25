import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
// firebase auth libary
import { auth } from '../../firebase/firebase.utils'
// how to import an svg in reacr
import {ReactComponent as Logo} from '../../assets/4.3 crown.svg.svg'

const Header = ({currentUser}) =>{
    return(
        <div className="header">
            <Link to="/" className='logo-container'>
                <Logo className = "logo"/>
            </Link>

            <div className='options'>
                <Link className = "option" to="/shop">SHOP</Link>
                <Link className ='option' to="/contact">CONTACT</Link>
                {
                    currentUser?
                    <div>
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    {/* <div className='user-image'>
                        <img src={currentUser.photoURL} alt={currentUser.name}/>
                    </div> */}
                    </div>:
                    (<Link className='option' to="/signin">SIGN IN</Link>)   
                }
                
            <div>
               
            </div>
            </div>
        </div>
    )
}

export default Header 