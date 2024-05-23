document.addEventListener('DOMContentLoaded', function() {
  function applyStylesBasedOnWidth() {
    let totHeight = document.documentElement.clientHeight;
    let threshold = totHeight / 10;
    let range = 100;
    let upperThreshold = threshold + range;
    let lowerThreshold = threshold - range;

    function transition() {
      let distance = window.scrollY;
      let progress = (distance - lowerThreshold) / (range * 2); // Calculate progress within the range

      if (distance === 0) {
        // Landing styles
        document.querySelector('header').style.position = 'relative';
        document.querySelector('header').style.justifyContent = 'center';
        document.querySelector('.title').style.width = '100vw';
        document.querySelector('.title').style.height = '95vh';
        document.querySelector('.title').style.marginLeft = '0';
        document.querySelector('.transition').style.fontSize = '16rem';
        document.querySelector('.transition').style.lineHeight = '12rem';
        document.querySelector('.transition').style.left = '0';
        document.querySelectorAll('.letters').forEach(letter => {
          letter.style.opacity = '1';
        });
        document.querySelector('.flipped').style.transform = 'rotateY(0deg)';
        document.querySelector('.flipped').style.left = '0';
        document.querySelector('.hidden').style.display = 'none';
        document.getElementById('instruction').style.display = 'block';
        document.querySelector('.toAllowScroll').style.display = 'block';
        document.querySelector('main').style.display = 'none';
      } else if (distance >= lowerThreshold && distance <= upperThreshold) {
        // Smooth animation
        document.querySelector('.title').style.width = `${window.innerWidth - ((window.innerWidth - 50) * progress)}`;
        document.querySelector('.title').style.height = `${(totHeight * .95) - ((totHeight * .95) * progress)}`;
        document.getElementsByClassName('transition')[0].style.fontSize = `${16 - (15.5 * progress)}rem`;
        document.querySelectorAll('.letters').forEach(letter => {
          letter.style.opacity = `${1 - progress}`;
        });
      } else if (distance > upperThreshold) {
        // Final stage
        document.querySelector('nav.hidden ul').innerHTML = '<li><a href="#gridOfSkills">Skills</a></li><li><a href="">Projects</a></li><li><a href="">Contact</a></li>';
        document.querySelector('header').style.position = 'fixed';
        document.querySelector('header').style.width = '100vw';
        document.querySelector('header').style.justifyContent = 'space-between';
        document.querySelector('.title').style.width = '50px';
        document.querySelector('.title').style.height = '50px';
        document.querySelector('.title').style.marginLeft = '1.8vw';
        document.querySelector('.transition').style.fontSize = '2rem';
        document.querySelector('.transition').style.lineHeight = '1.5rem';
        document.querySelector('.transition').style.left = '-1.5rem';
        document.querySelectorAll('.letters').forEach(letter => {
          letter.style.opacity = '0';
        });
        document.querySelector('.flipped').style.transform = 'rotateY(180deg)';
        document.querySelector('.flipped').style.left = '3rem';
        document.querySelector('.hidden').style.display = 'flex';
        document.querySelector('.hidden').style.marginRight = '1.8vw';
        document.getElementById('instruction').style.display = 'none';
        document.querySelector('.toAllowScroll').style.display = 'none';
        document.querySelector('main').style.display = 'flex';
      }
    }

    if (document.documentElement.clientWidth >= 436) {
      // Add scroll event listener
      window.addEventListener('scroll', transition);

      document.querySelectorAll('.projectName').forEach(function(element) {
        element.addEventListener('click', function() {
          // Find the closest child 'div'
          let childDiv = element.parentElement.querySelector('.project');
          childDiv.style.display = childDiv.style.display === 'none' ? 'block' : 'none';
        });
      });

      // Apply transition on load if already scrolled
      transition();
      
      // Make header visible
      document.querySelector('header').style.display = 'flex';
    } else {
      window.removeEventListener('scroll', transition);
      
       document.querySelector('header').style.position = 'fixed';
       document.querySelector('header').style.width = '100vw';
       document.querySelector('header').style.justifyContent = 'space-between';
       document.querySelector('header').style.backgroundColor = 'rgb(30, 30, 30)';
       document.querySelector('.title').style.width = '50px';
       document.querySelector('.title').style.height = '50px';
       document.querySelector('.title').style.marginLeft = '10vw';
       document.querySelector('.transition').style.fontSize = '2rem';
       document.querySelector('.transition').style.lineHeight = '1.5rem';
       document.querySelector('.transition').style.left = '-1.5rem';
       document.querySelectorAll('.letters').forEach(letter => {
         letter.style.opacity = '0';
       });
       document.querySelector('.flipped').style.transform = 'rotateY(180deg)';
       document.querySelector('.flipped').style.left = '3rem';
       document.querySelector('.hidden').style.display = 'flex';

       document.getElementById('instruction').style.display = 'none';
       document.querySelector('.toAllowScroll').style.display = 'none';
       document.querySelector('main').style.display = 'flex';

       document.querySelector('nav.hidden ul').innerHTML = '<i class="fa-solid fa-bars" id="toggle"></i>';
       document.querySelector('nav.hidden ul').style.marginRight = '10vw';

       document.querySelectorAll('.projectName').forEach(function(element) {
        element.addEventListener('click', function() {
          // Find the closest child 'div'
          let childDiv = element.parentElement.querySelector('.project');
          childDiv.style.display = childDiv.style.display === 'none' ? 'block' : 'none';
        });
      });
    }
  }

  // Initial check
  applyStylesBasedOnWidth();

  // Check on window resize
  window.addEventListener('resize', applyStylesBasedOnWidth);

    // Mobile menu toggling
    let toggler = document.getElementById('toggle');
    let toggleMenu = document.getElementById('displayMenu');
    let screenCover = document.getElementById('smoke');
    let xmark = document.getElementById('xMark');
  
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
});