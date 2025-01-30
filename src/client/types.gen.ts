// This file is auto-generated by @hey-api/openapi-ts

export enum TypesenseCollectionName {
    USER = 'user'
}

export type SetUserRolesCommand = {
    roleUuids: Array<string>;
};

export enum Permission {
    ADMIN = 'admin',
    READ_ONLY = 'read_only',
    USER_READ = 'user.read',
    USER_CREATE = 'user.create',
    USER_UPDATE = 'user.update',
    USER_DELETE = 'user.delete',
    ROLE_READ = 'role.read',
    ROLE_CREATE = 'role.create',
    ROLE_UPDATE = 'role.update',
    ROLE_DELETE = 'role.delete',
    CONTACT_CREATE = 'contact.create',
    CONTACT_READ = 'contact.read',
    CONTACT_UPDATE = 'contact.update',
    CONTACT_DELETE = 'contact.delete'
}

export type RoleResponse = {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    permissions: Array<Permission>;
};

export type ViewMeResponse = {
    uuid: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roles: Array<RoleResponse>;
};

export type ViewUserResponse = {
    uuid: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roles: Array<RoleResponse>;
};

export type PaginatedOffsetQuery = {
    limit: number;
    offset: number;
};

export type UsersFilterQuery = {
    permissions?: Array<Permission>;
};

export type UserIndexView = {
    uuid: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
};

export type PaginatedOffsetResponseMeta = {
    /**
     * the total amount of items that exist
     */
    total: number;
    /**
     * the amount of items skipped
     */
    offset: number;
    /**
     * the amount of items per response
     */
    limit: number;
};

export type ViewUsersResponse = {
    /**
     * The items for the current page
     */
    items: Array<UserIndexView>;
    meta: PaginatedOffsetResponseMeta;
};

export type CreateRoleCommand = {
    /**
     * The name of the role
     */
    name: string;
};

export type PermissionObject = {
    id: string;
    actions: Array<string>;
};

export type UpdateRolesBulkRoleCommand = {
    uuid: string;
    name: string;
    permissions: Array<PermissionObject>;
};

export type UpdateRolesBulkCommand = {
    roles: Array<UpdateRolesBulkRoleCommand>;
};

export type UpdateRoleCommand = {
    /**
     * The name of the role
     */
    name: string;
};

export type ViewRoleIndexResponse = {
    items: Array<RoleResponse>;
};

export enum MimeType {
    APPLICATION_PDF = 'application/pdf',
    APPLICATION_MSWORD = 'application/msword',
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    APPLICATION_VND_MS_POWERPOINT = 'application/vnd.ms-powerpoint',
    APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    TEXT_PLAIN = 'text/plain',
    TEXT_HTML = 'text/html',
    IMAGE_JPEG = 'image/jpeg',
    IMAGE_PNG = 'image/png',
    IMAGE_TIFF = 'image/tiff',
    IMAGE_BMP = 'image/bmp',
    IMAGE_HEIC = 'image/heic',
    IMAGE_WEBP = 'image/webp',
    IMAGE_GIF = 'image/gif'
}

export type CreateFileDto = {
    name: string;
    mimeType: MimeType;
};

export type CreateFileResponse = {
    uuid: string;
    name: string;
    mimeType: MimeType | null;
    uploadUrl: string;
};

export type CreateContactCommand = {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
};

export type CreateContactResponse = {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
};

export type UpdateContactCommand = {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    isActive: boolean;
};

export type ViewContactDetailResponse = {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
};

export type ViewContactIndexFilterQuery = {
    isActive?: string;
};

export type ContactResponse = {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
};

export type ViewContactIndexResponse = {
    /**
     * The items for the current page
     */
    items: Array<ContactResponse>;
    meta: PaginatedOffsetResponseMeta;
};

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
    SYSTEM = 'system'
}

export type UpdatePreferencesCommand = {
    theme?: Theme;
    language?: string;
    fontSize?: string;
    showShortcuts?: boolean;
    reduceMotion?: boolean;
    highContrast?: boolean;
};

export type ViewPreferencesResponse = {
    theme: Theme;
    language: string | null;
    fontSize: string | null;
    showShortcuts: boolean;
    reduceMotion: boolean;
    highContrast: boolean;
};

export type SwaggerControllerHandleRedirectData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/oauth2-redirect';
};

export type SwaggerControllerHandleRedirectResponses = {
    200: unknown;
};

export type StatusControllerGetApiStatusData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api';
};

export type StatusControllerGetApiStatusResponses = {
    200: unknown;
};

export type StatusControllerGetHealthStatusData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/health';
};

