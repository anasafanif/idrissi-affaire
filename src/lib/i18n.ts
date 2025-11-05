import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from '../locales/en.json';
import frTranslations from '../locales/fr.json';
import arTranslations from '../locales/ar.json';
import itTranslations from '../locales/it.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  ar: {
    translation: arTranslations,
  },
  it: {
    translation: itTranslations,
  },
};

// Function to detect and map browser language to supported languages
const detectBrowserLanguage = (): string => {
  // Get browser language
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  
  // Map browser language to supported languages
  const langCode = browserLang.toLowerCase().split('-')[0]; // Get base language code (e.g., 'en' from 'en-US')
  
  // Supported languages
  const supportedLanguages = ['en', 'fr', 'ar', 'it'];
  
  // Check if the base language is supported
  if (supportedLanguages.includes(langCode)) {
    return langCode;
  }
  
  // Check for full language codes (e.g., 'fr-FR', 'ar-MA', 'it-IT')
  const fullLang = browserLang.toLowerCase();
  if (fullLang.startsWith('fr')) return 'fr';
  if (fullLang.startsWith('ar')) return 'ar';
  if (fullLang.startsWith('it')) return 'it';
  
  // Default to English if not supported
  return 'en';
};

// Initialize i18n with browser language detection
const detectedLanguage = detectBrowserLanguage();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: detectedLanguage, // Set initial language from browser
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true,
    },
    
    supportedLngs: ['en', 'fr', 'ar', 'it'],

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

// Set document direction and language based on detected language
const setDocumentLanguage = (lang: string) => {
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }
};

// Set initial document language
setDocumentLanguage(detectedLanguage);

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  setDocumentLanguage(lng);
});

export default i18n;
