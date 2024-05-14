let totHeight = window.innerHeight
let threshold =  totHeight / 10;
let range = 100;
let upperThreshold = threshold + range;
let lowerThreshold = threshold - range;

let transition = () => {
  let distance = window.scrollY;
  let progress = (distance - (lowerThreshold)) / (range * 2); // Calculate progress within the range

  if (distance === 0){
    // header mods
    document.querySelector('header').style.position = 'relative';
    document.querySelector('header').style.justifyContent = 'center';
    // class = "title" mods (<div>)
    document.querySelector('.title').style.width = '100vw';
    document.querySelector('.title').style.height = '95vh';
    document.querySelector('.title').style.marginLeft = '0';
    // class = "transition" mods (<h1>)
    document.querySelector('.transition').style.fontSize = '16rem';
    document.querySelector('.transition').style.lineHeight = '12rem';
    document.querySelector('.transition').style.left = '0';
    // class = "letters" mods (<span>)
    document.querySelectorAll('.letters').forEach(letter => {
      letter.style.opacity = '1';
    });
    // class = "flipped" mods (<em>) element
    document.querySelector('.flipped').style.transform = 'rotateY(0deg)';
    document.querySelector('.flipped').style.left = '0';
    // class = "hidden" mods (<nav>)
    document.querySelector('.hidden').style.display = 'none';
    // id = "instruction" (<p>)
    document.getElementById('instruction').style.display = 'block';
    // .toallowscroll 
    document.querySelector('.toAllowScroll').style.display = 'block';
    // main
    document.querySelector('main').style.display = 'none';
  } else if (distance >= lowerThreshold && distance <= upperThreshold) {
    // class = "title" mods (<div>)
    document.querySelector('.title').style.width = `${window.innerWidth - ((window.innerWidth - 50) * progress)}`;
    document.querySelector('.title').style.height = `${(totHeight * .95) - ((totHeight * .95) * progress)}`;
    // class = "transition" mods (<h1>)
    document.getElementsByClassName('transition')[0].style.fontSize = `${16 - (15.5 * progress)}rem`; // Adjust font size based on progress (16rem -> 2rem)
    // class = "letters" mods (<span>)
    document.querySelectorAll('.letters').forEach(letter => {
      letter.style.opacity = `${1 - (1 * progress)}`;
    });
  } else if (distance > upperThreshold) {
    // header mods
    document.querySelector('header').style.position = 'fixed';
    document.querySelector('header').style.width = '100vw';
    document.querySelector('header').style.justifyContent = 'space-between';
    // class = "title" mods (<div>)
    document.querySelector('.title').style.width = '50px';
    document.querySelector('.title').style.height = '50px';
    document.querySelector('.title').style.marginLeft = '50px';
    // class = "transition" mods (<h1>)
    document.querySelector('.transition').style.fontSize = '2rem';
    document.querySelector('.transition').style.lineHeight = '1.5rem';
    document.querySelector('.transition').style.left = '-1.5rem';
    // class = "letters" mods (<span>)
    document.querySelectorAll('.letters').forEach(letter => {
      letter.style.opacity = '0';
    });
    // class = "flipped" mods (<em>) element
    document.querySelector('.flipped').style.transform = 'rotateY(180deg)';
    document.querySelector('.flipped').style.left = '3rem';
    // class = "hidden" mods (<nav>)
    document.querySelector('.hidden').style.display = 'flex';
    // id = "instruction" (<p>)
    document.getElementById('instruction').style.display = 'none';
    // .toallowscroll 
    document.querySelector('.toAllowScroll').style.display = 'none';
    // main
    document.querySelector('main').style.display = 'flex';
    // remove event listener
    //window.removeEventListener('scroll', transition);
  }
}

window.addEventListener('scroll', transition);
