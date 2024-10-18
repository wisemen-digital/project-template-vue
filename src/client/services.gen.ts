// This file is auto-generated by @hey-api/openapi-ts

import {
  createClient,
  createConfig,
  type Options,
} from '@hey-api/client-axios'

import type {
  AuthControllerCreateTokenData,
  AuthControllerCreateTokenError,
  AuthControllerCreateTokenResponse,
  AuthControllerGetUserInfoError,
  AuthControllerGetUserInfoResponse,
  ChangePasswordControllerUpdateUserPasswordData,
  ChangePasswordControllerUpdateUserPasswordError,
  ChangePasswordControllerUpdateUserPasswordResponse,
  ChangeUserNameControllerUpdateUserData,
  ChangeUserNameControllerUpdateUserError,
  ChangeUserNameControllerUpdateUserResponse,
  ChangeUserRoleControllerUpdateUserData,
  ChangeUserRoleControllerUpdateUserError,
  ChangeUserRoleControllerUpdateUserResponse,
  DeleteUserControllerDeleteUserData,
  DeleteUserControllerDeleteUserError,
  DeleteUserControllerDeleteUserResponse,
  FileControllerConfirmFileUploadData,
  FileControllerConfirmFileUploadError,
  FileControllerConfirmFileUploadResponse,
  FileControllerCreateFileData,
  FileControllerCreateFileError,
  FileControllerCreateFileResponse,
  FileControllerDownloadFileData,
  FileControllerRemoveFileData,
  FileControllerRemoveFileError,
  FileControllerRemoveFileResponse,
  PermissionControllerGetPermissionsError,
  PermissionControllerGetPermissionsResponse,
  RegisterUserControllerCreateUserData,
  RegisterUserControllerCreateUserError,
  RegisterUserControllerCreateUserResponse,
  RoleControllerCreateRoleData,
  RoleControllerCreateRoleError,
  RoleControllerCreateRoleResponse,
  RoleControllerDeleteRoleData,
  RoleControllerDeleteRoleError,
  RoleControllerDeleteRoleResponse,
  RoleControllerGetRoleCountData,
  RoleControllerGetRoleCountError,
  RoleControllerGetRoleCountResponse,
  RoleControllerGetRoleData,
  RoleControllerGetRoleError,
  RoleControllerGetRoleResponse,
  RoleControllerGetRolesError,
  RoleControllerGetRolesResponse,
  RoleControllerUpdateRoleData,
  RoleControllerUpdateRoleError,
  RoleControllerUpdateRoleResponse,
  RoleControllerUpdateRolesBulkData,
  RoleControllerUpdateRolesBulkError,
  RoleControllerUpdateRolesBulkResponse,
  StatusControllerGetApiStatusError,
  StatusControllerGetApiStatusResponse,
  StatusControllerGetHealthStatusError,
  StatusControllerGetHealthStatusResponse,
  TypesenseControllerGetCollectionsError,
  TypesenseControllerGetCollectionsResponse,
  TypesenseControllerImportData,
  TypesenseControllerImportError,
  TypesenseControllerImportResponse,
  TypesenseControllerMigrateData,
  TypesenseControllerMigrateError,
  TypesenseControllerMigrateResponse,
  ViewUserControllerViewUserData,
  ViewUserControllerViewUserError,
  ViewUserControllerViewUserResponse,
  ViewUsersControllerViewUserData,
  ViewUsersControllerViewUserError,
  ViewUsersControllerViewUserResponse,
} from './types.gen'

export const client = createClient(createConfig())

export function authControllerCreateToken<ThrowOnError extends boolean = false>(options: Options<AuthControllerCreateTokenData, ThrowOnError>) {
  return (options?.client ?? client).post<AuthControllerCreateTokenResponse, AuthControllerCreateTokenError, ThrowOnError>({
    ...options,
    url: '/api/auth/token',
  })
}

export function authControllerGetUserInfo<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<AuthControllerGetUserInfoResponse, AuthControllerGetUserInfoError, ThrowOnError>({
    ...options,
    url: '/api/auth/userinfo',
  })
}

