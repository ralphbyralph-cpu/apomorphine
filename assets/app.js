// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var item = btn.closest('.faq-item');
    var answer = item.querySelector('.faq-a');
    var isOpen = item.classList.toggle('open');
    answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : null;
  });
});

// Reveal on scroll
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
