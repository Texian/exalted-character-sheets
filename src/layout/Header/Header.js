import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return(
        <div id="header">
            <h1>Exalted Character Sheet</h1>
            {
                (props.user)
                ? <div className="login">
                    <button>Welcome, {props.user}</button>
                    <button onClick={props.logout}Logout></button>
                </div>
                :
                <div className="login">
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
            }
        </div>
    )
}

export default Header;