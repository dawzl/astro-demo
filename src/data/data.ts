export const locales = {
  en: 'English',
  tc: '繁體中文',
  sc: '简体中文',
};

export const defaultLocale = 'en';

export const menu = [
  {
    "name":"home",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"Home",
      "tc":"首頁",
      "sc":"首页",
    } 
  } ,    
  {
    "name":"about",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"About",
      "tc":"關於",
      "sc":"关于",
    } 
  } ,  
  {
    "name":"blog",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"Blog",
      "tc":"部落格",
      "sc":"博客",
    } 
  } ,  
  {
    "name":"tags",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"Tags",
      "tc":"標籤",
      "sc":"标签",
    } 
  } ,  
  {
    "name":"posts",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"Posts",
      "tc":"貼文",
      "sc":"文章",
    } 
  } 
]
export const breadcrumb = [
  {
    "name":"home",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"Home",
      "tc":"首頁",
      "sc":"首页",
    } 
  } ,    
  {
    "name":"about",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"About",
      "tc":"關於",
      "sc":"关于",
    } 
  } ,  
  {
    "name":"blog",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"Blog",
      "tc":"部落格",
      "sc":"博客",
    } 
  } ,  
  {
    "name":"tags",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"Tags",
      "tc":"標籤",
      "sc":"标签",
    } 
  } ,  
  {
    "name":"posts",
    "path":"/",
    "target":"_self",
    "label":{
      "en":"Posts",
      "tc":"貼文",
      "sc":"文章",
    } 
  } 
]

export const navTranslations = {
  en: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    tags: 'Tags',
    languages: 'Languages',
    posts: 'Posts',
  },
  tc: {
    home: '首頁',
    about: '關於',
    blog: '部落格',
    tags: '標籤',
    languages: '語言',
    posts: '貼文',
  },
  sc: {
    home: '首页',
    about: '关于',
    blog: '博客',
    tags: '标签',
    languages: '语言',
    posts: '文章',
  },
};

export function getNavText(locale: string | undefined, key: keyof typeof navTranslations.en): string {
  const currentLocale = (locale || defaultLocale) as keyof typeof navTranslations;
  return navTranslations[currentLocale]?.[key] || navTranslations.en[key];
}
