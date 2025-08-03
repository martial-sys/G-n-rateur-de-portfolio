document.addEventListener('DOMContentLoaded', function() {

    // =================================================================
    // SECTION 1 : CONFIGURATION & MOULES INTERNES
    // =================================================================

    const PALETTES_COULEURS = {
        default: { "--color-primary": "#2563EB", "--color-secondary": "#1E40AF" },
        foret: { "--color-primary": "#16A34A", "--color-secondary": "#15803D" },
        ocean: { "--color-primary": "#06B6D4", "--color-secondary": "#0E7490" },
        corail: { "--color-primary": "#F97316", "--color-secondary": "#EA580C" },
        luxe: { "--color-primary": "#1E293B", "--color-secondary": "#334155" },
        energie: { "--color-primary": "#EAB308", "--color-secondary": "#CA8A04" },
        rose: { "--color-primary": "#DB2777", "--color-secondary": "#BE185D" },
        violet: { "--color-primary": "#7C3AED", "--color-secondary": "#6D28D9" },
    };

    const htmlMoule = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>%%TITRE_PAGE%%</title><meta name="description" content="%%META_DESCRIPTION%%"><meta property="og:type" content="website"><meta property="og:title" content="%%OG_TITLE%%"><meta property="og:description" content="%%OG_DESCRIPTION%%"><meta property="og:image" content="%%OG_IMAGE_URL%%"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet"><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"><style>%%CSS_CONTENT%%</style></head><body><a href="#main-content" class="skip-link">Aller au contenu principal</a><header class="header-prestige"><div class="container header-container"><div class="logo-prestige"><img src="%%LOGO_URL%%" alt="Logo de %%NOM_COMPLET%%"><span>%%NOM_COMPLET%%</span></div><nav class="main-nav"><ul><li><a href="#hero" class="active">Accueil</a></li><li><a href="#about">À propos</a></li><li><a href="#skills">Compétences</a></li><li><a href="#projects">Projets</a></li><li><a href="#testimonials">Témoignages</a></li><li><a href="#contact">Contact</a></li></ul></nav><div class="theme-switcher"><i class="fas fa-sun"></i><label class="switch"><input type="checkbox" id="theme-toggle"><span class="slider round"></span></label><i class="fas fa-moon"></i></div><button class="mobile-menu-btn" aria-label="Ouvrir le menu">☰</button></div></header><main id="main-content"><section class="hero-prestige" id="hero"><div class="container hero-content"><div class="hero-text"><p class="hero-intro" data-aos="fade-down">%%TITRE_POSTE%%</p><h1 data-aos="fade-down" data-aos-delay="200">%%NOM_COMPLET%%</h1><p class="hero-description" data-aos="fade-down" data-aos-delay="400">%%ACCROCHE%%</p><div class="hero-cta" data-aos="fade-up" data-aos-delay="600"><a href="#projects" class="btn btn-primary">Voir mes Projets</a><a href="#contact" class="btn btn-secondary">Me Contacter</a></div></div><div class="hero-image" data-aos="zoom-in" data-aos-delay="300"><div class="blob-shape"><img src="%%PHOTO_PROFIL_URL%%" alt="Photo de %%NOM_COMPLET%%"></div></div></div></section><section id="about"><div class="container"><h2 class="section-title" data-aos="fade-up">À Propos de Moi</h2><div class="about-content"><div class="about-text" data-aos="fade-right" data-aos-delay="200"><h3>%%ABOUT_TITRE%%</h3><p>%%ABOUT_P%%</p></div></div></div></section><section id="skills"><div class="container"><h2 class="section-title" data-aos="fade-up">Mes Compétences</h2><div class="skills-container">%%SKILLS_SECTION%%</div></div></section><section id="projects"><div class="container"><h2 class="section-title" data-aos="fade-up">Mes Projets Récents</h2><div class="projects-grid">%%PROJECTS_SECTION%%</div></div></section><section id="testimonials"><div class="container"><h2 class="section-title" data-aos="fade-up">Ce que disent mes clients</h2><div class="testimonials-grid">%%TESTIMONIALS_SECTION%%</div></div></section><section id="contact"><div class="container"><h2 class="section-title" data-aos="fade-up">Contactez-moi</h2><p class="section-intro-portfolio" data-aos="fade-up" data-aos-delay="100">%%CONTACT_INTRO%%</p><div class="contact-buttons-container" data-aos="fade-up" data-aos-delay="200">%%CONTACT_BUTTONS%%</div></div></section></main><footer class="footer-prestige"><div class="container"><div class="social-icons">%%SOCIAL_ICONS%%</div><div class="footer-links"><a href="#hero">Accueil</a> | <a href="#about">À propos</a> | <a href="#skills">Compétences</a> | <a href="#projects">Projets</a> | <a href="#testimonials">Témoignages</a> | <a href="#contact">Contact</a></div><p class="copyright">© 2025 %%NOM_COMPLET%% - Tous droits réservés</p></div></footer><a href="#hero" class="back-to-top" aria-label="Retour en haut de la page"><i class="fas fa-arrow-up"></i></a><script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer><\/script><script>%%JS_CONTENT%%<\/script></body></html>`;
    const cssMoule = `:root{--color-primary:#2563EB;--color-secondary:#1E40AF;--font-family-primary:'Poppins',sans-serif;--color-background:#fff;--color-surface:#F8FAFC;--color-text-primary:#1E293B;--color-text-secondary:#475569;--color-border:#E2E8F0;--color-background-dark:#111827;--color-surface-dark:#1F2937;--color-text-primary-dark:#F9FAFB;--color-text-secondary-dark:#9CA3AF;--color-border-dark:#374151}html,body{overflow-x:hidden;width:100%;margin:0;padding:0}*,::after,::before{box-sizing:border-box}html{scroll-behavior:smooth;font-size:16px}body{font-family:var(--font-family-primary);line-height:1.7;color:var(--color-text-secondary);background-color:var(--color-background);-webkit-font-smoothing:antialiased;transition:background-color .3s ease,color .3s ease}h1,h2,h3,h4{color:var(--color-text-primary);font-weight:700;line-height:1.2;transition:color .3s ease}h1{font-size:3rem}h2.section-title{font-size:2rem;margin-bottom:32px;position:relative;display:inline-block}h2.section-title::after{content:'';position:absolute;width:60%;height:3px;bottom:-10px;left:0;background-color:var(--color-primary)}a{color:var(--color-primary);text-decoration:none;transition:all .3s ease}a:hover{color:var(--color-secondary)}.container{max-width:1100px;margin:0 auto;padding:0 24px}.btn{display:inline-block;padding:10px 22px;border-radius:6px;font-weight:600;font-size:.95rem;transition:all .3s ease}.btn-primary{background-color:var(--color-primary);color:#fff}.btn-primary:hover{background-color:var(--color-secondary);transform:translateY(-3px);box-shadow:0 5px 15px rgba(37,99,235,.2)}.btn-secondary{border:2px solid var(--color-primary);color:var(--color-primary)}.btn-secondary:hover{background-color:var(--color-primary);color:#fff}main{margin-top:73px}section{padding:80px 0; transition: background-color .3s ease;}section:nth-child(even){background-color:var(--color-surface)}.header-prestige{background-color:rgba(255,255,255,.8);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:1px solid var(--color-border);position:fixed;width:100%;top:0;z-index:1000;transition:background-color .3s ease,border-color .3s ease}.header-container{display:flex;justify-content:space-between;align-items:center;padding:16px 24px}.logo-prestige{display:flex;align-items:center;gap:12px}.logo-prestige img{height:40px}.logo-prestige span{font-size:1.3em;font-weight:600;color:var(--color-text-primary);transition:color .3s ease}.main-nav ul{display:flex;list-style:none;gap:32px;margin:0;padding:0}.main-nav a{color:var(--color-text-primary);font-weight:500;position:relative;padding-bottom:8px;transition:color .3s ease}.main-nav a::after{content:'';position:absolute;width:0;height:2px;bottom:0;left:0;background-color:var(--color-primary);transition:width .3s ease}.main-nav a.active::after,.main-nav a:hover::after{width:100%}.mobile-menu-btn{display:none;cursor:pointer;background:0 0;border:none;font-size:1.8rem;color:var(--color-text-primary)}.theme-switcher{display:flex;align-items:center;gap:8px;color:var(--color-text-secondary)}.switch{position:relative;display:inline-block;width:44px;height:24px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;transition:.4s}.slider:before{position:absolute;content:"";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;transition:.4s}input:checked+.slider{background-color:var(--color-primary)}input:checked+.slider:before{transform:translateX(20px)}.slider.round{border-radius:24px}.slider.round:before{border-radius:50%}.hero-prestige{min-height:calc(100vh - 73px);display:flex;align-items:center;background:linear-gradient(135deg,#f0f9ff,#e0f2fe)}.hero-content{display:flex;align-items:center;justify-content:space-between;gap:48px}.hero-text{flex:1;max-width:600px}.hero-intro{color:var(--color-primary);font-weight:600;margin-bottom:16px}.hero-text h1{font-weight:800;margin-bottom:24px}.hero-description{font-size:1rem;margin-bottom:32px}.hero-cta{display:flex;gap:16px}.hero-image{flex-shrink:0}.blob-shape{width:280px;height:280px;background:linear-gradient(45deg,var(--color-primary),#60A5FA);border-radius:60% 40% 30% 70%/60% 30% 70% 40%;animation:morph 12s ease-in-out infinite;display:flex;justify-content:center;align-items:center}.blob-shape img{width:90%;height:90%;-o-object-fit:cover;object-fit:cover;border-radius:50%}@keyframes morph{0%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;transform:rotate(5deg)}100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}}.about-content{display:flex;gap:48px;align-items:center}.about-text{flex:1}.about-text h3{font-size:1.5em;margin-bottom:16px}.about-text p{margin-bottom:24px}.skills-container{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:32px}.skill-category{background-color:#fff;padding:24px;border-radius:8px;box-shadow:0 4px 15px rgba(0,0,0,.05);border:1px solid var(--color-border);transition:transform .3s ease,box-shadow .3s ease,background-color .3s ease,border-color .3s ease}.skill-category h3{margin-bottom:12px;font-size:1.2rem}.skill-category ul{list-style-type:none;margin:0;padding:0}.skill-category li{margin-bottom:8px;display:flex;align-items:center}.skill-category li::before{content:"✓";color:var(--color-primary);font-weight:700;display:inline-block;width:1em;margin-right:8px}.projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:32px}.project-card{background-color:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,.1);transition:all .3s ease;display:flex;flex-direction:column}.project-img{height:180px;background-color:var(--color-border);overflow:hidden}.project-img img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.project-info{padding:20px;flex-grow:1;display:flex;flex-direction:column}.project-info h3{margin-bottom:8px}.project-info p{font-size:.95rem;margin-bottom:16px;flex-grow:1}.project-links{display:flex;gap:12px;margin-top:auto}#contact{text-align:center}.section-intro-portfolio{max-width:600px;margin:0 auto 32px}.contact-buttons-container{display:flex;justify-content:center;gap:20px;flex-wrap:wrap;width:100%}.contact-btn{font-size:1em;padding:12px 24px;display:inline-flex;align-items:center;gap:10px}.footer-prestige{background-color:var(--color-text-primary);color:#fff;padding:40px 24px;text-align:center}.social-icons{display:flex;justify-content:center;gap:20px;margin-bottom:20px}.social-icon{color:#fff;font-size:1.4rem}.social-icon:hover{color:#9CA3AF}.footer-links{margin-bottom:20px}.footer-links a{margin:0 12px;color:#fff;font-weight:500}.footer-links a:hover{color:#9CA3AF}.copyright{font-size:.85rem;color:#9CA3AF}@media (max-width:768px){h1{font-size:2.5rem}h2.section-title{font-size:1.8rem}.mobile-menu-btn{display:block;z-index:1100}.main-nav{display:none;position:absolute;top:73px;left:0;background-color:var(--color-background);width:100%;text-align:center;padding:16px 0;border-top:1px solid var(--color-border);z-index:1000;box-shadow:0 5px 10px rgba(0,0,0,.1)}.main-nav.active{display:block}.main-nav ul{flex-direction:column;gap:16px}.hero-content,.about-content{flex-direction:column;text-align:center;gap:32px}.hero-text{max-width:100%;order:2}.hero-image{order:1}.hero-cta{justify-content:center}.blob-shape{width:220px;height:220px}.skills-container,.projects-grid,.testimonials-grid{gap:20px}section{padding:60px 0}}body.dark-mode{background-color:var(--color-background-dark);color:var(--color-text-secondary-dark)}.dark-mode .main-nav a,.dark-mode .logo-prestige span,.dark-mode h1,.dark-mode h2,.dark-mode h3,.dark-mode h4{color:var(--color-text-primary-dark)}.dark-mode .header-prestige{background-color:rgba(17,24,39,.85);border-bottom-color:var(--color-border-dark)}.dark-mode .main-nav{background-color:var(--color-background-dark)}.dark-mode section:nth-child(even){background-color:var(--color-surface-dark)}.dark-mode .hero-prestige{background:linear-gradient(135deg,#111827,#1E2937)}.dark-mode .project-card,.dark-mode .skill-category{background-color:var(--color-surface-dark);border-color:var(--color-border-dark)}.dark-mode .btn-secondary{color:var(--color-primary);border-color:var(--color-primary)}.dark-mode .btn-secondary:hover{background-color:var(--color-primary);color:var(--color-text-primary-dark)}.dark-mode .footer-prestige{background-color:var(--color-background-dark);border-top:1px solid var(--color-border-dark)}.skip-link{position:absolute;top:-100px;left:0;background:var(--color-primary);color:#fff;padding:12px;z-index:1100;transition:top .3s}.skip-link:focus{top:0}.btn:focus-visible,.back-to-top:focus-visible,.main-nav a:focus-visible,.social-icon:focus-visible{outline:3px solid var(--color-secondary);outline-offset:3px;border-radius:4px}#testimonials{background-color:#fff}.testimonials-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:32px}.testimonial-card{background-color:var(--color-surface);padding:32px;border-radius:8px;border:1px solid var(--color-border);box-shadow:0 4px 15px rgba(0,0,0,.05);display:flex;flex-direction:column;transition:transform .3s ease,box-shadow .3s ease,background-color .3s ease,border-color .3s ease}.testimonial-text{font-style:italic;color:var(--color-text-primary);margin:0 0 24px;flex-grow:1;position:relative;padding-left:20px;transition:color .3s ease}.testimonial-text::before{content:"“";font-family:Georgia,serif;font-size:4rem;line-height:1;color:var(--color-primary);opacity:.15;position:absolute;left:-10px;top:-10px}.testimonial-author{display:flex;align-items:center;gap:16px;margin-top:auto}.author-photo{width:50px;height:50px;border-radius:50%;-o-object-fit:cover;object-fit:cover;border:2px solid var(--color-border)}.author-name{font-weight:600;color:var(--color-text-primary);margin:0;transition:color .3s ease}.author-title{font-size:.9rem;margin:0;transition:color .3s ease}.dark-mode #testimonials{background-color:var(--color-background-dark)}.dark-mode .testimonial-card{background-color:var(--color-surface-dark);border-color:var(--color-border-dark)}.dark-mode .author-name,.dark-mode .testimonial-text{color:var(--color-text-primary-dark)}.dark-mode .author-title{color:var(--color-text-secondary-dark)}.back-to-top{position:fixed;bottom:20px;right:20px;width:45px;height:45px;background-color:var(--color-primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.2rem;box-shadow:0 4px 10px rgba(0,0,0,.2);opacity:0;visibility:hidden;transform:translateY(20px);transition:opacity .3s,visibility .3s,transform .3s,background-color .3s;z-index:900}.back-to-top.visible{opacity:1;visibility:visible;transform:translateY(0)}.back-to-top:hover{background-color:var(--color-secondary);color:#fff;transform:scale(1.1)}.dark-mode .project-card:hover,.dark-mode .skill-category:hover,.dark-mode .testimonial-card:hover{box-shadow:0 12px 25px rgba(0,0,0,.15)}.project-card:hover,.skill-category:hover,.testimonial-card:hover{transform:translateY(-8px);box-shadow:0 12px 25px rgba(0,0,0,.08)}`;
    const jsMoule = `document.addEventListener('DOMContentLoaded',()=>{try{AOS.init({duration:800,once:!0,offset:100})}catch(e){console.warn("AOS library not found.")}const t=document.querySelector(".mobile-menu-btn"),e=document.querySelector(".main-nav");t&&e&&(t.addEventListener("click",()=>e.classList.toggle("active")),e.querySelectorAll("a").forEach(t=>t.addEventListener("click",()=>e.classList.remove("active"))));const o=document.getElementById("theme-toggle");if(o){const t=t=>{document.body.classList.toggle("dark-mode","dark"===t),o.checked="dark"===t};t(localStorage.getItem("theme")||"light"),o.addEventListener("change",function(){const o=this.checked?"dark":"light";localStorage.setItem("theme",o),t(o)})}const c=document.querySelector(".back-to-top");c&&window.addEventListener("scroll",()=>{window.scrollY>300?c.classList.add("visible"):c.classList.remove("visible")});const n=document.querySelectorAll("main section[id]"),a=document.querySelectorAll(".main-nav a");if(n.length>0&&a.length>0){const e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&a.forEach(e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+t.target.id&&e.classList.add("active")})})},{rootMargin:"-50% 0px -50% 0px"});n.forEach(t=>e.observe(t))}});`;

    // =================================================================
    // SECTION 2 : ÉTAT & SÉLECTION DES ÉLÉMENTS
    // =================================================================
    let portfolioData = {
        nomComplet: "Amina Koné", titre: "Stratège en Contenu Digital",
        accroche: "Je construis des ponts...",
        logo: "https://i.postimg.cc/wB1RX8ny/file-00000000848c61f8a4258e05177b8d23.png",
        photoProfil: "https://i.postimg.cc/DZbLWMNQ/file-000000000870623092ddda64044457d7.png",
        aboutTitre: "Votre histoire mérite d'être bien racontée.", aboutP: "Passionnée par les trésors...",
        contactIntro: "Un projet, une question, une opportunité ?...",
        whatsapp: "22891234567", email: "contact@aminakone.com",
        facebook: "#", instagram: "#", linkedin: "#", tiktok: "#",
        titrePage: "Portfolio | Amina Koné", metaDescription: "Stratège en contenu digital...",
        ogImage: "https://i.postimg.cc/DZbLWMNQ/file-000000000870623092ddda64044457d7.png",
        skills: [{ title: 'Stratégie & Contenu', item1: 'Calendrier Éditorial', item2: 'Copywriting', item3: 'Gestion de Communauté' }],
        projects: [{ image: 'https://i.postimg.cc/QxNtgZT8/file-00000000cbe462309cfa73d75f72a3ed.png', title: '"Trésors d\'Afrique" - Bijoux', description: 'Refonte de la page Instagram...', link: '#' }],
        testimonials: [{ authorPhoto: 'https://i.pravatar.cc/100?u=client1', authorName: 'Jean Dupont', authorTitle: 'Gérant, Trésors d\'Afrique', text: 'Amina a transformé notre présence en ligne...' }]
    };
    const iframe = document.querySelector('#preview-panel iframe');
    const downloadBtn = document.getElementById('download-btn');
    const previewBtn = document.getElementById('preview-btn');
    const controlPanel = document.getElementById('control-panel');
    const notificationContainer = document.getElementById('notification-container');
    const successModal = document.getElementById('success-modal');

    // =================================================================
    // SECTION 3 : LOGIQUE DE L'INTERFACE (RENDER)
    // =================================================================
    function renderSkills() {
        const container = document.getElementById('skills-repeater');
        if (!container) return;
        container.innerHTML = portfolioData.skills.map((skill, index) => `
            <div class="repeater-group" data-index="${index}">
                <div class="repeater-header"><h4>Catégorie #${index + 1}</h4><button class="btn-action delete" data-type="skill" aria-label="Supprimer"><i class="fas fa-trash-alt"></i></button></div>
                <div class="form-group"><label>Titre de la catégorie</label><input type="text" class="skill-title" value="${skill.title || ''}"></div>
                <div class="form-group"><label>Compétence 1</label><input type="text" class="skill-item1" value="${skill.item1 || ''}"></div>
                <div class="form-group"><label>Compétence 2</label><input type="text" class="skill-item2" value="${skill.item2 || ''}"></div>
                <div class="form-group"><label>Compétence 3</label><input type="text" class="skill-item3" value="${skill.item3 || ''}"></div>
            </div>`).join('');
    }

    function renderProjects() {
        const container = document.getElementById('projects-repeater');
        if (!container) return;
        container.innerHTML = portfolioData.projects.map((project, index) => `
            <div class="repeater-group" data-index="${index}">
                <div class="repeater-header"><h4>Projet #${index + 1}</h4><button class="btn-action delete" data-type="project" aria-label="Supprimer"><i class="fas fa-trash-alt"></i></button></div>
                <div class="form-group"><label>URL de l'image</label><input type="url" class="project-image" value="${project.image || ''}"></div>
                <div class="form-group"><label>Titre</label><input type="text" class="project-title" value="${project.title || ''}"></div>
                <div class="form-group"><label>Description</label><textarea rows="3" class="project-description">${project.description || ''}</textarea></div>
                <div class="form-group"><label>Lien</label><input type="url" class="project-link" value="${project.link || ''}"></div>
            </div>`).join('');
    }
    
    function renderTestimonials() {
        const container = document.getElementById('testimonials-repeater');
        if (!container) return;
        container.innerHTML = portfolioData.testimonials.map((testimonial, index) => `
            <div class="repeater-group" data-index="${index}">
                <div class="repeater-header"><h4>Témoignage #${index + 1}</h4><button class="btn-action delete" data-type="testimonial" aria-label="Supprimer"><i class="fas fa-trash-alt"></i></button></div>
                <div class="form-group"><label>URL Photo Auteur</label><input type="url" class="testimonial-authorPhoto" value="${testimonial.authorPhoto || ''}"></div>
                <div class="form-group"><label>Nom Auteur</label><input type="text" class="testimonial-authorName" value="${testimonial.authorName || ''}"></div>
                <div class="form-group"><label>Poste Auteur</label><input type="text" class="testimonial-authorTitle" value="${testimonial.authorTitle || ''}"></div>
                <div class="form-group"><label>Texte du témoignage</label><textarea rows="4" class="testimonial-text">${testimonial.text || ''}</textarea></div>
            </div>`).join('');
    }

    // =================================================================
    // SECTION 4 : GESTION DES DONNÉES & COMMUNICATION
    // =================================================================
    function gatherData() {
        document.querySelectorAll('input[id], textarea[id]').forEach(el => { if (portfolioData.hasOwnProperty(el.id)) portfolioData[el.id] = el.value; });
        portfolioData.skills = Array.from(document.querySelectorAll('#skills-repeater .repeater-group')).map(g => ({ title: g.querySelector('.skill-title').value, item1: g.querySelector('.skill-item1').value, item2: g.querySelector('.skill-item2').value, item3: g.querySelector('.skill-item3').value }));
        portfolioData.projects = Array.from(document.querySelectorAll('#projects-repeater .repeater-group')).map(g => ({ image: g.querySelector('.project-image').value, title: g.querySelector('.project-title').value, description: g.querySelector('.project-description').value, link: g.querySelector('.project-link').value }));
        portfolioData.testimonials = Array.from(document.querySelectorAll('#testimonials-repeater .repeater-group')).map(g => ({ authorPhoto: g.querySelector('.testimonial-authorPhoto').value, authorName: g.querySelector('.testimonial-authorName').value, authorTitle: g.querySelector('.testimonial-authorTitle').value, text: g.querySelector('.testimonial-text').value }));
    }

    function sendUpdate() {
        if (iframe && iframe.contentWindow) iframe.contentWindow.postMessage({ type: 'MISE_A_JOUR_PORTFOLIO', valeur: portfolioData }, '*');
    }
    
    function handleUpdate() {
        gatherData();
        sendUpdate();
        validateForm();
    }

    // =================================================================
    // SECTION 5 : MOTEUR DE VALIDATION & TÉLÉCHARGEMENT
    // =================================================================
    function validateForm() {
        let isValid = true;
        document.querySelectorAll('.form-group.has-error').forEach(el => { el.classList.remove('has-error'); const msg = el.querySelector('.error-message'); if (msg) msg.textContent = ''; });

        const requiredFields = ['nomComplet', 'titre', 'logo', 'photoProfil', 'aboutP'];
        requiredFields.forEach(id => {
            const input = document.getElementById(id);
            if (input && !input.value.trim()) {
                isValid = false;
                const formGroup = input.closest('.form-group');
                if (formGroup) {
                    formGroup.classList.add('has-error');
                    const errorMsg = formGroup.querySelector('.error-message');
                    if(errorMsg) errorMsg.textContent = 'Ce champ est obligatoire.';
                }
            }
        });

        const contactError = document.getElementById('contact-error');
        if (contactError) {
            const contactGroup = contactError.closest('.form-group');
            if (!document.getElementById('whatsapp').value.trim() && !document.getElementById('email').value.trim()) {
                isValid = false;
                if(contactGroup) contactGroup.classList.add('has-error');
                contactError.textContent = 'Au moins un moyen de contact est requis.';
            } else if (contactGroup) {
                contactGroup.classList.remove('has-error');
            }
        }
        
        const skillsError = document.getElementById('skills-error');
        if (skillsError) { if (portfolioData.skills.length === 0) { isValid = false; skillsError.style.display = 'block'; skillsError.textContent = 'Veuillez ajouter au moins une catégorie.'; } else { skillsError.style.display = 'none'; } }
        
        const projectsError = document.getElementById('projects-error');
        if (projectsError) { if (portfolioData.projects.length === 0) { isValid = false; projectsError.style.display = 'block'; projectsError.textContent = 'Veuillez ajouter au moins un projet.'; } else { projectsError.style.display = 'none'; } }
        
        if (downloadBtn) downloadBtn.disabled = !isValid;
        const globalError = document.getElementById('global-error');
        if (globalError) globalError.style.display = isValid ? 'none' : 'block';
        return isValid;
    }
    
    function showNotification(message, duration = 3000) {
        if (!notificationContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        notificationContainer.appendChild(toast);
        setTimeout(() => { toast.remove(); }, duration);
    }
    
    function openModal() { if(successModal) { successModal.style.display = 'flex'; setTimeout(() => successModal.classList.add('visible'), 10); } }
    function closeModal() { if(successModal) { successModal.classList.remove('visible'); setTimeout(() => successModal.style.display = 'none', 300); } }

    function escapeHtml(unsafe) {
        if (typeof unsafe !== 'string') return '';
        return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    function buildFinalHtml() {
        gatherData();
        const skillsHtml = portfolioData.skills.map(skill => { const items = [skill.item1, skill.item2, skill.item3].filter(i => i && i.trim() !== '').map(i => `<li>${escapeHtml(i.trim())}</li>`).join(''); return `<div class="skill-category"><h3>${escapeHtml(skill.title)}</h3><ul>${items}</ul></div>`; }).join('');
        const projectsHtml = portfolioData.projects.map(p => `<article class="project-card"><div class="project-img"><img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}"></div><div class="project-info"><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description)}</p><div class="project-links"><a href="${escapeHtml(p.link)}" target="_blank" class="btn btn-secondary">En Savoir Plus</a></div></div></article>`).join('');
        const testimonialsHtml = portfolioData.testimonials.map(t => `<figure class="testimonial-card"><blockquote class="testimonial-text">${escapeHtml(t.text)}</blockquote><figcaption class="testimonial-author"><img src="${escapeHtml(t.authorPhoto)}" alt="Photo de ${escapeHtml(t.authorName)}" class="author-photo"><div class="author-info"><p class="author-name">${escapeHtml(t.authorName)}</p><cite class="author-title">${escapeHtml(t.authorTitle)}</cite></div></figcaption></figure>`).join('');
        let contactButtonsHtml = ''; if (portfolioData.whatsapp && portfolioData.whatsapp.trim()) { contactButtonsHtml += `<a href="https://wa.me/${escapeHtml(portfolioData.whatsapp)}" target="_blank" class="btn btn-primary contact-btn"><i class="fab fa-whatsapp"></i> Discutons sur WhatsApp</a>`; } if (portfolioData.email && portfolioData.email.trim()) { contactButtonsHtml += `<a href="mailto:${escapeHtml(portfolioData.email)}" class="btn btn-secondary contact-btn"><i class="fas fa-envelope"></i> Envoyez-moi un Email</a>`; }
        let socialIconsHtml = ''; if (portfolioData.facebook && portfolioData.facebook.trim() && portfolioData.facebook.trim() !== '#') { socialIconsHtml += `<a href="${escapeHtml(portfolioData.facebook)}" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>`; } if (portfolioData.instagram && portfolioData.instagram.trim() && portfolioData.instagram.trim() !== '#') { socialIconsHtml += `<a href="${escapeHtml(portfolioData.instagram)}" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>`; } if (portfolioData.linkedin && portfolioData.linkedin.trim() && portfolioData.linkedin.trim() !== '#') { socialIconsHtml += `<a href="${escapeHtml(portfolioData.linkedin)}" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>`; } if (portfolioData.tiktok && portfolioData.tiktok.trim() && portfolioData.tiktok.trim() !== '#') { socialIconsHtml += `<a href="${escapeHtml(portfolioData.tiktok)}" class="social-icon" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>`; }
        
        return htmlMoule
            .replace('%%TITRE_PAGE%%', escapeHtml(portfolioData.titrePage) || 'Portfolio')
            .replace(/%%NOM_COMPLET%%/g, escapeHtml(portfolioData.nomComplet))
            .replace('%%META_DESCRIPTION%%', escapeHtml(portfolioData.metaDescription))
            .replace('%%OG_TITLE%%', escapeHtml(portfolioData.titrePage))
            .replace('%%OG_DESCRIPTION%%', escapeHtml(portfolioData.metaDescription))
            .replace('%%OG_IMAGE_URL%%', escapeHtml(portfolioData.ogImage))
            .replace('%%LOGO_URL%%', escapeHtml(portfolioData.logo))
            .replace('%%TITRE_POSTE%%', escapeHtml(portfolioData.titre))
            .replace('%%ACCROCHE%%', escapeHtml(portfolioData.accroche))
            .replace('%%PHOTO_PROFIL_URL%%', escapeHtml(portfolioData.photoProfil))
            .replace('%%ABOUT_TITRE%%', escapeHtml(portfolioData.aboutTitre))
            .replace('%%ABOUT_P%%', escapeHtml(portfolioData.aboutP))
            .replace('%%CONTACT_INTRO%%', escapeHtml(portfolioData.contactIntro))
            .replace('%%CONTACT_BUTTONS%%', contactButtonsHtml)
            .replace('%%SOCIAL_ICONS%%', socialIconsHtml)
            .replace('%%SKILLS_SECTION%%', skillsHtml)
            .replace('%%PROJECTS_SECTION%%', projectsHtml)
            .replace('%%TESTIMONIALS_SECTION%%', testimonialsHtml)
            .replace('%%CSS_CONTENT%%', cssMoule)
            .replace('%%JS_CONTENT%%', jsMoule);
    }

    function generateAndDownloadFile() {
        if (!validateForm()) {
            showNotification("Veuillez corriger les erreurs indiquées en rouge.");
            return;
        }
        downloadBtn.innerHTML = `Génération...`;
        downloadBtn.disabled = true;
        try {
            const finalHtmlString = buildFinalHtml();
            const blob = new Blob([finalHtmlString], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a'); a.href = url; a.download = 'index.html';
            document.body.appendChild(a); a.click(); document.body.removeChild(a);
            URL.revokeObjectURL(url);
            openModal();
        } catch (error) {
            console.error("Erreur lors de la génération du fichier :", error);
            showNotification("Une erreur est survenue lors de la génération.");
        } finally {
            downloadBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 15l-4-4h3V4h2v7h3l-4 4zM4 17v2h16v-2H4z"/></svg> Télécharger mon Portfolio`;
            validateForm();
        }
    }

    // =================================================================
    // SECTION 6 : GESTION DES ÉVÉNEMENTS & INITIALISATION
    // =================================================================
    
    if (controlPanel) {
        controlPanel.addEventListener('click', e => {
            let fullUpdateNeeded = false;
            const target = e.target.closest('.btn-action.delete, #add-skill, #add-project, #add-testimonial, .social-btn, .theme-swatch');
            if (!target) return;

            if (target.matches('#add-skill')) { portfolioData.skills.push({ title: '', item1: '', item2: '', item3: '' }); renderSkills(); fullUpdateNeeded = true; }
            if (target.matches('#add-project')) { portfolioData.projects.push({ image: '', title: '', description: '', link: '' }); renderProjects(); fullUpdateNeeded = true; }
            if (target.matches('#add-testimonial')) { portfolioData.testimonials.push({ authorPhoto: '', authorName: '', authorTitle: '', text: '' }); renderTestimonials(); fullUpdateNeeded = true; }
            
            if (target.matches('.delete')) {
                const group = target.closest('.repeater-group');
                const index = group.dataset.index;
                const type = target.dataset.type;
                if (type === 'skill') { portfolioData.skills.splice(index, 1); renderSkills(); }
                if (type === 'project') { portfolioData.projects.splice(index, 1); renderProjects(); }
                if (type === 'testimonial') { portfolioData.testimonials.splice(index, 1); renderTestimonials(); }
                fullUpdateNeeded = true;
            }
            
            if (fullUpdateNeeded) handleUpdate();
            
            if (target.matches('.theme-swatch')) {
                const themeName = target.dataset.theme;
                if (iframe && iframe.contentWindow && PALETTES_COULEURS[themeName]) iframe.contentWindow.postMessage({ type: 'UPDATE_THEME', valeur: PALETTES_COULEURS[themeName] }, '*');
                document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
                target.classList.add('active');
            }
            
            if (target.matches('.social-btn')) {
                e.preventDefault();
                const social = target.dataset.social;
                const wrapper = document.getElementById(`wrapper-${social}`);
                if (wrapper) {
                    target.classList.toggle('active');
                    wrapper.style.display = target.classList.contains('active') ? 'block' : 'none';
                }
            }
        });

        controlPanel.addEventListener('input', handleUpdate);
    }

    document.querySelectorAll('.accordion-header').forEach(h => {
        h.addEventListener('click', () => {
            const item = h.parentElement;
            const isOpen = item.classList.contains('is-open');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('is-open'));
            if (!isOpen) {
                item.classList.add('is-open');
                const targetSection = h.dataset.targetSection;
                if (targetSection && iframe && iframe.contentWindow) iframe.contentWindow.postMessage({ type: 'SCROLL_TO_SECTION', valeur: targetSection }, '*');
            }
        });
    });

    if (downloadBtn) downloadBtn.addEventListener('click', generateAndDownloadFile);
    if (successModal) {
        successModal.querySelector('.close-modal').addEventListener('click', closeModal);
        successModal.addEventListener('click', (e) => { if (e.target === successModal) closeModal(); });
    }
    
        if (previewBtn) {
        previewBtn.addEventListener('click', () => {
            try {
                // On utilise la même logique de construction que le téléchargement
                const finalHtmlString = buildFinalHtml();
                
                // Mais au lieu de télécharger, on crée une URL temporaire...
                const blob = new Blob([finalHtmlString], { type: 'text/html;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                
                // ...et on l'ouvre dans un nouvel onglet.
                window.open(url, '_blank');

            } catch (error) {
                showNotification("Erreur lors de la génération de l'aperçu.");
                console.error("Erreur de l'aperçu :", error);
            }
        });
    }
    

    if (iframe) {
        iframe.addEventListener('load', () => {
            document.querySelectorAll('input[id], textarea[id]').forEach(el => { if (portfolioData[el.id]) el.value = portfolioData[el.id]; });
            renderSkills(); renderProjects(); renderTestimonials();
            setTimeout(() => sendUpdate(true), 200);
            validateForm();
        });
    }
});
