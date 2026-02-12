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
      'hero.title.before': 'Soy ',
      'hero.title.after': ', un motion designer especializado en',
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
      'projectNotion.intro1': 'Formé parte del equipo de Buck que desarrolló las animaciones del nuevo asistente de IA de Notion. El objetivo era dar a este compañero digital una personalidad clara manteniéndolo versátil en distintos contextos.',
      'projectNotion.intro2': 'Mi rol principal fue depurar y refinar las expresiones faciales y estados del personaje, asegurando que las transiciones fueran naturales y coherentes con la dirección de diseño.',
      'projectNotion.intro3': 'Esta segunda fase me permitió explorar un abanico más amplio de movimientos y gestos, haciendo el personaje más atractivo y divertido de usar. Fue una oportunidad gratificante para refinar el trabajo original y ver cómo la animación puede crecer con el producto.',
      'projectNotion.captionCredit': 'Crédito: Notion',
      'projectNotion.captionUi': 'Exploración de UI',
      'projectNotion.captionMobile': 'Ejemplo móvil',
      'projectSample.title': 'Título del proyecto',
      'projectSample.kicker': 'Breve descripción del proyecto',
      'projectSample.intro1': 'Sustituye este texto por la introducción del proyecto. Mantenla concisa y divídela en dos columnas en escritorio, como en la referencia.',
      'projectSample.intro2': 'Añade el contexto del proyecto, tu rol y los resultados en la segunda columna.',
      'projectSample.intro3': 'Esta plantilla es intencionadamente mínima para que puedas insertar contenido real en la tercera columna o ampliar el texto.',
      'projectSample.heroMedia': 'Medio principal (vídeo / imagen)',
      'projectSample.caption': 'Pie de foto',
      'about.title': '¡Hola!',
      'about.lead': 'Mi nombre es Carlos Revaliente. Soy un motion designer español.',
      'about.p1': 'Nací en un pueblo del sur de España y pasé la infancia construyendo naves espaciales de Lego y soñando con desenterrar dinosaurios. La vida me llevó por otro camino: después de licenciarme en Comunicación Audiovisual, empecé mi carrera como motion designer freelance.',
      'about.p2': 'Con los años he ido evolucionando hacia un perfil versátil en motion, a medio camino entre el storytelling y el diseño.',
      'about.p3': 'Mi trabajo abarca desde animación narrativa, donde el motion es un medio de comunicación potente, hasta la integración de elementos dinámicos en sistemas de branding y diseño de producto.',
      'about.p4': 'Este camino me ha llevado a colaborar con equipos de diseño y departamentos de producto, ayudando a convertir identidades estáticas en experiencias vivas que conecten con los usuarios.',
      'contact.intro': 'Por si necesitas un presupuesto o simplemente quieres saludar.',
      'contact.labelName': 'Nombre',
      'contact.labelEmail': 'Email',
      'contact.labelSubject': 'Asunto',
      'contact.labelMessage': 'Mensaje',
      'contact.placeholderName': 'Tu nombre',
      'contact.placeholderEmail': 'tu@email.com',
      'contact.placeholderSubject': 'Presupuesto, colaboración…',
      'contact.placeholderMessage': 'Cuéntame en qué puedo ayudarte…',
      'contact.submit': 'Enviar mensaje',
      'contact.agent': 'Si buscas colaborar como director, contacta con mi agente, Closer&Closer',
      'contact.agentEmail': 'Email:',
      'contact.agentCall': 'Teléfono:'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.title.before': "I'm ",
      'hero.title.after': ' - a motion designer with a focus on',
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
      'cta.title': "Let's bring your ideas to life.",
      'cta.button': 'GET IN TOUCH',
      'projectNotion.title': 'Notion AI Assistant',
      'projectNotion.kicker': 'Characterization and animation of the new Notion AI assistant',
      'projectNotion.intro1': "I was part of the Buck team that developed the animations for Notion's new AI assistant. The goal was to give this digital companion a clear personality while keeping it versatile across different contexts.",
      'projectNotion.intro2': "My main role was debugging and refining the character's facial expressions and states, making sure transitions felt natural and consistent with the design direction.",
      'projectNotion.intro3': 'This second phase allowed me to explore a wider range of motions and gestures, making the character more engaging and fun to interact with. It was a rewarding chance to refine the original work and see how animation can grow with the product itself.',
      'projectNotion.captionCredit': 'Credit: Notion',
      'projectNotion.captionUi': 'UI exploration',
      'projectNotion.captionMobile': 'Mobile example',
      'projectSample.title': 'Project Title',
      'projectSample.kicker': 'Short description of the project',
      'projectSample.intro1': 'Replace this text with your project introduction. Keep it concise and distributed across three columns on desktop.',
      'projectSample.intro2': 'Add the project context, role, and outcomes in the second column.',
      'projectSample.intro3': 'This template is intentionally minimal so you can drop in real media in the third column or extend the copy.',
      'projectSample.heroMedia': 'Hero media (video / image)',
      'projectSample.caption': 'Caption',
      'about.title': 'Hello!',
      'about.lead': "My name is Carlos Revaliente. I'm a Spanish motion designer.",
      'about.p1': 'Born in a small town in southern Spain, I spent my childhood building Lego spaceships and dreaming of unearthing dinosaurs. Life charted a different course: after graduating with a degree in Audio–Visual Communications, I launched my career as a freelance motion designer.',
      'about.p2': "Over the years, I've evolved into a versatile motion specialist operating at the intersection of storytelling and design.",
      'about.p3': 'My work spans from narrative-driven animation where motion serves as a powerful communicative medium, to integrating dynamic elements into branding and product design systems.',
      'about.p4': 'This journey has brought me into collaborative partnerships with design teams and product orgs, helping transform static identities into living experiences that resonate with users.',
      'contact.intro': 'If you need a quote or just want to say hi.',
      'contact.labelName': 'Name',
      'contact.labelEmail': 'Email',
      'contact.labelSubject': 'Subject',
      'contact.labelMessage': 'Message',
      'contact.placeholderName': 'Your name',
      'contact.placeholderEmail': 'you@email.com',
      'contact.placeholderSubject': 'Quote, collaboration…',
      'contact.placeholderMessage': 'Tell me how I can help…',
      'contact.submit': 'Send message',
      'contact.agent': "For director work, contact my agent, Closer&Closer",
      'contact.agentEmail': 'Email:',
      'contact.agentCall': 'Phone:'
    }
  };

  const CONTACT_EMAIL = 'hello@revaliente.studio';

  function applyTranslations(lang){
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    document.querySelectorAll('[data-i18n-key]').forEach(function(node){
      const key = node.getAttribute('data-i18n-key');
      if(!key) return;
      const text = dict[key];
      if(!text) return;
      node.textContent = text;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(node){
      const key = node.getAttribute('data-i18n-placeholder');
      if(!key) return;
      const text = dict[key];
      if(!text) return;
      node.placeholder = text;
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

  // Contact form: open mailto with subject and body
  const contactForm = document.getElementById('contact-form');
  if (contactForm && typeof CONTACT_EMAIL !== 'undefined') {
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var name = (contactForm.querySelector('[name="name"]') || {}).value || '';
      var email = (contactForm.querySelector('[name="email"]') || {}).value || '';
      var subject = (contactForm.querySelector('[name="subject"]') || {}).value || '';
      var message = (contactForm.querySelector('[name="message"]') || {}).value || '';
      var body = (name ? 'Nombre: ' + name + '\n' : '') + (email ? 'Email: ' + email + '\n\n' : '') + message;
      var mailto = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject || 'Contacto desde web') + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }

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
