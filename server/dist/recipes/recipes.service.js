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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const recipe_entity_1 = require("./recipe.entity");
const ingredient_entity_1 = require("../ingredients/ingredient.entity");
let RecipesService = class RecipesService {
    constructor(recipesRepository, ingredientsRepository) {
        this.recipesRepository = recipesRepository;
        this.ingredientsRepository = ingredientsRepository;
    }
    findAll(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.recipesRepository
                .createQueryBuilder('recipe')
                .where('recipe.userId = :userId', { userId })
                .leftJoinAndSelect('recipe.ingredients', 'ingredient')
                .getMany();
        });
    }
    addRecipe(recipeInfo, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const newRecipe = Object.assign({}, new recipe_entity_1.Recipe(), recipeInfo, { userId });
            const ingredients = recipeInfo.ingredients;
            const ingredientsEntities = ingredients.map(ing => (Object.assign({}, new ingredient_entity_1.Ingredient(), ing, { userId })));
            yield Promise.all(ingredientsEntities.map(ing => this.ingredientsRepository.save(ing)));
            newRecipe.ingredients = ingredientsEntities;
            return yield this.recipesRepository.save(newRecipe);
        });
    }
    updateRecipe(recipeId, recipeInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.recipesRepository.update(recipeId, Object.assign({}, recipeInfo));
            return yield this.recipesRepository.findOne(recipeId);
        });
    }
    removeRecipe(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.recipesRepository.delete(id);
        });
    }
};
RecipesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(recipe_entity_1.Recipe)),
    __param(1, typeorm_1.InjectRepository(ingredient_entity_1.Ingredient)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RecipesService);
exports.RecipesService = RecipesService;
//# sourceMappingURL=recipes.service.js.map