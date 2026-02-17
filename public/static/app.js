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
  // Give page – payment method tabs
  const giveTabs = document.querySelectorAll('.give-tab');
  const givePanels = document.querySelectorAll('.give-panel');

  if(giveTabs.length){
    giveTabs.forEach(function(tab){
      tab.addEventListener('click', function(){
        var target = tab.getAttribute('data-tab');

        // Update tab styles
        giveTabs.forEach(function(t){
          t.classList.remove('active');
          t.style.background = '#fff';
          t.style.color = '#374151';
          t.style.boxShadow = 'none';
        });

        // Active tab styling based on payment method
        tab.classList.add('active');
        if(target === 'paypal'){
          tab.style.background = '#0070ba';
          tab.style.color = '#fff';
          tab.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        } else if(target === 'zelle'){
          tab.style.background = '#6d1ed4';
          tab.style.color = '#fff';
          tab.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        } else if(target === 'cash'){
          tab.style.background = '#16a34a';
          tab.style.color = '#fff';
          tab.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        }

        // Show/hide panels
        givePanels.forEach(function(p){
          if(p.getAttribute('data-panel') === target){
            p.classList.remove('hidden');
            p.classList.add('active');
          } else {
            p.classList.add('hidden');
            p.classList.remove('active');
          }
        });
      });
    });
  }
})();