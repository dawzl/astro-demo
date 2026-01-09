export const locales = {
  en: 'English',
  tc: '繁體中文',
  sc: '简体中文',
};

export const defaultLocale = 'en';

export const navTranslations = {
  en: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    tags: 'Tags',
    languages: 'Languages',
  },
  tc: {
    home: '首頁',
    about: '關於',
    blog: '部落格',
    tags: '標籤',
    languages: '語言',
  },
  sc: {
    home: '首页',
    about: '关于',
    blog: '博客',
    tags: '标签',
    languages: '语言',
  },
};

export function getNavText(locale: string | undefined, key: keyof typeof navTranslations.en): string {
  const currentLocale = (locale || defaultLocale) as keyof typeof navTranslations;
  return navTranslations[currentLocale]?.[key] || navTranslations.en[key];
}
