
(async function(){
  const res = await fetch('js/data/i18n.json');
  const dict = await res.json();
  const buttons = document.querySelectorAll('.lang-switch [data-lang]');
  const setLang = (lang)=>{
    const strings = dict[lang] || dict['en'];
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang==='fa') ? 'rtl' : 'ltr';
    for(const el of document.querySelectorAll('[data-i18n]')){
      const key = el.getAttribute('data-i18n');
      if(strings[key]) el.textContent = strings[key];
    }
    localStorage.setItem('lang', lang);
  };
  const saved = localStorage.getItem('lang') || 'en';
  setLang(saved);
  buttons.forEach(b=>b.addEventListener('click', ()=> setLang(b.dataset.lang)));
})();
