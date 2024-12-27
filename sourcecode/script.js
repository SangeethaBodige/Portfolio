// Initialize smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
  });
  
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true
  });
