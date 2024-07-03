import { USER_ROLES } from './../enums/enums';

export type t = string
export type n = number
export type arr = []
export type obj = {}
export type SI = true
export type NO = false
export type silver = USER_ROLES.ADMIN & USER_ROLES.NORMAL 
export type green = USER_ROLES.NORMAL & USER_ROLES.BUYER 
export type gray = USER_ROLES.EMPLOYER & USER_ROLES.NORMAL 
export type blue = USER_ROLES.NORMAL
export type magenta = USER_ROLES.NORMAL & USER_ROLES.PUNISHED