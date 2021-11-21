import React, {Component} from 'react';
import Social from './Social';
import Navbar from './Navbar';
import FirstComponent from './FirstComponent';
import AboutMeMaronne from './AboutMeMaronne';
import AboutMeDoppiaggi from './AboutMeDoppiaggi';
import MainContents from './MainContents';
import Links from './Links';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


class App extends Component {

  render(){
    return (
      <div className="main-container" style={{margin: '0', padding: '0'}}>
         <div className='background'>
         <Navbar />
          <FirstComponent />
            <AboutMeMaronne />
             <AboutMeDoppiaggi />
              <MainContents />
               <Links />
          </div>
                
             <Social />
      </div>
      );
  }

  componentDidMount= () => {
    const animationAboutMeFirstItem = document.querySelectorAll('div.aboutme-first-item');


    const animationAboutMeFirstItemInView = (el, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight)* (percentageScroll/100))
        );
    };

    const displayScrollElement = (element) => {
      element.classList.add('animation');
    };

    const NotDisplayScrollElement = (element) => {
      element.classList.remove('animation');
    };

    const animationAboutMe = () => {
      animationAboutMeFirstItem.forEach((el) => {
        if (animationAboutMeFirstItemInView(el,100)) {
          displayScrollElement(el);
        }
         else {
          NotDisplayScrollElement(el);
         }
      })
    }


    // second element

    const imgGrid = document.querySelectorAll('img.img-grid');

    const imgGridInView = (el, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight)* (percentageScroll/100))
        );
    };

    const ImgScrollElement = (element) => {
      element.classList.add('visibility');
    };

    const NotImgScrollElement = (element) => {
      element.classList.remove('visibility');
    };

    const imgGridVisibility = () => {
      imgGrid.forEach((el) => {
        if (imgGridInView(el,100)) {
          ImgScrollElement(el);
        }
         else {
          NotImgScrollElement(el);
         }
      })
    }

    // third element

    const pAboutMe = document.querySelectorAll('p.aboutme');

    const pAboutMeInView = (el, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight)* (percentageScroll/100))
        );
    };

    const pAboutMeScrollElement = (element) => {
      element.classList.add('goDown');
    };

    const NotpAboutMeScrollElement = (element) => {
      element.classList.remove('goDown');
    };

    const pAboutMeGoDown = () => {
      pAboutMe.forEach((el) => {
        if (pAboutMeInView(el,100)) {
          pAboutMeScrollElement(el);
        }
         else {
          NotpAboutMeScrollElement(el);
         }
      })
    }

    // SOCIAL FUNCTION

    const onClick = document.querySelector('p.social');
      const display = document.querySelector('ul.social');

      onClick.addEventListener('click', social);

      function social() {
        onClick.classList.toggle('onclick');
          display.classList.toggle('display');
        }


    window.addEventListener('scroll', () => {
      animationAboutMe();
      imgGridVisibility();
      pAboutMeGoDown();
    })

    //Scroll to ... 

  const aboutMeNavbar = document.getElementById('aboutmeClick');
  const mainContentsNavbar = document.getElementById('mainContentsClick');
  const contactsNavbar = document.getElementById('contactsClick');


  aboutMeNavbar.addEventListener('click', clickToScrollAbout);
  mainContentsNavbar.addEventListener('click', clickToScrollMain);
  contactsNavbar.addEventListener('click', clickToScrollContacts);


  function clickToScrollAbout() {

    const aboutMeSection = document.getElementById('aboutMeSection');
    aboutMeSection.scrollIntoView();
  }


  function clickToScrollMain() {
     const mainContentsSection = document.getElementById('mainContentsSection');
    mainContentsSection.scrollIntoView();
  }

  function clickToScrollContacts() {
     const contactsSection = document.getElementById('contactsSection');
    contactsSection.scrollIntoView();
  }

  }

}



export default App;