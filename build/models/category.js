"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Category {
    constructor(id, name, key) {
        this.categoryItems = [];
        this.id = id;
        this.name = name;
        this.key = key;
    }
    addItem(newItem) {
        this.categoryItems.push(newItem);
    }
    getCategoryItems() {
        return this.categoryItems;
    }
}
exports.default = Category;
//# sourceMappingURL=category.js.map