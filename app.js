// ===== GLOBAL VARIABLES =====
let currentStep = 1;
let totalSteps = 5;
let selectedGoal = '';
let selectedDiet = '';
let selectedAllergies = [];
let selectedDetails = {};
let currentLanguage = 'de';

// ===== LANGUAGE TRANSLATIONS =====
const translations = {
  de: {
    // Navigation
    nav_features: "Funktionen",
    nav_pricing: "Preise", 
    nav_blog: "Blog",
    nav_contact: "Kontakt",
    
    // Hero Section
    hero_title: "Dein smarter Ernährungsplan per KI",
    hero_subtitle: "Erhalte individuelle Wochenpläne, Rezepte und Einkaufsliste auf Basis deiner Präferenzen!",
    cta_start: "Jetzt kostenlos starten",
    trust_rating: "4.9/5 Sterne",
    trust_users: "10.000+ Nutzer", 
    trust_secure: "DSGVO-konform",
    
    // Onboarding
    onboarding_title: "Starte dein Onboarding",
    step: "Schritt",
    of: "von",
    step1_title: "Was ist dein Hauptziel?",
    goal_lose_weight: "Abnehmen",
    goal_build_muscle: "Muskeln aufbauen",
    goal_stay_fit: "Fit bleiben",
    goal_eat_healthy: "Gesünder essen",
    step2_title: "Wie ernährst du dich?",
    diet_omnivore: "Alles",
    diet_vegetarian: "Vegetarisch",
    diet_vegan: "Vegan",
    diet_keto: "Keto",
    step3_title: "Hast du Allergien oder Unverträglichkeiten?",
    allergy_gluten: "Gluten",
    allergy_lactose: "Laktose",
    allergy_nuts: "Nüsse",
    allergy_shellfish: "Meeresfrüchte",
    allergy_eggs: "Eier",
    allergy_soy: "Soja",
    allergy_fish: "Fisch",
    allergy_sesame: "Sesam",
    allergy_custom: "Weitere Allergien:",
    allergy_placeholder: "z.B. Tomaten, Zwiebeln...",
    add: "Hinzufügen",
    allergy_selected: "Ausgewählt:",
    step4_title: "Weitere Details",
    people_count: "Anzahl Personen:",
    cooking_time: "Kochzeit pro Mahlzeit:",
    budget: "Budget pro Person/Tag:",
    step5_title: "Fast geschafft!",
    step5_subtitle: "Wir senden dir deinen personalisierten Plan per E-Mail zu.",
    email_placeholder: "deine@email.de",
    privacy_consent: "Ich stimme der Datenschutzerklärung zu",
    newsletter_consent: "Ich möchte den Newsletter erhalten (optional)",
    prev: "Zurück",
    next: "Weiter",
    create_plan: "Plan erstellen",
    
    // Menu Plan
    menu_title: "Dein 7-Tage Menüplan",
    menu_subtitle: "Jeden Tag neue, gesunde und leckere Gerichte",
    menu_monday: "Montag: Veggie Skillet",
    menu_monday_desc: "Viele Gemüse, angebraten.",
    menu_tuesday: "Dienstag: Chicken Bowl",
    menu_tuesday_desc: "Proteinreich & kohlenhydratarm.",
    menu_wednesday: "Mittwoch: Vegan Chili",
    menu_wednesday_desc: "Reich & voller Ballaststoffe.",
    menu_thursday: "Donnerstag: Salmon & Rice", 
    menu_thursday_desc: "Omega-3 Boost!",
    menu_friday: "Freitag: Breakfast Wraps",
    menu_friday_desc: "Leckerer Start in den Tag.",
    menu_saturday: "Samstag: LowCarb Zucchini Pasta",
    menu_saturday_desc: "Leicht & sättigend.",
    menu_sunday: "Sonntag: Grill Plate Deluxe",
    menu_sunday_desc: "Fleisch oder vegan—deine Wahl!",
    
    // Pricing
    pricing_title: "Preise & Abos",
    plan_free: "Kostenlos",
    plan_pro: "Pro", 
    per_month: "/Monat",
    free_feature_1: "3 Rezepte/Woche",
    free_feature_2: "Grundfunktionen & Tagesplan",
    free_feature_3: "Keine Einkaufslisten",
    free_feature_4: "Begrenzte Rezepte",
    pro_feature_1: "7-Tage-Plan + Allergie-Filter",
    pro_feature_2: "Unbegrenzte Rezepte",
    pro_feature_3: "Automatische Einkaufslisten", 
    pro_feature_4: "KI-Chat-Assistent",
    pro_feature_5: "Nährwertangaben",
    most_popular: "Beliebteste",
    start_free: "Kostenlos starten",
    upgrade_pro: "Pro werden",
    pricing_note: "Abo monatlich kündbar • 14 Tage Geld-zurück-Garantie",
    faq_test: "FAQ: Testphase und Storno",
    faq_plan: "FAQ: Wie funktioniert der Plan?",
    
    // Features
    features_title: "Warum FitPause?",
    feature_ai_title: "KI-gestützte Pläne",
    feature_ai_desc: "Personalisierte Wochenpläne basierend auf Ihren Zielen, Vorlieben und Allergien.",
    feature_recipes_title: "Smarte Rezeptvorschläge",
    feature_recipes_desc: "Gesunde und leckere Rezepte, angepasst an Ihre individuellen Bedürfnisse.",
    feature_allergies_title: "Allergiefilter",
    feature_allergies_desc: "Automatische Filterung von Rezepten nach Ihren Allergien und Unverträglichkeiten.",
    feature_multilang_title: "Mehrsprachig", 
    feature_multilang_desc: "Nutzen Sie die App in Ihrer bevorzugten Sprache für optimale Verständlichkeit.",
    feature_mobile_title: "Mobil-optimiert",
    feature_mobile_desc: "Perfekt optimiert für Smartphone und Tablet – überall und jederzeit nutzbar.",
    feature_gdpr_title: "DSGVO-konform",
    feature_gdpr_desc: "Höchste Datenschutzstandards nach deutschem und europäischem Recht.",
    
    // Blog
    blog_title: "Blog",
    blog_post_1_title: "Warum Protein für Fitness-Erfolg entscheidend ist",
    blog_post_1_excerpt: "Protein hält satt & hilft beim Muskelaufbau. Darum ist es so wichtig...",
    blog_post_2_title: "Mealprep für Anfänger", 
    blog_post_2_excerpt: "So sparen Sie Zeit & Geld mit Mealprep...",
    blog_post_3_title: "5 Tipps für gesunde Ernährung",
    blog_post_3_excerpt: "Einfache Schritte zu einem gesünderen Lebensstil...",
    read_time: "Min Lesezeit",
    view_all_posts: "Alle Beiträge ansehen",
    
    // Chat
    chat_tooltip: "Frag mich alles!",
    chat_title: "🤖 FitPause Assistent",
    chat_welcome: "Hallo! Ich bin dein FitPause-Assistent. Wie kann ich dir helfen?",
    chat_placeholder: "Stelle mir eine Frage...",
    send: "Senden",
    
    // Footer
    footer_description: "KI-gestützte Ernährungs- und Meal-Planning-Plattform",
    footer_product: "Produkt",
    footer_legal: "Rechtliches", 
    footer_support: "Support",
    impressum: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
    faq: "FAQ",
    help: "Hilfe",
    footer_rights: "Alle Rechte vorbehalten.",
    
    // Cookie Consent
    cookie_text: "Wir nutzen Cookies für bestes Nutzererlebnis. Daten & Tracking erst nach Einwilligung!",
    accept: "Akzeptieren", 
    decline: "Ablehnen"
  },
  
  en: {
    // Navigation
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_blog: "Blog", 
    nav_contact: "Contact",
    
    // Hero Section
    hero_title: "Your Smart Nutrition Plan by AI",
    hero_subtitle: "Get weekly plans & recipes tailored to your goals.",
    cta_start: "Start for free",
    trust_rating: "4.9/5 stars",
    trust_users: "10,000+ users",
    trust_secure: "GDPR compliant",
    
    // Onboarding
    onboarding_title: "Start your onboarding", 
    step: "Step",
    of: "of",
    step1_title: "What is your main goal?",
    goal_lose_weight: "Lose weight",
    goal_build_muscle: "Build muscle",
    goal_stay_fit: "Stay fit",
    goal_eat_healthy: "Eat healthier",
    step2_title: "How do you eat?",
    diet_omnivore: "Everything",
    diet_vegetarian: "Vegetarian",
    diet_vegan: "Vegan",
    diet_keto: "Keto",
    step3_title: "Do you have allergies or intolerances?",
    allergy_gluten: "Gluten",
    allergy_lactose: "Lactose",
    allergy_nuts: "Nuts",
    allergy_shellfish: "Shellfish",
    allergy_eggs: "Eggs", 
    allergy_soy: "Soy",
    allergy_fish: "Fish",
    allergy_sesame: "Sesame",
    allergy_custom: "Other allergies:",
    allergy_placeholder: "e.g. tomatoes, onions...",
    add: "Add",
    allergy_selected: "Selected:",
    step4_title: "More details",
    people_count: "Number of people:",
    cooking_time: "Cooking time per meal:",
    budget: "Budget per person/day:",
    step5_title: "Almost done!",
    step5_subtitle: "We'll send your personalized plan via email.",
    email_placeholder: "your@email.com",
    privacy_consent: "I agree to the privacy policy",
    newsletter_consent: "I want to receive the newsletter (optional)",
    prev: "Back",
    next: "Next",
    create_plan: "Create plan",
    
    // Menu Plan
    menu_title: "Your 7-Day Menu Plan",
    menu_subtitle: "New, healthy and delicious dishes every day",
    menu_monday: "Monday: Veggie Skillet",
    menu_monday_desc: "Lots of veggies, pan-seared.",
    menu_tuesday: "Tuesday: Chicken Bowl",
    menu_tuesday_desc: "High-protein & low carb.",
    menu_wednesday: "Wednesday: Vegan Chili",
    menu_wednesday_desc: "Rich & full of fiber.",
    menu_thursday: "Thursday: Salmon & Rice",
    menu_thursday_desc: "Omega-3 boost!",
    menu_friday: "Friday: Breakfast Wraps",
    menu_friday_desc: "Delicious way to start the day.",
    menu_saturday: "Saturday: LowCarb Zucchini Pasta",
    menu_saturday_desc: "Light & filling.",
    menu_sunday: "Sunday: Grill Plate Deluxe",
    menu_sunday_desc: "Meat or vegan—your choice!",
    
    // Chat
    chat_tooltip: "Ask me anything!",
    chat_title: "🤖 FitPause Assistant",
    chat_welcome: "Hello! I'm your FitPause assistant. How can I help you?",
    chat_placeholder: "Ask me a question...",
    send: "Send",
    
    // Cookie Consent
    cookie_text: "We use cookies for the best user experience. Data & tracking only after consent!",
    accept: "Accept",
    decline: "Decline"
  },
  
  es: {
    // Navigation
    nav_features: "Características",
    nav_pricing: "Precios", 
    nav_blog: "Blog",
    nav_contact: "Contacto",
    
    // Hero Section
    hero_title: "Tu Plan Nutricional Inteligente por IA",
    hero_subtitle: "Obtén planes semanales y recetas adaptadas a tus objetivos.",
    cta_start: "Comenzar gratis",
    trust_rating: "4.9/5 estrellas",
    trust_users: "10,000+ usuarios",
    trust_secure: "Conforme RGPD",
    
    // Chat
    chat_tooltip: "¡Pregúntame lo que sea!",
    chat_title: "🤖 Asistente FitPause",
    chat_welcome: "¡Hola! Soy tu asistente de FitPause. ¿Cómo puedo ayudarte?",
    chat_placeholder: "Hazme una pregunta...",
    send: "Enviar",
    
    // Cookie Consent
    cookie_text: "¡Usamos cookies para la mejor experiencia de usuario. Datos y seguimiento solo después del consentimiento!",
    accept: "Aceptar",
    decline: "Rechazar"
  },
  
  fr: {
    // Navigation
    nav_features: "Fonctionnalités",
    nav_pricing: "Prix",
    nav_blog: "Blog", 
    nav_contact: "Contact",
    
    // Hero Section
    hero_title: "Votre Plan Nutritionnel Intelligent par IA",
    hero_subtitle: "Obtenez des plans hebdomadaires et recettes adaptés à vos objectifs.",
    cta_start: "Commencer gratuitement",
    trust_rating: "4.9/5 étoiles",
    trust_users: "10,000+ utilisateurs",
    trust_secure: "Conforme RGPD",
    
    // Chat
    chat_tooltip: "Demandez-moi tout!",
    chat_title: "🤖 Assistant FitPause", 
    chat_welcome: "Bonjour! Je suis votre assistant FitPause. Comment puis-je vous aider?",
    chat_placeholder: "Posez-moi une question...",
    send: "Envoyer",
    
    // Cookie Consent
    cookie_text: "Nous utilisons des cookies pour la meilleure expérience utilisateur. Données et suivi seulement après consentement!",
    accept: "Accepter",
    decline: "Refuser"
  }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  // Detect browser language
  detectLanguage();
  
  // Initialize UI
  initializeUI();
  
  // Show cookie consent if not accepted
  showCookieConsentIfNeeded();
  
  // Initialize admin bypass
  checkAdminBypass();
});

