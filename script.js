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
        'hero.badgeLifetime': 'Launch Promo! Limited time offer',
        'hero.newApp': 'New App',
        'hero.title': 'Scan. Analyze.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Instantly discover if a product is compatible with your keto diet. Scan the barcode and get a complete nutritional analysis with a 1 to 5 star rating.',
        'hero.priceOnce': 'one time',
        'hero.benefit1': 'No subscriptions',
        'hero.benefit2': 'Lifetime access',
        'hero.promoText': 'Launch Promo! 80% OFF until end of January',
        'hero.launchMessage': '🎉 We just launched! Get lifetime access at this special price before it goes back to $10',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS from 01/26/2026 · <i class="fab fa-google-play"></i> Android from 01/27/2026',
        'hero.offerUrgency': 'Offer valid until end of January. Take advantage!!',
        'hero.benefit3': 'Free updates forever',
        'hero.ctaApple': 'Download on App Store',
        'hero.ctaGoogle': 'Get on Google Play',
        'hero.products': '2.8M+ Products',
        'hero.languages': '10 Languages',
        'hero.watchVideo': 'Watch Video',

        // Is It Keto
        'isItKeto.subtitle': 'Search any product and discover its keto score instantly',
        'isItKeto.productsAvailable': 'products available',

        // Features
        'features.badge': 'Features',
        'features.title': '<span class="text-green">Keto</span> Scanner - Everything for Your <span class="highlight-keto"><span class="text-green">Keto</span> 🥑 Diet</span>',
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
        'howItWorks.title': 'How the <span class="text-blue">App</span> Works - Three Simple Steps',
        'howItWorks.subtitle': 'Discover if a product is keto in seconds',
        'howItWorks.step1.title': 'Open the Scanner',
        'howItWorks.step1.desc': "Press the scan button and point your camera at the product's barcode",
        'howItWorks.step2.title': 'Automatic Analysis',
        'howItWorks.step2.desc': 'The app searches the product in a database of over 2.8 million products',
        'howItWorks.step3.title': 'Instant Result',
        'howItWorks.step3.desc': 'Get the keto rating, nutritional info and personalized recommendations',

        // Rating
        'rating.badge': 'Rating System',
        'rating.title': '<span class="text-green">Keto</span> Rating System <span class="subtitle-line">Understanding the <span class="text-yellow">Stars</span></span>',
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
        'download.title': 'Download Keto Scanner App for Only $1.99',
        'download.subtitle': 'One-time payment, no subscriptions. Available now on iOS & Android.',
        'download.downloadOn': 'Download on',
        'download.getItOn': 'Get it on',
        'download.comingSoon': 'Coming Soon',
        'download.promoText': 'Only until end of January 2026. Get it now!',
        'download.feature1': 'One-time $1.99',
        'download.feature2': 'No subscriptions',
        'download.feature3': 'Free updates',

        // Keto Foods
        'ketoFoods.badge': 'Keto Foods',
        'ketoFoods.title': 'Discover <span class="text-green">Keto-Friendly</span> Products <span class="subtitle-line">Find the best products for your keto diet</span>',

        // Screenshots
        'screenshots.badge': 'App Preview',
        'screenshots.title': 'See <span class="text-green">Keto</span> Scanner in Action',

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
        'footer.rights': 'All rights reserved.',

        // Promo Modal
        'promo.badge': 'Launch Offer',
        'promo.title': 'Fresh Out of the Oven!',
        'promo.subtitle': 'Keto Scanner just launched',
        'promo.oneTime': 'One-time payment',
        'promo.feature1': 'Lifetime access',
        'promo.feature2': 'No subscriptions',
        'promo.feature3': 'Free updates forever',
        'promo.urgency': 'Offer valid until end of February!',
        'promo.skip': 'Maybe later'
    },
    es: {
        // Nav
        'nav.features': 'Funciones',
        'nav.howItWorks': 'Cómo Funciona',
        'nav.rating': 'Rating',
        'nav.download': 'Descargar',
        'nav.downloadApp': 'Descargar App',

        // Hero
        'hero.badgeLifetime': '¡Promo de Lanzamiento! Oferta limitada',
        'hero.newApp': 'Nueva App',
        'hero.title': 'Escanea. Analiza.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Descubre al instante si un producto es compatible con tu dieta keto. Escanea el código de barras y obtén un análisis nutricional completo con rating de 1 a 5 estrellas.',
        'hero.priceOnce': 'pago único',
        'hero.benefit1': 'Sin suscripciones',
        'hero.benefit2': 'Acceso de por vida',
        'hero.promoText': '¡Promo de Lanzamiento! 80% OFF hasta final de enero',
        'hero.launchMessage': '🎉 ¡Acabamos de lanzar! Obtén acceso de por vida a este precio especial antes de que vuelva a $10',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS desde el 26.01.2026 · <i class="fab fa-google-play"></i> Android desde el 27.01.2026',
        'hero.offerUrgency': 'Oferta válida hasta final de enero. ¡¡Aprovecha!!',
        'hero.benefit3': 'Actualizaciones gratis siempre',
        'hero.ctaApple': 'Descargar en App Store',
        'hero.ctaGoogle': 'Obtener en Google Play',
        'hero.products': '2.8M+ Productos',
        'hero.languages': '10 Idiomas',
        'hero.watchVideo': 'Ver Video',

        // Is It Keto
        'isItKeto.subtitle': 'Busca cualquier producto y descubre su puntuación keto al instante',
        'isItKeto.productsAvailable': 'productos disponibles',

        // Features
        'features.badge': 'Funcionalidades',
        'features.title': '<span class="text-green">Keto</span> Scanner - Todo para tu <span class="highlight-keto"><span class="text-green">Keto</span> 🥑 Dieta</span>',
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
        'howItWorks.title': 'Cómo Funciona la <span class="text-blue">App</span> - Tres Pasos Simples',
        'howItWorks.subtitle': 'Descubre si un producto es keto en segundos',
        'howItWorks.step1.title': 'Abre el Scanner',
        'howItWorks.step1.desc': 'Presiona el botón de escanear y apunta la cámara al código de barras',
        'howItWorks.step2.title': 'Análisis Automático',
        'howItWorks.step2.desc': 'La app busca el producto en una base de datos de más de 2.8 millones',
        'howItWorks.step3.title': 'Resultado Instantáneo',
        'howItWorks.step3.desc': 'Obtén el rating keto, información nutricional y recomendaciones',

        // Rating
        'rating.badge': 'Sistema de Rating',
        'rating.title': 'Sistema de Rating <span class="text-green">Keto</span> <span class="subtitle-line">Entiende las <span class="text-yellow">Estrellas</span></span>',
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
        'download.title': 'Descarga Keto Scanner por Solo $1.99',
        'download.subtitle': 'Pago único, sin suscripciones. Disponible ahora en iOS y Android.',
        'download.downloadOn': 'Descargar en',
        'download.getItOn': 'Disponible en',
        'download.comingSoon': 'Próximamente',
        'download.promoText': 'Solo hasta final de enero de 2026. ¡Aprovecha ahora!',
        'download.feature1': 'Pago único $1.99',
        'download.feature2': 'Sin suscripciones',
        'download.feature3': 'Actualizaciones gratis',

        // Keto Foods
        'ketoFoods.badge': 'Alimentos Keto',
        'ketoFoods.title': 'Descubre Productos <span class="text-green">Keto-Friendly</span> <span class="subtitle-line">Encuentra los mejores productos para tu dieta keto</span>',

        // Screenshots
        'screenshots.badge': 'Vista Previa',
        'screenshots.title': 'Mira <span class="text-green">Keto</span> Scanner en Acción',

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
        'footer.rights': 'Todos los derechos reservados.',

        // Promo Modal
        'promo.badge': 'Oferta de Lanzamiento',
        'promo.title': '¡Recién Salido del Horno!',
        'promo.subtitle': 'Keto Scanner acaba de lanzarse',
        'promo.oneTime': 'Pago único',
        'promo.feature1': 'Acceso de por vida',
        'promo.feature2': 'Sin suscripciones',
        'promo.feature3': 'Actualizaciones gratis siempre',
        'promo.urgency': '¡Oferta válida hasta final de febrero!',
        'promo.skip': 'Quizás luego'
    },
    de: {
        // Nav
        'nav.features': 'Funktionen',
        'nav.howItWorks': 'Wie es funktioniert',
        'nav.rating': 'Bewertung',
        'nav.download': 'Herunterladen',
        'nav.downloadApp': 'App herunterladen',

        // Hero
        'hero.badgeLifetime': 'Launch-Aktion! Zeitlich begrenzt',
        'hero.newApp': 'Neue App',
        'hero.title': 'Scannen. Analysieren.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Entdecken Sie sofort, ob ein Produkt mit Ihrer Keto-Diät kompatibel ist. Scannen Sie den Barcode und erhalten Sie eine vollständige Nährwertanalyse mit 1 bis 5 Sternen.',
        'hero.priceOnce': 'einmalig',
        'hero.benefit1': 'Keine Abonnements',
        'hero.benefit2': 'Lebenslanger Zugang',
        'hero.promoText': 'Launch-Aktion! 80% Rabatt bis Ende Januar',
        'hero.launchMessage': '🎉 Gerade gestartet! Holen Sie sich lebenslangen Zugang zu diesem Sonderpreis, bevor er auf $10 steigt',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS ab 26.01.2026 · <i class="fab fa-google-play"></i> Android ab 27.01.2026',
        'hero.offerUrgency': 'Angebot gültig bis Ende Januar. Jetzt zugreifen!!',
        'hero.benefit3': 'Kostenlose Updates für immer',
        'hero.ctaApple': 'Im App Store laden',
        'hero.ctaGoogle': 'Bei Google Play holen',
        'hero.products': '2,8M+ Produkte',
        'hero.languages': '10 Sprachen',
        'hero.watchVideo': 'Video ansehen',

        // Is It Keto
        'isItKeto.subtitle': 'Suchen Sie nach einem Produkt und entdecken Sie sofort seinen Keto-Score',
        'isItKeto.productsAvailable': 'verfügbare Produkte',

        // Features
        'features.badge': 'Funktionen',
        'features.title': '<span class="text-green">Keto</span> Scanner - Alles für Ihre <span class="highlight-keto"><span class="text-green">Keto</span> 🥑 Diät</span>',
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
        'howItWorks.title': 'Wie die <span class="text-blue">App</span> Funktioniert - Drei Einfache Schritte',
        'howItWorks.subtitle': 'Entdecken Sie in Sekunden, ob ein Produkt Keto ist',
        'howItWorks.step1.title': 'Scanner öffnen',
        'howItWorks.step1.desc': 'Drücken Sie die Scan-Taste und richten Sie Ihre Kamera auf den Barcode',
        'howItWorks.step2.title': 'Automatische Analyse',
        'howItWorks.step2.desc': 'Die App sucht das Produkt in einer Datenbank mit über 2,8 Millionen Produkten',
        'howItWorks.step3.title': 'Sofortiges Ergebnis',
        'howItWorks.step3.desc': 'Erhalten Sie die Keto-Bewertung, Nährwertinfos und personalisierte Empfehlungen',

        // Rating
        'rating.badge': 'Bewertungssystem',
        'rating.title': '<span class="text-green">Keto</span>-Bewertungssystem <span class="subtitle-line">Die <span class="text-yellow">Sterne</span> Verstehen</span>',
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
        'download.title': 'Keto Scanner für nur $1.99 herunterladen',
        'download.subtitle': 'Einmalzahlung, keine Abonnements. Jetzt verfügbar für iOS & Android.',
        'download.downloadOn': 'Laden im',
        'download.getItOn': 'Jetzt bei',
        'download.comingSoon': 'Demnächst',
        'download.promoText': 'Nur bis Ende Januar 2026. Jetzt zugreifen!',
        'download.feature1': 'Einmalig $1.99',
        'download.feature2': 'Keine Abonnements',
        'download.feature3': 'Kostenlose Updates',

        // Keto Foods
        'ketoFoods.badge': 'Keto-Lebensmittel',
        'ketoFoods.title': 'Entdecke <span class="text-green">Keto-Freundliche</span> Produkte <span class="subtitle-line">Die besten Produkte für Ihre Keto-Diät</span>',

        // Screenshots
        'screenshots.badge': 'App-Vorschau',
        'screenshots.title': '<span class="text-green">Keto</span> Scanner in Aktion',

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
        'footer.rights': 'Alle Rechte vorbehalten.',

        // Promo Modal
        'promo.badge': 'Startangebot',
        'promo.title': 'Frisch aus dem Ofen!',
        'promo.subtitle': 'Keto Scanner ist gerade gestartet',
        'promo.oneTime': 'Einmalzahlung',
        'promo.feature1': 'Lebenslanger Zugang',
        'promo.feature2': 'Keine Abonnements',
        'promo.feature3': 'Kostenlose Updates für immer',
        'promo.urgency': 'Angebot gültig bis Ende Februar!',
        'promo.skip': 'Vielleicht später'
    },
    it: {
        // Nav
        'nav.features': 'Funzioni',
        'nav.howItWorks': 'Come Funziona',
        'nav.rating': 'Valutazione',
        'nav.download': 'Scarica',
        'nav.downloadApp': 'Scarica App',

        // Hero
        'hero.badgeLifetime': 'Promo Lancio! Offerta limitata',
        'hero.newApp': 'Nuova App',
        'hero.title': 'Scansiona. Analizza.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Scopri subito se un prodotto è compatibile con la tua dieta keto. Scansiona il codice a barre e ottieni un\'analisi nutrizionale completa con valutazione da 1 a 5 stelle.',
        'hero.priceOnce': 'una tantum',
        'hero.benefit1': 'Nessun abbonamento',
        'hero.benefit2': 'Accesso a vita',
        'hero.promoText': 'Promo Lancio! 80% di sconto fino a fine gennaio',
        'hero.launchMessage': '🎉 Appena lanciato! Ottieni l\'accesso a vita a questo prezzo speciale prima che torni a $10',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS dal 26.01.2026 · <i class="fab fa-google-play"></i> Android dal 27.01.2026',
        'hero.offerUrgency': 'Offerta valida fino a fine gennaio. Approfittane!!',
        'hero.benefit3': 'Aggiornamenti gratuiti per sempre',
        'hero.ctaApple': 'Scarica su App Store',
        'hero.ctaGoogle': 'Scarica su Google Play',
        'hero.products': '2.8M+ Prodotti',
        'hero.languages': '10 Lingue',
        'hero.watchVideo': 'Guarda Video',

        // Is It Keto
        'isItKeto.subtitle': 'Cerca qualsiasi prodotto e scopri subito il suo punteggio keto',
        'isItKeto.productsAvailable': 'prodotti disponibili',

        // Features
        'features.badge': 'Funzionalità',
        'features.title': '<span class="text-green">Keto</span> Scanner - Tutto per la tua <span class="highlight-keto"><span class="text-green">Keto</span> 🥑 Dieta</span>',
        'features.subtitle': 'Un\'app progettata per facilitare la spesa',
        'features.scan.title': 'Scansione Veloce',
        'features.scan.desc': 'Scansiona codici EAN13, EAN8, UPC-A, UPC-E, Code128 e QR in secondi',
        'features.nutrition.title': 'Analisi Nutrizionale',
        'features.nutrition.desc': 'Informazioni dettagliate su carboidrati, proteine, grassi e zuccheri',
        'features.rating.title': 'Valutazione Keto',
        'features.rating.desc': 'Sistema da 1 a 5 stelle basato sui carboidrati netti per 100g',
        'features.history.title': 'Cronologia',
        'features.history.desc': 'Salva automaticamente gli ultimi 50 prodotti scansionati',
        'features.community.title': 'Community',
        'features.community.desc': 'Vedi le scansioni recenti degli altri utenti in tempo reale',
        'features.language.title': 'Multilingua',
        'features.language.desc': 'Disponibile in 10 lingue. Cambia con un tocco',

        // How it works
        'howItWorks.badge': 'Come Funziona',
        'howItWorks.title': 'Come Funziona l\'<span class="text-blue">App</span> - Tre Semplici Passi',
        'howItWorks.subtitle': 'Scopri se un prodotto è keto in pochi secondi',
        'howItWorks.step1.title': 'Apri lo Scanner',
        'howItWorks.step1.desc': 'Premi il pulsante di scansione e punta la fotocamera sul codice a barre',
        'howItWorks.step2.title': 'Analisi Automatica',
        'howItWorks.step2.desc': 'L\'app cerca il prodotto in un database di oltre 2.8 milioni di prodotti',
        'howItWorks.step3.title': 'Risultato Istantaneo',
        'howItWorks.step3.desc': 'Ottieni la valutazione keto, info nutrizionali e raccomandazioni',

        // Rating
        'rating.badge': 'Sistema di Valutazione',
        'rating.title': 'Sistema di Valutazione <span class="text-green">Keto</span> <span class="subtitle-line">Capire le <span class="text-yellow">Stelle</span></span>',
        'rating.subtitle': 'Basato sui carboidrati netti (Carboidrati Totali - Fibre)',
        'rating.r5.label': 'Eccellente',
        'rating.r5.range': '0-2g carb netti',
        'rating.r5.desc': 'Perfetto per keto, mangia senza preoccupazioni',
        'rating.r4.label': 'Buono',
        'rating.r4.range': '2-5g carb netti',
        'rating.r4.desc': 'Buona scelta, controlla le porzioni',
        'rating.r3.label': 'Moderato',
        'rating.r3.range': '5-10g carb netti',
        'rating.r3.desc': 'Consuma con moderazione e conta i carb',
        'rating.r2.label': 'Non Raccomandato',
        'rating.r2.range': '10-20g carb netti',
        'rating.r2.desc': 'Alto in carb, cerca alternative',
        'rating.r1.label': 'Evitare',
        'rating.r1.range': '>20g carb netti',
        'rating.r1.desc': 'Non adatto alla dieta keto',

        // Testimonials
        'testimonials.badge': 'Testimonianze',
        'testimonials.title': 'Cosa dicono i nostri utenti',
        'testimonials.t1.text': 'Questa app ha cambiato il mio modo di fare la spesa. Non perdo più tempo a leggere le etichette, scansiono e basta.',
        'testimonials.t1.title': 'Utente dal 2024',
        'testimonials.t2.text': 'Il sistema a stelle è super intuitivo. In pochi secondi so se un prodotto è adatto alla mia dieta. 100% consigliata.',
        'testimonials.t2.title': 'Keto da 2 anni',
        'testimonials.t3.text': 'Adoro poter vedere cosa scansionano gli altri utenti. Ho scoperto prodotti keto che non conoscevo grazie alla community.',
        'testimonials.t3.title': 'Appassionato di keto',

        // Download
        'download.title': 'Scarica Keto Scanner a Solo $1.99',
        'download.subtitle': 'Pagamento unico, nessun abbonamento. Disponibile ora su iOS e Android.',
        'download.downloadOn': 'Scarica su',
        'download.getItOn': 'Disponibile su',
        'download.comingSoon': 'Prossimamente',
        'download.promoText': 'Solo fino a fine gennaio 2026. Approfittane ora!',
        'download.feature1': 'Una tantum $1.99',
        'download.feature2': 'Nessun abbonamento',
        'download.feature3': 'Aggiornamenti gratuiti',

        // Keto Foods
        'ketoFoods.badge': 'Alimenti Keto',
        'ketoFoods.title': 'Scopri Prodotti <span class="text-green">Keto-Friendly</span> <span class="subtitle-line">Trova i migliori prodotti per la tua dieta keto</span>',

        // Screenshots
        'screenshots.badge': 'Anteprima App',
        'screenshots.title': 'Guarda <span class="text-green">Keto</span> Scanner in Azione',

        // Footer
        'footer.description': 'Il tuo assistente keto al supermercato. Scansiona, analizza e decidi con fiducia.',
        'footer.app': 'App',
        'footer.ratingSystem': 'Sistema di Valutazione',
        'footer.legal': 'Legale',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Termini',
        'footer.cookies': 'Cookie',
        'footer.contact': 'Contatti',
        'footer.support': 'Supporto',
        'footer.language': 'Lingua:',
        'footer.rights': 'Tutti i diritti riservati.',

        // Promo Modal
        'promo.badge': 'Offerta di Lancio',
        'promo.title': 'Appena Sfornato!',
        'promo.subtitle': 'Keto Scanner è appena stato lanciato',
        'promo.oneTime': 'Pagamento unico',
        'promo.feature1': 'Accesso a vita',
        'promo.feature2': 'Nessun abbonamento',
        'promo.feature3': 'Aggiornamenti gratuiti per sempre',
        'promo.urgency': 'Offerta valida fino a fine febbraio!',
        'promo.skip': 'Forse dopo'
    },
    fr: {
        // Nav
        'nav.features': 'Fonctionnalités',
        'nav.howItWorks': 'Comment ça marche',
        'nav.rating': 'Notation',
        'nav.download': 'Télécharger',
        'nav.downloadApp': 'Télécharger l\'App',

        // Hero
        'hero.badgeLifetime': 'Promo Lancement! Offre limitée',
        'hero.newApp': 'Nouvelle App',
        'hero.title': 'Scannez. Analysez.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Découvrez instantanément si un produit est compatible avec votre régime keto. Scannez le code-barres et obtenez une analyse nutritionnelle complète avec une note de 1 à 5 étoiles.',
        'hero.priceOnce': 'paiement unique',
        'hero.benefit1': 'Sans abonnement',
        'hero.benefit2': 'Accès à vie',
        'hero.promoText': 'Promo Lancement! 80% de réduction jusqu\'à fin janvier',
        'hero.launchMessage': '🎉 Tout juste lancé! Obtenez un accès à vie à ce prix spécial avant qu\'il ne repasse à $10',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS dès le 26.01.2026 · <i class="fab fa-google-play"></i> Android dès le 27.01.2026',
        'hero.offerUrgency': 'Offre valable jusqu\'à fin janvier. Profitez-en!!',
        'hero.benefit3': 'Mises à jour gratuites à vie',
        'hero.ctaApple': 'Télécharger sur App Store',
        'hero.ctaGoogle': 'Télécharger sur Google Play',
        'hero.products': '2.8M+ Produits',
        'hero.languages': '10 Langues',
        'hero.watchVideo': 'Voir la Vidéo',

        // Is It Keto
        'isItKeto.subtitle': 'Recherchez n\'importe quel produit et découvrez son score keto instantanément',
        'isItKeto.productsAvailable': 'produits disponibles',

        // Features
        'features.badge': 'Fonctionnalités',
        'features.title': '<span class="text-green">Keto</span> Scanner - Tout pour votre <span class="highlight-keto"><span class="text-green">Régime Keto</span> 🥑</span>',
        'features.subtitle': 'Une app conçue pour faciliter vos courses',
        'features.scan.title': 'Scan Rapide',
        'features.scan.desc': 'Scannez les codes EAN13, EAN8, UPC-A, UPC-E, Code128 et QR en secondes',
        'features.nutrition.title': 'Analyse Nutritionnelle',
        'features.nutrition.desc': 'Informations détaillées sur les glucides, protéines, lipides et sucres',
        'features.rating.title': 'Note Keto',
        'features.rating.desc': 'Système de 1 à 5 étoiles basé sur les glucides nets par 100g',
        'features.history.title': 'Historique',
        'features.history.desc': 'Sauvegarde automatiquement les 50 derniers produits scannés',
        'features.community.title': 'Communauté',
        'features.community.desc': 'Voyez les scans récents des autres utilisateurs en temps réel',
        'features.language.title': 'Multi-langue',
        'features.language.desc': 'Disponible en 10 langues. Changez d\'un simple toucher',

        // How it works
        'howItWorks.badge': 'Comment ça marche',
        'howItWorks.title': 'Comment l\'<span class="text-blue">App</span> Fonctionne - Trois Étapes Simples',
        'howItWorks.subtitle': 'Découvrez si un produit est keto en quelques secondes',
        'howItWorks.step1.title': 'Ouvrez le Scanner',
        'howItWorks.step1.desc': 'Appuyez sur le bouton de scan et pointez votre caméra vers le code-barres',
        'howItWorks.step2.title': 'Analyse Automatique',
        'howItWorks.step2.desc': 'L\'app recherche le produit dans une base de plus de 2.8 millions de produits',
        'howItWorks.step3.title': 'Résultat Instantané',
        'howItWorks.step3.desc': 'Obtenez la note keto, les infos nutritionnelles et des recommandations',

        // Rating
        'rating.badge': 'Système de Notation',
        'rating.title': 'Système de Notation <span class="text-green">Keto</span> <span class="subtitle-line">Comprendre les <span class="text-yellow">Étoiles</span></span>',
        'rating.subtitle': 'Basé sur les glucides nets (Glucides Totaux - Fibres)',
        'rating.r5.label': 'Excellent',
        'rating.r5.range': '0-2g glucides nets',
        'rating.r5.desc': 'Parfait pour keto, mangez sans souci',
        'rating.r4.label': 'Bon',
        'rating.r4.range': '2-5g glucides nets',
        'rating.r4.desc': 'Bon choix, surveillez les portions',
        'rating.r3.label': 'Modéré',
        'rating.r3.range': '5-10g glucides nets',
        'rating.r3.desc': 'Consommez avec modération et comptez les glucides',
        'rating.r2.label': 'Non Recommandé',
        'rating.r2.range': '10-20g glucides nets',
        'rating.r2.desc': 'Riche en glucides, cherchez des alternatives',
        'rating.r1.label': 'À Éviter',
        'rating.r1.range': '>20g glucides nets',
        'rating.r1.desc': 'Non adapté au régime keto',

        // Testimonials
        'testimonials.badge': 'Témoignages',
        'testimonials.title': 'Ce que disent nos utilisateurs',
        'testimonials.t1.text': 'Cette app a changé ma façon de faire les courses. Je ne perds plus de temps à lire les étiquettes, je scanne et c\'est tout.',
        'testimonials.t1.title': 'Utilisateur depuis 2024',
        'testimonials.t2.text': 'Le système d\'étoiles est super intuitif. En quelques secondes je sais si un produit convient à mon régime. 100% recommandée.',
        'testimonials.t2.title': 'Keto depuis 2 ans',
        'testimonials.t3.text': 'J\'adore pouvoir voir ce que les autres utilisateurs scannent. J\'ai découvert des produits keto que je ne connaissais pas grâce à la communauté.',
        'testimonials.t3.title': 'Passionné de keto',

        // Download
        'download.title': 'Téléchargez Keto Scanner pour Seulement $1.99',
        'download.subtitle': 'Paiement unique, sans abonnement. Disponible maintenant sur iOS et Android.',
        'download.downloadOn': 'Télécharger sur',
        'download.getItOn': 'Disponible sur',
        'download.comingSoon': 'Bientôt',
        'download.promoText': 'Seulement jusqu\'à fin janvier 2026. Profitez-en maintenant!',
        'download.feature1': 'Paiement unique $1.99',
        'download.feature2': 'Sans abonnement',
        'download.feature3': 'Mises à jour gratuites',

        // Keto Foods
        'ketoFoods.badge': 'Aliments Keto',
        'ketoFoods.title': 'Découvrez des Produits <span class="text-green">Keto-Friendly</span> <span class="subtitle-line">Trouvez les meilleurs produits pour votre régime keto</span>',

        // Screenshots
        'screenshots.badge': 'Aperçu de l\'App',
        'screenshots.title': 'Voyez <span class="text-green">Keto</span> Scanner en Action',

        // Footer
        'footer.description': 'Votre assistant keto au supermarché. Scannez, analysez et décidez en confiance.',
        'footer.app': 'App',
        'footer.ratingSystem': 'Système de Notation',
        'footer.legal': 'Légal',
        'footer.privacy': 'Confidentialité',
        'footer.terms': 'Conditions',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Contact',
        'footer.support': 'Support',
        'footer.language': 'Langue:',
        'footer.rights': 'Tous droits réservés.',

        // Promo Modal
        'promo.badge': 'Offre de Lancement',
        'promo.title': 'Tout Juste Sorti du Four!',
        'promo.subtitle': 'Keto Scanner vient de sortir',
        'promo.oneTime': 'Paiement unique',
        'promo.feature1': 'Accès à vie',
        'promo.feature2': 'Sans abonnement',
        'promo.feature3': 'Mises à jour gratuites pour toujours',
        'promo.urgency': 'Offre valable jusqu\'à fin février!',
        'promo.skip': 'Peut-être plus tard'
    },
    nl: {
        // Nav
        'nav.features': 'Functies',
        'nav.howItWorks': 'Hoe het werkt',
        'nav.rating': 'Beoordeling',
        'nav.download': 'Downloaden',
        'nav.downloadApp': 'Download App',

        // Hero
        'hero.badgeLifetime': 'Lancerings Promo! Beperkte aanbieding',
        'hero.newApp': 'Nieuwe App',
        'hero.title': 'Scan. Analyseer.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Ontdek direct of een product compatibel is met je keto dieet. Scan de barcode en krijg een volledige voedingsanalyse met een 1 tot 5 sterren beoordeling.',
        'hero.priceOnce': 'eenmalig',
        'hero.benefit1': 'Geen abonnement',
        'hero.benefit2': 'Levenslange toegang',
        'hero.promoText': 'Lancerings Promo! 80% korting tot eind januari',
        'hero.launchMessage': '🎉 Net gelanceerd! Krijg levenslange toegang voor deze speciale prijs voordat het teruggaat naar $10',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS vanaf 26.01.2026 · <i class="fab fa-google-play"></i> Android vanaf 27.01.2026',
        'hero.offerUrgency': 'Aanbieding geldig tot eind januari. Profiteer nu!!',
        'hero.benefit3': 'Gratis updates voor altijd',
        'hero.ctaApple': 'Download in App Store',
        'hero.ctaGoogle': 'Download in Google Play',
        'hero.products': '2.8M+ Producten',
        'hero.languages': '10 Talen',
        'hero.watchVideo': 'Bekijk Video',

        // Is It Keto
        'isItKeto.subtitle': 'Zoek elk product en ontdek direct de keto score',
        'isItKeto.productsAvailable': 'beschikbare producten',

        // Features
        'features.badge': 'Functies',
        'features.title': '<span class="text-green">Keto</span> Scanner - Alles voor je <span class="highlight-keto"><span class="text-green">Keto</span> 🥑 Dieet</span>',
        'features.subtitle': 'Een app ontworpen om boodschappen doen makkelijker te maken',
        'features.scan.title': 'Snel Scannen',
        'features.scan.desc': 'Scan EAN13, EAN8, UPC-A, UPC-E, Code128 en QR codes in seconden',
        'features.nutrition.title': 'Voedingsanalyse',
        'features.nutrition.desc': 'Gedetailleerde informatie over koolhydraten, eiwitten, vetten en suikers',
        'features.rating.title': 'Keto Beoordeling',
        'features.rating.desc': '1 tot 5 sterren systeem gebaseerd op netto koolhydraten per 100g',
        'features.history.title': 'Geschiedenis',
        'features.history.desc': 'Slaat automatisch de laatste 50 gescande producten op',
        'features.community.title': 'Community',
        'features.community.desc': 'Bekijk recente scans van andere gebruikers in realtime',
        'features.language.title': 'Meertalig',
        'features.language.desc': 'Beschikbaar in 10 talen. Wissel met één tik',

        // How it works
        'howItWorks.badge': 'Hoe het werkt',
        'howItWorks.title': 'Hoe de <span class="text-blue">App</span> Werkt - Drie Simpele Stappen',
        'howItWorks.subtitle': 'Ontdek in seconden of een product keto is',
        'howItWorks.step1.title': 'Open de Scanner',
        'howItWorks.step1.desc': 'Druk op de scan knop en richt je camera op de barcode',
        'howItWorks.step2.title': 'Automatische Analyse',
        'howItWorks.step2.desc': 'De app zoekt het product in een database van meer dan 2.8 miljoen producten',
        'howItWorks.step3.title': 'Direct Resultaat',
        'howItWorks.step3.desc': 'Krijg de keto beoordeling, voedingsinfo en aanbevelingen',

        // Rating
        'rating.badge': 'Beoordelingssysteem',
        'rating.title': '<span class="text-green">Keto</span> Beoordelingssysteem <span class="subtitle-line">De <span class="text-yellow">Sterren</span> Begrijpen</span>',
        'rating.subtitle': 'Gebaseerd op netto koolhydraten (Totaal Koolhydraten - Vezels)',
        'rating.r5.label': 'Uitstekend',
        'rating.r5.range': '0-2g netto koolhydraten',
        'rating.r5.desc': 'Perfect voor keto, eet zonder zorgen',
        'rating.r4.label': 'Goed',
        'rating.r4.range': '2-5g netto koolhydraten',
        'rating.r4.desc': 'Goede keuze, let op porties',
        'rating.r3.label': 'Matig',
        'rating.r3.range': '5-10g netto koolhydraten',
        'rating.r3.desc': 'Consumeer met mate en tel koolhydraten',
        'rating.r2.label': 'Niet Aanbevolen',
        'rating.r2.range': '10-20g netto koolhydraten',
        'rating.r2.desc': 'Hoog in koolhydraten, zoek alternatieven',
        'rating.r1.label': 'Vermijden',
        'rating.r1.range': '>20g netto koolhydraten',
        'rating.r1.desc': 'Niet geschikt voor keto dieet',

        // Testimonials
        'testimonials.badge': 'Getuigenissen',
        'testimonials.title': 'Wat onze gebruikers zeggen',
        'testimonials.t1.text': 'Deze app heeft mijn manier van boodschappen doen veranderd. Ik verspil geen tijd meer aan het lezen van etiketten, ik scan gewoon.',
        'testimonials.t1.title': 'Gebruiker sinds 2024',
        'testimonials.t2.text': 'Het sterrensysteem is super intuïtief. In seconden weet ik of een product bij mijn dieet past. 100% aanbevolen.',
        'testimonials.t2.title': 'Keto sinds 2 jaar',
        'testimonials.t3.text': 'Ik vind het geweldig om te zien wat andere gebruikers scannen. Ik heb keto producten ontdekt die ik niet kende dankzij de community.',
        'testimonials.t3.title': 'Keto enthousiasteling',

        // Download
        'download.title': 'Download Keto Scanner voor Slechts $1.99',
        'download.subtitle': 'Eenmalige betaling, geen abonnement. Nu beschikbaar op iOS en Android.',
        'download.downloadOn': 'Download op',
        'download.getItOn': 'Beschikbaar op',
        'download.comingSoon': 'Binnenkort',
        'download.promoText': 'Alleen tot eind januari 2026. Profiteer nu!',
        'download.feature1': 'Eenmalig $1.99',
        'download.feature2': 'Geen abonnement',
        'download.feature3': 'Gratis updates',

        // Keto Foods
        'ketoFoods.badge': 'Keto Voedsel',
        'ketoFoods.title': 'Ontdek <span class="text-green">Keto-Vriendelijke</span> Producten <span class="subtitle-line">Vind de beste producten voor je keto dieet</span>',

        // Screenshots
        'screenshots.badge': 'App Preview',
        'screenshots.title': 'Bekijk <span class="text-green">Keto</span> Scanner in Actie',

        // Footer
        'footer.description': 'Je keto assistent in de supermarkt. Scan, analyseer en beslis met vertrouwen.',
        'footer.app': 'App',
        'footer.ratingSystem': 'Beoordelingssysteem',
        'footer.legal': 'Juridisch',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Voorwaarden',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Contact',
        'footer.support': 'Support',
        'footer.language': 'Taal:',
        'footer.rights': 'Alle rechten voorbehouden.',

        // Promo Modal
        'promo.badge': 'Lanceringsaanbieding',
        'promo.title': 'Vers uit de Oven!',
        'promo.subtitle': 'Keto Scanner is net gelanceerd',
        'promo.oneTime': 'Eenmalige betaling',
        'promo.feature1': 'Levenslange toegang',
        'promo.feature2': 'Geen abonnementen',
        'promo.feature3': 'Gratis updates voor altijd',
        'promo.urgency': 'Aanbieding geldig tot eind februari!',
        'promo.skip': 'Misschien later'
    },
    pt: {
        // Nav
        'nav.features': 'Recursos',
        'nav.howItWorks': 'Como Funciona',
        'nav.rating': 'Avaliação',
        'nav.download': 'Baixar',
        'nav.downloadApp': 'Baixar App',

        // Hero
        'hero.badgeLifetime': 'Promo de Lançamento! Oferta limitada',
        'hero.newApp': 'Novo App',
        'hero.title': 'Escaneie. Analise.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Descubra instantaneamente se um produto é compatível com sua dieta keto. Escaneie o código de barras e obtenha uma análise nutricional completa com avaliação de 1 a 5 estrelas.',
        'hero.priceOnce': 'pagamento único',
        'hero.benefit1': 'Sem assinaturas',
        'hero.benefit2': 'Acesso vitalício',
        'hero.promoText': 'Promo de Lançamento! 80% de desconto até final de janeiro',
        'hero.launchMessage': '🎉 Acabamos de lançar! Obtenha acesso vitalício por este preço especial antes de voltar a $10',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS desde 26.01.2026 · <i class="fab fa-google-play"></i> Android desde 27.01.2026',
        'hero.offerUrgency': 'Oferta válida até final de janeiro. Aproveite!!',
        'hero.benefit3': 'Atualizações grátis para sempre',
        'hero.ctaApple': 'Baixar na App Store',
        'hero.ctaGoogle': 'Baixar no Google Play',
        'hero.products': '2.8M+ Produtos',
        'hero.languages': '10 Idiomas',
        'hero.watchVideo': 'Ver Vídeo',

        // Is It Keto
        'isItKeto.subtitle': 'Pesquise qualquer produto e descubra sua pontuação keto instantaneamente',
        'isItKeto.productsAvailable': 'produtos disponíveis',

        // Features
        'features.badge': 'Recursos',
        'features.title': '<span class="text-green">Keto</span> Scanner - Tudo para sua <span class="highlight-keto"><span class="text-green">Dieta Keto</span> 🥑</span>',
        'features.subtitle': 'Um app projetado para facilitar suas compras',
        'features.scan.title': 'Escaneamento Rápido',
        'features.scan.desc': 'Escaneie códigos EAN13, EAN8, UPC-A, UPC-E, Code128 e QR em segundos',
        'features.nutrition.title': 'Análise Nutricional',
        'features.nutrition.desc': 'Informações detalhadas sobre carboidratos, proteínas, gorduras e açúcares',
        'features.rating.title': 'Avaliação Keto',
        'features.rating.desc': 'Sistema de 1 a 5 estrelas baseado em carboidratos líquidos por 100g',
        'features.history.title': 'Histórico',
        'features.history.desc': 'Salva automaticamente os últimos 50 produtos escaneados',
        'features.community.title': 'Comunidade',
        'features.community.desc': 'Veja os escaneamentos recentes de outros usuários em tempo real',
        'features.language.title': 'Multi-idioma',
        'features.language.desc': 'Disponível em 10 idiomas. Mude com um toque',

        // How it works
        'howItWorks.badge': 'Como Funciona',
        'howItWorks.title': 'Como o <span class="text-blue">App</span> Funciona - Três Passos Simples',
        'howItWorks.subtitle': 'Descubra se um produto é keto em segundos',
        'howItWorks.step1.title': 'Abra o Scanner',
        'howItWorks.step1.desc': 'Pressione o botão de escanear e aponte a câmera para o código de barras',
        'howItWorks.step2.title': 'Análise Automática',
        'howItWorks.step2.desc': 'O app pesquisa o produto em um banco de dados de mais de 2.8 milhões de produtos',
        'howItWorks.step3.title': 'Resultado Instantâneo',
        'howItWorks.step3.desc': 'Obtenha a avaliação keto, informações nutricionais e recomendações',

        // Rating
        'rating.badge': 'Sistema de Avaliação',
        'rating.title': 'Sistema de Avaliação <span class="text-green">Keto</span> <span class="subtitle-line">Entendendo as <span class="text-yellow">Estrelas</span></span>',
        'rating.subtitle': 'Baseado em carboidratos líquidos (Carboidratos Totais - Fibras)',
        'rating.r5.label': 'Excelente',
        'rating.r5.range': '0-2g carbs líquidos',
        'rating.r5.desc': 'Perfeito para keto, coma sem preocupação',
        'rating.r4.label': 'Bom',
        'rating.r4.range': '2-5g carbs líquidos',
        'rating.r4.desc': 'Boa escolha, controle as porções',
        'rating.r3.label': 'Moderado',
        'rating.r3.range': '5-10g carbs líquidos',
        'rating.r3.desc': 'Consuma com moderação e conte os carbs',
        'rating.r2.label': 'Não Recomendado',
        'rating.r2.range': '10-20g carbs líquidos',
        'rating.r2.desc': 'Alto em carbs, procure alternativas',
        'rating.r1.label': 'Evitar',
        'rating.r1.range': '>20g carbs líquidos',
        'rating.r1.desc': 'Não adequado para dieta keto',

        // Testimonials
        'testimonials.badge': 'Depoimentos',
        'testimonials.title': 'O que nossos usuários dizem',
        'testimonials.t1.text': 'Este app mudou minha forma de fazer compras. Não perco mais tempo lendo rótulos, simplesmente escaneio e pronto.',
        'testimonials.t1.title': 'Usuário desde 2024',
        'testimonials.t2.text': 'O sistema de estrelas é super intuitivo. Em segundos sei se um produto serve para minha dieta. 100% recomendado.',
        'testimonials.t2.title': 'Keto há 2 anos',
        'testimonials.t3.text': 'Adoro poder ver o que outros usuários estão escaneando. Descobri produtos keto que não conhecia graças à comunidade.',
        'testimonials.t3.title': 'Entusiasta do keto',

        // Download
        'download.title': 'Baixe Keto Scanner por Apenas $1.99',
        'download.subtitle': 'Pagamento único, sem assinaturas. Disponível agora no iOS e Android.',
        'download.downloadOn': 'Baixar na',
        'download.getItOn': 'Disponível no',
        'download.comingSoon': 'Em breve',
        'download.promoText': 'Só até final de janeiro de 2026. Aproveite agora!',
        'download.feature1': 'Pagamento único $1.99',
        'download.feature2': 'Sem assinaturas',
        'download.feature3': 'Atualizações grátis',

        // Keto Foods
        'ketoFoods.badge': 'Alimentos Keto',
        'ketoFoods.title': 'Descubra Produtos <span class="text-green">Keto-Friendly</span> <span class="subtitle-line">Encontre os melhores produtos para sua dieta keto</span>',

        // Screenshots
        'screenshots.badge': 'Preview do App',
        'screenshots.title': 'Veja <span class="text-green">Keto</span> Scanner em Ação',

        // Footer
        'footer.description': 'Seu assistente keto no supermercado. Escaneie, analise e decida com confiança.',
        'footer.app': 'App',
        'footer.ratingSystem': 'Sistema de Avaliação',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacidade',
        'footer.terms': 'Termos',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Contato',
        'footer.support': 'Suporte',
        'footer.language': 'Idioma:',
        'footer.rights': 'Todos os direitos reservados.',

        // Promo Modal
        'promo.badge': 'Oferta de Lançamento',
        'promo.title': 'Acabou de Sair do Forno!',
        'promo.subtitle': 'Keto Scanner acabou de ser lançado',
        'promo.oneTime': 'Pagamento único',
        'promo.feature1': 'Acesso vitalício',
        'promo.feature2': 'Sem assinaturas',
        'promo.feature3': 'Atualizações gratuitas para sempre',
        'promo.urgency': 'Oferta válida até o final de fevereiro!',
        'promo.skip': 'Talvez depois'
    },
    pl: {
        // Nav
        'nav.features': 'Funkcje',
        'nav.howItWorks': 'Jak to działa',
        'nav.rating': 'Ocena',
        'nav.download': 'Pobierz',
        'nav.downloadApp': 'Pobierz Aplikację',

        // Hero
        'hero.badgeLifetime': 'Promocja Premierowa! Oferta ograniczona',
        'hero.newApp': 'Nowa Aplikacja',
        'hero.title': 'Skanuj. Analizuj.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Natychmiast dowiedz się, czy produkt jest kompatybilny z dietą keto. Zeskanuj kod kreskowy i uzyskaj pełną analizę wartości odżywczych z oceną od 1 do 5 gwiazdek.',
        'hero.priceOnce': 'jednorazowo',
        'hero.benefit1': 'Bez subskrypcji',
        'hero.benefit2': 'Dożywotni dostęp',
        'hero.promoText': 'Promocja Premierowa! 80% zniżki do końca lutego',
        'hero.launchMessage': '🎉 Właśnie wystartowaliśmy! Uzyskaj dożywotni dostęp w tej specjalnej cenie zanim wróci do $10',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS od 26.01.2026 · <i class="fab fa-google-play"></i> Android od 27.01.2026',
        'hero.offerUrgency': 'Oferta ważna do końca lutego. Skorzystaj!!',
        'hero.benefit3': 'Darmowe aktualizacje na zawsze',
        'hero.ctaApple': 'Pobierz z App Store',
        'hero.ctaGoogle': 'Pobierz z Google Play',
        'hero.products': '2.8M+ Produktów',
        'hero.languages': '10 Języków',
        'hero.watchVideo': 'Obejrzyj Wideo',

        // Is It Keto
        'isItKeto.subtitle': 'Wyszukaj dowolny produkt i natychmiast odkryj jego wynik keto',
        'isItKeto.productsAvailable': 'dostępnych produktów',

        // Features
        'features.badge': 'Funkcje',
        'features.title': '<span class="text-green">Keto</span> Scanner - Wszystko dla Twojej <span class="highlight-keto"><span class="text-green">Diety Keto</span> 🥑</span>',
        'features.subtitle': 'Aplikacja zaprojektowana, aby ułatwić zakupy',
        'features.scan.title': 'Szybkie Skanowanie',
        'features.scan.desc': 'Skanuj kody EAN13, EAN8, UPC-A, UPC-E, Code128 i QR w sekundy',
        'features.nutrition.title': 'Analiza Wartości Odżywczych',
        'features.nutrition.desc': 'Szczegółowe informacje o węglowodanach, białku, tłuszczu i cukrze',
        'features.rating.title': 'Ocena Keto',
        'features.rating.desc': 'System od 1 do 5 gwiazdek oparty na węglowodanach netto na 100g',
        'features.history.title': 'Historia',
        'features.history.desc': 'Automatycznie zapisuje ostatnie 50 zeskanowanych produktów',
        'features.community.title': 'Społeczność',
        'features.community.desc': 'Zobacz ostatnie skany innych użytkowników w czasie rzeczywistym',
        'features.language.title': 'Wielojęzyczny',
        'features.language.desc': 'Dostępny w 10 językach. Zmień jednym dotknięciem',

        // How it works
        'howItWorks.badge': 'Jak to działa',
        'howItWorks.title': 'Jak Działa <span class="text-blue">Aplikacja</span> - Trzy Proste Kroki',
        'howItWorks.subtitle': 'Dowiedz się w sekundy, czy produkt jest keto',
        'howItWorks.step1.title': 'Otwórz Skaner',
        'howItWorks.step1.desc': 'Naciśnij przycisk skanowania i skieruj aparat na kod kreskowy',
        'howItWorks.step2.title': 'Automatyczna Analiza',
        'howItWorks.step2.desc': 'Aplikacja wyszukuje produkt w bazie ponad 2.8 miliona produktów',
        'howItWorks.step3.title': 'Natychmiastowy Wynik',
        'howItWorks.step3.desc': 'Uzyskaj ocenę keto, informacje żywieniowe i rekomendacje',

        // Rating
        'rating.badge': 'System Ocen',
        'rating.title': 'System Ocen <span class="text-green">Keto</span> <span class="subtitle-line">Zrozumienie <span class="text-yellow">Gwiazdek</span></span>',
        'rating.subtitle': 'Na podstawie węglowodanów netto (Węglowodany Ogółem - Błonnik)',
        'rating.r5.label': 'Doskonały',
        'rating.r5.range': '0-2g węgl. netto',
        'rating.r5.desc': 'Idealny dla keto, jedz bez obaw',
        'rating.r4.label': 'Dobry',
        'rating.r4.range': '2-5g węgl. netto',
        'rating.r4.desc': 'Dobry wybór, kontroluj porcje',
        'rating.r3.label': 'Umiarkowany',
        'rating.r3.range': '5-10g węgl. netto',
        'rating.r3.desc': 'Spożywaj z umiarem i licz węglowodany',
        'rating.r2.label': 'Niezalecany',
        'rating.r2.range': '10-20g węgl. netto',
        'rating.r2.desc': 'Wysoka zawartość węglowodanów, szukaj alternatyw',
        'rating.r1.label': 'Unikaj',
        'rating.r1.range': '>20g węgl. netto',
        'rating.r1.desc': 'Nieodpowiedni dla diety keto',

        // Testimonials
        'testimonials.badge': 'Opinie',
        'testimonials.title': 'Co mówią nasi użytkownicy',
        'testimonials.t1.text': 'Ta aplikacja zmieniła mój sposób robienia zakupów. Nie tracę już czasu na czytanie etykiet, po prostu skanuję.',
        'testimonials.t1.title': 'Użytkownik od 2024',
        'testimonials.t2.text': 'System gwiazdek jest super intuicyjny. W sekundy wiem, czy produkt pasuje do mojej diety. 100% polecam.',
        'testimonials.t2.title': 'Keto od 2 lat',
        'testimonials.t3.text': 'Uwielbiam widzieć, co skanują inni użytkownicy. Odkryłem produkty keto, których nie znałem dzięki społeczności.',
        'testimonials.t3.title': 'Entuzjasta keto',

        // Download
        'download.title': 'Pobierz Keto Scanner za Tylko $1.99',
        'download.subtitle': 'Jednorazowa płatność, bez subskrypcji. Dostępne teraz na iOS i Android.',
        'download.downloadOn': 'Pobierz z',
        'download.getItOn': 'Dostępne w',
        'download.comingSoon': 'Wkrótce',
        'download.promoText': 'Promocja Premierowa! 80% zniżki do końca lutego',
        'download.feature1': 'Jednorazowo $1.99',
        'download.feature2': 'Bez subskrypcji',
        'download.feature3': 'Darmowe aktualizacje',

        // Keto Foods
        'ketoFoods.badge': 'Żywność Keto',
        'ketoFoods.title': 'Odkryj Produkty <span class="text-green">Keto-Friendly</span> <span class="subtitle-line">Znajdź najlepsze produkty dla diety keto</span>',

        // Screenshots
        'screenshots.badge': 'Podgląd Aplikacji',
        'screenshots.title': 'Zobacz <span class="text-green">Keto</span> Scanner w Akcji',

        // Footer
        'footer.description': 'Twój asystent keto w supermarkecie. Skanuj, analizuj i decyduj z pewnością.',
        'footer.app': 'Aplikacja',
        'footer.ratingSystem': 'System Ocen',
        'footer.legal': 'Prawne',
        'footer.privacy': 'Prywatność',
        'footer.terms': 'Regulamin',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Kontakt',
        'footer.support': 'Wsparcie',
        'footer.language': 'Język:',
        'footer.rights': 'Wszelkie prawa zastrzeżone.',

        // Promo Modal
        'promo.badge': 'Oferta Premierowa',
        'promo.title': 'Prosto z Pieca!',
        'promo.subtitle': 'Keto Scanner właśnie wystartował',
        'promo.oneTime': 'Jednorazowa płatność',
        'promo.feature1': 'Dożywotni dostęp',
        'promo.feature2': 'Bez subskrypcji',
        'promo.feature3': 'Darmowe aktualizacje na zawsze',
        'promo.urgency': 'Oferta ważna do końca lutego!',
        'promo.skip': 'Może później'
    },
    ru: {
        // Nav
        'nav.features': 'Функции',
        'nav.howItWorks': 'Как это работает',
        'nav.rating': 'Рейтинг',
        'nav.download': 'Скачать',
        'nav.downloadApp': 'Скачать приложение',

        // Hero
        'hero.badgeLifetime': 'Акция запуска! Ограниченное предложение',
        'hero.newApp': 'Новое Приложение',
        'hero.title': 'Сканируй. Анализируй.<br><span class="gradient-text">Decide Keto</span> 🥑',
        'hero.description': 'Мгновенно узнайте, совместим ли продукт с вашей кето-диетой. Отсканируйте штрих-код и получите полный анализ питательной ценности с оценкой от 1 до 5 звёзд.',
        'hero.priceOnce': 'разовый платёж',
        'hero.benefit1': 'Без подписок',
        'hero.benefit2': 'Пожизненный доступ',
        'hero.promoText': 'Акция запуска! Скидка 80% до конца февраля',
        'hero.launchMessage': '🎉 Только что запустились! Получите пожизненный доступ по специальной цене, пока она не вернулась к $10',
        'hero.offerDates': '<i class="fab fa-apple"></i> iOS с 26.01.2026 · <i class="fab fa-google-play"></i> Android с 27.01.2026',
        'hero.offerUrgency': 'Предложение действует до конца февраля. Успейте!!',
        'hero.benefit3': 'Бесплатные обновления навсегда',
        'hero.ctaApple': 'Скачать в App Store',
        'hero.ctaGoogle': 'Скачать в Google Play',
        'hero.products': '2.8M+ Продуктов',
        'hero.languages': '10 Языков',
        'hero.watchVideo': 'Смотреть видео',

        // Is It Keto
        'isItKeto.subtitle': 'Найдите любой продукт и мгновенно узнайте его кето-рейтинг',
        'isItKeto.productsAvailable': 'доступных продуктов',

        // Features
        'features.badge': 'Функции',
        'features.title': '<span class="text-green">Keto</span> Scanner - Всё для вашей <span class="highlight-keto"><span class="text-green">Кето</span> 🥑 диеты</span>',
        'features.subtitle': 'Приложение, созданное для упрощения покупок',
        'features.scan.title': 'Быстрое сканирование',
        'features.scan.desc': 'Сканируйте коды EAN13, EAN8, UPC-A, UPC-E, Code128 и QR за секунды',
        'features.nutrition.title': 'Анализ питательности',
        'features.nutrition.desc': 'Подробная информация об углеводах, белках, жирах и сахаре',
        'features.rating.title': 'Кето-рейтинг',
        'features.rating.desc': 'Система от 1 до 5 звёзд на основе чистых углеводов на 100г',
        'features.history.title': 'История',
        'features.history.desc': 'Автоматически сохраняет последние 50 отсканированных продуктов',
        'features.community.title': 'Сообщество',
        'features.community.desc': 'Смотрите недавние сканы других пользователей в реальном времени',
        'features.language.title': 'Мультиязычность',
        'features.language.desc': 'Доступен на 10 языках. Переключайте одним касанием',

        // How it works
        'howItWorks.badge': 'Как это работает',
        'howItWorks.title': 'Как работает <span class="text-blue">приложение</span> - Три простых шага',
        'howItWorks.subtitle': 'Узнайте за секунды, подходит ли продукт для кето',
        'howItWorks.step1.title': 'Откройте сканер',
        'howItWorks.step1.desc': 'Нажмите кнопку сканирования и наведите камеру на штрих-код',
        'howItWorks.step2.title': 'Автоматический анализ',
        'howItWorks.step2.desc': 'Приложение ищет продукт в базе из более чем 2.8 миллионов товаров',
        'howItWorks.step3.title': 'Мгновенный результат',
        'howItWorks.step3.desc': 'Получите кето-рейтинг, информацию о питании и рекомендации',

        // Rating
        'rating.badge': 'Система рейтинга',
        'rating.title': 'Система рейтинга <span class="text-green">Кето</span> <span class="subtitle-line">Понимание <span class="text-yellow">звёзд</span></span>',
        'rating.subtitle': 'На основе чистых углеводов (Всего углеводов - Клетчатка)',
        'rating.r5.label': 'Отлично',
        'rating.r5.range': '0-2г чистых углеводов',
        'rating.r5.desc': 'Идеально для кето, ешьте без забот',
        'rating.r4.label': 'Хорошо',
        'rating.r4.range': '2-5г чистых углеводов',
        'rating.r4.desc': 'Хороший выбор, следите за порциями',
        'rating.r3.label': 'Умеренно',
        'rating.r3.range': '5-10г чистых углеводов',
        'rating.r3.desc': 'Употребляйте умеренно и считайте углеводы',
        'rating.r2.label': 'Не рекомендуется',
        'rating.r2.range': '10-20г чистых углеводов',
        'rating.r2.desc': 'Много углеводов, ищите альтернативы',
        'rating.r1.label': 'Избегать',
        'rating.r1.range': '>20г чистых углеводов',
        'rating.r1.desc': 'Не подходит для кето-диеты',

        // Testimonials
        'testimonials.badge': 'Отзывы',
        'testimonials.title': 'Что говорят наши пользователи',
        'testimonials.t1.text': 'Это приложение изменило мой подход к покупкам. Я больше не трачу время на чтение этикеток, просто сканирую.',
        'testimonials.t1.title': 'Пользователь с 2024',
        'testimonials.t2.text': 'Система звёзд супер интуитивная. За секунды я знаю, подходит ли продукт для моей диеты. 100% рекомендую.',
        'testimonials.t2.title': 'На кето 2 года',
        'testimonials.t3.text': 'Обожаю видеть, что сканируют другие пользователи. Открыл для себя кето-продукты, о которых не знал благодаря сообществу.',
        'testimonials.t3.title': 'Энтузиаст кето',

        // Download
        'download.title': 'Скачайте Keto Scanner всего за $1.99',
        'download.subtitle': 'Разовый платёж, без подписок. Доступно сейчас на iOS и Android.',
        'download.downloadOn': 'Скачать в',
        'download.getItOn': 'Доступно в',
        'download.comingSoon': 'Скоро',
        'download.promoText': 'Акция запуска! Скидка 80% до конца февраля',
        'download.feature1': 'Разово $1.99',
        'download.feature2': 'Без подписок',
        'download.feature3': 'Бесплатные обновления',

        // Keto Foods
        'ketoFoods.badge': 'Кето-продукты',
        'ketoFoods.title': 'Откройте <span class="text-green">Кето-дружественные</span> продукты <span class="subtitle-line">Найдите лучшие продукты для вашей кето-диеты</span>',

        // Screenshots
        'screenshots.badge': 'Превью приложения',
        'screenshots.title': 'Смотрите <span class="text-green">Keto</span> Scanner в действии',

        // Footer
        'footer.description': 'Ваш кето-помощник в супермаркете. Сканируйте, анализируйте и решайте уверенно.',
        'footer.app': 'Приложение',
        'footer.ratingSystem': 'Система рейтинга',
        'footer.legal': 'Правовая информация',
        'footer.privacy': 'Конфиденциальность',
        'footer.terms': 'Условия',
        'footer.cookies': 'Cookies',
        'footer.contact': 'Контакты',
        'footer.support': 'Поддержка',
        'footer.language': 'Язык:',
        'footer.rights': 'Все права защищены.',

        // Promo Modal
        'promo.badge': 'Стартовое Предложение',
        'promo.title': 'Только из Печи!',
        'promo.subtitle': 'Keto Scanner только что запущен',
        'promo.oneTime': 'Единоразовый платёж',
        'promo.feature1': 'Пожизненный доступ',
        'promo.feature2': 'Без подписок',
        'promo.feature3': 'Бесплатные обновления навсегда',
        'promo.urgency': 'Предложение действует до конца февраля!',
        'promo.skip': 'Может позже'
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
    initPromoModal();
});

