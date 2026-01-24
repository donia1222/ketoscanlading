/**
 * KetoBarcode Landing Page - JavaScript
 * Animations, interactivity and i18n
 */

// Translations
const translations = {
    en: {
        // Nav
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.rating': 'Rating',
        'nav.download': 'Download',
        'nav.downloadApp': 'Download App',

        // Hero
        'hero.badgeLifetime': 'Pay once, use forever! 🎉',
        'hero.title': 'Keto Scanner: Scan. Analyze. <span class="gradient-text">Decide.</span>',
        'hero.description': 'Instantly discover if a product is compatible with your keto diet. Scan the barcode and get a complete nutritional analysis with a 1 to 5 star rating.',
        'hero.priceOnce': 'one time',
        'hero.benefit1': 'No subscriptions',
        'hero.benefit2': 'Lifetime access',
        'hero.benefit3': 'Free updates forever',
        'hero.ctaApple': 'Download on App Store',
        'hero.ctaGoogle': 'Get on Google Play',
        'hero.products': '2.8M+ Products',
        'hero.languages': '10 Languages',

        // Is It Keto
        'isItKeto.subtitle': 'Search any product and discover its keto score instantly',
        'isItKeto.productsAvailable': 'products available',

        // Features
        'features.badge': 'Features',
        'features.title': 'Keto Scanner Features - Everything for Your Keto Diet',
        'features.subtitle': 'An app designed to make grocery shopping easier',
        'features.scan.title': 'Fast Scanning',
        'features.scan.desc': 'Scan EAN13, EAN8, UPC-A, UPC-E, Code128 and QR codes in seconds',
        'features.nutrition.title': 'Nutritional Analysis',
        'features.nutrition.desc': 'Detailed information on carbs, proteins, fats, and sugars',
        'features.rating.title': 'Keto Rating',
        'features.rating.desc': '1 to 5 star system based on net carbs per 100g',
        'features.history.title': 'History',
        'features.history.desc': 'Automatically saves your last 50 scanned products',
        'features.community.title': 'Community',
        'features.community.desc': "See other users' recent scans in real time",
        'features.language.title': 'Multi-language',
        'features.language.desc': 'Available in 10 languages. Switch with one tap',

        // How it works
        'howItWorks.badge': 'How It Works',
        'howItWorks.title': 'How Keto Scan Works - Three Simple Steps',
        'howItWorks.subtitle': 'Discover if a product is keto in seconds',
        'howItWorks.step1.title': 'Open the Scanner',
        'howItWorks.step1.desc': "Press the scan button and point your camera at the product's barcode",
        'howItWorks.step2.title': 'Automatic Analysis',
        'howItWorks.step2.desc': 'The app searches the product in a database of over 2.8 million products',
        'howItWorks.step3.title': 'Instant Result',
        'howItWorks.step3.desc': 'Get the keto rating, nutritional info and personalized recommendations',

        // Rating
        'rating.badge': 'Rating System',
        'rating.title': 'Keto Rating System - Understanding the Stars',
        'rating.subtitle': 'Based on net carbs (Total Carbs - Fiber)',
        'rating.r5.label': 'Excellent',
        'rating.r5.range': '0-2g net carbs',
        'rating.r5.desc': 'Perfect for keto, eat without worry',
        'rating.r4.label': 'Good',
        'rating.r4.range': '2-5g net carbs',
        'rating.r4.desc': 'Good choice, watch your portions',
        'rating.r3.label': 'Moderate',
        'rating.r3.range': '5-10g net carbs',
        'rating.r3.desc': 'Consume in moderation and count carbs',
        'rating.r2.label': 'Not Recommended',
        'rating.r2.range': '10-20g net carbs',
        'rating.r2.desc': 'High in carbs, look for alternatives',
        'rating.r1.label': 'Avoid',
        'rating.r1.range': '>20g net carbs',
        'rating.r1.desc': 'Not suitable for keto diet',

        // Testimonials
        'testimonials.badge': 'Testimonials',
        'testimonials.title': 'What our users say',
        'testimonials.t1.text': 'This app changed the way I shop. I no longer waste time reading labels, I just scan and go.',
        'testimonials.t1.title': 'User since 2024',
        'testimonials.t2.text': 'The star system is super intuitive. In seconds I know if a product fits my diet. 100% recommended.',
        'testimonials.t2.title': 'Keto for 2 years',
        'testimonials.t3.text': "I love being able to see what other users are scanning. I've discovered keto products I didn't know about thanks to the community.",
        'testimonials.t3.title': 'Keto enthusiast',

        // Download
        'download.title': 'Download Keto Scanner App for Only $6',
        'download.subtitle': 'One-time payment, no subscriptions. Available now on iOS.',
        'download.downloadOn': 'Download on',
        'download.getItOn': 'Get it on',
        'download.comingSoon': 'Coming Soon',
        'download.feature1': 'One-time $6',
        'download.feature2': 'No subscriptions',
        'download.feature3': 'Free updates',

        // Keto Foods
        'ketoFoods.badge': 'Keto Foods',
        'ketoFoods.title': 'Discover Keto-Friendly Products',

        // Screenshots
        'screenshots.badge': 'App Preview',
        'screenshots.title': 'See Keto Scanner in Action',

        // Footer
        'footer.description': 'Your keto assistant at the supermarket. Scan, analyze and decide with confidence.',
        'footer.app': 'App',
        'footer.ratingSystem': 'Rating System',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Contact',
        'footer.support': 'Support',
        'footer.language': 'Language:',
        'footer.rights': 'All rights reserved.'
    },
    es: {
        // Nav
        'nav.features': 'Funciones',
        'nav.howItWorks': 'Cómo Funciona',
        'nav.rating': 'Rating',
        'nav.download': 'Descargar',
        'nav.downloadApp': 'Descargar App',

        // Hero
        'hero.badgeLifetime': '¡Paga una vez, úsala siempre! 🎉',
        'hero.title': 'Keto Scanner: Escanea. Analiza. <span class="gradient-text">Decide.</span>',
        'hero.description': 'Descubre al instante si un producto es compatible con tu dieta keto. Escanea el código de barras y obtén un análisis nutricional completo con rating de 1 a 5 estrellas.',
        'hero.priceOnce': 'pago único',
        'hero.benefit1': 'Sin suscripciones',
        'hero.benefit2': 'Acceso de por vida',
        'hero.benefit3': 'Actualizaciones gratis siempre',
        'hero.ctaApple': 'Descargar en App Store',
        'hero.ctaGoogle': 'Obtener en Google Play',
        'hero.products': '2.8M+ Productos',
        'hero.languages': '10 Idiomas',

        // Is It Keto
        'isItKeto.subtitle': 'Busca cualquier producto y descubre su puntuación keto al instante',
        'isItKeto.productsAvailable': 'productos disponibles',

        // Features
        'features.badge': 'Funcionalidades',
        'features.title': 'Keto Scanner - Todo lo que Necesitas para tu Dieta Keto',
        'features.subtitle': 'Una app diseñada para hacerte la vida más fácil al comprar',
        'features.scan.title': 'Escaneo Rápido',
        'features.scan.desc': 'Escanea códigos EAN13, EAN8, UPC-A, UPC-E, Code128 y QR en segundos',
        'features.nutrition.title': 'Análisis Nutricional',
        'features.nutrition.desc': 'Información detallada de carbohidratos, proteínas, grasas y azúcares',
        'features.rating.title': 'Rating Keto',
        'features.rating.desc': 'Sistema de 1 a 5 estrellas basado en carbohidratos netos por 100g',
        'features.history.title': 'Historial',
        'features.history.desc': 'Guarda automáticamente los últimos 50 productos escaneados',
        'features.community.title': 'Comunidad',
        'features.community.desc': 'Ve los escaneos recientes de otros usuarios en tiempo real',
        'features.language.title': 'Multi-idioma',
        'features.language.desc': 'Disponible en 10 idiomas. Cambia con un solo toque',

        // How it works
        'howItWorks.badge': 'Cómo Funciona',
        'howItWorks.title': 'Cómo Funciona Keto Scan - Tres Pasos Simples',
        'howItWorks.subtitle': 'Descubre si un producto es keto en segundos',
        'howItWorks.step1.title': 'Abre el Scanner',
        'howItWorks.step1.desc': 'Presiona el botón de escanear y apunta la cámara al código de barras',
        'howItWorks.step2.title': 'Análisis Automático',
        'howItWorks.step2.desc': 'La app busca el producto en una base de datos de más de 2.8 millones',
        'howItWorks.step3.title': 'Resultado Instantáneo',
        'howItWorks.step3.desc': 'Obtén el rating keto, información nutricional y recomendaciones',

        // Rating
        'rating.badge': 'Sistema de Rating',
        'rating.title': 'Sistema de Rating Keto - Entiende las Estrellas',
        'rating.subtitle': 'Basado en carbohidratos netos (Carbos Totales - Fibra)',
        'rating.r5.label': 'Excelente',
        'rating.r5.range': '0-2g carbos netos',
        'rating.r5.desc': 'Perfecto para keto, consume sin preocupación',
        'rating.r4.label': 'Bueno',
        'rating.r4.range': '2-5g carbos netos',
        'rating.r4.desc': 'Buena opción, controla las porciones',
        'rating.r3.label': 'Moderado',
        'rating.r3.range': '5-10g carbos netos',
        'rating.r3.desc': 'Consume con moderación y cuenta los carbos',
        'rating.r2.label': 'No Recomendado',
        'rating.r2.range': '10-20g carbos netos',
        'rating.r2.desc': 'Alto en carbos, busca alternativas',
        'rating.r1.label': 'Evitar',
        'rating.r1.range': '>20g carbos netos',
        'rating.r1.desc': 'No apto para dieta keto',

        // Testimonials
        'testimonials.badge': 'Testimonios',
        'testimonials.title': 'Lo que dicen nuestros usuarios',
        'testimonials.t1.text': 'Esta app cambió mi forma de hacer las compras. Ya no pierdo tiempo leyendo etiquetas, simplemente escaneo y listo.',
        'testimonials.t1.title': 'Usuario desde 2024',
        'testimonials.t2.text': 'El sistema de estrellas es súper intuitivo. En segundos sé si un producto encaja en mi dieta. 100% recomendada.',
        'testimonials.t2.title': 'Keto desde hace 2 años',
        'testimonials.t3.text': 'Me encanta poder ver lo que otros usuarios están escaneando. He descubierto productos keto que no conocía gracias a la comunidad.',
        'testimonials.t3.title': 'Entusiasta del keto',

        // Download
        'download.title': 'Descarga Keto Scanner por Solo $6',
        'download.subtitle': 'Pago único, sin suscripciones. Disponible ahora en iOS.',
        'download.downloadOn': 'Descargar en',
        'download.getItOn': 'Disponible en',
        'download.comingSoon': 'Próximamente',
        'download.feature1': 'Pago único $6',
        'download.feature2': 'Sin suscripciones',
        'download.feature3': 'Actualizaciones gratis',

        // Keto Foods
        'ketoFoods.badge': 'Alimentos Keto',
        'ketoFoods.title': 'Descubre Productos Keto-Friendly',

        // Screenshots
        'screenshots.badge': 'Vista Previa',
        'screenshots.title': 'Mira Keto Scanner en Acción',

        // Footer
        'footer.description': 'Tu asistente keto en el supermercado. Escanea, analiza y decide con confianza.',
        'footer.app': 'App',
        'footer.ratingSystem': 'Sistema de Rating',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacidad',
        'footer.terms': 'Términos',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Contacto',
        'footer.support': 'Soporte',
        'footer.language': 'Idioma:',
        'footer.rights': 'Todos los derechos reservados.'
    },
    de: {
        // Nav
        'nav.features': 'Funktionen',
        'nav.howItWorks': 'Wie es funktioniert',
        'nav.rating': 'Bewertung',
        'nav.download': 'Herunterladen',
        'nav.downloadApp': 'App herunterladen',

        // Hero
        'hero.badgeLifetime': 'Einmal zahlen, für immer nutzen! 🎉',
        'hero.title': 'Keto Scanner: Scannen. Analysieren. <span class="gradient-text">Entscheiden.</span>',
        'hero.description': 'Entdecken Sie sofort, ob ein Produkt mit Ihrer Keto-Diät kompatibel ist. Scannen Sie den Barcode und erhalten Sie eine vollständige Nährwertanalyse mit 1 bis 5 Sternen.',
        'hero.priceOnce': 'einmalig',
        'hero.benefit1': 'Keine Abonnements',
        'hero.benefit2': 'Lebenslanger Zugang',
        'hero.benefit3': 'Kostenlose Updates für immer',
        'hero.ctaApple': 'Im App Store laden',
        'hero.ctaGoogle': 'Bei Google Play holen',
        'hero.products': '2,8M+ Produkte',
        'hero.languages': '10 Sprachen',

        // Is It Keto
        'isItKeto.subtitle': 'Suchen Sie nach einem Produkt und entdecken Sie sofort seinen Keto-Score',
        'isItKeto.productsAvailable': 'verfügbare Produkte',

        // Features
        'features.badge': 'Funktionen',
        'features.title': 'Keto Scanner - Alles für Ihre Keto-Diät',
        'features.subtitle': 'Eine App, die das Einkaufen einfacher macht',
        'features.scan.title': 'Schnelles Scannen',
        'features.scan.desc': 'Scannen Sie EAN13, EAN8, UPC-A, UPC-E, Code128 und QR-Codes in Sekunden',
        'features.nutrition.title': 'Nährwertanalyse',
        'features.nutrition.desc': 'Detaillierte Informationen zu Kohlenhydraten, Proteinen, Fetten und Zucker',
        'features.rating.title': 'Keto-Bewertung',
        'features.rating.desc': '1 bis 5 Sterne-System basierend auf Netto-Kohlenhydraten pro 100g',
        'features.history.title': 'Verlauf',
        'features.history.desc': 'Speichert automatisch die letzten 50 gescannten Produkte',
        'features.community.title': 'Community',
        'features.community.desc': 'Sehen Sie die neuesten Scans anderer Benutzer in Echtzeit',
        'features.language.title': 'Mehrsprachig',
        'features.language.desc': 'Verfügbar in 10 Sprachen. Mit einem Tippen wechseln',

        // How it works
        'howItWorks.badge': 'Wie es funktioniert',
        'howItWorks.title': 'Wie Keto Scan Funktioniert - Drei Einfache Schritte',
        'howItWorks.subtitle': 'Entdecken Sie in Sekunden, ob ein Produkt Keto ist',
        'howItWorks.step1.title': 'Scanner öffnen',
        'howItWorks.step1.desc': 'Drücken Sie die Scan-Taste und richten Sie Ihre Kamera auf den Barcode',
        'howItWorks.step2.title': 'Automatische Analyse',
        'howItWorks.step2.desc': 'Die App sucht das Produkt in einer Datenbank mit über 2,8 Millionen Produkten',
        'howItWorks.step3.title': 'Sofortiges Ergebnis',
        'howItWorks.step3.desc': 'Erhalten Sie die Keto-Bewertung, Nährwertinfos und personalisierte Empfehlungen',

        // Rating
        'rating.badge': 'Bewertungssystem',
        'rating.title': 'Keto-Bewertungssystem - Die Sterne Verstehen',
        'rating.subtitle': 'Basierend auf Netto-Kohlenhydraten (Gesamt-Kohlenhydrate - Ballaststoffe)',
        'rating.r5.label': 'Ausgezeichnet',
        'rating.r5.range': '0-2g Netto-Kohlenhydrate',
        'rating.r5.desc': 'Perfekt für Keto, ohne Bedenken essen',
        'rating.r4.label': 'Gut',
        'rating.r4.range': '2-5g Netto-Kohlenhydrate',
        'rating.r4.desc': 'Gute Wahl, Portionen beachten',
        'rating.r3.label': 'Moderat',
        'rating.r3.range': '5-10g Netto-Kohlenhydrate',
        'rating.r3.desc': 'In Maßen konsumieren und Kohlenhydrate zählen',
        'rating.r2.label': 'Nicht empfohlen',
        'rating.r2.range': '10-20g Netto-Kohlenhydrate',
        'rating.r2.desc': 'Hoher Kohlenhydratgehalt, nach Alternativen suchen',
        'rating.r1.label': 'Vermeiden',
        'rating.r1.range': '>20g Netto-Kohlenhydrate',
        'rating.r1.desc': 'Nicht geeignet für Keto-Diät',

        // Testimonials
        'testimonials.badge': 'Erfahrungsberichte',
        'testimonials.title': 'Was unsere Benutzer sagen',
        'testimonials.t1.text': 'Diese App hat meine Art einzukaufen verändert. Ich verschwende keine Zeit mehr mit dem Lesen von Etiketten, ich scanne einfach und fertig.',
        'testimonials.t1.title': 'Benutzer seit 2024',
        'testimonials.t2.text': 'Das Sterne-System ist super intuitiv. In Sekunden weiß ich, ob ein Produkt zu meiner Diät passt. 100% empfohlen.',
        'testimonials.t2.title': 'Keto seit 2 Jahren',
        'testimonials.t3.text': 'Ich liebe es, zu sehen was andere Benutzer scannen. Ich habe Keto-Produkte entdeckt, die ich dank der Community nicht kannte.',
        'testimonials.t3.title': 'Keto-Enthusiast',

        // Download
        'download.title': 'Keto Scanner für nur $6 herunterladen',
        'download.subtitle': 'Einmalzahlung, keine Abonnements. Jetzt verfügbar für iOS.',
        'download.downloadOn': 'Laden im',
        'download.getItOn': 'Jetzt bei',
        'download.comingSoon': 'Demnächst',
        'download.feature1': 'Einmalig $6',
        'download.feature2': 'Keine Abonnements',
        'download.feature3': 'Kostenlose Updates',

        // Keto Foods
        'ketoFoods.badge': 'Keto-Lebensmittel',
        'ketoFoods.title': 'Entdecke Keto-Freundliche Produkte',

        // Screenshots
        'screenshots.badge': 'App-Vorschau',
        'screenshots.title': 'Keto Scanner in Aktion',

        // Footer
        'footer.description': 'Ihr Keto-Assistent im Supermarkt. Scannen, analysieren und mit Vertrauen entscheiden.',
        'footer.app': 'App',
        'footer.ratingSystem': 'Bewertungssystem',
        'footer.legal': 'Rechtliches',
        'footer.privacy': 'Datenschutz',
        'footer.terms': 'AGB',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Kontakt',
        'footer.support': 'Support',
        'footer.language': 'Sprache:',
        'footer.rights': 'Alle Rechte vorbehalten.'
    }
};

