import { useI18n } from 'vue-i18n'

import dayjs from '@/plugins/dayjs/dayjs.plugin'

interface UseLocalizedDateFormatReturnType {
  /**
   * @param date The date to format.
   * @returns E.g. 2024-01-01
   */
  toDate: (date: Date) => string
  /**
   * @param date The date to format.
   * @returns E.g. 01 January 2024
   */
  toLongDate: (date: Date) => string
  /**
   * @param date The date to format.
   * @returns E.g. 01/01/2024
   */
  toNumericDate: (date: Date) => string
  /**
   * @param date The date to format.
   * @returns E.g. Jan 01, 2024
   */
  toShortDate: (date: Date) => string
  /**
   * @param date The date to format.
   * @returns E.g. 10:30
   */
  toTime: (date: Date) => string
  /**
   * @param seconds The number of seconds to format.
   * @returns E.g. 1h 30m or 45s in case the seconds are less than 60.
   */
  secondsToDuration: (seconds: number) => string
}

export function useLocalizedDateFormat(): UseLocalizedDateFormatReturnType {
  const i18n = useI18n()

  function secondsToDuration(seconds: number): string {
    const dur = dayjs.duration(seconds, 'seconds')
    const hours = dur.hours()
    const minutes = dur.minutes()
    const secs = dur.seconds()

    if (seconds < 60) {
      return new Intl.NumberFormat(i18n.locale.value, {
        style: 'unit',
        unit: 'second',
        unitDisplay: 'long',
      }).format(secs)
    }

    const formattedHours = new Intl.NumberFormat(i18n.locale.value, {
      style: 'unit',
      unit: 'hour',
      unitDisplay: 'narrow',
    }).format(hours)

    const formattedMinutes = new Intl.NumberFormat(i18n.locale.value, {
      style: 'unit',
      unit: 'minute',
      unitDisplay: hours === 0 ? 'long' : 'narrow',
    }).format(minutes)

    if (hours === 0) {
      return formattedMinutes
    }

    if (minutes === 0) {
      return formattedHours
    }

    return `${formattedHours} ${formattedMinutes}`
  }

  function toDate(date: Date): string {
    return dayjs(date)
      .locale(i18n.locale.value)
      .format('YYYY-MM-DD')
  }

  function toLongDate(date: Date): string {
    return dayjs(date)
      .locale(i18n.locale.value)
      .format('D MMMM YYYY')
  }

  function toNumericDate(date: Date): string {
    const formatter = new Intl.DateTimeFormat(i18n.locale.value, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    return formatter.format(date)
  }

  function toShortDate(date: Date): string {
    return dayjs(date)
      .locale(i18n.locale.value)
      .format('MMM D, YYYY')
  }

  function toTime(date: Date): string {
    return dayjs(date)
      .locale(i18n.locale.value)
      .format('HH:mm')
  }

  return {
    toDate,
    toLongDate,
    toNumericDate,
    toShortDate,
    toTime,
    secondsToDuration,
  }
}
