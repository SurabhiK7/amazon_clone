import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Amazon Clone',
      search: 'Search products...',
      cart: 'Cart',
      signin: 'Hello, sign in',
      account: 'Account & Lists',
      returns:'Returns',
      orders: ' & Orders',
      apply: 'Apply',
      selectLanguage: 'Select Language',
    }
  },
  hi: {
    translation: {
      welcome: 'अमेज़न क्लोन में आपका स्वागत है',
      search: 'उत्पाद खोजें...',
      cart: 'कार्ट',
      signin: 'नमस्ते, साइन इन करें',
      account: 'खाता और सूचियाँ',
      returns:'रिटर्न',
      orders: ' और ऑर्डर',
      apply: 'लागू करें',
      selectLanguage: 'भाषा चुनें',
      Delivering:'डिलीवरी स्थान'
      // add more translations
    }
  },
kn: {
  translation: {
    welcome: 'ಅಮೆಜಾನ್ ಕ್ಲೋನ್‌ಗೆ ಸ್ವಾಗತ',
    All :'ಎಲ್ಲಾ ವರ್ಗಗಳ ',
    search: 'ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ...',
    cart: 'ಕಾರ್ಟ್',
    signin: 'ಹಲೋ, ಸೈನ್ ಇನ್ ಮಾಡಿ',
    account: 'ಖಾತೆ ಮತ್ತು ಪಟ್ಟಿ',
    returns:'ರಿಟರ್ನ್',
    orders: ' ಮತ್ತು ಆರ್ಡರ್‌ಗಳು',
    apply: 'ಅನ್ವಯಿಸಿ',
    selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
  }
}
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
