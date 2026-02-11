(function(){
  const STORAGE_KEY_LANG = 'site_lang';
  const DEFAULT_LANG = 'es';
  let currentLang = (function(){
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      return saved === 'es' || saved === 'en' ? saved : DEFAULT_LANG;
    } catch(e){
      return DEFAULT_LANG;
    }
  })();

  // Ensure <html lang="..."> matches current language
  if (document.documentElement) {
    document.documentElement.lang = currentLang;
  }

  // Simple translation dictionary
  const TRANSLATIONS = {
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre mí',
      'nav.contact': 'Contacto',
      'hero.title.main': 'Soy Carlos Revaliente, un motion designer especializado en',
      'hero.title.highlight': 'branding, UX-UI y storytelling.',
      'hero.cta': 'Explora mi trabajo',
      'portfolio.notion.subtitle': 'Caracterización y animación para un asistente de producto',
      'portfolio.blueFace.subtitle': 'Exploración simple de personaje',
      'portfolio.editorialPoster.subtitle': 'Tipografía y composición',
      'portfolio.lineIllustration.subtitle': 'Trabajo de línea minimalista',
      'portfolio.blackMascot.subtitle': 'Frame icónico de animación',
      'portfolio.greenUi.subtitle': 'Mockup de producto',
      'portfolio.blueCharacter.subtitle': 'Ilustración para secuencia de marca',
      'portfolio.watchDial.subtitle': 'Ilustración de producto',
      'portfolio.yellowBottle.subtitle': 'Estudio de ilustración plana',
      'portfolio.blueBook.subtitle': 'Exploración de conjunto de iconos',
      'portfolio.orangeEyes.subtitle': 'Diseño de personaje',
      'portfolio.pinkCharacter.subtitle': 'Test de ilustración y motion',
      'portfolio.darkJelly.subtitle': 'Frame híbrido 3D + 2D',
      'portfolio.playButton.subtitle': 'Referencia de identidad en motion',
      'portfolio.deskCharacter.subtitle': 'Ilustración de escena',
      'cta.title': 'Llevemos tus ideas a la vida.',
      'cta.button': 'CONTACTO',
      'projectNotion.title': 'Notion AI Assistant',
      'projectNotion.kicker': 'Caracterización y animación del nuevo asistente de IA de Notion',
      'projectNotion.intro1': 'Formé parte del equipo de Buck que desarrolló las animaciones del nuevo asistente de IA de Notion. El objetivo era dar a este compañero digital una personalidad clara manteniéndolo versátil en distintos contextos. Mi rol principal fue depurar y refinar las expresiones faciales y estados del personaje, asegurando que las transiciones fueran naturales y coherentes con la dirección de diseño.',
      'projectNotion.intro2': 'Esta segunda fase me permitió explorar un abanico más amplio de movimientos y gestos, haciendo el personaje más atractivo y divertido de usar. Fue una oportunidad gratificante para refinar el trabajo original y ver cómo la animación puede crecer con el producto.',
      'projectNotion.captionCredit': 'Crédito: Notion',
      'projectNotion.captionUi': 'Exploración de UI',
      'projectNotion.captionMobile': 'Ejemplo móvil',
      'projectSample.title': 'Título del proyecto',
      'projectSample.kicker': 'Breve descripción del proyecto',
      'projectSample.intro1': 'Sustituye este texto por la introducción del proyecto. Mantenla concisa y divídela en dos columnas en escritorio, como en la referencia.',
      'projectSample.intro2': 'Añade el contexto del proyecto, tu rol y los resultados. Esta plantilla es intencionadamente mínima para que puedas insertar contenido real.',
      'projectSample.heroMedia': 'Medio principal (vídeo / imagen)',
      'projectSample.caption': 'Pie de foto'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.title.main': "I'm Carlos Revaliente - a motion designer with a focus on",
      'hero.title.highlight': 'branding, UX-UI and storytelling.',
      'hero.cta': "Let's check my work",
      'portfolio.notion.subtitle': 'Characterization and animation for a product assistant',
      'portfolio.blueFace.subtitle': 'Simple character exploration',
      'portfolio.editorialPoster.subtitle': 'Typography and composition',
      'portfolio.lineIllustration.subtitle': 'Minimal line work',
      'portfolio.blackMascot.subtitle': 'Iconic animation frame',
      'portfolio.greenUi.subtitle': 'Product mockup',
      'portfolio.blueCharacter.subtitle': 'Illustration for brand sequence',
      'portfolio.watchDial.subtitle': 'Product illustration',
      'portfolio.yellowBottle.subtitle': 'Flat illustration study',
      'portfolio.blueBook.subtitle': 'Icon set exploration',
      'portfolio.orangeEyes.subtitle': 'Character design',
      'portfolio.pinkCharacter.subtitle': 'Illustration and motion test',
      'portfolio.darkJelly.subtitle': '3D + 2D hybrid frame',
      'portfolio.playButton.subtitle': 'Motion identity reference',
      'portfolio.deskCharacter.subtitle': 'Scene illustration',
      'cta.title': "Let's bring your ideas to life .",
      'cta.button': 'GET IN TOUCH',
      'projectNotion.title': 'Notion AI Assistant',
      'projectNotion.kicker': 'Characterization and animation of the new Notion AI assistant',
      'projectNotion.intro1': "I was part of the Buck team that developed the animations for Notion's new AI assistant. The goal was to give this digital companion a clear personality while keeping it versatile across different contexts. My main role was debugging and refining the character's facial expressions and states, making sure transitions felt natural and consistent with the design direction.",
      'projectNotion.intro2': 'This second phase allowed me to explore a wider range of motions and gestures, making the character more engaging and fun to interact with. It was a rewarding chance to refine the original work and see how animation can grow with the product itself.',
      'projectNotion.captionCredit': 'Credit: Notion',
      'projectNotion.captionUi': 'UI exploration',
      'projectNotion.captionMobile': 'Mobile example',
      'projectSample.title': 'Project Title',
      'projectSample.kicker': 'Short description of the project',
      'projectSample.intro1': 'Replace this text with your project introduction. Keep it concise and split into two columns on desktop, like in the reference.',
      'projectSample.intro2': 'Add the project context, role, and outcomes. This template is intentionally minimal so you can drop in real media.',
      'projectSample.heroMedia': 'Hero media (video / image)',
      'projectSample.caption': 'Caption'
    }
  };

  function applyTranslations(lang){
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    document.querySelectorAll('[data-i18n-key]').forEach(function(node){
      const key = node.getAttribute('data-i18n-key');
      if(!key) return;
      const text = dict[key];
      if(!text) return;
      node.textContent = text;
    });
  }

  function setLanguage(lang){
    if (lang !== 'es' && lang !== 'en') return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY_LANG, lang);
    } catch(e){}
    if (document.documentElement) {
      document.documentElement.lang = lang;
    }
    // Update switch buttons state
    document.querySelectorAll('.lang-switch__btn').forEach(function(btn){
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    applyTranslations(lang);
    // Also update date language instantly if the clock is present
    if (typeof tick === 'function') {
      tick();
    }
  }

  // Language switcher events
  document.addEventListener('click', function(e){
    const btn = e.target.closest('.lang-switch__btn');
    if(!btn) return;
    const lang = btn.getAttribute('data-lang');
    setLanguage(lang);
  });

  // Mobile nav toggle (burger) using Lucide icons
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
    navToggle.addEventListener('click', function(){
      const isOpen = document.documentElement.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const iconEl = navToggle.querySelector('[data-lucide]');
      if (iconEl) {
        iconEl.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      }
    });
  }

  function pad(n){return String(n).padStart(2,'0');}
  const elClock = document.querySelector('[data-clock]');
  const elDate  = document.querySelector('[data-date]');
  let tick = null;
  if(elClock && elDate){
    const days = {
      en: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      es: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
    };
    const months = {
      en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      es: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
    };
    tick = function(){
      const d = new Date();
      elClock.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
      const dayNames = days[currentLang] || days[DEFAULT_LANG];
      const monthNames = months[currentLang] || months[DEFAULT_LANG];
      elDate.textContent  = `${dayNames[d.getDay()]} ${monthNames[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
    };
    tick();
    setInterval(tick, 1000);
  }

  // Apply saved language on load (all pages, including project pages)
  setLanguage(currentLang);

  // Custom pointer for desktop / fine pointers only (solo el punto, sin flecha del sistema)
  const finePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
  if(!finePointer) return;

  document.documentElement.classList.add('custom-cursor');
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  cursor.innerHTML = '<div class="cursor__dot"></div>';
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

  // Sobre enlaces/botones: puntero en forma de triángulo
  const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, .pill, .card';
  document.addEventListener('mouseover', function(e){
    if (e.target.closest(INTERACTIVE_SELECTOR)) cursor.classList.add('cursor--pointer');
  });
  document.addEventListener('mouseout', function(e){
    if (!e.relatedTarget || !e.relatedTarget.closest(INTERACTIVE_SELECTOR)) cursor.classList.remove('cursor--pointer');
  });

  // No loading state: let the browser handle default navigation feedback
})();
