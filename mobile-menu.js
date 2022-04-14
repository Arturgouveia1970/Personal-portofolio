const mobileBtn = document.getElementById('mobileMenu');
const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.style.display = 'block';
});

mobileBtnExit.addEventListener('click', () => {
  nav.style.display = 'none';
});

nav.addEventListener('click', () => {
  nav.style.display = 'none';
});



const projectObj = [
  {
    id: 'p1',
    name: 'Profesional Art Printing Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard ",
    technologies: ['html', 'bootstrap', 'ruby'],
    featured_image: "./images/Img-Placeholder-4.png",  
  },

  {
    id: 'p2',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard ",
    technologies: ['html', 'bootstrap', 'ruby'],
    featured_image: "./images/Img-Placeholder25.png", 
  },

  {
    id: 'p3',
    name: 'Website Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard ",
    technologies: ['html', 'bootstrap', 'ruby'],
    featured_image: "./images/Img-Placeholder-36.png", 
  },

  {
    id: 'p4',
    name: 'Profesional Art Ptinting Data More',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard ",
    technologies: ['html', 'bootstrap', 'ruby'],
    featured_image: "./images/Img-Placeholder-4.png",  
  },

  {
    id: 'p5',
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard ",
    technologies: ['html', 'bootstrap', 'ruby'],
    featured_image: "./images/Img-Placeholder25.png", 
  },

  {
    id: 'p6',
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard ",
    technologies: ['html', 'bootstrap', 'ruby'],
    featured_image: "./images/Img-Placeholder-36.png", 
  },
];



const mobileSection = document.getElementById('mobile-proj');

mobileSection.innerHTML = projectObj.map((proj) => `
<div class="text1">
          <h3 class="title-post">${proj.name}</h3>
          <p>${proj.description}</p>
          <ul class="icons">
            <li><img class="langicon" src="images/html2.png" alt="html logo"></li>
            <li><img class="langicon" src="images/bootstrap2.png" alt="bootstrap logo"></li>
            <li><img class="langicon" src="images/ruby2.png" alt="ruby logo"></li>
          </ul>
        </div>
        <button type="button" class="btn">See Project</button>
`).join('')

const openMobileButtons = document.querySelectorAll('.btn');
const exitMobileButtons =document.getElementById('exit-sign-m');
const mobilePopUP = document.querySelector('.mobile-container');

openMobileButtons.forEach((b) => {
  b.addEventListener('click', () => {
    mobilePopUP.style.display = 'flex';
  })
}); 


exitMobileButtons.addEventListener('click', () => {
  mobilePopUP.style.display = 'none';
});

//desktop version popup
const openDestopButtons = document.querySelectorAll('.btn-2');
const exitDesktopButtons = document.getElementById('exit-sign-d');
const desktopPopUp = document.querySelector('.container');

openDestopButtons.forEach((d) => {
  d.addEventListener('click', () => {
    desktopPopUp.style.display = 'flex';
  })
});

exitDesktopButtons.addEventListener('click', () => {
  desktopPopUp.style.display = 'none';

});


const desktopVersion = getElementById('desktop-proj'); 

desktopVersion.innerHTML = projectObj.map((proj) => `
<div class="proj-14 proj grow1">
          <h3 class="title-post">${proj.name}</h3>
          <p>${proj.description}</p>
          <ul class="icons">
            <li><img class="langicon" src="images/html2.png" alt="html logo"></li>
            <li><img class="langicon" src="images/bootstrap2.png" alt="bootstrap logo"></li>
            <li><img class="langicon" src="images/ruby2.png" alt="ruby logo"></li>
          </ul>
          <button type="button" class="btn-2">See Project</button>
`).join('')

