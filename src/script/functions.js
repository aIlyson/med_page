// mask
$('#cpf').mask('999.999.999-99');
$('#phone').mask('(00) 0 0000-0000');

// btn return
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#btn-back').fadeIn();
    } else {
        $('#btn-back').fadeOut();
    }
});

$('#btn-back').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 20);
    return false;
});

// observadores
const sectionsToAnimate = ['.about', '#courses', '#values', '#testimonials'];

sectionsToAnimate.forEach(sectionSelector => {
  const section = document.querySelector(sectionSelector);
  const observer = new IntersectionObserver(handleIntersection);
  observer.observe(section);
});

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}