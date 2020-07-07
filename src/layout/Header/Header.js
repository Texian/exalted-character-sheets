import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return(
        <>
        <div id="header">
            <h1><a href="/">Exalted Character Sheets</a></h1>
            {
                (props.user)
                ?<> 
                    <div className="login">
                    <a href="/characters">Characters</a>
                    <button onClick={props.logout}>Logout</button>
                    </div>
                </>
                :<>
                <div className="login">
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                </div>
                </>
            }
        </div>
        </>
    )
}

export default Header;