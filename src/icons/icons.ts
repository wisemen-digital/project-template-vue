import { extendIcons } from '@wisemen/vue-core'
import type { Component } from 'vue'

export const icons = {
  arrowDown: import('./ArrowDownIcon.vue'),
  arrowLeft: import('./ArrowLeftIcon.vue'),
  arrowRight: import('./ArrowRightIcon.vue'),
  arrowUp: import('./ArrowUpIcon.vue'),
  arrowUpArrowDown: import('./ArrowUpArrowDownIcon.vue'),
  building: import('./BuildingIcon.vue'),
  calendar: import('./CalendarIcon.vue'),
  checkmark: import('./CheckmarkIcon.vue'),
  chevronDown: import('./ChevronDownIcon.vue'),
  chevronLeft: import('./ChevronLeftIcon.vue'),
  chevronRight: import('./ChevronRightIcon.vue'),
  chevronUp: import('./ChevronUpIcon.vue'),
  clock: import('./ClockIcon.vue'),
  close: import('./CloseIcon.vue'),
  creditCard: import('./CreditCardIcon.vue'),
  download: import('./DownloadIcon.vue'),
  edit: import('./EditIcon.vue'),
  eye: import('./EyeIcon.vue'),
  eyeSlash: import('./EyeSlashIcon.vue'),
  filter: import('./FilterIcon.vue'),
  info: import('./InfoIcon.vue'),
  link: import('./LinkIcon.vue'),
  logo: import('./LogoIcon.vue'),
  mail: import('./MailIcon.vue'),
  minus: import('./MinusIcon.vue'),
  plus: import('./PlusIcon.vue'),
  search: import('./SearchIcon.vue'),
  settings: import('./SettingsIcon.vue'),
  sort: import('./SortIcon.vue'),
  sortAscending: import('./SortAscendingIcon.vue'),
  sortDescending: import('./SortDescendingIcon.vue'),
  test: import('./CreditCardIcon.vue'),
  threeDots: import('./ThreeDotsIcon.vue'),
  upload: import('./UploadIcon.vue'),
  warning: import('./WarningIcon.vue'),
} satisfies Record<string, Component>

extendIcons(icons)

type CustomIcons = {
  [K in keyof typeof icons]: Component
}

export type Icon = keyof CustomIcons

declare module '@wisemen/vue-core' {
  interface Icons extends CustomIcons {}
}
