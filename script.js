// ========================================
// Koushik Raju S R - Futuristic Portfolio
// Pure Vanilla JavaScript
// ========================================

// ========================================
// LOADING SCREEN
// ========================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const mainContent = document.getElementById('main-content');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        progressFill.style.width = progress + '%';
        progressText.textContent = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
                init();
            }, 500);
        }
    }, 30);
}

// ========================================
// NAVIGATION
// ========================================
function initNavigation() {
    const nav = document.getElementById('floating-nav');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Update active link based on scroll position
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ========================================
// TYPEWRITER EFFECT
// ========================================
function initTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    const texts = personalInfo.typewriterText;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (!isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000);
                return;
            }
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }
    
    type();
}

// ========================================
// FLOATING PARTICLES
// ========================================
function initParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (3 + Math.random() * 3) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
    }
}

// ========================================
// FLIP CARD
// ========================================
function initFlipCard() {
    const flipCard = document.getElementById('flip-card');
    flipCard.addEventListener('click', () => {
        flipCard.classList.toggle('flipped');
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-animation]').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// SKILLS SECTION
// ========================================
function initSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    
    skills.forEach((skill, index) => {
        const categoryColors = {
            frontend: 'frontend',
            database: 'database',
            cloud: 'cloud',
            testing: 'testing'
        };
        
        const categoryClass = categoryColors[skill.category];
        
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.setAttribute('data-animation', 'slide-up');
        skillCard.style.transitionDelay = (index * 0.05) + 's';
        
        skillCard.innerHTML = `
            <div class=\"skill-icon skill-icon-${categoryClass}\">
                ${skill.name.substring(0, 2).toUpperCase()}
            </div>
            <div class=\"skill-name\">${skill.name}</div>
            <div class=\"skill-progress-container\">
                <div class=\"skill-progress\">
                    <div class=\"skill-progress-bar skill-progress-bar-${categoryClass}\" data-level=\"${skill.level}\"></div>
                </div>
                <div class=\"skill-level\">${skill.level}%</div>
            </div>
        `;
        
        skillsGrid.appendChild(skillCard);
        
        // Animate progress bars when visible
        setTimeout(() => {
            const progressBar = skillCard.querySelector('.skill-progress-bar');
            const level = progressBar.getAttribute('data-level');
            setTimeout(() => {
                progressBar.style.width = level + '%';
            }, 300);
        }, 100 + index * 50);
    });
}

// ========================================
// PROJECTS SECTION
// ========================================
function initProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-animation', 'slide-up');
        projectCard.style.transitionDelay = (index * 0.1) + 's';
        
        projectCard.innerHTML = `
            <div class=\"project-image-container\">
                <img src=\"${project.image}\" alt=\"${project.title}\" class=\"project-image\">
                <div class=\"project-overlay\"></div>
                <div class=\"project-category\">${project.category}</div>
            </div>
            <div class=\"project-info\">
                <h3 class=\"project-title\">${project.title}</h3>
                <p class=\"project-description\">${project.description}</p>
                <div class=\"project-tech-stack\">
                    ${project.techStack.map(tech => `<span class=\"tech-tag\">${tech}</span>`).join('')}
                </div>
                <button class=\"project-button\" onclick=\"openProjectModal(${project.id})\">View Details</button>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ========================================
// PROJECT MODAL
// ========================================
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <img src=\"${project.image}\" alt=\"${project.title}\" class=\"modal-project-image\">
        <h2 class=\"modal-project-title\">${project.title}</h2>
        <p class=\"modal-project-category\">${project.category}</p>
        <p class=\"modal-project-description\">${project.description}</p>
        <h3 class=\"modal-tech-title\">Technologies Used</h3>
        <div class=\"modal-tech-list\">
            ${project.techStack.map(tech => `<span class=\"modal-tech-tag\">${tech}</span>`).join('')}
        </div>
        <div class=\"modal-buttons\">
            <a href=\"${project.demoLink}\" target=\"_blank\" class=\"modal-button modal-button-demo\">
                <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                    <path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path>
                    <polyline points=\"15 3 21 3 21 9\"></polyline>
                    <line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>
                </svg>
                Live Demo
            </a>
            <a href=\"${project.githubLink}\" target=\"_blank\" class=\"modal-button modal-button-github\">
                <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                    <path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>
                </svg>
                View Code
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ========================================
// EXPERIENCE TIMELINE
// ========================================
function initExperience() {
    const timeline = document.getElementById('timeline');
    
    experience.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-animation', 'slide-up');
        timelineItem.style.transitionDelay = (index * 0.2) + 's';
        
        timelineItem.innerHTML = `
            <div class=\"timeline-dot\" style=\"background-color: ${exp.color};\">
                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\">
                    <rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect>
                    <path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>
                </svg>
            </div>
            <div class=\"timeline-card\">
                <h3 class=\"timeline-position\">${exp.position}</h3>
                <p class=\"timeline-company\">${exp.company}</p>
                <p class=\"timeline-duration\">${exp.duration}</p>
                <ul class=\"timeline-responsibilities\">
                    ${exp.responsibilities.map(resp => `
                        <li style=\"--dot-color: ${exp.color};\">
                            ${resp}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        // Apply color to list item dots
        timelineItem.querySelectorAll('.timeline-responsibilities li').forEach(li => {
            li.style.setProperty('--dot-color', exp.color);
            li.querySelector('::before')?.style.setProperty('background-color', exp.color);
        });
        
        timeline.appendChild(timelineItem);
    });
}