// Current language
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functionality
    initMobileMenu();
    initNavbarScroll();
    initScrollAnimations();
    initSmoothScroll();
    initPhoneAnimation();
    initCounterAnimation();
    initLanguageSelector();
    initHeroCarousel();
});

/**
 * Hero Carousel
 */
let currentSlide = 0;
let carouselInterval;

function initHeroCarousel() {
    const slides = document.querySelectorAll('.screen-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    if (slides.length === 0) return;

    // Auto-advance every 3 seconds
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.screen-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Reset interval
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

function nextSlide() {
    const slides = document.querySelectorAll('.screen-slide');
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
}

/**
 * Language Selector
 */
function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const supportedLangs = ['en', 'es', 'de'];

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Change language
            currentLang = lang;
            updatePageLanguage(lang);

            // Save preference
            localStorage.setItem('ketobarcode-lang', lang);
        });
    });

    // Check saved preference first
    const savedLang = localStorage.getItem('ketobarcode-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === savedLang);
        });
        updatePageLanguage(savedLang);
        return;
    }

    // Auto-detect browser language
    const browserLang = detectBrowserLanguage(supportedLangs);
    if (browserLang && browserLang !== 'en') {
        currentLang = browserLang;
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === browserLang);
        });
        updatePageLanguage(browserLang);
    }
}

