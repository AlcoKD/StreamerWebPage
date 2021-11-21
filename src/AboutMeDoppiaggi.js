import React from 'react';
import KyrenisDoppiaggio from './img/KYRENIS-DOPP.png';
import doppiaggiPIC from './img/doppiaggiEmontaggiKyrenis.png';
import howToAnnoyDubPIC from './img/howToAnnoyDubKyrenis.png';
import parodiePIC from './img/parodieKyrenis.png';
import drogaPIC from './img/drogaKyrenis.png';
import fortiDeliriPIC from './img/fortiDeliriKyrenis.png';

const AboutMeDoppiaggi = () => {
	return (
		<div className='aboutme' id='aboutme'>

			<div className='aboutme-header'>
				<h4 className='aboutme'>DOPPIAGGI, PARODIE E FUN MOMENTS</h4>
			</div>

			<div className='aboutme-img-div'>

				<div className='aboutme-first-item'>
	
					<img src={KyrenisDoppiaggio} className='aboutme' />
				</div>

				<div className='aboutme-second-item'>

					<div className='aboutme-grid-one'>
						 <img src={doppiaggiPIC} alt='youtube-doppiaggi e montaggi' className='img-grid brVio' />
						<a href='https://www.youtube.com/watch?v=WceokDIAekE&list=PLU5JYeqfFcUBnFSLAmz9M357ll6ZulvgF' className='aboutme' ><p className='aboutme'>- Doppiaggi e Montaggi -</p> </a>
					</div>

					<div className='aboutme-grid-two'>
						 <img src={howToAnnoyDubPIC} alt='youtube-how to annoy Dub Ita' className='img-grid brVio' />
						<a href='https://www.youtube.com/watch?v=7kbqze_0qAc&list=PLU5JYeqfFcUBATSXfMH4zLeFHnPqL2KN6' className='aboutme' > <p className='aboutme'>- How to Annoy dub ITA -</p> </a>
					</div>

					<div className='aboutme-grid-three'>
						 <img src={parodiePIC} alt='youtube-parodie' className='img-grid brVio' />
						<a href='https://www.youtube.com/watch?v=5P9IIkMAC2c&list=PLU5JYeqfFcUCBGkOqo50ZiYx0cRU3gDB5' className='aboutme' > <p className='aboutme'>- Parodie -</p> </a>
					</div>

					<div className='aboutme-grid-three'>
						 <img src={drogaPIC} alt='youtube-droga' className='img-grid brVio' />
						<a href='https://www.youtube.com/watch?v=vRUlGnwygx8&list=PLU5JYeqfFcUB1Ucm9PyEtHw48X7p5zj5_' className='aboutme' > <p className='aboutme'>-Droga -</p> </a>
					</div>

					<div className='aboutme-grid-three'>
						 <img src={fortiDeliriPIC} alt='youtube-forti deliri' className='img-grid brVio' />
						<a href='https://www.youtube.com/watch?v=Y6FhTsSWZEI&list=PLU5JYeqfFcUDHPvcKRLPeGwwx71-dXeTR' className='aboutme' > <p className='aboutme'>- Forti deliri -</p> </a>
					</div>

				</div>

			</div>

		</div>
	);
}

export default AboutMeDoppiaggi;
