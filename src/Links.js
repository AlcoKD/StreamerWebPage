import React from 'react';
import KyrenisUncut from './img/MaronneAlbum.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronCircleUp} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faInstagram,faTwitch,faYoutube,faTelegram,faSpotify} from '@fortawesome/free-brands-svg-icons';

const Links = () => {
	return(
		<div className='links' id='contactsSection'>

			<div className='links-second-channel'>
				<h4 className='links'>Ricorda di iscriverti al mio canale dedicato agli <a href='#' style={{color: '#752d8d'}}>UNCUT</a></h4>
			</div>

			<div className='links-social'>
				<a href='#' className='links'>ISCRIVITI AI MIEI CANALI SOCIAL</a>
				<p className='links'>per rimanere sempre aggiornato e sapere quando vado Live!</p>

				<div className='links-social-icons'>
					<a href='https://it-it.facebook.com/IcommTube' target='_blank' className='links' ><FontAwesomeIcon icon={faFacebook} className='links-item'  /></a>
					<a href='https://www.instagram.com/kyrenis/?hl=it' target='_blank' className='links' ><FontAwesomeIcon icon={faInstagram} className='links-item' /></a>
					<a href='https://www.youtube.com/c/IcommTube/featured' target='_blank' className='links' ><FontAwesomeIcon icon={faYoutube} className='links-item' /></a>
					<a href='https://t.me/s/sankyrenis' target='_blank' className='links' ><FontAwesomeIcon icon={faTelegram} className='links-item' /></a>
					<a href='https://open.spotify.com/artist/5jyYB7nE0YauNJ5oz8PU1l' target='_blank' className='links' ><FontAwesomeIcon icon={faSpotify} className='links-item' /></a>
					<a href='https://www.twitch.tv/kyrenis' target='_blank' className='links' ><FontAwesomeIcon icon={faTwitch} className='links-item' /></a>
				</div>

				<footer className='links'><p>Web page developed by Francesco Donnarumma for Kyrenis -VincenzoGargiulo- Becienz</p></footer>
			</div>
		</div>
	);
}

export default Links;