export function changeUserNameControllerUpdateUser<ThrowOnError extends boolean = false>(options: Options<ChangeUserNameControllerUpdateUserData, ThrowOnError>) {
  return (options?.client ?? client).post<ChangeUserNameControllerUpdateUserResponse, ChangeUserNameControllerUpdateUserError, ThrowOnError>({
    ...options,
    url: '/api/v1/users/{user}/name',
  })
}

export function changePasswordControllerUpdateUserPassword<ThrowOnError extends boolean = false>(options: Options<ChangePasswordControllerUpdateUserPasswordData, ThrowOnError>) {
  return (options?.client ?? client).post<ChangePasswordControllerUpdateUserPasswordResponse, ChangePasswordControllerUpdateUserPasswordError, ThrowOnError>({
    ...options,
    url: '/api/v1/users/{user}/password',
  })
}

export function changeUserRoleControllerUpdateUser<ThrowOnError extends boolean = false>(options: Options<ChangeUserRoleControllerUpdateUserData, ThrowOnError>) {
  return (options?.client ?? client).post<ChangeUserRoleControllerUpdateUserResponse, ChangeUserRoleControllerUpdateUserError, ThrowOnError>({
    ...options,
    url: '/api/v1/users/{user}/role',
  })
}

export function deleteUserControllerDeleteUser<ThrowOnError extends boolean = false>(options: Options<DeleteUserControllerDeleteUserData, ThrowOnError>) {
  return (options?.client ?? client).delete<DeleteUserControllerDeleteUserResponse, DeleteUserControllerDeleteUserError, ThrowOnError>({
    ...options,
    url: '/api/v1/users/{user}',
  })
}

export function viewUserControllerViewUser<ThrowOnError extends boolean = false>(options: Options<ViewUserControllerViewUserData, ThrowOnError>) {
  return (options?.client ?? client).get<ViewUserControllerViewUserResponse, ViewUserControllerViewUserError, ThrowOnError>({
    ...options,
    url: '/api/v1/users/{user}',
  })
}

export function viewUsersControllerViewUser<ThrowOnError extends boolean = false>(options: Options<ViewUsersControllerViewUserData, ThrowOnError>) {
  return (options?.client ?? client).get<ViewUsersControllerViewUserResponse, ViewUsersControllerViewUserError, ThrowOnError>({
    ...options,
    url: '/api/v1/users',
  })
}

export function registerUserControllerCreateUser<ThrowOnError extends boolean = false>(options: Options<RegisterUserControllerCreateUserData, ThrowOnError>) {
  return (options?.client ?? client).post<RegisterUserControllerCreateUserResponse, RegisterUserControllerCreateUserError, ThrowOnError>({
    ...options,
    url: '/api/v1/users',
  })
}

export function roleControllerGetRoles<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<RoleControllerGetRolesResponse, RoleControllerGetRolesError, ThrowOnError>({
    ...options,
    url: '/api/v1/roles',
  })
}

export function roleControllerCreateRole<ThrowOnError extends boolean = false>(options: Options<RoleControllerCreateRoleData, ThrowOnError>) {
  return (options?.client ?? client).post<RoleControllerCreateRoleResponse, RoleControllerCreateRoleError, ThrowOnError>({
    ...options,
    url: '/api/v1/roles',
  })
}

export function roleControllerUpdateRolesBulk<ThrowOnError extends boolean = false>(options: Options<RoleControllerUpdateRolesBulkData, ThrowOnError>) {
  return (options?.client ?? client).post<RoleControllerUpdateRolesBulkResponse, RoleControllerUpdateRolesBulkError, ThrowOnError>({
    ...options,
    url: '/api/v1/roles/bulk',
  })
}

export function roleControllerGetRole<ThrowOnError extends boolean = false>(options: Options<RoleControllerGetRoleData, ThrowOnError>) {
  return (options?.client ?? client).get<RoleControllerGetRoleResponse, RoleControllerGetRoleError, ThrowOnError>({
    ...options,
    url: '/api/v1/roles/{role}',
  })
}