// ===== LANGUAGE FUNCTIONS =====
function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('fitpause-language');
  const browserLang = navigator.language.slice(0, 2);
  
  if (urlLang && translations[urlLang]) {
    currentLanguage = urlLang;
  } else if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
  } else if (translations[browserLang]) {
    currentLanguage = browserLang;
  } else {
    currentLanguage = 'de'; // fallback
  }
  
  switchLanguage(currentLanguage);
}

function switchLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLanguage = lang;
  localStorage.setItem('fitpause-language', lang);
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  // Update all translated texts
  updateTexts();
  
  // Update document language
  document.documentElement.lang = lang;
  
  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

function updateTexts() {
  const texts = translations[currentLanguage];
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (texts[key]) {
      element.textContent = texts[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (texts[key]) {
      element.placeholder = texts[key];
    }
  });
}

// ===== UI INITIALIZATION =====
function initializeUI() {
  updateTexts();
  updateProgressBar();
  updateStepUI();
  
  // Initialize parallax effect
  initializeParallax();
}

function initializeParallax() {
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      heroImage.style.transform = `translateY(${rate}px)`;
    });
  }
}

// ===== MOBILE MENU FUNCTIONS =====
function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  
  if (navMenu && navToggle) {
    navMenu.classList.toggle('show');
    navToggle.classList.toggle('active');
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  
  if (navMenu && navToggle && navMenu.classList.contains('show') && 
      !navMenu.contains(event.target) && 
      !navToggle.contains(event.target)) {
    navMenu.classList.remove('show');
    navToggle.classList.remove('active');
  }
});

