import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeaderMain from './HeaderMain';

const Header = () => {
    return (
        <div style = {{backgroundColor: '#FBD062'}}>
            <Navbar></Navbar>
            <HeaderMain/>
        </div>
    );
};

export default Header;