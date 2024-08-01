/* eslint-disable check-file/filename-naming-convention */

/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  readonly API_AUTH_URL: string
  readonly API_BASE_URL: string
  readonly API_CLIENT_ID: string
  readonly API_CLIENT_SECRET: string
  readonly ENVIRONMENT: 'development' | 'e2e' | 'production' | 'staging' | 'test'
  readonly SENTRY_DSN: string
  readonly SENTRY_SAMPLE_RATE: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const BUILD_COMMIT: string
declare const BUILD_NUMBER: string
declare const BUILD_TIMESTAMP: string