// ===== ONBOARDING FUNCTIONS =====
function startOnboarding() {
  const modal = document.getElementById('onboarding-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Reset to first step
    currentStep = 1;
    showCurrentStep();
    updateProgressBar();
  }
}

function closeOnboarding() {
  const modal = document.getElementById('onboarding-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
}

function nextStep() {
  if (validateCurrentStep()) {
    if (currentStep < totalSteps) {
      document.getElementById(`step-${currentStep}`).classList.remove('active');
      currentStep++;
      document.getElementById(`step-${currentStep}`).classList.add('active');
      updateStepUI();
      updateProgressBar();
    }
  } else {
    showValidationError();
  }
}

function previousStep() {
  if (currentStep > 1) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    currentStep--;
    document.getElementById(`step-${currentStep}`).classList.add('active');
    updateStepUI();
    updateProgressBar();
  }
}

function showCurrentStep() {
  // Hide all steps
  document.querySelectorAll('.onboarding-step').forEach(step => {
    step.classList.remove('active');
  });
  
  // Show current step
  const currentStepElement = document.getElementById(`step-${currentStep}`);
  if (currentStepElement) {
    currentStepElement.classList.add('active');
  }
}

function updateStepUI() {
  const currentStepSpan = document.getElementById('current-step');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');
  
  if (currentStepSpan) {
    currentStepSpan.textContent = currentStep;
  }
  
  if (prevBtn) {
    prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
  }
  
  if (nextBtn && submitBtn) {
    if (currentStep === totalSteps) {
      nextBtn.style.display = 'none';
      submitBtn.style.display = 'block';
    } else {
      nextBtn.style.display = 'block';
      submitBtn.style.display = 'none';
    }
  }
}

