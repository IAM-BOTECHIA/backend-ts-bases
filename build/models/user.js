"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, username, fullname, email, password, role, avatar, createdAt) {
        this.id = id;
        this.username = username;
        this.fullname = fullname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.avatar = avatar;
        this.createdAt = createdAt;
    }
    getId() {
        return this.id;
    }
    getAvatar() {
        return this.avatar;
    }
    getUsername() {
        return this.fullname;
    }
    getFullname() {
        return this.fullname;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getrole() {
        return this.role;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    setEmail(value) {
        this.email = value;
    }
    setUsername(value) {
        this.username = value;
    }
    setAvatar(value) {
        this.avatar = value;
    }
    setPassword(value) {
        this.password = value;
    }
    setrole(value) {
        this.role = value;
    }
    toIDBModel() {
        return {
            id: this.id,
            fullname: this.fullname,
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role,
            avatar: this.avatar,
            created_at: this.createdAt
        };
    }
    toIUserModel() {
        return {
            id: this.id,
            fullname: this.fullname,
            username: this.username,
            email: this.email,
            role: this.role,
            avatar: this.avatar,
            createdAt: this.createdAt
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map