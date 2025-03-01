import dayjs from '@/plugins/dayjs/dayjs.plugin'

export class DateUtil {
  /**
   * Get the duration in seconds between two dates.
   * @param startDate The start date.
   * @param endDate The end date.
   * @returns The duration between the two dates in seconds.
   */
  static getDurationInSeconds(
    startDate: Date,
    endDate: Date,
  ): number {
    return dayjs(endDate).diff(startDate, 'second')
  }

  /**
   * Returns the first day of the month for the given date.
   * @param date The date to get the first day of the month for.
   * @returns The first day of the month for the given date.
   */
  static getFirstDayOfMonth(date: Date): Date {
    return dayjs(date).startOf('month').toDate()
  }

  /**
   * Returns the last day of the month for the given date.
   * @param date The date to get the last day of the month for.
   * @returns The last day of the month for the given date.
   */
  static getLastDayOfMonth(date: Date): Date {
    return dayjs(date).endOf('month').toDate()
  }

  /**
   * Whether the given date is after a given date.
   * @param date The date to check.
   * @param after The date to compare against.
   * @returns Whether the given date is after the given date.
   */
  static isAfter(date: Date, after: Date): boolean {
    return dayjs(date).isAfter(after)
  }

  /**
   * Whether the given date is before a given date.
   * @param date The date to check.
   * @param before The date to compare against.
   * @returns Whether the given date is before the given date.
   */
  static isBefore(date: Date, before: Date): boolean {
    return dayjs(date).isBefore(before)
  }

  /**
   * Whether the given date is between two given dates.
   * @param date The date to check.
   * @param start The start date to compare against.
   * @param end The end date to compare against.
   * @param unit The unit to use for the comparison. Defaults to 'day'.
   * @returns Whether the given date is between the given dates.
   */
  static isBetween(
    date: Date,
    start: Date,
    end: Date,
    unit: 'day' | 'hour' | 'minute' | 'second' = 'day',
  ): boolean {
    return dayjs(date).isBetween(start, end, unit)
  }

  /**
   * Whether the given date is in the future.
   * @param date The date to check.
   * @returns Whether the given date is in the future.
   */
  static isInFuture(date: Date): boolean {
    return dayjs(date).isAfter(new Date())
  }

  /**
   * Whether the given date is in the past.
   * @param date The date to check.
   * @returns Whether the given date is in the past.
   */
  static isInPast(date: Date): boolean {
    return dayjs(date).isBefore(new Date())
  }

  /**
   * Whether the given date is the same as another date.
   * @param date The date to check.
   * @param other The date to compare against.
   * @param unit The unit to use for the comparison. Defaults to 'day'.
   * @returns Whether the given date is the same as the other date.
   */
  static isSame(date: Date, other: Date, unit: 'day' | 'hour' | 'minute' | 'second' = 'day'): boolean {
    return dayjs(date).isSame(other, unit)
  }
}
