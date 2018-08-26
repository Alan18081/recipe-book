"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_INGREDIENT = 'ADD_INGREDIENT';
exports.REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
exports.UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
exports.START_EDITING = 'START_EDITING';
exports.STOP_EDITING = 'STOP_EDITING';
class AddIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.ADD_INGREDIENT;
    }
}
exports.AddIngredient = AddIngredient;
class RemoveIngredient {
    constructor() {
        this.type = exports.REMOVE_INGREDIENT;
    }
}
exports.RemoveIngredient = RemoveIngredient;
class UpdateIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.UPDATE_INGREDIENT;
    }
}
exports.UpdateIngredient = UpdateIngredient;
class StartEditing {
    constructor(payload) {
        this.payload = payload;
        this.type = exports.START_EDITING;
    }
}
exports.StartEditing = StartEditing;
class StopEditing {
    constructor() {
        this.type = exports.STOP_EDITING;
    }
}
exports.StopEditing = StopEditing;
//# sourceMappingURL=shopping-list.actions.js.map