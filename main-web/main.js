const servicesWrapper = document.querySelector('.services-wrapper');
const arrowIcon = document.querySelector('.service-arrow');
const servicesContainer = document.querySelector('.services-container')

servicesWrapper.addEventListener('mouseenter', () => {
  arrowIcon.style.animation = 'arrowUpDown .3s ease-in-out forwards';
});

servicesWrapper.addEventListener('mouseleave', () => {
  arrowIcon.style.animation = 'arrowDownUp .3s ease-in-out forwards';
});

servicesWrapper.addEventListener('click', () => {
  if (servicesContainer.classList.contains('inactive')) {
    servicesContainer.classList.replace('inactive', 'active')
  } else {
    servicesContainer.classList.replace('active', 'inactive')
  }
});