import dayjs from 'dayjs'
import nl from 'dayjs/locale/nl.js'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import duration from 'dayjs/plugin/duration.js'
import isBetween from 'dayjs/plugin/isBetween.js'
import isoWeek from 'dayjs/plugin/isoWeek'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js'
import isToday from 'dayjs/plugin/isToday.js'
import localeData from 'dayjs/plugin/localeData.js'
import updateLocale from 'dayjs/plugin/updateLocale.js'
import utc from 'dayjs/plugin/utc.js'
import weekOfYear from 'dayjs/plugin/weekOfYear.js'

import { i18nPlugin } from '@/plugins/i18n/i18n.plugin'

dayjs.extend(updateLocale)
dayjs.updateLocale(i18nPlugin.global.locale.value, { weekStart: 1 })

dayjs.extend(weekOfYear)
dayjs.extend(localeData)
dayjs.extend(customParseFormat)
dayjs.extend(isBetween)
dayjs.extend(duration)
dayjs.extend(isToday)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(utc)
dayjs.locale(nl)
dayjs.extend(isoWeek)

export default dayjs
