"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(id, title, description, price, image, userId, createdAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.userId = userId;
        this.createdAt = createdAt;
    }
    getId() {
        return this.id;
    }
}
exports.Item = Item;
//# sourceMappingURL=item.js.map