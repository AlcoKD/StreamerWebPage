import React from 'react';
import gameplayPazzerelliKyrenis from './img/gameplayPazzerelli.png';
import rankedKyrenis from './img/rankedKyrenis.png';
import streamHighlightsKyrenis from './img/streamHighlightsKyrenis.png';


const MainContents = () => {
	return(
		<div className='maincontents' id='mainContentsSection'>

			<div className='maincontents-title'>
				<h4 className='maincontents'>Non perderti le playlist piu guardate!</h4>
			</div>

			<div className='maincontents-container'>
				
				<div className='maincontents-container-item' id='first-maincontents'>
					<img src={rankedKyrenis} className='maincontents' />
					<p className='maincontents'><a href='https://www.youtube.com/watch?v=0z0dCGyz49g&list=PLU5JYeqfFcUARDCb_hFZQSgJyMGM7F6DX' className='maincontents' id='ranked'>RANKED</a></p>
				</div>

				<div className='maincontents-container-item'id='second-maincontents'>
					<img src={streamHighlightsKyrenis} className='maincontents' />
					<p className='maincontents'><a href='https://www.youtube.com/watch?v=TOpGVAxLvxE&list=PLU5JYeqfFcUACYcy8K5_zKP3EJItZAIWt' className='maincontents' id='stream-highlights'>STREAM HIGHLIGHTS</a></p>
				</div>

				<div className='maincontents-container-item'>
					<img src={gameplayPazzerelliKyrenis} className='maincontents'  id='third-maincontents' />
					<p className='maincontents'><a href='https://www.youtube.com/watch?v=Gg7gP6IBl0s&list=PLU5JYeqfFcUCMdDrIm2b7uNo9NsnMDAeu' className='maincontents' id='gameplay-pazzerelli'>GAMEPLAY PAZZERELLI</a></p>
				</div>

			</div>


		</div>
	);
}

export default MainContents;