function updateProgressBar() {
  const progressFill = document.getElementById('progress-fill');
  if (progressFill) {
    const percentage = (currentStep / totalSteps) * 100;
    progressFill.style.width = `${percentage}%`;
  }
}

function validateCurrentStep() {
  switch (currentStep) {
    case 1:
      return selectedGoal !== '';
    case 2:
      return selectedDiet !== '';
    case 3:
      return true; // Allergies are optional
    case 4:
      return validateDetails();
    case 5:
      return validateEmail();
    default:
      return true;
  }
}

function validateDetails() {
  const peopleCount = document.getElementById('people-count')?.value;
  const cookingTime = document.getElementById('cooking-time')?.value;
  const budget = document.getElementById('budget')?.value;
  
  return peopleCount && cookingTime && budget;
}

function validateEmail() {
  const email = document.getElementById('user-email')?.value;
  const privacyConsent = document.getElementById('privacy-consent')?.checked;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email && emailRegex.test(email) && privacyConsent;
}

function showValidationError() {
  let message = 'Bitte füllen Sie alle erforderlichen Felder aus.';
  
  if (currentLanguage === 'en') {
    message = 'Please fill in all required fields.';
  } else if (currentLanguage === 'es') {
    message = 'Por favor, complete todos los campos requeridos.';
  } else if (currentLanguage === 'fr') {
    message = 'Veuillez remplir tous les champs requis.';
  }
  
  alert(message);
}

// ===== OPTION SELECTION =====
function selectOption(element) {
  const parent = element.closest('.onboarding-step');
  if (!parent) return;
  
  // Remove selected class from siblings
  parent.querySelectorAll('.option-btn').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Add selected class to clicked element
  element.classList.add('selected');
  
  // Store selection based on current step
  if (currentStep === 1) {
    selectedGoal = element.dataset.goal || '';
  } else if (currentStep === 2) {
    selectedDiet = element.dataset.diet || '';
  }
}

// ===== ALLERGY FUNCTIONS =====
function toggleAllergy(element) {
  const allergy = element.dataset.allergy;
  if (!allergy) return;
  
  if (element.classList.contains('selected')) {
    // Remove allergy
    element.classList.remove('selected');
    selectedAllergies = selectedAllergies.filter(a => a !== allergy);
  } else {
    // Add allergy
    element.classList.add('selected');
    if (!selectedAllergies.includes(allergy)) {
      selectedAllergies.push(allergy);
    }
  }
  
  updateAllergyTags();
}

