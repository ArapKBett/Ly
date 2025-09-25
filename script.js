// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animated counter for visits
function animateCounter(id, start, end, duration) {
  let obj = document.getElementById(id);
  let current = start;
  let range = end - start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));
  let timer = setInterval(() => {
    current += increment;
    obj.textContent = current.toLocaleString() + (id === 'visits-counter' ? '+' : '');
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

animateCounter('visits-counter', 0, 3800000000, 2000);

// FAQ accordion
document.querySelectorAll('.faq-item button').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});

// GSAP animations for sections
gsap.utils.toArray('section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
});