export function roleControllerUpdateRole<ThrowOnError extends boolean = false>(options: Options<RoleControllerUpdateRoleData, ThrowOnError>) {
  return (options?.client ?? client).post<RoleControllerUpdateRoleResponse, RoleControllerUpdateRoleError, ThrowOnError>({
    ...options,
    url: '/api/v1/roles/{role}',
  })
}

export function roleControllerDeleteRole<ThrowOnError extends boolean = false>(options: Options<RoleControllerDeleteRoleData, ThrowOnError>) {
  return (options?.client ?? client).delete<RoleControllerDeleteRoleResponse, RoleControllerDeleteRoleError, ThrowOnError>({
    ...options,
    url: '/api/v1/roles/{role}',
  })
}

export function roleControllerGetRoleCount<ThrowOnError extends boolean = false>(options: Options<RoleControllerGetRoleCountData, ThrowOnError>) {
  return (options?.client ?? client).post<RoleControllerGetRoleCountResponse, RoleControllerGetRoleCountError, ThrowOnError>({
    ...options,
    url: '/api/v1/roles/{role}/count',
  })
}

export function permissionControllerGetPermissions<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<PermissionControllerGetPermissionsResponse, PermissionControllerGetPermissionsError, ThrowOnError>({
    ...options,
    url: '/api/v1/permissions',
  })
}

export function typesenseControllerMigrate<ThrowOnError extends boolean = false>(options?: Options<TypesenseControllerMigrateData, ThrowOnError>) {
  return (options?.client ?? client).get<TypesenseControllerMigrateResponse, TypesenseControllerMigrateError, ThrowOnError>({
    ...options,
    url: '/api/v1/typesense/migrate',
  })
}

export function typesenseControllerImport<ThrowOnError extends boolean = false>(options?: Options<TypesenseControllerImportData, ThrowOnError>) {
  return (options?.client ?? client).get<TypesenseControllerImportResponse, TypesenseControllerImportError, ThrowOnError>({
    ...options,
    url: '/api/v1/typesense/import',
  })
}

export function typesenseControllerGetCollections<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<TypesenseControllerGetCollectionsResponse, TypesenseControllerGetCollectionsError, ThrowOnError>({
    ...options,
    url: '/api/v1/typesense/collections',
  })
}

export function fileControllerCreateFile<ThrowOnError extends boolean = false>(options: Options<FileControllerCreateFileData, ThrowOnError>) {
  return (options?.client ?? client).post<FileControllerCreateFileResponse, FileControllerCreateFileError, ThrowOnError>({
    ...options,
    url: '/api/v1/file',
  })
}

export function fileControllerConfirmFileUpload<ThrowOnError extends boolean = false>(options: Options<FileControllerConfirmFileUploadData, ThrowOnError>) {
  return (options?.client ?? client).post<FileControllerConfirmFileUploadResponse, FileControllerConfirmFileUploadError, ThrowOnError>({
    ...options,
    url: '/api/v1/file/{file}/confirm-upload',
  })
}

export function fileControllerDownloadFile<ThrowOnError extends boolean = false>(options: Options<FileControllerDownloadFileData, ThrowOnError>) {
  return (options?.client ?? client).post<void, unknown, ThrowOnError>({
    ...options,
    url: '/api/v1/file/{file}/download',
  })
}

export function fileControllerRemoveFile<ThrowOnError extends boolean = false>(options: Options<FileControllerRemoveFileData, ThrowOnError>) {
  return (options?.client ?? client).delete<FileControllerRemoveFileResponse, FileControllerRemoveFileError, ThrowOnError>({
    ...options,
    url: '/api/v1/file/{file}',
  })
}

export function statusControllerGetApiStatus<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<StatusControllerGetApiStatusResponse, StatusControllerGetApiStatusError, ThrowOnError>({
    ...options,
    url: '/api',
  })
}

export function statusControllerGetHealthStatus<ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) {
  return (options?.client ?? client).get<StatusControllerGetHealthStatusResponse, StatusControllerGetHealthStatusError, ThrowOnError>({
    ...options,
    url: '/api/health',
  })
}
