function toggleMenu() {
    const hamburgerElement = document.querySelector('.hamburger');
    const navigationElement = document.querySelector('.navigation');
  
    hamburgerElement.classList.toggle('open');
    navigationElement.classList.toggle('active');
  
    if (navigationElement.classList.contains('active')) {
      navigationElement.style.right = '0px';
    } else {
      navigationElement.style.right = '-500px';
    }
  }
  
  window.onload = function() {
    document.querySelector('.navigation').classList.add('closed');
  };