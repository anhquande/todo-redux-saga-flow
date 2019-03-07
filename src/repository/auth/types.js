// @flow

export const ROLE_GUEST = "ROLE_GUEST"
export const ROLE_USER = "ROLE_USER"
export const ROLE_ADMIN = "ROLE_ADMIN"
export const ROLE_SUPER_ADMIN = "ROLE_SUPER_ADMIN"
export const ROLE_MANAGE_TAG = "ROLE_MANAGE_TAG"
export const ROLE_MANAGE_TODO = "ROLE_MANAGE_TODO"

export type GrantedAuthority =
  | "*"
  | "ROLE_GUESS"
  | "ROLE_USER"
  | "ROLE_ADMIN"
  | "ROLE_SUPER_ADMIN"
  | "ROLE_MANAGE_TAG"
  | "ROLE_MANAGE_TODO"

export type GrantedAuthorities = Array<GrantedAuthority>

export type AuthUser = {
  username: string,
  email: string,
  id: string,
  roles: GrantedAuthorities
}

export type AuthState = {
  +authenticated: boolean,
  +user: AuthUser,
  +grantedAuthorities: GrantedAuthorities,
  +sessionId: string,
  +token: string,
  loading: boolean,
  error: string,
}

export const Anonymous: AuthUser = { username: "", id: "", email: "", roles: [] }



