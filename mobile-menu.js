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

// mobile modal
const mobilePopupObj = [
  {
    id: 'b1',
    name: 'Website Portfolio',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
  {
    id: 'b2',
    name: 'Website Portfolio',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'b3',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'b4',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'b5',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'b6',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'b7',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
];

const mobileModal = document.querySelector('.mobilepop');
mobilePopupObj.forEach((Mobproj) => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `
    <h1>${Mobproj.name}</h1>
    <img" src="${Mobproj.featured_image3}" alt="snapshot picture">
    <p>${Mobproj.description}</p>
  `;
});

const seeProjectButtons = document.querySelectorAll('.btn');

seeProjectButtons.forEach((button) => {
  mobilePopupObj.forEach((Mobproj) => {
    if (button.id === Mobproj.id) {
      button.addEventListener('click', () => {
        const popUpSection = document.createElement('section');
        popUpSection.innerHTML = `
          <div class="mobile-container">
            <h1>${Mobproj.name}</h1>
            <img class="exit-sign" id="exit-sign-m" src="images/Icons/ex.png" alt="exit-sign">
            <img class="tags" src="images/Icons/Tags.png" alt="tags">
            <div class="middle">
            <img class="snapshot" src="${Mobproj.featured_image3}" alt="snapshot picture">

            <p>${Mobproj.description}</p>
            <div class="buttons">
              <button type="button" class="see-live-btn"></button>
              <button type="button" class="see-source-btn"></button>
            </div>
          </div>
        `;

        mobileModal.appendChild(popUpSection);
        const span = document.getElementById('exit-sign-m');
        span.addEventListener('click', () => {
          mobileModal.removeChild(popUpSection);
        });
      });
    }
  });
});

// desktop modal
const desktopPopupObj = [
  {
    id: 'd1',
    name: 'Website Portfolio',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
  {
    id: 'd2',
    name: 'Website Portfolio',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'd3',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'd4',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'd5',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'd6',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },

  {
    id: 'd7',
    name: 'Multi Post Stories',
    featured_image3: 'images/Snapshoot-Portfolio.png',
    featured_image4: 'images/Snapshoot-Portfolio-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  },
];

const desktopModal = document.querySelector('.pop-windows');
const desktopButtons = document.querySelectorAll('.btn-2');
desktopButtons.forEach((button) => {
  desktopPopupObj.forEach((Mobproj) => {
    if (button.id === Mobproj.id) {
      button.addEventListener('click', () => {
        const popUpSection = document.createElement('section');
        popUpSection.innerHTML = `
          <div class="container">
            <h1>${Mobproj.name}</h1>
            <img class="exit-sign" id="exit-sign-m" src="images/Icons/ex.png" alt="exit-sign">
            <img class="tags" src="images/Icons/Tags.png" alt="tags">
            <div class="middle">
            <img class="snapshot" src="${Mobproj.featured_image4}" alt="snapshot picture">
            <aside>
            <p>${Mobproj.description}</p>
              <button type="button" class="see-live-btn"></button>
              <button type="button" class="see-source-btn"></button>
            </aside>
          </div>
        `;

        desktopModal.appendChild(popUpSection);
        const span = document.getElementById('exit-sign-m');
        span.addEventListener('click', () => {
          desktopModal.removeChild(popUpSection);
        });
      });
    }
  });
});

//  mobile validating form
function validation() {
  const mForm = document.getElementById('mForm-id');
  const mName = mForm.elements.name.value;
  const mEmail = mForm.elements.email.value;
  const mMessage = mForm.elements.message.value;
  const mAlert = document.getElementById('alert');
  mAlert.innerHTML = '';

  mForm.addEventListener('submit', (e) => {
    if (mName.length < 1 && mName === undefined && mEmail < 1
      && mEmail === undefined && mEmail !== mEmail.lowerCase()
      && mMessage.length < 5 && mMessage === undefined) {
      e.preventDefault();
      mAlert.innerHTML = '* Make sure you fill all input fields correctly. Form not sent.';
    } else if (mEmail !== mEmail.toLowerCase() || mEmail === '') {
      e.preventDefault();
      mAlert.innerHTML = '* Make sure your email is in a correct form. Form not sent.';
    } else if (mMessage.length < 5 || mMessage === undefined) {
      e.preventDefault();
      mAlert.innerHTML = '* Text area should have at least 5 characters. Form not sent.';
    } else if (mName.length < 1 || mName === undefined) {
      e.preventDefault();
      mAlert.innerHTML = '* please make sure you fill your name correctly. Form not sent.';
    } else if (mMessage.length > 50) {
      e.preventDefault();
      mAlert.innerHTML = '* message too long (max: 50 caracters). Form not sent.';
    } else {
      mForm.submit();
    }
  });
}

validation();

// local storage

const inputs = document.querySelectorAll("input[type='text'], input[type='email'], textarea");

Array.prototype.forEach.call(inputs, (el) => {
  const dataName = el.getAttribute('id');

  const dataStored = localStorage.getItem(dataName);

  if (dataStored) el.value = localStorage.getItem(dataName);

  el.addEventListener('blur', (event) => {
    localStorage.setItem(dataName, event.target.value);
    // console.log(localStorage.getItem(dataName));
  });
});
