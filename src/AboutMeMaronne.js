import React from 'react';
import logo from './img/KYRENIS.png';
import LeeOfMaronne from './img/LeeOfMaronne.png';
import LeagueOfMaronne from './img/LeagueOfMaronne.png';
import MaronneAlbum from './img/MaronneAlbum.png';


const AboutMeMaronne = () => {
	return (
		<div className='aboutme' id='aboutMeSection'>

			<div className='aboutme-header'>
				<h4 className='aboutme'>MARONNE CONTENT EDITION</h4>
			</div>

			<div className='aboutme-img-div'>

				<div className='aboutme-first-item'>
	
					<img src={logo} className='aboutme' />
				</div>

				<div className='aboutme-second-item'>

					<div className='aboutme-grid-one'>
						 <img src={LeagueOfMaronne} alt='youtube' className='img-grid' />
						<a href='https://www.youtube.com/watch?v=GCiTONk5p9s&list=PLU5JYeqfFcUAP8OeZ_gMQ7h8wIN6DbrE9' className='aboutme' ><p className='aboutme'>- League of Maronne -</p> </a>
					</div>

					<div className='aboutme-grid-two'>
						 <img src={LeeOfMaronne} alt='youtube' className='img-grid' />
						<a href='https://www.youtube.com/watch?v=CVlhPtFqAPE&list=PLU5JYeqfFcUCzk4WOY4rW90GpCYTdwVdG' className='aboutme' > <p className='aboutme'>- Lee of Maronne -</p> </a>
					</div>

					<div className='aboutme-grid-three'>
						 <img src={MaronneAlbum} alt='spotify' className='img-grid' />
						<a href='https://www.youtube.com/watch?v=0liHG98K25I&list=PLU5JYeqfFcUCvbKDsT_euU_EIgfZ7uM72' className='aboutme' > <p className='aboutme'>- Maronne Album -</p> </a>
					</div>

				</div>

			</div>

		</div>
	);
}



export default AboutMeMaronne;

