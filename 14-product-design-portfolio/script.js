// DOM Elements
const customCursorDOM = document.querySelector('.custom-cursor');
const projects = document.querySelectorAll('.project-item');
const animationElements = document.querySelectorAll('.animation-element');
const heroFooter = document.querySelector('.hero-footer');
const timeline = gsap.timeline();

let timeout;

window.addEventListener('DOMContentLoaded', function (e) {
  timeline
    .to('.loading-screen', {
      height: 0,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .from('nav', {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .to(animationElements, {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(heroFooter, {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
});

// Smooth Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('main'),
  smooth: true,
});

// Custom Cursor
function customCursor(xScale, yScale) {
  window.addEventListener('mousemove', (e) => {
    customCursorDOM.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xScale}, ${yScale})`;
  });
}

// Cursor Skew
function skewCursor() {
  let xScale = 1;
  let yScale = 1;
  let xPrevValue = 0;
  let yPrevValue = 0;

  window.addEventListener('mousemove', (e) => {
    clearTimeout(timeout);
    xScale = gsap.utils.clamp(0.8, 1.2, e.clientX - xPrevValue);
    yScale = gsap.utils.clamp(0.8, 1.2, e.clientY - yPrevValue);

    xPrevValue = e.clientX;
    yPrevValue = e.clientY;

    customCursor(xScale, yScale);

    timeout = setTimeout(() => {
      customCursorDOM.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

// Project Mouse Events
projects.forEach((project) => {
  let rotate = 0;
  let differenceRotate = 0;

  project.addEventListener('mousemove', function (e) {
    const projectImg = project.querySelector('img');
    let diff = e.clientY - project.getBoundingClientRect().top;

    differenceRotate = e.clientX - rotate;
    rotate = e.clientX;

    gsap.to(projectImg, {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: e.clientX,
      rotate: gsap.utils.clamp(-20, 20, differenceRotate * 0.5),
    });
  });

  project.addEventListener('mouseleave', function (e) {
    const projectImg = project.querySelector('img');
    gsap.to(projectImg, {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
});

// Initialize
customCursor(1, 1);
skewCursor();
