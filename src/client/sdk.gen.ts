// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { PermissionControllerGetPermissionsV1Data, PermissionControllerGetPermissionsV1Response, SwaggerControllerHandleRedirectData, StatusControllerGetApiStatusData, StatusControllerGetHealthStatusData, MigrateCollectionsControllerMigrateV1Data, ImportCollectionsControllerImportV1Data, ViewCollectionsControllerGetCollectionsV1Data, SetUserRolesControllerUpdateUserV1Data, ViewMeControllerViewMeV1Data, ViewMeControllerViewMeV1Response, ViewUserControllerViewUserV1Data, ViewUserControllerViewUserV1Response, ViewUsersControllerViewUserV1Data, ViewUsersControllerViewUserV1Response, ViewRolesControllerGetRolesV1Data, ViewRolesControllerGetRolesV1Response, UpdateRolesPermissionsControllerUpdateRolePermissionsV1Data, UpdateRolesPermissionsControllerUpdateRolePermissionsV1Response, UpdateRolesPermissionsControllerUpdateRolePermissionsV1Error, CreateRoleControllerCreateRoleV1Data, DeleteRoleControllerDeleteRoleV1Data, ViewRoleControllerGetRoleV1Data, ViewRoleControllerGetRoleV1Response, UpdateRoleControllerUpdateRoleV1Data, FileControllerCreateFileV1Data, FileControllerCreateFileV1Response, FileControllerConfirmFileUploadV1Data, FileControllerDownloadFileV1Data, FileControllerRemoveFileV1Data, ViewContactIndexControllerViewContactIndexV1Data, ViewContactIndexControllerViewContactIndexV1Response, CreateContactControllerCreateContactV1Data, CreateContactControllerCreateContactV1Response, DeleteContactControllerDeleteContactV1Data, ViewContactDetailControllerViewContactDetailV1Data, ViewContactDetailControllerViewContactDetailV1Response, UpdateContactControllerUpdateContactV1Data, ViewPreferencesControllerViewPreferencesIndexV1Data, ViewPreferencesControllerViewPreferencesIndexV1Response, UpdatePreferencesControllerUpdatePreferencesV1Data } from './types.gen';
import { zPermissionControllerGetPermissionsV1Response, zViewMeControllerViewMeV1Response, zViewUserControllerViewUserV1Response, zViewUsersControllerViewUserV1Response, zViewRolesControllerGetRolesV1Response, zUpdateRolesPermissionsControllerUpdateRolePermissionsV1Response, zViewRoleControllerGetRoleV1Response, zFileControllerCreateFileV1Response, zViewContactIndexControllerViewContactIndexV1Response, zCreateContactControllerCreateContactV1Response, zViewContactDetailControllerViewContactDetailV1Response, zViewPreferencesControllerViewPreferencesIndexV1Response } from './zod.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};

export const permissionControllerGetPermissionsV1 = <ThrowOnError extends boolean = true>(options?: Options<PermissionControllerGetPermissionsV1Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<PermissionControllerGetPermissionsV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zPermissionControllerGetPermissionsV1Response.parseAsync(data);
        },
        url: '/api/v1/permissions',
        ...options
    });
};

export const swaggerControllerHandleRedirect = <ThrowOnError extends boolean = true>(options?: Options<SwaggerControllerHandleRedirectData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/oauth2-redirect',
        ...options
    });
};

export const statusControllerGetApiStatus = <ThrowOnError extends boolean = true>(options?: Options<StatusControllerGetApiStatusData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api',
        ...options
    });
};

export const statusControllerGetHealthStatus = <ThrowOnError extends boolean = true>(options?: Options<StatusControllerGetHealthStatusData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/health',
        ...options
    });
};

export const migrateCollectionsControllerMigrateV1 = <ThrowOnError extends boolean = true>(options?: Options<MigrateCollectionsControllerMigrateV1Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v1/typesense/migrate',
        ...options
    });
};

export const importCollectionsControllerImportV1 = <ThrowOnError extends boolean = true>(options?: Options<ImportCollectionsControllerImportV1Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v1/typesense/import',
        ...options
    });
};

export const viewCollectionsControllerGetCollectionsV1 = <ThrowOnError extends boolean = true>(options?: Options<ViewCollectionsControllerGetCollectionsV1Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v1/typesense/collections',
        ...options
    });
};

export const setUserRolesControllerUpdateUserV1 = <ThrowOnError extends boolean = true>(options: Options<SetUserRolesControllerUpdateUserV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v1/users/{user}/role',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const viewMeControllerViewMeV1 = <ThrowOnError extends boolean = true>(options?: Options<ViewMeControllerViewMeV1Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<ViewMeControllerViewMeV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zViewMeControllerViewMeV1Response.parseAsync(data);
        },
        url: '/api/v1/users/me',
        ...options
    });
};

export const viewUserControllerViewUserV1 = <ThrowOnError extends boolean = true>(options: Options<ViewUserControllerViewUserV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<ViewUserControllerViewUserV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zViewUserControllerViewUserV1Response.parseAsync(data);
        },
        url: '/api/v1/users/{uuid}',
        ...options
    });
};

