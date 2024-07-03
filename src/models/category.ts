import { KEY_CATEGORIES } from "../enums/enums";
import { Item } from "./item";

class Category {
  private id: string;
  private name: string;
  private categoryItems: Item[] = [];
  private key: KEY_CATEGORIES;

  constructor(id: string, name: string, key: KEY_CATEGORIES) {
    this.id = id;
    this.name = name;
    this.key = key;
  }

  // Método para adicionar um novo item à lista de itens da categoria
  addItem(newItem: Item): void {
    this.categoryItems.push(newItem);
  }

  // Método para retornar a lista de itens da categoria
  getCategoryItems(): Item[] {
    return this.categoryItems;
  }
}

export default Category;