// ========================================
// SERVICES SECTION
// ========================================
function initServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    const iconMap = {
        code: `<path d=\"M16 18l2-2-2-2M8 6l-2 2 2 2\"></path><polyline points=\"12 2 12 6 9 9 6 6 6 2\"></polyline>`,
        bug: `<rect x=\"8\" y=\"6\" width=\"8\" height=\"11\" rx=\"1\"></rect><path d=\"M9 6V3\"></path><path d=\"M15 6V3\"></path><path d=\"M9 21v-2\"></path><path d=\"M15 21v-2\"></path><path d=\"M22 13h-4\"></path><path d=\"M6 13H2\"></path><path d=\"M18 9h3\"></path><path d=\"M6 9H3\"></path>`,
        zap: `<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>`,
        users: `<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>`
    };
    
    services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.setAttribute('data-animation', 'slide-up');
        serviceCard.style.transitionDelay = (index * 0.1) + 's';
        
        serviceCard.innerHTML = `
            <div class=\"service-icon-container\">
                <svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">
                    ${iconMap[service.icon]}
                </svg>
            </div>
            <h3 class=\"service-title\">${service.title}</h3>
            <p class=\"service-description\">${service.description}</p>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

// ========================================
// CONTACT SECTION
// ========================================
function initContact() {
    const contactMethodsContainer = document.getElementById('contact-methods');
    
    const iconMap = {
        mail: `<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>`,
        phone: `<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>`,
        linkedin: `<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>`,
        github: `<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>`
    };
    
    contactMethods.forEach((method, index) => {
        const methodElement = document.createElement('a');
        methodElement.href = method.href;
        methodElement.target = '_blank';
        methodElement.rel = 'noopener noreferrer';
        methodElement.className = 'contact-method';
        methodElement.setAttribute('data-animation', 'slide-up');
        methodElement.style.transitionDelay = (index * 0.1) + 's';
        
        methodElement.innerHTML = `
            <div class=\"contact-icon contact-icon-${method.color}\">
                <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"white\" stroke-width=\"2\">
                    ${iconMap[method.icon]}
                </svg>
            </div>
            <div class=\"contact-method-info\">
                <h3 class=\"contact-method-label\">${method.label}</h3>
                <p class=\"contact-method-value\">${method.value}</p>
            </div>
        `;
        
        contactMethodsContainer.appendChild(methodElement);
    });
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    formMessage.className = 'form-message success';
    formMessage.textContent = `Thank you ${name}! Your message has been sent. I'll get back to you soon.`;
    
    // Reset form
    e.target.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ========================================
// INITIALIZE
// ========================================
function init() {
    // Initialize navigation
    initNavigation();
    
    // Update personal info in hero
    document.getElementById('hero-name').textContent = personalInfo.name;
    document.getElementById('hero-role').textContent = personalInfo.title;
    
    // Initialize all components
    initTypewriter();
    initParticles();
    initFlipCard();
    initSkills();
    initProjects();
    initExperience();
    initServices();
    initContact();
    initScrollAnimations();
}

// ========================================
// START APPLICATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
});

// Make functions global for onclick handlers
window.scrollToSection = scrollToSection;
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;

// ========================================
// ENHANCED ANIMATIONS & EFFECTS
// ========================================