export type StatusControllerGetHealthStatusResponses = {
    200: unknown;
};

export type TypesenseControllerMigrateV1Data = {
    body?: never;
    path?: never;
    query?: {
        collections?: Array<TypesenseCollectionName>;
        fresh?: boolean;
    };
    url: '/api/v1/typesense/migrate';
};

export type TypesenseControllerMigrateV1Responses = {
    /**
     * Successfully migrated collections
     */
    200: unknown;
};

export type TypesenseControllerImportV1Data = {
    body?: never;
    path?: never;
    query?: {
        collections?: Array<TypesenseCollectionName>;
    };
    url: '/api/v1/typesense/import';
};

export type TypesenseControllerImportV1Responses = {
    /**
     * Successfully imported collections
     */
    200: unknown;
};

export type TypesenseControllerGetCollectionsV1Data = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/v1/typesense/collections';
};

export type TypesenseControllerGetCollectionsV1Responses = {
    /**
     * Successfully returned collections
     */
    200: unknown;
};

export type SetUserRolesControllerUpdateUserV1Data = {
    body: SetUserRolesCommand;
    path: {
        user: string;
    };
    query?: never;
    url: '/api/v1/users/{user}/role';
};

export type SetUserRolesControllerUpdateUserV1Responses = {
    201: unknown;
};

export type ViewMeControllerViewMeV1Data = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/v1/users/me';
};

export type ViewMeControllerViewMeV1Responses = {
    /**
     * User details retrieved
     */
    200: ViewMeResponse;
};

export type ViewMeControllerViewMeV1Response = ViewMeControllerViewMeV1Responses[keyof ViewMeControllerViewMeV1Responses];

export type ViewUserControllerViewUserV1Data = {
    body?: never;
    path: {
        uuid: string;
    };
    query?: never;
    url: '/api/v1/users/{uuid}';
};

export type ViewUserControllerViewUserV1Responses = {
    /**
     * User details retrieved
     */
    200: ViewUserResponse;
};

export type ViewUserControllerViewUserV1Response = ViewUserControllerViewUserV1Responses[keyof ViewUserControllerViewUserV1Responses];

export type ViewUsersControllerViewUserV1Data = {
    body?: never;
    path?: never;
    query: {
        pagination?: PaginatedOffsetQuery;
        filter: UsersFilterQuery;
        search?: string;
    };
    url: '/api/v1/users';
};

export type ViewUsersControllerViewUserV1Responses = {
    /**
     * Users retrieved
     */
    200: ViewUsersResponse;
};

export type ViewUsersControllerViewUserV1Response = ViewUsersControllerViewUserV1Responses[keyof ViewUsersControllerViewUserV1Responses];

export type ViewRolesControllerGetRolesV1Data = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/v1/roles';
};

export type ViewRolesControllerGetRolesV1Responses = {
    /**
     * The roles has been successfully received.
     */
    200: ViewRoleIndexResponse;
};

export type ViewRolesControllerGetRolesV1Response = ViewRolesControllerGetRolesV1Responses[keyof ViewRolesControllerGetRolesV1Responses];

export type CreateRoleControllerCreateRoleV1Data = {
    body: CreateRoleCommand;
    path?: never;
    query?: never;
    url: '/api/v1/roles';
};

export type CreateRoleControllerCreateRoleV1Responses = {
    201: unknown;
};

export type DeleteRoleControllerDeleteRoleV1Data = {
    body?: never;
    path: {
        role: string;
    };
    query?: never;
    url: '/api/v1/roles/{role}';
};

export type DeleteRoleControllerDeleteRoleV1Responses = {
    200: unknown;
};

export type ViewRoleControllerGetRoleV1Data = {
    body?: never;
    path: {
        role: string;
    };
    query?: never;
    url: '/api/v1/roles/{role}';
};

export type ViewRoleControllerGetRoleV1Responses = {
    /**
     * The role has been successfully received.
     */
    200: RoleResponse;
};

export type ViewRoleControllerGetRoleV1Response = ViewRoleControllerGetRoleV1Responses[keyof ViewRoleControllerGetRoleV1Responses];

export type UpdateRoleControllerUpdateRoleV1Data = {
    body: UpdateRoleCommand;
    path: {
        role: string;
    };
    query?: never;
    url: '/api/v1/roles/{role}';
};

export type UpdateRoleControllerUpdateRoleV1Responses = {
    201: unknown;
};

export type UpdateRolesBulkControllerUpdateRolesBulkV1Data = {
    body: UpdateRolesBulkCommand;
    path?: never;
    query?: never;
    url: '/api/v1/roles/bulk';
};