/**
 * Detect browser language
 */
function detectBrowserLanguage(supportedLangs) {
    // Get browser languages (array of preferred languages)
    const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];

    for (const lang of browserLangs) {
        // Extract primary language code (e.g., 'es-ES' -> 'es', 'de-DE' -> 'de')
        const primaryLang = lang.split('-')[0].toLowerCase();

        if (supportedLangs.includes(primaryLang)) {
            return primaryLang;
        }
    }

    // Default to English
    return 'en';
}

/**
 * Update page language
 */
function updatePageLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            // Check if it contains HTML
            if (t[key].includes('<')) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update page title
    const titles = {
        en: 'Keto Scanner - Best Keto Scan App | Barcode Scanner for Keto Diet',
        es: 'Keto Scanner - La Mejor App de Escaneo Keto | Escáner de Código de Barras',
        de: 'Keto Scanner - Beste Keto Scan App | Barcode Scanner für Keto-Diät'
    };
    document.title = titles[lang] || titles.en;
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');

            // Change icon
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

/**
 * Navbar scroll effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;

    if (navbar) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide navbar
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show navbar
                navbar.style.transform = 'translateY(0)';
            }

            lastScrollY = currentScrollY;
        });
    }
}

/**
 * Scroll-triggered animations (AOS-like)
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');

                // Trigger delay animations
                const delay = entry.target.getAttribute('data-aos-delay');
                if (delay) {
                    entry.target.style.transitionDelay = `${parseInt(delay)}ms`;
                }
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Phone mockup scan animation
 */
