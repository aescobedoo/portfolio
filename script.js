import createStylesfromObj from './modules/utilities.js';

// DOM elements
let header = document.querySelector('header');
let title = document.getElementById('title');
let transition = document.getElementById('logo');
let letters = document.querySelectorAll('.letters');
let flipped = document.getElementById('flipped');
let instruction = document.getElementById('instruction');
let toAllowScroll = document.getElementById('toAllowScr');
let main = document.querySelector('main');
let hidden = document.getElementById('hidden');

let allDOM = [header, title, transition, flipped, hidden, instruction, toAllowScroll, main];

// Objects for DOM elements:
let headerChanges = {
  position: 'relative',
  justifyContent: 'center',
  display: 'flex'
};
let titleChanges = {
  width: '100vw',
  height: '95vh',
  marginLeft: '0'
}
let transitionChanges = {
  fontSize: '16rem',
  lineHeight: '12rem',
  left: '0'
}
let letterChanges = {
  opacity: '1'
}
let flippedChanges = {
  transform: 'rotateY(0deg)',
  left: '0'
}
let hiddenChanges = {
  display: 'none'
}
let instructionChanges = {
  display: 'block'
}
let toAllowScrollChanges = {
  display: 'block'
}
let mainChanges = {
  display: 'none'
}

let allObjects = [headerChanges, titleChanges, transitionChanges, flippedChanges, hiddenChanges, instructionChanges, toAllowScrollChanges, mainChanges];