/**
 * Promo Modal - Show on page load
 */
function initPromoModal() {
    const promoModal = document.getElementById('promoModal');
    if (!promoModal) return;

    // Show modal after a short delay for better UX
    setTimeout(() => {
        openModal('promo');
    }, 1500);
}

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
const langNames = {
    en: 'English',
    es: 'Español',
    de: 'Deutsch',
    fr: 'Français',
    it: 'Italiano',
    pt: 'Português',
    nl: 'Nederlands',
    pl: 'Polski',
    ru: 'Русский'
};

function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const supportedLangs = ['en', 'es', 'de', 'it', 'fr', 'nl', 'pt', 'pl', 'ru'];

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

            // Update button text
            const currentLangNameEl = document.getElementById('currentLangName');
            if (currentLangNameEl) {
                currentLangNameEl.textContent = langNames[lang] || 'English';
            }

            // Save preference
            localStorage.setItem('ketobarcode-lang', lang);

            // Close modal
            closeModal('language');
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
        // Update button text
        const currentLangNameEl = document.getElementById('currentLangName');
        if (currentLangNameEl) {
            currentLangNameEl.textContent = langNames[savedLang] || 'English';
        }
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
        // Update button text
        const currentLangNameEl = document.getElementById('currentLangName');
        if (currentLangNameEl) {
            currentLangNameEl.textContent = langNames[browserLang] || 'English';
        }
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
        de: 'Keto Scanner - Beste Keto Scan App | Barcode Scanner für Keto-Diät',
        it: 'Keto Scanner - Migliore App Keto Scan | Scanner Codici a Barre per Dieta Keto',
        fr: 'Keto Scanner - Meilleure App Keto Scan | Scanner Code-Barres pour Régime Keto',
        nl: 'Keto Scanner - Beste Keto Scan App | Barcode Scanner voor Keto Dieet',
        pt: 'Keto Scanner - Melhor App Keto Scan | Scanner de Código de Barras para Dieta Keto',
        pl: 'Keto Scanner - Najlepsza Aplikacja Keto Scan | Skaner Kodów Kreskowych dla Diety Keto',
        ru: 'Keto Scanner - Лучшее приложение Keto Scan | Сканер штрих-кодов для кето-диеты'
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
 * Cookie Notice
 */
