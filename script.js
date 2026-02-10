(function(){
  function pad(n){return String(n).padStart(2,'0');}
  const elClock = document.querySelector('[data-clock]');
  const elDate  = document.querySelector('[data-date]');
  if(elClock && elDate){
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    function tick(){
      const d = new Date();
      elClock.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
      elDate.textContent  = `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
    }
    tick();
    setInterval(tick, 1000);
  }

  // Custom pointer for desktop / fine pointers only
  const finePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(!finePointer) return;

  document.body.classList.add('cursor-enabled');

  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.innerHTML = '<div class="cursor__dot"></div><div class="cursor__keyframe" aria-hidden="true"></div>';
  document.body.appendChild(cursor);

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;

  const move = (e) => {
    x = e.clientX;
    y = e.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  };
  window.addEventListener('mousemove', move, {passive:true});

  // Click state
  window.addEventListener('mousedown', () => {
    cursor.classList.add('clicked');
    window.setTimeout(() => cursor.classList.remove('clicked'), 140);
  });

  const startLoading = () => cursor.classList.add('loading');
  const stopLoading = () => cursor.classList.remove('loading');

  // If we came from a link click, keep loading until window load
  if(sessionStorage.getItem('cursorLoading') === '1'){
    startLoading();
    if(reduceMotion){
      cursor.querySelector('.cursor__keyframe').style.animation = 'none';
    }
    window.addEventListener('load', () => {
      stopLoading();
      sessionStorage.removeItem('cursorLoading');
    }, {once:true});
  }

  // Intercept internal navigation to show loading animation
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if(!a) return;

    const href = a.getAttribute('href');
    const isHash = href && href.startsWith('#');
    const isExternal = href && (/^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:'));
    if(isHash || isExternal) return;

    e.preventDefault();
    sessionStorage.setItem('cursorLoading','1');
    startLoading();

    window.setTimeout(() => {
      window.location.href = href;
    }, 180);
  });

  window.addEventListener('beforeunload', () => {
    try{ sessionStorage.setItem('cursorLoading','1'); }catch(_){}
  });
})();