// Custom Cursor
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        // Smooth follow for cursor
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Faster follow for dot
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // Add hover class on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .service-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Particle Trail on Mouse Move
function initParticleTrail() {
    let lastTime = 0;
    const throttle = 50; // milliseconds
    
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTime < throttle) return;
        lastTime = now;
        
        const particle = document.createElement('div');
        particle.className = 'particle-trail';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        particle.style.background = `hsl(${Math.random() * 60 + 180}, 100%, 60%)`;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    });
}

// Tilt Effect on Mouse Move
function initTiltEffect() {
    const tiltCards = document.querySelectorAll('.project-card, .stat-card, .service-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Magnetic Button Effect
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.cta-button, .project-button, .submit-button');
    
    buttons.forEach(button => {
        button.classList.add('magnetic-btn');
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Number Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Text Reveal Animation
function initTextReveal() {
    const elements = document.querySelectorAll('.hero-title, .section-title');
    
    elements.forEach(el => {
        const text = el.textContent;
        el.innerHTML = '';
        el.classList.add('text-reveal');
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${index * 0.05}s`;
            el.appendChild(span);
        });
    });
}

// Glitch Effect on Hover
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.hero-title, .gradient-text');
    
    glitchElements.forEach(el => {
        el.classList.add('glitch');
        el.setAttribute('data-text', el.textContent);
    });
}

// Add Shimmer to Cards
function initShimmerEffect() {
    const cards = document.querySelectorAll('.project-card, .skill-card, .stat-card');
    cards.forEach(card => {
        card.classList.add('shimmer');
    });
}

// Floating Elements
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.skill-icon, .service-icon-container');
    floatingElements.forEach((el, index) => {
        el.classList.add('float-animation');
        el.style.animationDelay = `${index * 0.5}s`;
    });
}

// Parallax Effect on Scroll
function initParallax() {
    const parallaxElements = document.querySelectorAll('.floating-orb, .bg-orb');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Ripple Effect on Click
function initRippleEffect() {
    const buttons = document.querySelectorAll('button, .project-card, .contact-method');
    buttons.forEach(button => {
        button.classList.add('ripple');
    });
}

// Neon Glow Effect
function initNeonGlow() {
    const neonElements = document.querySelectorAll('.hero-title, .cta-button, .profile-circle');
    neonElements.forEach(el => {
        el.classList.add('neon-glow');
    });
}

// Add Glow Lines
function initGlowLines() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            const line = document.createElement('div');
            line.className = 'glow-line';
            line.style.left = `${Math.random() * 90 + 5}%`;
            line.style.animationDelay = `${Math.random() * 3}s`;
            section.appendChild(line);
        }
    });
}

// Holographic Effect
function initHolographicEffect() {
    const heroName = document.getElementById('hero-name');
    if (heroName) {
        heroName.classList.add('holographic');
    }
}

// Text Glow Animation
function initTextGlow() {
    const typewriter = document.getElementById('typewriter');
    if (typewriter) {
        typewriter.classList.add('text-glow');
    }
}

// Scanline Effect
function initScanlineEffect() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        hero.classList.add('scanline');
    }
}

// Add Wave Background
function initWaveBackground() {
    const sections = document.querySelectorAll('.about-section, .services-section');
    sections.forEach(section => {
        const wave = document.createElement('div');
        wave.className = 'wave-bg';
        section.appendChild(wave);
    });
}

// Stagger Animation for Timeline
function initStaggerAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-responsibilities li');
    timelineItems.forEach((item, index) => {
        item.classList.add('stagger-item');
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// Blur In Effect for Sections
function initBlurInEffect() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.filter = 'blur(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.filter = 'blur(5px)';
        section.style.opacity = '0';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
}

// Rotate Elements
function initRotatingElements() {
    const icons = document.querySelectorAll('.timeline-dot svg');
    icons.forEach(icon => {
        icon.parentElement.addEventListener('mouseenter', () => {
            icon.classList.add('rotate-continuous');
        });
        icon.parentElement.addEventListener('mouseleave', () => {
            icon.classList.remove('rotate-continuous');
        });
    });
}

// Enhanced Particle System with Multiple Colors
function initEnhancedParticles() {
    const container = document.getElementById('particles-container');
    const colors = ['#00D4FF', '#A855F7', '#EC4899', '#10B981'];
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';
        particle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(particle);
    }
}

// Mouse Parallax for Hero Content
function initMouseParallax() {
    const hero = document.querySelector('.hero-content');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        hero.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Initialize all enhanced animations
function initEnhancedAnimations() {
    initCustomCursor();
    initScrollProgress();
    initParticleTrail();
    initTiltEffect();
    initMagneticButtons();
    initGlitchEffect();
    initShimmerEffect();
    initFloatingElements();
    initParallax();
    initRippleEffect();
    initNeonGlow();
    initGlowLines();
    initHolographicEffect();
    initTextGlow();
    initScanlineEffect();
    initWaveBackground();
    initStaggerAnimation();
    initRotatingElements();
    initEnhancedParticles();
    initMouseParallax();
    
    console.log('🎨 Enhanced animations initialized!');
}

// Update init function to include enhanced animations
const originalInit = init;
init = function() {
    originalInit();
    setTimeout(() => {
        initEnhancedAnimations();
    }, 100);
};

// ========================================
// SPECTACULAR BIG ANIMATIONS
// ========================================

// Matrix Rain Effect
function initMatrixRain() {
    const matrix = document.createElement('div');
    matrix.className = 'matrix-rain';
    document.body.appendChild(matrix);
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    function createMatrixColumn() {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        matrix.appendChild(char);
        
        setTimeout(() => char.remove(), 5000);
    }
    
    setInterval(() => {
        if (matrix.children.length < columns) {
            createMatrixColumn();
        }
    }, 100);
}

// Particle Explosion on Page Load
function createExplosion() {
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        
        const colors = ['#00D4FF', '#A855F7', '#EC4899', '#10B981'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 200 + Math.random() * 300;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--x', x + 'px');
        particle.style.setProperty('--y', y + 'px');
        particle.style.animation = `explode ${1 + Math.random()}s ease-out forwards`;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
}

// Constellation Network Lines
function initConstellationNetwork() {
    const canvas = document.createElement('canvas');
    canvas.className = 'constellation-canvas';
    document.querySelector('.hero-section').appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    const maxDistance = 150;
    
    class ConstellationParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#00D4FF';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00D4FF';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new ConstellationParticle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 212, 255, ${1 - distance / maxDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Liquid Blobs Background
function initLiquidBlobs() {
    const hero = document.querySelector('.hero-section');
    
    for (let i = 1; i <= 3; i++) {
        const blob = document.createElement('div');
        blob.className = `liquid-blob blob-${i}`;
        hero.appendChild(blob);
    }
}

// Aurora/Northern Lights
function initAurora() {
    const aurora = document.createElement('div');
    aurora.className = 'aurora';
    
    for (let i = 0; i < 3; i++) {
        const layer = document.createElement('div');
        layer.className = 'aurora-layer';
        aurora.appendChild(layer);
    }
    
    document.querySelector('.hero-section').appendChild(aurora);
}

// Portal/Vortex Effect
function initPortalEffect() {
    const portal = document.createElement('div');
    portal.className = 'portal-container';
    
    for (let i = 0; i < 5; i++) {
        const ring = document.createElement('div');
        ring.className = 'portal-ring';
        portal.appendChild(ring);
    }
    
    document.querySelector('.hero-section').appendChild(portal);
}

// Lightning Strikes
function initLightning() {
    const container = document.createElement('div');
    container.className = 'lightning-container';
    document.body.appendChild(container);
    
    function createLightning() {
        const bolt = document.createElement('div');
        bolt.className = 'lightning-bolt';
        bolt.style.left = Math.random() * 100 + '%';
        bolt.style.filter = `hue-rotate(${Math.random() * 60}deg)`;
        container.appendChild(bolt);
        
        setTimeout(() => bolt.remove(), 300);
    }
    
    setInterval(() => {
        if (Math.random() > 0.95) {
            createLightning();
        }
    }, 1000);
}

// DNA Helix Animation
function initDNAHelix() {
    const container = document.createElement('div');
    container.className = 'dna-container';
    
    const strand1 = document.createElement('div');
    const strand2 = document.createElement('div');
    strand1.className = 'dna-strand';
    strand2.className = 'dna-strand';
    
    const ballCount = 20;
    const radius = 100;
    
    function animateDNA() {
        strand1.innerHTML = '';
        strand2.innerHTML = '';
        
        const time = Date.now() * 0.001;
        
        for (let i = 0; i < ballCount; i++) {
            const progress = i / ballCount;
            const y = progress * 400;
            
            // Strand 1
            const ball1 = document.createElement('div');
            ball1.className = 'dna-ball';
            const x1 = Math.sin(progress * Math.PI * 4 + time) * radius + 250;
            ball1.style.left = x1 + 'px';
            ball1.style.top = y + 'px';
            strand1.appendChild(ball1);
            
            // Strand 2
            const ball2 = document.createElement('div');
            ball2.className = 'dna-ball';
            ball2.style.background = '#A855F7';
            ball2.style.boxShadow = '0 0 20px #A855F7';
            const x2 = Math.sin(progress * Math.PI * 4 + time + Math.PI) * radius + 250;
            ball2.style.left = x2 + 'px';
            ball2.style.top = y + 'px';
            strand2.appendChild(ball2);
            
            // Connection line
            if (i % 2 === 0) {
                const line = document.createElement('div');
                line.className = 'dna-line';
                line.style.left = Math.min(x1, x2) + 'px';
                line.style.top = y + 'px';
                line.style.width = Math.abs(x2 - x1) + 'px';
                strand1.appendChild(line);
            }
        }
        
        requestAnimationFrame(animateDNA);
    }
    
    container.appendChild(strand1);
    container.appendChild(strand2);
    
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        skillsSection.appendChild(container);
        animateDNA();
    }
}

// 3D Tunnel Effect
function init3DTunnel() {
    const tunnel = document.createElement('div');
    tunnel.className = 'tunnel-container';
    
    for (let i = 0; i < 5; i++) {
        const ring = document.createElement('div');
        ring.className = 'tunnel-ring';
        tunnel.appendChild(ring);
    }
    
    document.querySelector('.about-section').appendChild(tunnel);
}

// Meteor Shower
function initMeteorShower() {
    function createMeteor() {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        meteor.style.top = Math.random() * 50 + '%';
        meteor.style.left = Math.random() * 100 + 100 + '%';
        meteor.style.animationDuration = (Math.random() * 2 + 1) + 's';
        meteor.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(meteor);
        
        setTimeout(() => meteor.remove(), 8000);
    }
    
    setInterval(createMeteor, 2000);
    
    // Create initial meteors
    for (let i = 0; i < 5; i++) {
        setTimeout(createMeteor, i * 1000);
    }
}

// Neural Network
function initNeuralNetwork() {
    const network = document.createElement('div');
    network.className = 'neural-network';
    
    const nodeCount = 20;
    const nodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'neural-node';
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 2 + 's';
        network.appendChild(node);
        nodes.push(node);
        
        // Create connections
        if (i > 0 && Math.random() > 0.5) {
            const connection = document.createElement('div');
            connection.className = 'neural-connection';
            const prevNode = nodes[Math.floor(Math.random() * i)];
            
            const x1 = parseFloat(prevNode.style.left);
            const y1 = parseFloat(prevNode.style.top);
            const x2 = parseFloat(node.style.left);
            const y2 = parseFloat(node.style.top);
            
            const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
            const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
            
            connection.style.width = length + '%';
            connection.style.left = x1 + '%';
            connection.style.top = y1 + '%';
            connection.style.transform = `rotate(${angle}deg)`;
            connection.style.animationDelay = Math.random() * 3 + 's';
            
            network.appendChild(connection);
        }
    }
    
    document.querySelector('.services-section').appendChild(network);
}

// Galaxy Spiral
function initGalaxySpiral() {
    const galaxy = document.createElement('div');
    galaxy.className = 'galaxy-container';
    
    // Create arms
    for (let i = 0; i < 8; i++) {
        const arm = document.createElement('div');
        arm.className = 'galaxy-arm';
        galaxy.appendChild(arm);
        
        // Add stars to arm
        for (let j = 0; j < 20; j++) {
            const star = document.createElement('div');
            star.className = 'galaxy-star';
            star.style.left = (j * 15 + Math.random() * 10) + 'px';
            star.style.top = (Math.random() * 10 - 5) + 'px';
            arm.appendChild(star);
        }
    }
    
    document.querySelector('.experience-section').appendChild(galaxy);
}

// Spotlight Following Mouse
function initSpotlight() {
    const spotlight = document.createElement('div');
    spotlight.className = 'spotlight';
    document.body.appendChild(spotlight);
    
    document.addEventListener('mousemove', (e) => {
        spotlight.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    });
}

// Cosmic Dust
function initCosmicDust() {
    function createDust() {
        const dust = document.createElement('div');
        dust.className = 'cosmic-dust';
        dust.style.left = Math.random() * 100 + '%';
        dust.style.top = Math.random() * 100 + '%';
        dust.style.setProperty('--dust-x', (Math.random() - 0.5) * 200 + 'px');
        dust.style.setProperty('--dust-y', (Math.random() - 0.5) * 200 + 'px');
        dust.style.animationDuration = (Math.random() * 10 + 5) + 's';
        dust.style.animationDelay = Math.random() * 5 + 's';
        
        document.body.appendChild(dust);
        
        setTimeout(() => dust.remove(), 15000);
    }
    
    for (let i = 0; i < 100; i++) {
        setTimeout(createDust, i * 100);
    }
    
    setInterval(() => {
        for (let i = 0; i < 10; i++) {
            createDust();
        }
    }, 10000);
}

// Energy Field
function initEnergyField() {
    const field = document.createElement('div');
    field.className = 'energy-field';
    
    for (let i = 0; i < 4; i++) {
        const wave = document.createElement('div');
        wave.className = 'energy-wave';
        field.appendChild(wave);
    }
    
    document.querySelector('.contact-section').appendChild(field);
}

// Initialize all spectacular animations
function initSpectacularAnimations() {
    // Only on desktop for performance
    if (window.innerWidth > 768) {
        setTimeout(() => {
            // Professional animations only
            initConstellationNetwork();
            initAurora();
            init3DTunnel();
            initMeteorShower();
            initGalaxySpiral();
            initCosmicDust();
            initEnergyField();
            
            console.log('🌌 SPECTACULAR animations loaded!');
        }, 1000);
    }
    
    // Explosion happens on all devices
    setTimeout(() => {
        createExplosion();
    }, 3500);
}

// ========================================
// MEGA SPECTACULAR ANIMATIONS - PART 2
// ========================================

// Screen Glitch Effect
function initScreenGlitch() {
    const glitch = document.createElement('div');
    glitch.className = 'screen-glitch';
    document.body.appendChild(glitch);
}

// Ripple Effect on Click
function initRippleEffect() {
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = e.clientX - 25 + 'px';
        ripple.style.top = e.clientY - 25 + 'px';
        ripple.style.width = '50px';
        ripple.style.height = '50px';
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

// Magnetic Cursor Effect
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.project-card, .service-card, .skill-card, button, .stat-card');
    
    magneticElements.forEach(el => {
        el.classList.add('magnetic');
        
        el.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// Particle Burst on Card Appear
function createParticleBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-burst';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 50 + Math.random() * 50;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--burst-x', x + 'px');
        particle.style.setProperty('--burst-y', y + 'px');
        
        const colors = ['var(--primary-cyan)', 'var(--primary-purple)', 'var(--primary-pink)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// Observe cards and trigger burst
function initCardBurstAnimations() {
    const cards = document.querySelectorAll('.project-card, .service-card, .skill-card, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.bursted) {
                entry.target.dataset.bursted = 'true';
                setTimeout(() => {
                    createParticleBurst(entry.target);
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    cards.forEach(card => observer.observe(card));
}

// Add 3D Float Effect to Cards
function init3DFloatCards() {
    const cards = document.querySelectorAll('.project-card, .service-card, .stat-card');
    
    cards.forEach(card => {
        card.classList.add('float-3d');
    });
}

// Add Neon Borders
function initNeonBorders() {
    const elements = document.querySelectorAll('.flip-card-front, .flip-card-back, .contact-form');
    
    elements.forEach(el => {
        el.classList.add('neon-border');
    });
}

// Digital Rain Enhanced
function initDigitalRain() {
    const rain = document.createElement('div');
    rain.className = 'digital-rain';
    document.body.appendChild(rain);
    
    const chars = '01アイウエオカキクケコサシスセソ';
    
    function createRainDrop() {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.textContent = chars[Math.floor(Math.random() * chars.length)];
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (2 + Math.random() * 3) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        
        rain.appendChild(drop);
        
        setTimeout(() => drop.remove(), 5000);
    }
    
    for (let i = 0; i < 30; i++) {
        setTimeout(createRainDrop, i * 200);
    }
    
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            createRainDrop();
        }
    }, 3000);
}

// Scan Lines Effect
function initScanLines() {
    const scanLines = document.createElement('div');
    scanLines.className = 'scan-lines';
    document.body.appendChild(scanLines);
}

// Hexagon Grid
function initHexGrid() {
    const grid = document.createElement('div');
    grid.className = 'hex-grid';
    
    const rows = 15;
    const cols = 20;
    const offsetX = 45;
    const offsetY = 35;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const hex = document.createElement('div');
            hex.className = 'hex-cell';
            hex.style.left = (col * offsetX + (row % 2 ? offsetX / 2 : 0)) + 'px';
            hex.style.top = (row * offsetY) + 'px';
            hex.style.animationDelay = (row * 0.1 + col * 0.05) + 's';
            
            grid.appendChild(hex);
        }
    }
    
    document.body.appendChild(grid);
}

// Energy Orb Follower
function initEnergyOrb() {
    const orb = document.createElement('div');
    orb.className = 'energy-orb';
    document.body.appendChild(orb);
    
    let mouseX = 0, mouseY = 0;
    let orbX = 0, orbY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        orbX += (mouseX - orbX) * 0.05;
        orbY += (mouseY - orbY) * 0.05;
        
        orb.style.transform = `translate(${orbX - 75}px, ${orbY - 75}px)`;
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Cyber Lines
function initCyberLines() {
    const linesContainer = document.createElement('div');
    linesContainer.className = 'cyber-lines';
    
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'cyber-line';
        line.style.top = (20 + i * 20) + '%';
        line.style.animationDelay = (i * 0.8) + 's';
        linesContainer.appendChild(line);
    }
    
    document.body.appendChild(linesContainer);
}

// Shockwave on Button Click
function initShockwaveEffect() {
    const buttons = document.querySelectorAll('button, .cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const shockwave = document.createElement('div');
            shockwave.className = 'shockwave';
            shockwave.style.left = e.clientX - 250 + 'px';
            shockwave.style.top = e.clientY - 250 + 'px';
            
            document.body.appendChild(shockwave);
            
            setTimeout(() => shockwave.remove(), 1000);
        });
    });
}

// Glowing Trail
function initGlowTrail() {
    let lastTime = 0;
    const throttle = 30;
    
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTime < throttle) return;
        lastTime = now;
        
        const trail = document.createElement('div');
        trail.className = 'glow-trail';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 500);
    });
}

// Crystal Shards
function initCrystalShards() {
    const shardContainer = document.createElement('div');
    shardContainer.style.position = 'fixed';
    shardContainer.style.inset = '0';
    shardContainer.style.pointerEvents = 'none';
    shardContainer.style.zIndex = '1';
    
    for (let i = 0; i < 10; i++) {
        const shard = document.createElement('div');
        shard.className = 'crystal-shard';
        shard.style.left = Math.random() * 100 + '%';
        shard.style.top = Math.random() * 100 + '%';
        shard.style.animationDelay = Math.random() * 5 + 's';
        shard.style.animationDuration = (3 + Math.random() * 4) + 's';
        
        shardContainer.appendChild(shard);
    }
    
    document.querySelector('.projects-section').appendChild(shardContainer);
}

// Holographic Text Effect
function initHolographicText() {
    const titles = document.querySelectorAll('.hero-title, .section-title');
    titles.forEach(title => {
        title.classList.add('holographic-text');
    });
}

// Pulse Rings on Hero
function initPulseRings() {
    const hero = document.querySelector('.hero-content');
    
    setInterval(() => {
        const ring = document.createElement('div');
        ring.className = 'pulse-ring';
        hero.appendChild(ring);
        
        setTimeout(() => ring.remove(), 2000);
    }, 2000);
}

// Initialize all MEGA animations
function initMegaAnimations() {
    // Desktop gets full experience
    if (window.innerWidth > 768) {
        setTimeout(() => {
            initRippleEffect();
            initMagneticEffect();
            initCardBurstAnimations();
            init3DFloatCards();
            initScanLines();
            initEnergyOrb();
            initShockwaveEffect();
            initCrystalShards();
            initHolographicText();
            
            console.log('🚀 MEGA SPECTACULAR animations activated!');
        }, 1500);
    } else {
        // Mobile gets essential animations
        setTimeout(() => {
            initRippleEffect();
            initCardBurstAnimations();
            initCrystalShards();
            initHolographicText();
            initShockwaveEffect();
            
            console.log('📱 Mobile animations activated!');
        }, 1000);
    }
}

// Update initialization
const originalInit2 = init;
init = function() {
    originalInit2();
    setTimeout(() => {
        initSpectacularAnimations();
        initMegaAnimations();
    }, 100);
};