(function() {
    if (localStorage.getItem('cookiesAccepted')) return;
    const notice = document.getElementById('cookieNotice');
    if (!notice) return;
    notice.classList.add('show');
    document.getElementById('cookieAccept').addEventListener('click', function() {
        notice.classList.remove('show');
        localStorage.setItem('cookiesAccepted', '1');
    });
})();

/**
 * Smart App Banner (mobile only)
 */
(function() {
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) return;
    if (sessionStorage.getItem('smartBannerClosed')) return;

    const banner = document.getElementById('smartBanner');
    const closeBtn = document.getElementById('smartBannerClose');
    const viewBtn = document.getElementById('smartBannerBtn');

    // Detect iOS vs Android
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const storeUrl = isIOS
        ? 'https://apps.apple.com/us/app/keto-barcode-scanner/id6757723290'
        : 'https://play.google.com/store/apps/details?id=com.lwebch.KetoScanner';

    viewBtn.href = storeUrl;
    banner.classList.add('show');
    document.body.classList.add('has-smart-banner');

    closeBtn.addEventListener('click', function() {
        banner.classList.remove('show');
        document.body.classList.remove('has-smart-banner');
        sessionStorage.setItem('smartBannerClosed', '1');
    });
})();

/**
 * Modal Functions
 */
