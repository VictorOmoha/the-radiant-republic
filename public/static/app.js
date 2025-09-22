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
})();