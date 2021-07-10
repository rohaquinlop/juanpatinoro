import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skillsContent');
const skillsHeader = document.querySelectorAll('.skillsHeader');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skillsContent skillsClose';
  }

  if (itemClass === 'skillsContent skillsClose') {
    this.parentNode.className = 'skillsContent skillsOpen';
  }
}

skillsHeader.forEach(n => n.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualificationActive');
    });

    target.classList.add('qualificationActive');

    tabs.forEach(tab => {
      tab.classList.remove('qualificationActive');
    });
    tab.classList.add('qualificationActive');
  })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.servicesModal');
const modalBtns = document.querySelectorAll('.servicesButton');
const modalCloses = document.querySelectorAll('.servicesModal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/
