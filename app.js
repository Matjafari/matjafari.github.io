
// simple scroll reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:.15});
document.querySelectorAll('section, .card, .milestone').forEach(el=>{
  el.classList.add('reveal'); io.observe(el);
});

// parallax stickers
const stickers = document.querySelectorAll('.sticker');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  stickers.forEach((s, i)=>{
    const speed = (i+1) * 0.15;
    s.style.transform = `translateY(${y*speed}px) translateZ(${40 + i*20}px)`;
  });
});

// animate skill bars when visible
const barIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const level = e.target.dataset.level || 0;
      const i = e.target.querySelector('.bar i');
      i.style.width = level + '%';
      barIO.unobserve(e.target);
    }
  });
}, {threshold:.4});
document.querySelectorAll('.skill').forEach(el=> barIO.observe(el));
