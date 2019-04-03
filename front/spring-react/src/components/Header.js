import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const Header = () => (
    <header>
        <h2>Spring, React, Redux, PostgreSQL</h2>
        <h4>Film DB Application</h4>
        <div className='header__nav'>
            <NavLink to="/" activeClassName='activeNav' exact={true}>
                <Button variant="contained" color="primary">DashBoard</Button>
            </NavLink>
            <NavLink to="/add" activeClassName='activeNav'>
                <Button variant="contained" color="primary">Add Film</Button>
            </NavLink>
        </div>
    </header>
);

export default Header;