// This file is auto-generated by @hey-api/openapi-ts

import { z } from 'zod';

export const zSetUserRolesCommand = z.object({
    roleUuids: z.array(z.string().uuid())
});

export const zPermission = z.enum([
    'all_permissions',
    'user.read',
    'user.create',
    'user.update',
    'user.delete',
    'role.read',
    'role.create',
    'role.update',
    'role.delete',
    'contact.create',
    'contact.read',
    'contact.update',
    'contact.delete',
    'typesense'
]);

export const zRoleResponse = z.object({
    uuid: z.string().uuid(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    name: z.string(),
    permissions: z.array(zPermission),
    isDefault: z.boolean(),
    isSystemAdmin: z.boolean()
});

export const zViewMeResponse = z.object({
    uuid: z.string().uuid(),
    email: z.string().email(),
    firstName: z.union([
        z.string(),
        z.null()
    ]),
    lastName: z.union([
        z.string(),
        z.null()
    ]),
    roles: z.array(zRoleResponse)
});

export const zViewUserResponse = z.object({
    uuid: z.string().uuid(),
    email: z.string().email(),
    firstName: z.union([
        z.string(),
        z.null()
    ]),
    lastName: z.union([
        z.string(),
        z.null()
    ]),
    roles: z.array(zRoleResponse)
});

export const zPaginatedOffsetQuery = z.object({
    limit: z.number().gte(1).lte(100),
    offset: z.number().gte(0)
});

export const zUsersFilterQuery = z.object({
    permissions: z.array(zPermission).optional()
});

export const zUserIndexView = z.object({
    uuid: z.string().uuid(),
    email: z.string().email(),
    firstName: z.union([
        z.string(),
        z.null()
    ]),
    lastName: z.union([
        z.string(),
        z.null()
    ])
});

export const zPaginatedOffsetResponseMeta = z.object({
    total: z.number(),
    offset: z.number(),
    limit: z.number()
});

export const zViewUsersResponse = z.object({
    items: z.array(zUserIndexView),
    meta: zPaginatedOffsetResponseMeta
});

export const zCreateRoleCommand = z.object({
    name: z.string()
});

export const zUpdateRoleCommand = z.object({
    name: z.string()
});

export const zViewRoleIndexResponse = z.object({
    items: z.array(zRoleResponse)
});

export const zRoleNotFoundError = z.object({
    detail: z.string().optional(),
    status: z.string(),
    code: z.string()
});

export const zUpdateRolesPermissionsCommandItem = z.object({
    roleUuid: z.string().uuid(),
    permissions: z.array(zPermission)
});

export const zUpdateRolesPermissionsCommand = z.object({
    roles: z.array(zUpdateRolesPermissionsCommandItem)
});

export const zMimeType = z.enum([
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'text/plain',
    'text/html',
    'image/jpeg',
    'image/png',
    'image/tiff',
    'image/bmp',
    'image/heic',
    'image/webp',
    'image/gif'
]);

export const zCreateFileDto = z.object({
    name: z.string(),
    mimeType: zMimeType
});

export const zCreateFileResponse = z.object({
    uuid: z.string().uuid(),
    name: z.string(),
    mimeType: z.union([
        zMimeType,
        z.null()
    ]),
    uploadUrl: z.string()
});

export const zCreateContactCommand = z.object({
    firstName: z.union([
        z.string(),
        z.null()
    ]),
    lastName: z.union([
        z.string(),
        z.null()
    ]),
    email: z.union([
        z.string().email(),
        z.null()
    ]),
    phone: z.union([
        z.string(),
        z.null()
    ])
});

export const zCreateContactResponse = z.object({
    uuid: z.string().uuid(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    isActive: z.boolean(),
    firstName: z.union([
        z.string(),
        z.null()
    ]),
    lastName: z.union([
        z.string(),
        z.null()
    ]),
    email: z.union([
        z.string().email(),
        z.null()
    ]),
    phone: z.union([
        z.string(),
        z.null()
    ])
});

export const zUpdateContactCommand = z.object({
    firstName: z.union([
        z.string(),
        z.null()
    ]),
    lastName: z.union([
        z.string(),
        z.null()
    ]),
    email: z.union([
        z.string().email(),
        z.null()
    ]),
    phone: z.union([
        z.string(),
        z.null()
    ]),
    isActive: z.boolean()
});

export const zViewContactDetailResponse = z.object({
    uuid: z.string().uuid(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    isActive: z.boolean(),
    firstName: z.union([
        z.string(),
        z.null()
    ]),
    lastName: z.union([
        z.string(),
        z.null()
    ]),
    email: z.union([
        z.string().email(),
        z.null()
    ]),
    phone: z.union([
        z.string(),
        z.null()
    ])
});

export const zViewContactIndexFilterQuery = z.object({
    isActive: z.string().optional()
});

export const zContactResponse = z.object({
    uuid: z.string().uuid(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    isActive: z.boolean(),
    firstName: z.union([
        z.string(),
        z.null()
    ]),
    lastName: z.union([
        z.string(),
        z.null()
    ]),
    email: z.union([
        z.string().email(),
        z.null()
    ]),
    phone: z.union([
        z.string(),
        z.null()
    ])
});

export const zViewContactIndexResponse = z.object({
    items: z.array(zContactResponse),
    meta: zPaginatedOffsetResponseMeta
});

export const zTheme = z.enum([
    'light',
    'dark',
    'system'
]);

export const zUpdatePreferencesCommand = z.object({
    theme: zTheme.optional(),
    language: z.string().optional(),
    fontSize: z.string().optional(),
    showShortcuts: z.boolean().optional(),
    reduceMotion: z.boolean().optional(),
    highContrast: z.boolean().optional()
});

export const zViewPreferencesResponse = z.object({
    theme: zTheme,
    language: z.union([
        z.string(),
        z.null()
    ]),
    fontSize: z.union([
        z.string(),
        z.null()
    ]),
    showShortcuts: z.boolean(),
    reduceMotion: z.boolean(),
    highContrast: z.boolean()
});

export const zPermissionControllerGetPermissionsV1Response = z.array(z.string());

export const zViewMeControllerViewMeV1Response = zViewMeResponse;

export const zViewUserControllerViewUserV1Response = zViewUserResponse;

export const zViewUsersControllerViewUserV1Response = zViewUsersResponse;

export const zViewRolesControllerGetRolesV1Response = zViewRoleIndexResponse;

export const zUpdateRolesPermissionsControllerUpdateRolePermissionsV1Response = z.void();

export const zViewRoleControllerGetRoleV1Response = zRoleResponse;

export const zFileControllerCreateFileV1Response = zCreateFileResponse;

export const zViewContactIndexControllerViewContactIndexV1Response = zViewContactIndexResponse;

export const zCreateContactControllerCreateContactV1Response = zCreateContactResponse;

export const zViewContactDetailControllerViewContactDetailV1Response = zViewContactDetailResponse;

export const zViewPreferencesControllerViewPreferencesIndexV1Response = zViewPreferencesResponse;