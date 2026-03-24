import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';

export default getRequestConfig(async () => {
  // Read accept-language header
  let locale = 'es'; // default locale in Planifit
  
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  
  if (acceptLanguage) {
    if (acceptLanguage.includes('en')) {
      locale = 'en';
    } else if (acceptLanguage.includes('es')) {
      locale = 'es';
    }
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