function addCustomAllergy() {
  const input = document.getElementById('custom-allergy-input');
  if (!input) return;
  
  const customAllergy = input.value.trim();
  
  if (customAllergy && !selectedAllergies.includes(customAllergy)) {
    selectedAllergies.push(customAllergy);
    input.value = '';
    updateAllergyTags();
  }
}

function updateAllergyTags() {
  const container = document.getElementById('allergy-tags');
  if (!container) return;
  
  container.innerHTML = selectedAllergies.map(allergy => 
    `<div class="allergy-tag">
      ${allergy}
      <button onclick="removeAllergy('${allergy}')" type="button">×</button>
    </div>`
  ).join('');
  
  // Show/hide selected section
  const selectedSection = document.getElementById('selected-allergies');
  if (selectedSection) {
    selectedSection.style.display = selectedAllergies.length > 0 ? 'block' : 'none';
  }
}

function removeAllergy(allergy) {
  selectedAllergies = selectedAllergies.filter(a => a !== allergy);
  
  // Update button state
  const allergyBtn = document.querySelector(`[data-allergy="${allergy}"]`);
  if (allergyBtn) {
    allergyBtn.classList.remove('selected');
  }
  
  updateAllergyTags();
}

// ===== FORM SUBMISSION =====
function submitOnboarding() {
  if (!validateCurrentStep()) {
    showValidationError();
    return;
  }
  
  // Collect all data
  const formData = {
    goal: selectedGoal,
    diet: selectedDiet,
    allergies: selectedAllergies,
    peopleCount: document.getElementById('people-count')?.value || '',
    cookingTime: document.getElementById('cooking-time')?.value || '',
    budget: document.getElementById('budget')?.value || '',
    email: document.getElementById('user-email')?.value || '',
    newsletter: document.getElementById('newsletter-consent')?.checked || false,
    timestamp: new Date().toISOString(),
    language: currentLanguage
  };
  
  // Store data locally (for demo purposes)
  localStorage.setItem('fitpause-userdata', JSON.stringify(formData));
  
  // Simulate API call
  simulateApiCall(formData);
}

function simulateApiCall(data) {
  // Show loading state
  const submitBtn = document.getElementById('submit-btn');
  if (!submitBtn) return;
  
  const originalText = submitBtn.textContent;
  
  let loadingText = 'Erstelle Plan...';
  if (currentLanguage === 'en') loadingText = 'Creating plan...';
  if (currentLanguage === 'es') loadingText = 'Creando plan...';
  if (currentLanguage === 'fr') loadingText = 'Création du plan...';
  
  submitBtn.textContent = loadingText;
  submitBtn.disabled = true;
  
  // Simulate network delay
  setTimeout(() => {
    // Show success message
    showSuccessMessage();
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    
    // Close modal
    closeOnboarding();
  }, 2000);
}

function showSuccessMessage() {
  let message = `🎉 Ihr personalisierter Plan wurde erstellt!

📧 Sie erhalten in Kürze eine E-Mail mit:
• Ihrem 7-Tage-Menüplan
• Einkaufsliste
• Personalisierten Tipps

Vielen Dank für Ihr Vertrauen in FitPause!`;

  if (currentLanguage === 'en') {
    message = `🎉 Your personalized plan has been created!

📧 You will shortly receive an email with:
• Your 7-day menu plan
• Shopping list
• Personalized tips

Thank you for trusting FitPause!`;
  } else if (currentLanguage === 'es') {
    message = `🎉 ¡Tu plan personalizado ha sido creado!

📧 Recibirás pronto un email con:
• Tu plan de menú de 7 días
• Lista de compras
• Consejos personalizados

¡Gracias por confiar en FitPause!`;
  } else if (currentLanguage === 'fr') {
    message = `🎉 Votre plan personnalisé a été créé!

📧 Vous recevrez bientôt un email avec:
• Votre plan de menu de 7 jours
• Liste de courses
• Conseils personnalisés

Merci de faire confiance à FitPause!`;
  }
  
  alert(message);
}

// ===== CHAT FUNCTIONS =====
function toggleChat() {
  const chatWindow = document.getElementById('chat-window');
  if (!chatWindow) return;
  
  if (chatWindow.classList.contains('hidden')) {
    chatWindow.classList.remove('hidden');
    chatWindow.classList.add('show');
  } else {
    chatWindow.classList.add('hidden');
    chatWindow.classList.remove('show');
  }
}

function handleChatInput(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  
  const message = input.value.trim();
  
  if (message) {
    addChatMessage(message, 'user');
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
      const response = generateChatResponse(message);
      addChatMessage(response, 'bot');
    }, 1000);
  }
}

