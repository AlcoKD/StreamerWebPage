import React from 'react';
import logo from './img/kyrenis-profile.jpeg';


const Navbar = () => {
	return(
		<div className='navbar'>

			<div className='navbar-logo'>
				<img src={logo} alt='logo-kyrenis' className='navbar' />
			</div>

			<div className='navbar-elements'>
				<h6 className='navbar-text' id='aboutmeClick'>About me</h6>
				<h6 className='navbar-text' id='mainContentsClick'>Main contents</h6>
				<h6 className='navbar-text' id='bold' id ='contactsClick'>Contacts</h6>
				<h6 className='navbar-text' id='myGameClick'>MyGAME!</h6>
			</div>

		</div>
	);
}

export default Navbar;