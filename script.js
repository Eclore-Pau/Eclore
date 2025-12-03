// Ton futur code JS ici



// Burger menu toggle
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (burger && mobileNav) {
    burger.addEventListener('click', function(e){
      burger.classList.toggle('active');
      if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
        document.body.style.overflow = '';
      } else {
        mobileNav.style.display = 'block';
        document.body.style.overflow = 'hidden'; // prevent background scroll when open
      }
    });
    // close when clicking a link
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', function(){ 
        mobileNav.style.display = 'none'; 
        burger.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
});
