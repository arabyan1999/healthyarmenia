import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// import useMount from '@hooks/use-mount';

// export const useInitI18n = () => {
//   useMount(() => {
    i18next
      .use(HttpApi)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        supportedLngs: ['en', 'am', 'ru'],
        fallbackLng: 'am',
        debug: false,
        detection: {
          order: ['path', 'cookie', 'htmlTag'],
          caches: ['cookie'],
        },
        backend: {
          loadPath: '/locales/{{lng}}/translation.json',
        },
      });
//   });
// };

export default i18next;