export const viewUsersControllerViewUserV1 = <ThrowOnError extends boolean = true>(options: Options<ViewUsersControllerViewUserV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<ViewUsersControllerViewUserV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zViewUsersControllerViewUserV1Response.parseAsync(data);
        },
        url: '/api/v1/users',
        ...options
    });
};

export const viewRolesControllerGetRolesV1 = <ThrowOnError extends boolean = true>(options?: Options<ViewRolesControllerGetRolesV1Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<ViewRolesControllerGetRolesV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zViewRolesControllerGetRolesV1Response.parseAsync(data);
        },
        url: '/api/v1/roles',
        ...options
    });
};

export const updateRolesPermissionsControllerUpdateRolePermissionsV1 = <ThrowOnError extends boolean = true>(options: Options<UpdateRolesPermissionsControllerUpdateRolePermissionsV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<UpdateRolesPermissionsControllerUpdateRolePermissionsV1Response, UpdateRolesPermissionsControllerUpdateRolePermissionsV1Error, ThrowOnError>({
        responseValidator: async (data) => {
            return await zUpdateRolesPermissionsControllerUpdateRolePermissionsV1Response.parseAsync(data);
        },
        url: '/api/v1/roles',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const createRoleControllerCreateRoleV1 = <ThrowOnError extends boolean = true>(options: Options<CreateRoleControllerCreateRoleV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v1/roles',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const deleteRoleControllerDeleteRoleV1 = <ThrowOnError extends boolean = true>(options: Options<DeleteRoleControllerDeleteRoleV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v1/roles/{role}',
        ...options
    });
};

export const viewRoleControllerGetRoleV1 = <ThrowOnError extends boolean = true>(options: Options<ViewRoleControllerGetRoleV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<ViewRoleControllerGetRoleV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zViewRoleControllerGetRoleV1Response.parseAsync(data);
        },
        url: '/api/v1/roles/{role}',
        ...options
    });
};

export const updateRoleControllerUpdateRoleV1 = <ThrowOnError extends boolean = true>(options: Options<UpdateRoleControllerUpdateRoleV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v1/roles/{role}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const fileControllerCreateFileV1 = <ThrowOnError extends boolean = true>(options: Options<FileControllerCreateFileV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<FileControllerCreateFileV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zFileControllerCreateFileV1Response.parseAsync(data);
        },
        url: '/api/v1/files',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const fileControllerConfirmFileUploadV1 = <ThrowOnError extends boolean = true>(options: Options<FileControllerConfirmFileUploadV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v1/files/{file}/confirm-upload',
        ...options
    });
};

export const fileControllerDownloadFileV1 = <ThrowOnError extends boolean = true>(options: Options<FileControllerDownloadFileV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v1/files/{file}/download',
        ...options
    });
};

export const fileControllerRemoveFileV1 = <ThrowOnError extends boolean = true>(options: Options<FileControllerRemoveFileV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v1/files/{file}',
        ...options
    });
};

export const viewContactIndexControllerViewContactIndexV1 = <ThrowOnError extends boolean = true>(options?: Options<ViewContactIndexControllerViewContactIndexV1Data, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<ViewContactIndexControllerViewContactIndexV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zViewContactIndexControllerViewContactIndexV1Response.parseAsync(data);
        },
        url: '/api/v1/contacts',
        ...options
    });
};

export const createContactControllerCreateContactV1 = <ThrowOnError extends boolean = true>(options: Options<CreateContactControllerCreateContactV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<CreateContactControllerCreateContactV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zCreateContactControllerCreateContactV1Response.parseAsync(data);
        },
        url: '/api/v1/contacts',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const deleteContactControllerDeleteContactV1 = <ThrowOnError extends boolean = true>(options: Options<DeleteContactControllerDeleteContactV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v1/contacts/{uuid}',
        ...options
    });
};

export const viewContactDetailControllerViewContactDetailV1 = <ThrowOnError extends boolean = true>(options: Options<ViewContactDetailControllerViewContactDetailV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<ViewContactDetailControllerViewContactDetailV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zViewContactDetailControllerViewContactDetailV1Response.parseAsync(data);
        },
        url: '/api/v1/contacts/{uuid}',
        ...options
    });
};

export const updateContactControllerUpdateContactV1 = <ThrowOnError extends boolean = true>(options: Options<UpdateContactControllerUpdateContactV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        url: '/api/v1/contacts/{uuid}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const viewPreferencesControllerViewPreferencesIndexV1 = <ThrowOnError extends boolean = true>(options: Options<ViewPreferencesControllerViewPreferencesIndexV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<ViewPreferencesControllerViewPreferencesIndexV1Response, unknown, ThrowOnError>({
        responseValidator: async (data) => {
            return await zViewPreferencesControllerViewPreferencesIndexV1Response.parseAsync(data);
        },
        url: '/api/v1/users/{userUuid}/preferences',
        ...options
    });
};

export const updatePreferencesControllerUpdatePreferencesV1 = <ThrowOnError extends boolean = true>(options: Options<UpdatePreferencesControllerUpdatePreferencesV1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<unknown, unknown, ThrowOnError>({
        url: '/api/v1/users/{userUuid}/preferences',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};