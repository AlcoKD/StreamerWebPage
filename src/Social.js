import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronCircleUp} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faTwitch,faYoutube,faTelegram,faSpotify} from '@fortawesome/free-brands-svg-icons';


const Social = () =>  {
	
	return(
		
		<div className='social'>
			<p className='social'><FontAwesomeIcon icon={faChevronCircleUp}/> </p>
			<ul className='social'>
				<li className='social'><a href='https://it-it.facebook.com/IcommTube' target='_blank'><FontAwesomeIcon icon={faFacebook} className='icon-social' /></a></li>
				<li className='social'><a href='https://www.instagram.com/kyrenis/?hl=it' target='_blank'><FontAwesomeIcon icon={faInstagram} className='icon-social'/></a></li>
				<li className='social'><a href='https://www.twitch.tv/kyrenis' target='_blank'><FontAwesomeIcon icon={faTwitch} className='icon-social' /></a></li>
				<li className='social'><a href='https://www.youtube.com/c/IcommTube/featured' target='_blank'><FontAwesomeIcon icon={faYoutube} className='icon-social' /></a></li>
				<li className='social'><a href='https://t.me/s/sankyrenis' target='_blank'><FontAwesomeIcon icon={faTelegram} className='icon-social' /></a></li>
				<li className='social'><a href='https://open.spotify.com/artist/5jyYB7nE0YauNJ5oz8PU1l' target='_blank'><FontAwesomeIcon icon={faSpotify} className='icon-social' /></a></li>
			</ul>

		</div>
	);
}

export default Social;