function addChatMessage(message, type) {
  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message', type);
  messageDiv.textContent = message;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateChatResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // German responses
  if (currentLanguage === 'de') {
    if (message.includes('preis') || message.includes('kosten') || message.includes('€')) {
      return 'Unser Pro-Plan kostet 9,90€ pro Monat. Der kostenlose Plan ist unbegrenzt verfügbar! 💰';
    }
    
    if (message.includes('allergi')) {
      return 'Wir unterstützen alle gängigen Allergien und Unverträglichkeiten. Sie können diese bei der Anmeldung detailliert angeben. 🥜';
    }
    
    if (message.includes('rezept')) {
      return 'Unsere KI erstellt personalisierte Rezepte basierend auf Ihren Zielen und Vorlieben! Über 10.000 Rezepte verfügbar. 🍳';
    }
    
    if (message.includes('kündig') || message.includes('cancel')) {
      return 'Sie können Ihr Abo jederzeit monatlich kündigen. Keine Mindestlaufzeit! ✅';
    }
    
    if (message.includes('hilf') || message.includes('help')) {
      return 'Gerne helfe ich Ihnen! Fragen Sie mich zu Preisen, Rezepten, Allergien oder unserem Service. 😊';
    }
    
    return 'Das ist eine interessante Frage! Für detaillierte Informationen empfehle ich Ihnen unseren kostenlosen Test. Haben Sie weitere Fragen zu unserem Service?';
  }
  
  // English responses
  if (currentLanguage === 'en') {
    if (message.includes('price') || message.includes('cost') || message.includes('€') || message.includes('$')) {
      return 'Our Pro plan costs €9.90 per month. The free plan is available unlimited! 💰';
    }
    
    if (message.includes('allerg')) {
      return 'We support all common allergies and intolerances. You can specify these in detail during registration. 🥜';
    }
    
    if (message.includes('recipe')) {
      return 'Our AI creates personalized recipes based on your goals and preferences! Over 10,000 recipes available. 🍳';
    }
    
    if (message.includes('cancel')) {
      return 'You can cancel your subscription monthly at any time. No minimum contract! ✅';
    }
    
    if (message.includes('help')) {
      return 'I\'m happy to help you! Ask me about pricing, recipes, allergies or our service. 😊';
    }
    
    return 'That\'s an interesting question! For detailed information I recommend trying our free service. Do you have more questions about our service?';
  }
  
  // Spanish responses
  if (currentLanguage === 'es') {
    if (message.includes('precio') || message.includes('costo') || message.includes('€')) {
      return 'Nuestro plan Pro cuesta €9.90 por mes. ¡El plan gratuito está disponible sin límite! 💰';
    }
    
    if (message.includes('alergi')) {
      return 'Apoyamos todas las alergias e intolerancias comunes. Puedes especificarlas detalladamente durante el registro. 🥜';
    }
    
    if (message.includes('receta')) {
      return '¡Nuestra IA crea recetas personalizadas basadas en tus objetivos y preferencias! Más de 10,000 recetas disponibles. 🍳';
    }
    
    if (message.includes('cancelar')) {
      return 'Puedes cancelar tu suscripción mensualmente en cualquier momento. ¡Sin contrato mínimo! ✅';
    }
    
    if (message.includes('ayud')) {
      return '¡Estoy feliz de ayudarte! Pregúntame sobre precios, recetas, alergias o nuestro servicio. 😊';
    }
    
    return '¡Esa es una pregunta interesante! Para información detallada recomiendo probar nuestro servicio gratuito. ¿Tienes más preguntas sobre nuestro servicio?';
  }
  
  // French responses
  if (currentLanguage === 'fr') {
    if (message.includes('prix') || message.includes('coût') || message.includes('€')) {
      return 'Notre plan Pro coûte 9,90€ par mois. Le plan gratuit est disponible sans limite! 💰';
    }
    
    if (message.includes('allergi')) {
      return 'Nous supportons toutes les allergies et intolérances communes. Vous pouvez les spécifier en détail lors de l\'inscription. 🥜';
    }
    
    if (message.includes('recette')) {
      return 'Notre IA crée des recettes personnalisées basées sur vos objectifs et préférences! Plus de 10,000 recettes disponibles. 🍳';
    }
    
    if (message.includes('annuler')) {
      return 'Vous pouvez annuler votre abonnement mensuellement à tout moment. Pas de contrat minimum! ✅';
    }
    
    if (message.includes('aide')) {
      return 'Je suis heureux de vous aider! Demandez-moi au sujet des prix, recettes, allergies ou notre service. 😊';
    }
    
    return 'C\'est une question intéressante! Pour des informations détaillées, je recommande d\'essayer notre service gratuit. Avez-vous d\'autres questions sur notre service?';
  }
  
  // Default fallback
  return 'Thank you for your question! Please try our free service for more information. 😊';
}

