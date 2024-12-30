const btn = document.querySelector('.drop-btn');

document.addEventListener('touchstart', function(event) {
  if(event.target.matches(btn)) {
      event.target.classList.add('feeling-touchy');
  }
});
document.addEventListener('touchend', function(event) {
  if(event.target.matches(btn)) {
      event.target.classList.remove('feeling-touchy');
  }
});

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
      const offset = ((window.innerHeight - element.offsetHeight) / 2 ) - 10; // Calculate the offset to center the element
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  }
}

document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToElement(targetId);
  });
});

const someButton = document.querySelector('.scroll-btn');
if (someButton) {
  someButton.addEventListener('click', function() {
    scrollToElement('target-element-id');
  });
}