function openModal(type) {
    if (event) event.preventDefault();
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

/**
 * Video Modal Functions
 */
function openVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    if (modal && video) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        video.currentTime = 0;
        video.play();
    }
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    if (modal && video) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        video.pause();
    }
}

// Close video modal on click outside
document.addEventListener('click', (e) => {
    if (e.target.id === 'videoModal') {
        closeVideoModal();
    }
});

// Close video modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const videoModal = document.getElementById('videoModal');
        if (videoModal && videoModal.classList.contains('show')) {
            closeVideoModal();
        }
    }
});

/**
 * It's Keto Video Play Function
 */
function playItsKetoVideo(container) {
    const video = container.querySelector('.its-keto-video');
    const overlay = container.querySelector('.video-overlay');

    if (video.paused) {
        video.play();
        overlay.classList.add('hidden');
    } else {
        video.pause();
        overlay.classList.remove('hidden');
    }
}

// Reset overlay when video ends
document.addEventListener('DOMContentLoaded', () => {
    const itsKetoVideo = document.querySelector('.its-keto-video');
    if (itsKetoVideo) {
        itsKetoVideo.addEventListener('ended', () => {
            const overlay = itsKetoVideo.parentElement.querySelector('.video-overlay');
            if (overlay) {
                overlay.classList.remove('hidden');
            }
        });
    }
});

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