// ===== PRICING FUNCTIONS =====
function upgradeToPro() {
  // Check if admin bypass is active
  if (checkAdminBypass()) {
    let message = '🔓 Admin-Zugang erkannt! Pro-Features sind freigeschaltet.';
    if (currentLanguage === 'en') message = '🔓 Admin access detected! Pro features are unlocked.';
    if (currentLanguage === 'es') message = '🔓 ¡Acceso de administrador detectado! Las funciones Pro están desbloqueadas.';
    if (currentLanguage === 'fr') message = '🔓 Accès administrateur détecté! Les fonctionnalités Pro sont débloquées.';
    
    alert(message);
    return;
  }
  
  // For demo, show info
  let message = `🚀 Upgrade zu FitPause Pro

• Unbegrenzte Rezepte
• KI-Chat-Assistent  
• Erweiterte Allergie-Filter
• Nährwertangaben

Preis: 9,90€/Monat
Jederzeit kündbar

Demo-Modus aktiv.`;

  if (currentLanguage === 'en') {
    message = `🚀 Upgrade to FitPause Pro

• Unlimited recipes
• AI Chat Assistant
• Advanced allergy filters  
• Nutritional information

Price: €9.90/month
Cancel anytime

Demo mode active.`;
  }
  
  alert(message);
}

// ===== ADMIN FUNCTIONS =====
function checkAdminBypass() {
  const urlParams = new URLSearchParams(window.location.search);
  const adminKey = urlParams.get('admin');
  
  if (adminKey === 'wizard2025') {
    document.body.classList.add('admin-mode');
    localStorage.setItem('fitpause-admin', 'true');
    return true;
  }
  
  return localStorage.getItem('fitpause-admin') === 'true';
}

// ===== COOKIE FUNCTIONS =====
function showCookieConsentIfNeeded() {
  const cookieConsent = localStorage.getItem('fitpause-cookies');
  
  if (!cookieConsent) {
    const consentDiv = document.getElementById('cookie-consent');
    if (consentDiv) {
      consentDiv.classList.add('show');
    }
  }
}

function acceptCookies() {
  localStorage.setItem('fitpause-cookies', 'accepted');
  const consentDiv = document.getElementById('cookie-consent');
  if (consentDiv) {
    consentDiv.classList.remove('show');
  }
}

function declineCookies() {
  localStorage.setItem('fitpause-cookies', 'declined');
  const consentDiv = document.getElementById('cookie-consent');
  if (consentDiv) {
    consentDiv.classList.remove('show');
  }
}

// ===== EVENT LISTENERS =====
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('onboarding-modal');
  
  if (modal && modal.classList.contains('show') && event.target === modal) {
    closeOnboarding();
  }
});

// ===== EXPORT FOR GLOBAL ACCESS =====
window.FitPause = {
  switchLanguage,
  startOnboarding,
  closeOnboarding,
  nextStep,
  previousStep,
  selectOption,
  toggleAllergy,
  addCustomAllergy,
  removeAllergy,
  submitOnboarding,
  toggleChat,
  sendChatMessage,
  handleChatInput,
  upgradeToPro,
  acceptCookies,
  declineCookies,
  checkAdminBypass,
  toggleMobileMenu
};

// ===== INITIALIZATION LOG =====
console.log('🍽️ FitPause initialized successfully!');
console.log('🌍 Language detection active');
console.log('📱 Mobile support: Ready');
console.log('🤖 Chat assistant: Ready');
console.log('🎯 Onboarding system: Ready');
console.log('🔧 Admin bypass: Available via ?admin=wizard2025');

