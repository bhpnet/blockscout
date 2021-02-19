import moment from 'moment'
import numeral from 'numeral'
import 'numeral/locales'

export let locale= localStorage.getItem('locale')||'en'
export const enLocale = 'en'

moment.locale(enLocale)
numeral.locale(enLocale)
