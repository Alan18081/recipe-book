"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const add_ingredient_dto_1 = require("../../ingredients/dto/add-ingredient.dto");
class AddRecipeDto {
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], AddRecipeDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], AddRecipeDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", Object)
], AddRecipeDto.prototype, "imageUrl", void 0);
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => add_ingredient_dto_1.AddIngredientDto),
    __metadata("design:type", Array)
], AddRecipeDto.prototype, "ingredients", void 0);
exports.AddRecipeDto = AddRecipeDto;
//# sourceMappingURL=add-recipe.dto.js.map