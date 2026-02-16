// Minimal interactivity for sticky header and mobile menu
(function(){
  const header = document.querySelector('#header');
  const nav = document.querySelector('#nav');
  const trigger = document.querySelector('#mobileTrigger');
  const menu = document.querySelector('#mobileMenu');

  function onScroll(){
    if(!header) return;
    const y = window.scrollY || document.documentElement.scrollTop;
    if(y > 20){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  if(trigger && menu){
    trigger.addEventListener('click', ()=>{
      menu.classList.toggle('open');
    });
  }

  // Hero carousel
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  function goToSlide(index){
    slides.forEach(function(s){ s.style.opacity = '0'; });
    dots.forEach(function(d){ d.style.background = 'rgba(255,255,255,0.4)'; });
    slides[index].style.opacity = '1';
    dots[index].style.background = 'rgba(255,255,255,0.8)';
    currentSlide = index;
  }

  if(slides.length > 1){
    dots.forEach(function(dot, i){
      dot.addEventListener('click', function(){ goToSlide(i); });
    });
    setInterval(function(){
      goToSlide((currentSlide + 1) % slides.length);
    }, 5000);
  }
})();