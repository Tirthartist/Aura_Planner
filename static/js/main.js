/* Aura Planner - JS (data + UI) */
(function(){
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));
  const STATIC_BASE = '/static/';

  const AURA_PLANNERS = [
    // Unnati - Birthday Planner
    {
      slug: 'dreamday-events-unnati',
      name: 'Unnati',
      company: 'DreamDay Events',
      price: '₹25,000 onwards',
      specialties: ['Birthday Parties', 'Themed Decor', 'Kids & Adults', 'Budget Friendly'],
      categories: ['Birthday Party'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Specializing in creating magical birthday celebrations for all ages with creative themes and perfect execution.',
      services: ['Theme Decoration','Cake & Catering','Entertainment','Photography'],
      gallery: ['images/bday1.jpeg','images/bday2.jpeg','images/bday3.jpeg'],
      cover: 'images/unnati1.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
    // Alpa - New Year Party Planner
    {
      slug: 'celebrate-studio-alpa',
      name: 'Alpa',
      company: 'Celebrate Studio',
      price: '₹50,000 onwards',
      specialties: ['New Year Parties', 'Countdown Events', 'DJ & Entertainment'],
      categories: ['New Year Party'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Creating unforgettable New Year celebrations with amazing themes, music, and entertainment.',
      services: ['Venue Decoration','DJ & Sound','Catering','Photography'],
      gallery: ['images/ny1.jpeg','images/ny2.jpeg','images/ny3.jpeg'],
      cover: 'images/alpa1.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
    // Vidhi - New Year Party Planner
    {
      slug: 'vibrant-events-vidhi',
      name: 'Vidhi',
      company: 'Vibrant Events',
      price: '₹45,000 onwards',
      specialties: ['New Year Galas', 'Corporate NYE', 'Themed Parties'],
      categories: ['New Year Party'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Specializing in high-energy New Year celebrations with unique themes and entertainment.',
      services: ['Full Event Planning','Themed Decor','Live Entertainment','Catering'],
      gallery: ['images/ny4.jpeg','images/ny5.jpeg','images/ny6.jpeg'],
      cover: 'images/vidhi.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
    // Nishita - Ring Ceremony Planner
    {
      slug: 'elegant-occasions-nishita',
      name: 'Nishita',
      company: 'Elegant Occasions',
      price: '₹75,000 onwards',
      specialties: ['Ring Ceremonies', 'Engagement Events', 'Intimate Gatherings'],
      categories: ['Ring Ceremony'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Creating beautiful and intimate ring ceremonies that tell your unique love story.',
      services: ['Venue Decoration','Photography','Catering','Entertainment'],
      gallery: ['images/ring1.jpeg','images/ring2.jpeg','images/ring3.jpeg'],
      cover: 'images/nishita1.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
    // Riya - Marriage Planner
    {
      slug: 'royal-weddings-riya',
      name: 'Riya',
      company: 'Royal Weddings',
      price: '₹2,00,000 onwards',
      specialties: ['Luxury Weddings', 'Destination Weddings', 'Full Planning'],
      categories: ['Marriage'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Transforming wedding dreams into reality with exquisite planning and flawless execution.',
      services: ['Full Wedding Planning','Venue Selection','Vendor Management','Day-of Coordination'],
      gallery: ['images/wed1.jpeg','images/wed2.jpeg','images/wed3.jpeg'],
      cover: 'images/riya1.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
    // Dhruhini - Marriage Planner
    {
      slug: 'eternal-bonds-dhruhini',
      name: 'Dhruhini',
      company: 'Eternal Bonds',
      price: '₹1,75,000 onwards',
      specialties: ['Traditional Weddings', 'Cultural Celebrations', 'Budget Planning'],
      categories: ['Marriage'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Specializing in traditional and cultural weddings that honor your heritage.',
      services: ['Wedding Planning','Cultural Coordination','Budget Management','Vendor Selection'],
      gallery: ['images/wed4.jpeg','images/wed5.jpeg','images/wed6.jpeg'],
      cover: 'images/dhruhini.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
    // Karan - Anniversary Planner
    {
      slug: 'cherish-moments-karan',
      name: 'Karan',
      company: 'Cherish Moments',
      price: '₹60,000 onwards',
      specialties: ['Anniversary Celebrations', 'Vow Renewals', 'Milestone Events'],
      categories: ['Anniversary'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Creating heartfelt anniversary celebrations that honor your journey together.',
      services: ['Event Design','Venue Selection','Catering','Entertainment'],
      gallery: ['images/ann1.jpeg','images/ann2.jpeg','images/ann3.jpeg'],
      cover: 'images/karan.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
    // Fenil - Baby Shower Planner
    {
      slug: 'tiny-toes-fenil',
      name: 'Fenil',
      company: 'Tiny Toes',
      price: '₹35,000 onwards',
      specialties: ['Baby Showers', 'Gender Reveals', 'Naming Ceremonies'],
      categories: ['Baby Shower'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Designing adorable and memorable baby showers to welcome your little one.',
      services: ['Theme Design','Decor & Setup','Games & Activities','Catering'],
      gallery: ['images/baby1.jpeg','images/baby2.jpeg','images/baby3.jpeg'],
      cover: 'images/fenil1.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
    // Jeel - Corporate Event Planner
    {
      slug: 'elite-events-jeel',
      name: 'Jeel',
      company: 'Elite Events',
      price: '₹1,00,000 onwards',
      specialties: ['Corporate Events', 'Conferences', 'Product Launches'],
      categories: ['Corporate Events'],
      phone: '+91 xxxxx xxxxx',
      email: 'auraplanner07@gmail.com',
      about: 'Professional corporate event planning that delivers results and creates impact.',
      services: ['Event Management','AV Production','Branding','Guest Management'],
      gallery: ['images/ce1.jpeg','images/ce2.jpeg','images/ce3.jpeg'],
      cover: 'images/jeel.jpeg',
      featured: true,
      socials: {
        instagram: 'https://www.instagram.com/auraplanner07?igsh=c2c0aHRpdnR0ano='
      }
    },
  ];
  // Keep all planners
  // No filtering needed - show all available planners

  // Utilities
  const bySlug = (slug) => AURA_PLANNERS.find(p => p.slug === slug);
  const uniqueCategories = () => Array.from(new Set(AURA_PLANNERS.flatMap(p => p.categories)));
  const completedOrdersHTML = () => {
    // Generate a random number between 30 and 100 for each planner
    const randomOrders = Math.floor(Math.random() * 71) + 30; // 30-100
    return `<span class="completed-orders"><i class="fa-solid fa-calendar-check"></i> ${randomOrders}+ Orders</span>`;
  };
  const chip = (t) => `<span class="chip">${t}</span>`;
  const whatsappLink = (phone, text) => {
    const digits = (phone || '').replace(/[^0-9]/g,'');
    const msg = encodeURIComponent(text || 'Hi, I found you via Aura Planner.');
    return `https://wa.me/${digits}?text=${msg}`;
  };

  // Cards
  function cardTemplate(p){
    const thumbs = p.gallery.slice(0,5).map((g,idx)=>`<img src="${STATIC_BASE}${g}" alt="${p.name} photo ${idx+1}" data-slug="${p.slug}" data-index="${idx}">`).join('');
    const chips = p.specialties.map(chip).join('');
    return `
      <article class="planner-card" data-slug="${p.slug}">
        <a class="cover" href="/planner/${p.slug}">
          <img src="${STATIC_BASE}${p.cover}" alt="${p.name} cover">
         
        </a>
        <div class="content">
          <div class="title">
            <h3>${p.name}</h3>
            <div class="completed-orders">${completedOrdersHTML()}</div>
          </div>
          <div class="company">${p.company}</div>
          <div class="price">${p.price}</div>
          <div class="chips">${chips}</div>
          <div class="thumb-row">${thumbs}</div>
          <div class="card-actions">
            <div class="socials">
              ${p.socials?.instagram ? `<a href="${p.socials.instagram}" target="_blank" rel="noopener" title="Instagram"><i class="fa-brands fa-instagram"></i></a>`: ''}
              ${p.socials?.facebook ? `<a href="${p.socials.facebook}" target="_blank" rel="noopener" title="Facebook"><i class="fa-brands fa-facebook"></i></a>`: ''}
              ${p.email ? `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=${p.email}" target="_blank"><i class="fa-solid fa-envelope"></i></a>`: ''}
              ${p.phone ? `<a href="tel:${p.phone}" title="Call"><i class="fa-solid fa-phone"></i></a>`: ''}
              ${p.phone ? `<a href="${whatsappLink(p.phone)}" target="_blank" rel="noopener" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>`: ''}
            </div>
            <a class="btn btn-primary btn-glow" href="/planner/${p.slug}">View Details</a>
          </div>
        </div>
      </article>`;
  }

  function renderGrid(list, target){
    if (!target) return;
    target.innerHTML = list.map(cardTemplate).join('');
    // Attach thumb lightbox once
    if (!target.__lbAttached){
      target.addEventListener('click', (e)=>{
        const img = e.target.closest('img[data-index]');
        if (!img) return;
        const slug = img.getAttribute('data-slug');
        const start = parseInt(img.getAttribute('data-index')||'0',10);
        const p = bySlug(slug);
        if (p) openLightbox(p.gallery, start);
      });
      target.__lbAttached = true;
    }
  }

  const CATEGORY_ORDER = [
    'Birthday Party','New Year Party','Ring Ceremony','Marriage','Anniversary','Baby Shower','Corporate Events','Others'
  ];

  function renderAllGrouped(container){
    if (!container) return;
    const cats = CATEGORY_ORDER.filter(cat => AURA_PLANNERS.some(p=>p.categories.includes(cat)));
    container.innerHTML = cats.map(cat => {
      const list = AURA_PLANNERS.filter(p=>p.categories.includes(cat));
      if (!list.length) return '';
      return `
        <section class="category-section">
          <h2 class="category-title">${cat}</h2>
          <div class="planner-grid">${list.map(cardTemplate).join('')}</div>
        </section>`;
    }).join('');
    // One-time lightbox delegate on container
    if (!container.__lbAttached){
      container.addEventListener('click', (e)=>{
        const img = e.target.closest('img[data-index]');
        if (!img) return;
        const slug = img.getAttribute('data-slug');
        const start = parseInt(img.getAttribute('data-index')||'0',10);
        const p = bySlug(slug);
        if (p) openLightbox(p.gallery, start);
      });
      container.__lbAttached = true;
    }
  }

  // Filters
  function applyFilter(category){
    const grid = $('#planners-grid');
    if (!grid) return;
    if (!category || category === 'All'){
      renderAllGrouped(grid);
    } else {
      const active = AURA_PLANNERS.filter(p => p.categories.includes(category));
      renderGrid(active, grid);
    }
  }

  function initFilters(){
    const bar = $('#filters');
    if (!bar) return;
    bar.addEventListener('click', (e)=>{
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      $$('.filter-btn', bar).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.category);
    });

    // Preselect from URL
    const params = new URLSearchParams(location.search);
    const preset = params.get('category');
    if (preset){
      const targetBtn = $(`.filter-btn[data-category="${preset}"]`, bar);
      if (targetBtn){
        $$('.filter-btn', bar).forEach(b=>b.classList.remove('active'));
        targetBtn.classList.add('active');
        applyFilter(preset);
        return;
      }
    }
    applyFilter('All');
  }

  // Handle email links globally
document.addEventListener('click', function(e) {
  const emailLink = e.target.closest('a[href^="mailto:"]');
  if (emailLink) {
    e.preventDefault();
    window.location.href = emailLink.href;
  }
});

// Detail Page
function fillDetail(p){
    const root = $('#planner-detail');
    if (!root || !p) return;
    $('#detail-hero-img').src = STATIC_BASE + p.cover;
    $('#detail-name').textContent = p.name;
    $('#detail-company').textContent = p.company;
    $('#detail-rating').innerHTML = completedOrdersHTML();
    $('#detail-price').textContent = p.price;
    const chips = p.specialties.map(chip).join('');
    $('#detail-specialties').innerHTML = chips;
    $('#detail-about').textContent = p.about;
    $('#detail-services').innerHTML = p.services.map(s=>`<li>${s}</li>`).join('');
    const g = $('#detail-gallery');
    g.innerHTML = p.gallery.map((img,i)=>`<img src="${STATIC_BASE}${img}" alt="${p.name} gallery ${i+1}" data-index="${i}">`).join('');
    g.addEventListener('click', (e)=>{
      const img = e.target.closest('img[data-index]');
      if (!img) return;
      const idx = parseInt(img.dataset.index,10)||0;
      openLightbox(p.gallery, idx);
    });

    const contacts = $('#detail-contacts');
    const cl = [];
    if (p.email) {
      const email = p.email.replace('mailto:', '');
      const message = 'Hi, I have an inquiry for event planning.';
      const mailtoLink = `mailto:${email}?body=${encodeURIComponent(message)}`;
      cl.push(`<li><i class="fa-solid fa-envelope"></i> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=auraplanner07@gmail.com" target="_blank">${email}</a></li>`);
      
      // Add click handler after the element exists
      setTimeout(() => {
        const emailLink = document.getElementById('email-link');
        if (emailLink) {
          emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = mailtoLink;
            return false;
          });
        }
      }, 100);
    }
    if (p.phone) cl.push(`<li><i class="fa-solid fa-phone"></i> <a href="tel:${p.phone}">${p.phone}</a></li>`);
    contacts.innerHTML = cl.join('');

    const socials = $('#detail-socials');
    socials.innerHTML = `
      ${p.socials?.instagram ? `<a href="${p.socials.instagram}" target="_blank" rel="noopener" title="Instagram"><i class="fa-brands fa-instagram"></i></a>`: ''}
      ${p.socials?.facebook ? `<a href="${p.socials.facebook}" target="_blank" rel="noopener" title="Facebook"><i class="fa-brands fa-facebook"></i></a>`: ''}
      ${p.email ? `<a href="https://mail.google.com/mail/?view=cm&fs=1&to=auraplanner07@gmail.com" target="_blank" class="email-link" title="Email"><i class="fa-solid fa-envelope"></i></a>`: ''}
      ${p.phone ? `<a href="${whatsappLink(p.phone)}" target="_blank" rel="noopener" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>`: ''}
    `;
    const w = $('#detail-whatsapp');
    if (w) w.href = whatsappLink(p.phone, `Hi ${p.name.split(' ')[0]}, I'm interested in your services via Aura Planner.`);
    const c = $('#detail-call');
    if (c) c.href = `tel:${p.phone}`;

    const slugInput = $('#planner_slug');
    if (slugInput) slugInput.value = p.slug;
  }

  function initDetail(){
    const root = $('#planner-detail');
    if (!root) return;
    const slug = root.dataset.slug;
    const p = bySlug(slug);
    if (p) fillDetail(p);
  }
function sendEmail(email, subject = 'Inquiry', body = '') {
  try {
    const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
    window.location.href = mailtoLink;
    return true;
  } catch (e) {
    console.error('Failed to open email client:', e);
    return false;
  }
}
  // Featured on home
  function initHome(){
    const cont = $('#featured-grid');
    if (!cont) return;
    const selected = AURA_PLANNERS.filter(p=>p.featured).slice(0,6);
    const list = selected.length ? selected : AURA_PLANNERS.slice(0,6);
    renderGrid(list, cont);
  }

  // Lightbox
  const lb = {
    root: null, img: null, prev: null, next: null, close: null,
    images: [], index: 0
  };
  function setupLightbox(){
    lb.root = $('#lightbox');
    if (!lb.root) return;
    lb.img = $('.lightbox-img', lb.root);
    lb.prev = $('.lightbox-prev', lb.root);
    lb.next = $('.lightbox-next', lb.root);
    lb.close = $('.lightbox-close', lb.root);
    lb.prev.addEventListener('click', ()=> changeImage(-1));
    lb.next.addEventListener('click', ()=> changeImage(1));
    lb.close.addEventListener('click', closeLightbox);
    lb.root.addEventListener('click', (e)=>{ if (e.target === lb.root) closeLightbox(); });
    document.addEventListener('keydown', (e)=>{
      if (!lb.root.classList.contains('show')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') changeImage(-1);
      if (e.key === 'ArrowRight') changeImage(1);
    });
  }
  function openLightbox(images, start){
    if (!lb.root) return;
    lb.images = images || [];
    lb.index = start || 0;
    updateLightbox();
    lb.root.classList.add('show');
  }
  function changeImage(delta){
    lb.index = (lb.index + delta + lb.images.length) % lb.images.length;
    updateLightbox();
  }
  function updateLightbox(){
    if (!lb.img || !lb.images.length) return;
    lb.img.src = STATIC_BASE + lb.images[lb.index];
  }
  function closeLightbox(){ lb.root.classList.remove('show'); }

  // Reveal animations
  function setupReveal(){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(ent => {
        if (ent.isIntersecting) ent.target.classList.add('visible');
      });
    }, {threshold: 0.15});
    $$('.reveal').forEach(el => obs.observe(el));
  }

  // Nav toggle
  function setupNav(){
    const toggle = $('.nav-toggle');
    const nav = $('.main-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', ()=> nav.classList.toggle('show'));
  }

  // Footer year
  function setYear(){ const y=$('#year'); if (y) y.textContent = String(new Date().getFullYear()); }

  // Forms (Formspree)
  function attachFormspree(form){
    if (!form) return;
    const status = form.querySelector('.form-status');
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      status && (status.textContent = 'Sending...');
      try{
        const res = await fetch('https://formspree.io/f/xgvjwrgv', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        if (res.ok){
          const fd = new FormData(form);
          const budget = fd.get('budget');
          form.reset();
          status && (status.textContent = 'Thanks! We will be in touch shortly.' + (budget ? ` (Budget: ${budget})` : ''));
        } else {
          status && (status.textContent = 'There was an issue. Please try again later.');
        }
      }catch(err){
        status && (status.textContent = 'Network error. Please try again.');
      }
    });
  }

  function initForms(){
    attachFormspree($('#site-contact-form'));
    attachFormspree($('#planner-detail-form'));
    attachFormspree($('#enquiryForm'));
  }

  // Planners page init
  function initPlanners(){
    if (!$('#planners-grid')) return;
    initFilters();
  }

  // Boot
  document.addEventListener('DOMContentLoaded', function(){
    setupLightbox();
    setupReveal();
    setupNav();
    setYear();
    initHome();
    initPlanners();
    initDetail();
    initForms();
  });
})();
