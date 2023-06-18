const servicesWrapper = document.querySelector('.services-wrapper');
const arrowIcon = document.querySelector('.fa-arrow-down');
const servicesContainer = document.querySelector('.services-container')

servicesWrapper.addEventListener('mouseenter', () => {
  arrowIcon.style.animation = 'arrowUpDown .3s ease-in-out forwards';
  if (servicesContainer.classList.contains('inactive')) {
    servicesContainer.classList.replace('inactive', 'active')
  }
});

servicesWrapper.addEventListener('mouseleave', () => {
  arrowIcon.style.animation = 'arrowDownUp .3s ease-in-out forwards';
  if (servicesContainer.classList.contains('active')) {
    servicesContainer.classList.replace('active', 'inactive')
  }
});