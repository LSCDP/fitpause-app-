// Fitpause App JavaScript
let currentLanguage = 'de';

// Übersetzungen
const translations = {
  de: {...},
  en: {...},
  es: {...},
  fr: {...}
};
// Sprache wechseln
function switchLanguage(lang) {
  currentLanguage = lang;
  updateUI();
  localStorage.setItem('fitpause-language', lang);
}
function updateUI() {
  const elements = {
    'hero-title': 'hero_title',
    'hero-subtitle': 'hero_subtitle',
    'get-started': 'get_started'
  };
  Object.keys(elements).forEach(elementId => {
    const element = document.getElementById(elementId);
    const translationKey = elements[elementId];
    if (element && translations[currentLanguage][translationKey]) {
      element.textContent = translations[currentLanguage][translationKey];
    }
  });
}
function showQuestionnaire() {
  document.getElementById('questionnaire').style.display = 'block';
  document.querySelector('.hero').style.display = 'none';
}
function toggleChat() {
  alert('KI-Chat-Assistent: Hallo! Wie kann ich Ihnen helfen?');
}
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('fitpause-language');
  if (savedLang) {
    currentLanguage = savedLang;
    updateUI();
  }
  const form = document.getElementById('user-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('questionnaire').style.display = 'none';
      document.getElementById('meal-plan').style.display = 'block';
    });
  }
});
let selectedAllergies = [];
function toggleAllergy(allergy, event) {
  const button = event.target;
  if (selectedAllergies.includes(allergy)) {
    selectedAllergies = selectedAllergies.filter(a => a !== allergy);
    button.classList.remove('selected');
  } else {
    selectedAllergies.push(allergy);
    button.classList.add('selected');
  }
  updateAllergyDisplay();
}
function addCustomAllergy() {
  const input = document.getElementById('custom-allergy');
  const customAllergy = input.value.trim();
  if (customAllergy && !selectedAllergies.includes(customAllergy)) {
    selectedAllergies.push(customAllergy);
    input.value = '';
    updateAllergyDisplay();
  }
}
function updateAllergyDisplay() {
  const tagsContainer = document.getElementById('allergy-tags');
  const hiddenInput = document.getElementById('allergies-hidden');
  tagsContainer.innerHTML = selectedAllergies.map(allergy => `<span class="allergy-tag">${allergy}</span>`).join('');
  hiddenInput.value = selectedAllergies.join(', ');
}
function removeAllergy(allergy) {
  selectedAllergies = selectedAllergies.filter(a => a !== allergy);
  const button = document.querySelector(`[onclick="toggleAllergy('${allergy}', event)"]`);
  if (button) {
    button.classList.remove('selected');
  }
  updateAllergyDisplay();
}