export type UpdateRolesBulkControllerUpdateRolesBulkV1Responses = {
    201: unknown;
};

export type PermissionControllerGetPermissionsV1Data = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api/v1/permissions';
};

export type PermissionControllerGetPermissionsV1Responses = {
    200: Array<string>;
};

export type PermissionControllerGetPermissionsV1Response = PermissionControllerGetPermissionsV1Responses[keyof PermissionControllerGetPermissionsV1Responses];

export type FileControllerCreateFileV1Data = {
    body: CreateFileDto;
    path?: never;
    query?: never;
    url: '/api/v1/file';
};

export type FileControllerCreateFileV1Responses = {
    /**
     * Successfully created file
     */
    201: CreateFileResponse;
};

export type FileControllerCreateFileV1Response = FileControllerCreateFileV1Responses[keyof FileControllerCreateFileV1Responses];

export type FileControllerConfirmFileUploadV1Data = {
    body?: never;
    path: {
        file: string;
    };
    query?: never;
    url: '/api/v1/file/{file}/confirm-upload';
};

export type FileControllerConfirmFileUploadV1Responses = {
    /**
     * Successfully confirmed file upload
     */
    200: unknown;
};

export type FileControllerDownloadFileV1Data = {
    body?: never;
    path: {
        file: string;
    };
    query?: never;
    url: '/api/v1/file/{file}/download';
};

export type FileControllerRemoveFileV1Data = {
    body?: never;
    path: {
        file: string;
    };
    query?: never;
    url: '/api/v1/file/{file}';
};

export type FileControllerRemoveFileV1Responses = {
    /**
     * Successfully removed file
     */
    200: unknown;
};

export type ViewContactIndexControllerViewContactIndexV1Data = {
    body?: never;
    path?: never;
    query?: {
        pagination?: PaginatedOffsetQuery;
        filter?: ViewContactIndexFilterQuery;
    };
    url: '/api/v1/contacts';
};

export type ViewContactIndexControllerViewContactIndexV1Responses = {
    200: ViewContactIndexResponse;
};

export type ViewContactIndexControllerViewContactIndexV1Response = ViewContactIndexControllerViewContactIndexV1Responses[keyof ViewContactIndexControllerViewContactIndexV1Responses];

export type CreateContactControllerCreateContactV1Data = {
    body: CreateContactCommand;
    path?: never;
    query?: never;
    url: '/api/v1/contacts';
};

export type CreateContactControllerCreateContactV1Responses = {
    201: CreateContactResponse;
};

export type CreateContactControllerCreateContactV1Response = CreateContactControllerCreateContactV1Responses[keyof CreateContactControllerCreateContactV1Responses];

export type DeleteContactControllerDeleteContactV1Data = {
    body?: never;
    path: {
        uuid: string;
    };
    query?: never;
    url: '/api/v1/contacts/{uuid}';
};

export type DeleteContactControllerDeleteContactV1Responses = {
    200: unknown;
};

export type ViewContactDetailControllerViewContactDetailV1Data = {
    body?: never;
    path: {
        uuid: string;
    };
    query?: never;
    url: '/api/v1/contacts/{uuid}';
};

export type ViewContactDetailControllerViewContactDetailV1Responses = {
    200: ViewContactDetailResponse;
};

export type ViewContactDetailControllerViewContactDetailV1Response = ViewContactDetailControllerViewContactDetailV1Responses[keyof ViewContactDetailControllerViewContactDetailV1Responses];

export type UpdateContactControllerUpdateContactV1Data = {
    body: UpdateContactCommand;
    path: {
        uuid: string;
    };
    query?: never;
    url: '/api/v1/contacts/{uuid}';
};

export type UpdateContactControllerUpdateContactV1Responses = {
    200: unknown;
};

export type ViewPreferencesControllerViewPreferencesIndexV1Data = {
    body?: never;
    path: {
        userUuid: string;
    };
    query?: never;
    url: '/api/v1/users/{userUuid}/preferences';
};

export type ViewPreferencesControllerViewPreferencesIndexV1Responses = {
    200: ViewPreferencesResponse;
};

export type ViewPreferencesControllerViewPreferencesIndexV1Response = ViewPreferencesControllerViewPreferencesIndexV1Responses[keyof ViewPreferencesControllerViewPreferencesIndexV1Responses];

export type UpdatePreferencesControllerUpdatePreferencesV1Data = {
    body: UpdatePreferencesCommand;
    path: {
        userUuid: string;
    };
    query?: never;
    url: '/api/v1/users/{userUuid}/preferences';
};

export type UpdatePreferencesControllerUpdatePreferencesV1Responses = {
    200: unknown;
};