function initPhoneAnimation() {
    const scanAnimation = document.querySelector('.scan-animation');
    const previewResult = document.querySelector('.preview-result');

    if (scanAnimation && previewResult) {
        // Products by language
        const products = {
            en: [
                { name: 'Natural Almonds', carbs: '2.1g net carbs' },
                { name: 'Hass Avocado', carbs: '1.8g net carbs' },
                { name: 'Cheddar Cheese', carbs: '0.4g net carbs' },
                { name: 'Olive Oil', carbs: '0g net carbs' },
                { name: 'Organic Eggs', carbs: '0.6g net carbs' }
            ],
            es: [
                { name: 'Almendras Naturales', carbs: '2.1g carbos netos' },
                { name: 'Aguacate Hass', carbs: '1.8g carbos netos' },
                { name: 'Queso Cheddar', carbs: '0.4g carbos netos' },
                { name: 'Aceite de Oliva', carbs: '0g carbos netos' },
                { name: 'Huevos Orgánicos', carbs: '0.6g carbos netos' }
            ],
            de: [
                { name: 'Natürliche Mandeln', carbs: '2.1g Netto-Kohlenhydrate' },
                { name: 'Hass Avocado', carbs: '1.8g Netto-Kohlenhydrate' },
                { name: 'Cheddar Käse', carbs: '0.4g Netto-Kohlenhydrate' },
                { name: 'Olivenöl', carbs: '0g Netto-Kohlenhydrate' },
                { name: 'Bio-Eier', carbs: '0.6g Netto-Kohlenhydrate' }
            ]
        };

        let currentIndex = 0;

        function updateProduct() {
            const langProducts = products[currentLang] || products.en;
            const product = langProducts[currentIndex];
            const productName = previewResult.querySelector('.result-product');
            const carbsText = previewResult.querySelector('.result-carbs');

            // Fade out
            previewResult.style.opacity = '0';
            previewResult.style.transform = 'translateY(10px)';

            setTimeout(() => {
                if (productName) productName.textContent = product.name;
                if (carbsText) carbsText.textContent = product.carbs;

                // Fade in
                previewResult.style.opacity = '1';
                previewResult.style.transform = 'translateY(0)';
            }, 300);

            currentIndex = (currentIndex + 1) % langProducts.length;
        }

        // Set transition
        previewResult.style.transition = 'all 0.3s ease';

        // Change product every 3 seconds
        setInterval(updateProduct, 3000);
    }
}

