import {ITEM_CATEGORIES, STATUS_CATEGORIES, USER_ROLES } from '../enums/enums'

export interface IItem {
    id: string,
    title: string,
    order: number,
    type: ITEM_CATEGORIES,
    path: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    tags: string[],
    author: {}[],
    status: STATUS_CATEGORIES
}

export interface TokenPayload {
    id: string,
    username: string,
    fullname: string,
    role: USER_ROLES,
}


export interface IUserDB {
    id :string,
    username :string,
    fullname: string,
    email :string,
    password :string,
    role : USER_ROLES,
    avatar: string,
    created_at :string
  }
  
  
  
  
  export interface IUserModel {
      id :string,
      username :string,
      fullname: string,
      email :string,
      role: USER_ROLES,
      avatar: string,
      createdAt: string
  }
  