import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{

    render(){
        return (
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/movies'>Movies</Link></li>
                <li><Link to='/directors'>Directors</Link></li>
                <li><Link to='/categories'>Categories</Link></li>
            </nav>
        )
    }
}

export default Navbar;