/**
 * Counter animation for stats
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const text = counter.textContent;

                // Only animate numbers
                if (text.includes('M+')) {
                    animateValue(counter, 0, 2.8, 2000, 'M+');
                } else if (text === '5') {
                    animateValue(counter, 0, 5, 1500, '');
                } else if (text === '3') {
                    animateValue(counter, 0, 3, 1200, '');
                }

                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Animate numeric value
 */
function animateValue(element, start, end, duration, suffix) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (range * easeOut);

        if (suffix === 'M+') {
            element.textContent = current.toFixed(1) + suffix;
        } else {
            element.textContent = Math.floor(current) + suffix;
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/**
 * Parallax effect for orbs
 */
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

/**
 * Add ripple effect to buttons
 */
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-nav').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

/**
 * Rating cards hover effect
 */
document.querySelectorAll('.rating-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.3s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 300);
    });
});

/**
 * Add CSS for ripple effect dynamically
 */
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn-primary, .btn-secondary, .btn-nav {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(rippleStyle);

/**
 * Console Easter Egg
 */
console.log('%c KetoBarcode ', 'background: linear-gradient(135deg, #1ecae5, #188b9d); color: white; padding: 10px 20px; border-radius: 8px; font-size: 16px; font-weight: bold;');
console.log('%c Scan. Analyze. Decide. ', 'color: #1a5e69; font-size: 14px;');
console.log('%c Download the app and start your keto journey today! ', 'color: #546E7A; font-size: 12px;');

/**
 * Modal Functions
 */
function openModal(type) {
    event.preventDefault();
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(type) {
    const modal = document.getElementById(type + 'Modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on click outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

/**
 * FAQ Tab Switching
 */
function showFaqTab(tabId) {
    // Update tabs
    document.querySelectorAll('.faq-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.closest('.faq-tab').classList.add('active');

    // Update content
    document.querySelectorAll('.faq-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('faq-' + tabId).classList.add('active');
}

/**
 * Contact Type Selection
 */
let selectedContactType = null;

function selectContactType(element, type) {
    document.querySelectorAll('.type-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedContactType = type;
}

/**
 * Contact Form Submission
 */
/**
 * Vercel Analytics
 */
if (typeof window !== 'undefined') {
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
}

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    if (!subject || !message) {
        alert('Please fill in the required fields (Subject and Message)');
        return;
    }

    const typeLabels = {
        bug: 'Bug Report',
        suggestion: 'Suggestion',
        comment: 'Comment'
    };

    const typeLabel = typeLabels[selectedContactType] || 'General';
    const emailSubject = `[KetoBarcode - ${typeLabel}] ${subject}`;
    const emailBody = `Type: ${typeLabel}
Name: ${name || 'Not provided'}
Email: ${email || 'Not provided'}

Message:
${message}

---
Sent from KetoBarcode Landing Page`;

    const mailtoUrl = `mailto:info@lweb.ch?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;

    // Reset form
    this.reset();
    document.querySelectorAll('.type-card').forEach(card => {
        card.classList.remove('selected');
    });
    selectedContactType = null;

    // Close modal after small delay
    setTimeout(() => {
        closeModal('contact');
    }, 500);
});
