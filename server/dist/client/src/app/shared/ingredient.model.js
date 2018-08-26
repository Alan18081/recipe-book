"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
        this.id = lodash_1.uniqueId();
    }
}
exports.Ingredient = Ingredient;
//# sourceMappingURL=ingredient.model.js.map