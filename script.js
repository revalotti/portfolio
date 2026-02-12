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
      'cta.title': 'Llevemos tus ideas a la acción.',
      'cta.button': 'Contacto',
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
      'about.lead': 'Mi nombre es Carlos Revaliente, diseñador digital nacido en España.',
      'about.p1': 'Empecé en el mundo del motion design, pero con los años he evolucionado hacia un perfil más estratégico, combinando diseño de producto, sistemas de diseño y comunicación visual.',
      'about.p2': 'Trabajo en la intersección entre narrativa y funcionalidad: desde piezas audiovisuales que explican y posicionan marcas, hasta la integración de motion y consistencia visual en productos digitales.',
      'about.p3': 'Colaboro con equipos de diseño y desarrollo para transformar ideas en experiencias claras, coherentes y con impacto.',
      'about.floatCta': 'Conóceme',
      'about.cvButton': 'Ver CV',
      'about.timeline.title': 'Trayectoria',
      'about.timeline.present': 'presente',
      'about.timeline.item1.title': 'Motion Designer Freelance',
      'about.timeline.item1.desc': 'Branding, storytelling y diseño de producto para distintas marcas y estudios.',
      'about.timeline.item2.title': 'Animador / Motion Designer',
      'about.timeline.item2.desc': 'Animación narrativa y contenido para redes y campañas.',
      'about.timeline.item3.title': 'Comunicación Audiovisual',
      'about.timeline.item3.desc': 'Licenciatura y primeros proyectos en motion y postproducción.',
      'about.timeline.item4.title': 'Formación en diseño y animación',
      'about.timeline.item4.desc': 'Estudios y prácticas en diseño gráfico y After Effects.',
      'cv.title': 'Currículum',
      'cv.sectionPersonal': 'Datos personales',
      'cv.personal': 'Carlos Revaliente · Motion Designer · España',
      'cv.sectionExperience': 'Experiencia',
      'cv.exp1': '2022 – presente · Motion Designer Freelance. Branding, storytelling y diseño de producto para marcas y estudios.',
      'cv.exp2': '2020 – 2022 · Animador / Motion Designer. Animación narrativa y contenido para redes y campañas.',
      'cv.exp3': '2018 – 2020 · Comunicación Audiovisual. Licenciatura y primeros proyectos en motion y postproducción.',
      'cv.sectionEducation': 'Formación',
      'cv.education': 'Licenciatura en Comunicación Audiovisual. Formación en diseño gráfico y animación (After Effects).',
      'cv.sectionSkills': 'Herramientas y habilidades',
      'cv.skills': 'After Effects, Cinema 4D, Illustrator, Photoshop, Figma. Animación 2D/3D, storytelling, branding en motion, diseño de producto.',
      'cv.sectionLanguages': 'Idiomas',
      'cv.languages': 'Español (nativo), Inglés (fluido).',
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
      'about.lead': "I'm Carlos Revaliente, a digital designer born in Spain.",
      'about.p1': 'I started in motion design, but over the years I’ve moved towards a more strategic profile, combining product design, design systems and visual communication.',
      'about.p2': 'I work at the intersection of narrative and functionality: from audiovisual pieces that explain and position brands, to integrating motion and visual consistency into digital products.',
      'about.p3': 'I collaborate with design and development teams to turn ideas into clear, coherent and impactful experiences.',
      'about.floatCta': 'Get to know me',
      'about.cvButton': 'View CV',
      'about.timeline.title': 'Timeline',
      'about.timeline.present': 'present',
      'about.timeline.item1.title': 'Freelance Motion Designer',
      'about.timeline.item1.desc': 'Branding, storytelling and product design for various brands and studios.',
      'about.timeline.item2.title': 'Animator / Motion Designer',
      'about.timeline.item2.desc': 'Narrative animation and content for social and campaigns.',
      'about.timeline.item3.title': 'Audiovisual Communication',
      'about.timeline.item3.desc': 'Degree and first projects in motion and post-production.',
      'about.timeline.item4.title': 'Design and animation training',
      'about.timeline.item4.desc': 'Studies and practice in graphic design and After Effects.',
      'cv.title': 'Resume',
      'cv.sectionPersonal': 'Personal',
      'cv.personal': 'Carlos Revaliente · Motion Designer · Spain',
      'cv.sectionExperience': 'Experience',
      'cv.exp1': '2022 – present · Freelance Motion Designer. Branding, storytelling and product design for brands and studios.',
      'cv.exp2': '2020 – 2022 · Animator / Motion Designer. Narrative animation and content for social and campaigns.',
      'cv.exp3': '2018 – 2020 · Audiovisual Communication. Degree and first projects in motion and post-production.',
      'cv.sectionEducation': 'Education',
      'cv.education': 'Degree in Audiovisual Communication. Training in graphic design and animation (After Effects).',
      'cv.sectionSkills': 'Tools & skills',
      'cv.skills': 'After Effects, Cinema 4D, Illustrator, Photoshop, Figma. 2D/3D animation, storytelling, motion branding, product design.',
      'cv.sectionLanguages': 'Languages',
      'cv.languages': 'Spanish (native), English (fluent).',
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
    window.dispatchEvent(new CustomEvent('translations-applied', { detail: { lang } }));
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

  // About: botón flotante "Conóceme" — solo móvil; ocultar cuando el texto está visible
  const aboutFloatCta = document.getElementById('about-float-cta');
  const aboutContent = document.getElementById('about-content');
  if (aboutFloatCta && aboutContent) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) aboutFloatCta.classList.add('is-hidden');
        else aboutFloatCta.classList.remove('is-hidden');
      });
    }, { root: null, rootMargin: '0px', threshold: 0.2 });
    observer.observe(aboutContent);
    aboutFloatCta.addEventListener('click', function(e) {
      e.preventDefault();
      aboutContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // About: timeline horizontal — mostrar solo el título del punto activo; auto-play desde fecha antigua a reciente
  const timelineDisplayTitle = document.getElementById('timeline-display-title');
  const timelinePoints = document.querySelectorAll('.timeline-item__point');
  const timelineSection = document.querySelector('.about-timeline');
  const timelineTrack = document.querySelector('.timeline-track');
  const timelineCursor = document.querySelector('.timeline-cursor');
  if (timelineDisplayTitle && timelinePoints.length) {
    var timelineTitleTransitionMs = 280;
    function updateCursorPosition(activePoint) {
      if (!timelineCursor || !timelineTrack || !activePoint) return;
      var tr = timelineTrack.getBoundingClientRect();
      var br = activePoint.getBoundingClientRect();
      var dateEl = activePoint.querySelector('.timeline-item__date');
      var centerY;
      if (dateEl) {
        var dr = dateEl.getBoundingClientRect();
        centerY = dr.top - tr.top + dr.height / 2;
      } else {
        centerY = br.top - tr.top + br.height / 2;
      }
      timelineCursor.style.top = centerY + 'px';
    }
    function setTimelineDisplay(activePoint, opts) {
      opts = opts || {};
      var skipTransition = opts.skipTransition;
      var item = activePoint.closest('.timeline-item');
      var titleEl = item && item.querySelector('.timeline-item__title');
      var newText = titleEl ? titleEl.textContent : '';
      var isChange = timelineDisplayTitle.textContent !== newText;
      function applyState() {
        if (titleEl) timelineDisplayTitle.textContent = titleEl.textContent;
        timelineDisplayTitle.classList.remove('is-transitioning');
        timelinePoints.forEach(function(btn) {
          var isActive = btn === activePoint;
          btn.classList.toggle('is-active', isActive);
          btn.setAttribute('aria-selected', isActive);
        });
        updateCursorPosition(activePoint);
      }
      if (isChange && !skipTransition) {
        timelineDisplayTitle.classList.add('is-transitioning');
        setTimeout(function() {
          if (titleEl) timelineDisplayTitle.textContent = titleEl.textContent;
          timelinePoints.forEach(function(btn) {
            var isActive = btn === activePoint;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', isActive);
          });
          updateCursorPosition(activePoint);
          requestAnimationFrame(function() {
            timelineDisplayTitle.classList.remove('is-transitioning');
          });
        }, timelineTitleTransitionMs);
      } else {
        applyState();
      }
    }
    setTimelineDisplay(document.querySelector('.timeline-item__point.is-active') || timelinePoints[timelinePoints.length - 1], { skipTransition: true });
    if (timelineCursor && timelineTrack) {
      window.addEventListener('resize', function() {
        var active = document.querySelector('.timeline-item__point.is-active');
        if (active) updateCursorPosition(active);
      });
    }
    // Auto-play: de fecha más antigua (índice 3) a más reciente (índice 0); se repite a los 40 s
    // Al hacer clic se detiene; 30 s después del último clic se reinicia el flujo
    var TIMELINE_STEP_MS = 3200;
    var TIMELINE_REPEAT_AFTER_MS = 40000;
    var TIMELINE_IDLE_BEFORE_RESTART_MS = 30000;
    var timelineAutoPlayDone = false;
    var timelineInterval = null;
    var timelineRepeatTimeout = null;
    var timelineIdleTimeout = null;

    function stopTimelineAutoPlay() {
      if (timelineInterval) {
        clearInterval(timelineInterval);
        timelineInterval = null;
      }
      if (timelineRepeatTimeout) {
        clearTimeout(timelineRepeatTimeout);
        timelineRepeatTimeout = null;
      }
      timelineAutoPlayDone = true;
    }

    function runTimelineAutoPlay() {
      if (timelineAutoPlayDone) return;
      timelineAutoPlayDone = true;
      if (timelineInterval) clearInterval(timelineInterval);
      var stepIndex = 2;
      timelineInterval = setInterval(function() {
        if (stepIndex < 0) {
          clearInterval(timelineInterval);
          timelineInterval = null;
          timelineRepeatTimeout = setTimeout(function() {
            timelineRepeatTimeout = null;
            setTimelineDisplay(timelinePoints[3], { skipTransition: true });
            timelineAutoPlayDone = false;
            runTimelineAutoPlay();
          }, TIMELINE_REPEAT_AFTER_MS);
          return;
        }
        setTimelineDisplay(timelinePoints[stepIndex]);
        stepIndex--;
      }, TIMELINE_STEP_MS);
    }

    function onTimelineUserClick(activePoint) {
      stopTimelineAutoPlay();
      if (timelineIdleTimeout) clearTimeout(timelineIdleTimeout);
      setTimelineDisplay(activePoint);
      timelineIdleTimeout = setTimeout(function() {
        timelineIdleTimeout = null;
        setTimelineDisplay(timelinePoints[3], { skipTransition: true });
        timelineAutoPlayDone = false;
        runTimelineAutoPlay();
      }, TIMELINE_IDLE_BEFORE_RESTART_MS);
    }

    timelinePoints.forEach(function(btn) {
      btn.addEventListener('click', function() {
        onTimelineUserClick(btn);
      });
    });
    window.addEventListener('translations-applied', function() {
      var active = document.querySelector('.timeline-item__point.is-active');
      if (active) setTimelineDisplay(active, { skipTransition: true });
    });

    var reducedLayout = window.matchMedia('(max-width: 980px)');
    if (reducedLayout.matches && timelineSection) {
      var timelineObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            runTimelineAutoPlay();
            if (timelineObserver) timelineObserver.disconnect();
          }
        });
      }, { root: null, rootMargin: '0px', threshold: 0.25 });
      timelineObserver.observe(timelineSection);
    } else {
      setTimeout(runTimelineAutoPlay, 500);
    }
  }

  // About: modal CV
  const cvBtn = document.getElementById('about-cv-btn');
  const cvModal = document.getElementById('cv-modal');
  const cvModalClose = document.getElementById('cv-modal-close');
  if (cvBtn && cvModal) {
    function openCvModal() {
      cvModal.classList.add('is-open');
      cvModal.setAttribute('aria-hidden', 'false');
      if (cvBtn) cvBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
      if (cvModalClose) cvModalClose.focus();
    }
    function closeCvModal() {
      cvModal.classList.remove('is-open');
      cvModal.setAttribute('aria-hidden', 'true');
      if (cvBtn) cvBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      cvBtn.focus();
    }
    cvBtn.addEventListener('click', openCvModal);
    if (cvModalClose) cvModalClose.addEventListener('click', closeCvModal);
    cvModal.querySelector('.cv-modal__backdrop').addEventListener('click', closeCvModal);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && cvModal.classList.contains('is-open')) closeCvModal();
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