// ===== FAQ MODAL FUNCTIONS =====
function openFAQModal(type) {
    const modal = document.getElementById('faq-modal') || createFAQModal();
    const title = document.getElementById('faq-modal-title');
    const body = document.getElementById('faq-modal-body');
    
    if (type === 'testphase') {
        title.textContent = 'FAQ: Testphase und Storno';
        body.innerHTML = `
            <div class="faq-content">
                <h3>Wie funktioniert die kostenlose Testphase?</h3>
                <p>Die Basis-Version von FitPause ist dauerhaft kostenlos und bietet Ihnen 3 Rezepte pro Woche plus Grundfunktionen. Sie können jederzeit auf Pro upgraden.</p>
                
                <h3>Gibt es eine Geld-zurück-Garantie?</h3>
                <p>Ja! Wenn Sie mit FitPause Pro nicht zufrieden sind, erhalten Sie in den ersten 14 Tagen Ihr Geld vollständig zurück - ohne Nachfragen.</p>
                
                <h3>Wie kann ich das Pro-Abo kündigen?</h3>
                <p>Sie können Ihr Pro-Abonnement jederzeit über Ihr Benutzerkonto oder per E-Mail an info@fitpause.de kündigen. Die Kündigung wird zum Ende des aktuellen Abrechnungszeitraums wirksam.</p>
                
                <h3>Was passiert nach der Kündigung?</h3>
                <p>Nach der Kündigung bleibt Ihr Account bestehen und Sie können die kostenlosen Features weiterhin nutzen. Alle Ihre gespeicherten Daten und Präferenzen bleiben erhalten.</p>
                
                <h3>Fallen versteckte Kosten an?</h3>
                <p>Nein! Es gibt keine Einrichtungsgebühren, keine versteckten Kosten und keine Kündigungsgebühren. Sie zahlen nur den monatlichen Abo-Preis von 9,90€.</p>
                
                <h3>Kann ich zwischen den Plänen wechseln?</h3>
                <p>Ja, Sie können jederzeit von der kostenlosen Version auf Pro upgraden oder von Pro zur kostenlosen Version downgraden.</p>
                
                <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                    <h4>💡 Unser Tipp</h4>
                    <p>Starten Sie mit der kostenlosen Version und testen Sie FitPause ausgiebig. Wenn Sie mehr Features brauchen, können Sie jederzeit upgraden!</p>
                </div>
            </div>
        `;
    } else if (type === 'plan') {
        title.textContent = 'FAQ: Wie funktioniert der Plan?';
        body.innerHTML = `
            <div class="faq-content">
                <h3>Wie wird mein Plan erstellt?</h3>
                <p>Unsere KI analysiert Ihre Angaben aus dem 5-Schritte Onboarding (Ziele, Ernährungsweise, Allergien, etc.) und erstellt daraus einen personalisierten 7-Tage Ernährungsplan.</p>
                
                <h3>Was ist in meinem Plan enthalten?</h3>
                <p>Ihr Plan enthält:</p>
                <ul>
                    <li>7 Tage detaillierte Mahlzeitenpläne</li>
                    <li>Vollständige Rezepte mit Anleitung</li>
                    <li>Nährwertangaben pro Gericht</li>
                    <li>Automatische Einkaufsliste (Pro)</li>
                    <li>Anpassungen bei Allergien/Unverträglichkeiten</li>
                </ul>
                
                <h3>Wie erhalte ich meinen Plan?</h3>
                <p>Nach dem Onboarding erhalten Sie Ihren Plan per E-Mail als übersichtliche PDF-Datei. Pro-Nutzer haben zusätzlich Zugriff auf die Web-App.</p>
                
                <h3>Kann ich den Plan anpassen?</h3>
                <p>Ja! Pro-Nutzer können Rezepte austauschen, Portionen anpassen und neue Variationen generieren lassen. Kostenlose Nutzer erhalten jeden Montag einen neuen 3-Tage-Plan.</p>
                
                <h3>Berücksichtigt der Plan meine Allergien?</h3>
                <p>Absolut! Unser intelligenter Allergiefilter sorgt dafür, dass nur Rezepte ausgewählt werden, die für Sie sicher sind. Sie können beliebig viele Allergien und Unverträglichkeiten angeben.</p>
                
                <h3>Wie oft bekomme ich neue Pläne?</h3>
                <p>Kostenlose Nutzer erhalten jeden Montag automatisch einen neuen 3-Tage-Plan. Pro-Nutzer können jederzeit neue 7-Tage-Pläne generieren lassen.</p>
                
                <h3>Funktioniert es für mehrere Personen?</h3>
                <p>Ja! Sie können im Onboarding angeben, für wie viele Personen (1-4+) der Plan erstellt werden soll. Die Einkaufsliste und Portionen werden automatisch angepasst.</p>
                
                <div style="background: #f0f7ff; padding: 1.5rem; border-radius: 8px; margin-top: 2rem;">
                    <h4>🎯 Beispiel-Woche</h4>
                    <p>Ein typischer FitPause Plan könnte enthalten: Quinoa-Bowl (Mo), Linsen-Curry (Di), Buddha Bowl (Mi), Pasta Primavera (Do), Veggie-Burger (Fr), Ratatouille (Sa), Shakshuka (So) - alles angepasst an Ihre Wünsche!</p>
                </div>
            </div>
        `;
    }
    
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function createFAQModal() {
    const modal = document.createElement('div');
    modal.id = 'faq-modal';
    modal.className = 'modal hidden';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="faq-modal-title">FAQ</h2>
                <button class="modal-close" onclick="closeFAQModal()">&times;</button>
            </div>
            <div class="modal-body" id="faq-modal-body">
                <!-- Content wird hier eingefügt -->
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function closeFAQModal() {
    const modal = document.getElementById('faq-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('faq-modal');
    if (modal && modal.classList.contains('show') && event.target === modal) {
        closeFAQModal();
    }
});

// Export functions for global access
window.openFAQModal = openFAQModal;
window.closeFAQModal = closeFAQModal;
