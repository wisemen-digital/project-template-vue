export const TEST_ID = {
  APP_PAGE: {
    TITLE: 'app-page-title',
    USER_BUTTON: 'app-page-user-button',
    USER_NAME: 'app-page-user-name',
  },
  AUTH: {
    CALLBACK: 'auth-callback',
    LOGIN: {
      EMAIL_INPUT: 'login-form-email-input',
      PASSWORD_INPUT: 'login-form-password-input',
      SUBMIT_BUTTON: 'login-form-submit-button',
    },
  },
  SETTINGS: {
    ROLES: {
      CREATE_DIALOG: 'settings-roles-create-dialog',
      FORM: {
        NAME_INPUT: 'settings-roles-form-name-input',
        SUBMIT_BUTTON: 'settings-roles-form-submit-button',
      },
      OVERVIEW: {
        CREATE_BUTTON: 'settings-roles-overview-create-button',
        TABLE: {
          PERMISSION_ACTION: 'settings-roles-overview-table-permission-action',
          PERMISSION_ID: 'settings-roles-overview-table-permission-id',
          ROLE_NAME: 'settings-roles-overview-table-role-name',
          TAB_TOGGLE: 'settings-roles-overview-table-tab-toggle',
        },
      },
    },
  },
  SHARED: {
    MALFORMED_RESPONSE_TOAST: 'shared-malformed-response-toast',
  },
  USERS: {
    CREATE: {
      SUCCESS_TOAST: 'users-create-success-toast',
    },
    DETAIL: {
      EDIT_BUTTON: 'users-detail-edit-button',
    },
    FORM: {
      BIRTH_DATE_INPUT: 'users-form-birth-date-input',
      FIRST_NAME_INPUT: 'users-form-first-name-input',
      LAST_NAME_INPUT: 'users-form-last-name-input',
      SUBMIT_BUTTON: 'users-form-submit-button',
      TITLE: 'users-form-title',
    },
    OVERVIEW: {
      CREATE_BUTTON: 'users-overview-create-button',
      TABLE: {
        BIRTH_DATE: 'users-overview-title-birth-date',
        CONTAINER: 'users-overview-table-container',
        FULL_NAME: 'users-overview-title-full-name',
        UUID: 'users-overview-title-uuid',
      },
      TITLE: 'users-overview-title',
    },
    UPDATE: {
      SUCCESS_TOAST: 'users-update-success-toast',
    },
  },
} as const
