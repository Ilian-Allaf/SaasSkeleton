import { useTranslation } from '@/i18n/client'


export function changeLanguage (lang: string){
    const { i18n } = useTranslation()
    i18n.changeLanguage(lang)
}