let master = () => {
  let applyStylesBasedOnWidth = () => {
    let height = document.documentElement.clientHeight;
    let threshold = height / 20;
    let range = 100;
    let upperThreshold = threshold + range;
    let lowerThreshold = threshold - range;

    const transitions = () => {
      let distance = window.scrollY;
      let progress = (distance - lowerThreshold) / (range * 2);

      if (document.documentElement.clientWidth <= 436) {
        headerChanges['position'] = 'fixed';
        headerChanges['width'] = '100vw';
        headerChanges['justifyContent'] = 'space-between';
        headerChanges['backgroundColor'] = 'rgb(30, 30, 30)';
        titleChanges['width'] = '50px';
        titleChanges['height'] = '50px';
        titleChanges['marginLeft'] = '10vw';
        transitionChanges['fontSize'] = '2rem';
        transitionChanges['lineHeight'] = '1.5rem';
        transitionChanges['left'] = '-1.5rem';
        letterChanges['opacity'] = '0';
        flippedChanges['transform'] = 'rotateY(180deg)';
        flippedChanges['left'] = '3rem';
        hiddenChanges['display'] = 'flex';
        hiddenChanges['marginRight'] = '10vw';
        instructionChanges['display'] = 'none';
        toAllowScrollChanges['display'] = 'none';
        mainChanges['display'] = 'flex';
        letterChanges['opacity'] = '0';
  
        document.querySelector('nav.hidden ul').innerHTML = '<i class="fa-solid fa-bars" id="toggle"></i>';
        document.querySelector('nav.hidden ul').style.marginRight = '10vw';
  
        for (let i = 0; i < allDOM.length; i++) {
          createStylesfromObj(allDOM[i], allObjects[i]);
        }
        letters.forEach(letter => {
          createStylesfromObj(letter, letterChanges);
        });  
      } else {
        document.querySelector('nav.hidden ul').innerHTML = '<li><a href="#gridOfSkills">Skills</a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li>';

        if (distance === 0) {
          headerChanges['position'] = 'relative';
          headerChanges['justifyContent'] = 'center';
          titleChanges['width'] = '100vw';
          titleChanges['height'] = '95vh';
          titleChanges['marginLeft'] = '0';
          transitionChanges['fontSize'] = '16rem';
          transitionChanges['lineHeight'] = '12rem';
          transitionChanges['left'] = '0';
          letterChanges['opacity'] = '1';
          flippedChanges['transform'] = 'rotateY(0deg)';
          flippedChanges['left'] = '0';
          hiddenChanges['display'] = 'none';
          instructionChanges['display'] = 'block';
          toAllowScrollChanges['display'] = 'block';
          mainChanges['display'] = 'none';
  
          for (let i = 0; i < allDOM.length; i++) {
            createStylesfromObj(allDOM[i], allObjects[i]);
          }
          letters.forEach(letter => {
            createStylesfromObj(letter, letterChanges);
          });
        } else if (distance >= lowerThreshold && distance <= upperThreshold) {
          // Define styles during transition
          titleChanges['width'] = `${window.innerWidth - ((window.innerWidth - 50) * progress)}px`;
          titleChanges['height'] = `${(height * 0.95) - ((height * 0.95) * progress)}px`;
          transitionChanges['fontSize'] = `${16 - (15.5 * progress)}rem`;
          letterChanges['opacity'] = `${1 - progress}`;
  
          for (let i = 0; i < allDOM.length; i++) {
            createStylesfromObj(allDOM[i], allObjects[i]);
          }
          letters.forEach(letter => {
            createStylesfromObj(letter, letterChanges);
          });
        } else if (distance > upperThreshold) {
          // Changes for header
          headerChanges['position'] = 'fixed';
          headerChanges['width'] = '100vw';
          headerChanges['justifyContent'] = 'space-between';
          titleChanges['width'] = '50px';
          titleChanges['height'] = '50px';
          titleChanges['marginLeft'] = '1.8vw';
          transitionChanges['fontSize'] = '2rem';
          transitionChanges['lineHeight'] = '1.5rem';
          transitionChanges['left'] = '-1.5rem';
          letterChanges['opacity'] = '0';
          flippedChanges['transform'] = 'rotateY(180deg)';
          flippedChanges['left'] = '3rem';
          hiddenChanges['display'] = 'flex';
          hiddenChanges['marginRight'] = '1.8vw';
          instructionChanges['display'] = 'none';
          toAllowScrollChanges['display'] = 'none';
          mainChanges['display'] = 'flex';
  
          for (let i = 0; i < allDOM.length; i++) {
            createStylesfromObj(allDOM[i], allObjects[i]);
  
          }
          letters.forEach(letter => {
            createStylesfromObj(letter, letterChanges);
          });
        }  
      }
    }

    transitions();

    if (document.documentElement.clientWidth <= 436) {
      
      let toggler = document.getElementById('toggle');
      let toggleMenu = document.getElementById('displayMenu');
      let screenCover = document.getElementById('smoke');
      let xmark = document.getElementById('xMark');  

      window.removeEventListener('scroll', transitions);

      function displayMenu() {
        if (toggleMenu.style.display === 'none' || toggleMenu.style.display === '') {
          toggleMenu.style.display = 'flex';
          screenCover.style.display = 'block';
        } else {
          toggleMenu.style.display = 'none';
          screenCover.style.display = 'none';
        }
      }
    
      if (toggler) {
        toggler.addEventListener('click', displayMenu);
      }
      if (screenCover) {
        screenCover.addEventListener('click', displayMenu);
      }
      if (xmark) {
        xmark.addEventListener('click', displayMenu);
      }
      document.querySelectorAll('#displayMenu li').forEach(item => {
        item.addEventListener('click', displayMenu);
      });  

      document.querySelectorAll('.projectName').forEach(function(element) {
        element.addEventListener('click', function() {
          // Find the closest child 'div'
          let childDiv = element.parentElement.querySelector('.project');
          childDiv.style.display = childDiv.style.display === 'none' ? 'block' : 'none';
        });
      });  
      
    } else {
      // Add scroll event listener
      window.addEventListener('scroll', transitions);

      // Apply transition on load if already scrolled
      transitions();
    }

  }

  applyStylesBasedOnWidth();
  window.addEventListener('resize', applyStylesBasedOnWidth);
};

document.addEventListener('DOMContentLoaded', master);
