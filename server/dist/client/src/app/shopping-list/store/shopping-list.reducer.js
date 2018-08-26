"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions = require("./shopping-list.actions");
const ingredient_model_1 = require("../../shared/ingredient.model");
const R = require("ramda");
const initialState = {
    ingredients: [
        new ingredient_model_1.Ingredient('Apple', 20),
        new ingredient_model_1.Ingredient('Soup', 2),
    ],
    activeIngredient: null,
    isEditing: false
};
function shoppingListReducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_INGREDIENT:
            return R.merge(state, {
                ingredients: R.merge(state.ingredients, {
                    [action.payload.id]: action.payload
                })
            });
        case actions.REMOVE_INGREDIENT:
            return R.merge(state, {
                ingredients: R.omit(state.activeIngredient.id, state.ingredients),
                activeIngredient: null,
                isEditing: false
            });
        case actions.START_EDITING:
            return R.merge(state, {
                activeIngredient: action.payload,
                isEditing: true
            });
        default:
            return state;
    }
}
exports.shoppingListReducer = shoppingListReducer;
//# sourceMappingURL=shopping-list.reducer.js.map