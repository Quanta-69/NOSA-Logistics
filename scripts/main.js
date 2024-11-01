  /* NAVBAR START */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});
/* END */
/* NAV SCROLL (BG-CHANGE) */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
/* END */
/* NAV & SECTION RESPONSE */
// Select both main sections and sub-divs
const sections = document.querySelectorAll("section, .wrapper .sub");
const navLinks = document.querySelectorAll(".nav-link");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href").substring(1) === entry.target.id);
      });
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

/* END */
/* TESTIMONIAL ANIMATION */
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial .card');
    let currentIndex = 0;
    const intervalTime = 5000; // Time in milliseconds (5 seconds)

    function showTestimonial(index) {
        // Remove the 'active' class from all testimonials
        testimonials.forEach((testimonial) => {
            testimonial.classList.remove('active');
        });

        // Add the 'active' class to the current testimonial
        testimonials[index].classList.add('active');
    }

    function nextTestimonial() {
        // Increment the index or reset if it's the last testimonial
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    // Start the automatic slide
    setInterval(nextTestimonial, intervalTime);

    // Initialize the first testimonial as active
    showTestimonial(currentIndex);
});

/* END */
/* ANIMATIONS */
let animated_sections = document.querySelectorAll('section');
window.onscroll = () => {
    animated_sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -720;
       // let height = sec.offsetHeight -120;
       // && top < offset + height

        if (top >= offset  ){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}
/* END */