export const fallbackLng = 'en'
export const languages = [fallbackLng, 'fr']
export const defaultNS = 'translation'
export const languageOptions = [
  { value: 'Français', label: 'fr' },
  { value: 'English', label: 'en' },
  { value: 'Español', label: 'es'},

]

export const languageDict = { 
  'fr': 'Français',
  'en':'English',
  'es': 'Español'
}


export function getOptions (lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  }
}