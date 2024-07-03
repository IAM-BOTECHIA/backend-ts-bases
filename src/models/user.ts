import { USER_ROLES } from "../enums/enums"

import { IUserDB, IUserModel } from "../interfaces/interfaces"


export class User {


    constructor(
        private id: string,
        private username: string,
        private fullname: string,
        private email: string,
        private password: string,
        private role: USER_ROLES,
        private avatar: string,
        private createdAt: string
    ) { }

    public getId(): string {
        return this.id
    }

    public getAvatar(): string {
        return this.avatar
    }
    public getUsername(): string {
        return this.fullname
    }
    public getFullname(): string {
        return this.fullname
    }


    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }

    public getrole(): USER_ROLES {
        return this.role
    }

    public getCreatedAt(): string {
        return this.createdAt
    }



    public setEmail(value: string): void {
        this.email = value
    }

    public setUsername(value: string): void {
        this.username = value
    }

    public setAvatar(value: string): void {
        this.avatar = value
    }
    public setPassword(value: string): void {
        this.password = value
    }

    public setrole(value: USER_ROLES): void {
        this.role = value
    }

    public toIDBModel(): IUserDB {
        return {
            id: this.id,
            fullname: this.fullname,
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role,
            avatar: this.avatar,
            created_at: this.createdAt
        }
    }

    // diminuem codigo em business
    public toIUserModel(): IUserModel {
        return {
            id: this.id,
            fullname: this.fullname,
            username: this.username,
            email: this.email,
            role: this.role,
            avatar: this.avatar,
            createdAt: this.createdAt
        }
    }

}