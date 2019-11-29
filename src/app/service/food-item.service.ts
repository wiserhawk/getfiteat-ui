import { Injectable, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

@Injectable()
export class FoodItemService implements OnInit  {

  itemImageRootPath: string = "assets/images/items/";

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    
  }

  public getItemImageRootPath(): string {
    return this.itemImageRootPath;
  }

  public getAllFoodItemsUsingHttp(): Observable<Response> {
    return this._httpService.getAllActiveFoodItems();
    
    /*return [
              {
                "itemId": "hs0000001",
                "name": "Citrus Pomegranate Sprouts Salad - 782 (Kcal)",
                "ingredients": [
                  "Mixed Sprouts, Boiled Pearl Barley, Orange, Tomato, Basil, Olive, Cucumber, Pomegranate, Feta, Olive Oil"
                ],
                "category": "Continental",
                "description": "Crunchy, refreshing and satiating � this salad is a playground for flavours and textures. Blanched mixed sprouts, pearl barley, tomato, basil, black olive, cucumber, pomegranate and feta are seasoned, tossed with oil and topped with segments of fresh oranges. A zesty orange juice and basil vinaigrette accompanies the fab salad. Serves 1.",
                "price": 170,
                "discountedPrice": 136,
                "type": "VEG",
                "image": "veg-food-1.jpg",
                "recipe": "Not available on this item",
                "active": true,
                "nutritionFacts": {
                  "servingSize":"350",
                  "servingPerContainer":"1",
                  "calories":"550",
                  "caloriesFromFat":"210",
                  "totalFat":"23",
                  "totalFatPercent":"35",
                  "saturatedFat":"10",
                  "saturatedFatPercent":"50",
                  "transFat":"0",
                  "transFatPercent":"0",
                  "cholesterol":"110",
                  "cholesterolPercent":"37",
                  "sodium":"800",
                  "sodiumPercent":"33",
                  "totalCarbohydrates":"52",
                  "totalCarbohydratesPercent":"17",
                  "dietaryFiber":"6",
                  "dietaryFiberPercent":"24",
                  "sugars":"21",
                  "protein":"33",
                  "proteinPercent":"66",
                  "vitaminAPercent":"45",
                  "vitaminCPercent":"60",
                  "calciumPercent":"15",
                  "ironPercent":"15"
                }
              },
              {
                "itemId": "hs0000002",
                "name": "Mega Chicken-Steak Salad",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "MEXICAN",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "NON-VEG",
                "image": "veg-food-2.jpg",
                "recipe": "Not Available",
                "active": true
              },
              {
                "itemId": "hs0000003",
                "name": "Sichuan Peppercorn Chicken with Shiitake Mushroom and Tomato-Corn Rice",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "MEXICAN",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "NON-VEG",
                "image": "veg-food-3.jpg",
                "recipe": "Not Available",
                "active": true
              },
              {
                "itemId": "hs0000004",
                "name": "Three Treasure Veggies 'n' Noodles with Oyster-Mushroom Sauce, Broccoli, Carrot and Beans",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "CONTINENTAL",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "VEG",
                "image": "veg-food-1.jpg",
                "recipe": "Not Available",
                "active": true
              },
              {
                "itemId": "hs0000005",
                "name": "Three Treasure Veggies 'n' Noodles with Oyster-Mushroom Sauce, Broccoli, Carrot and Beans",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "CONTINENTAL",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "VEG",
                "image": "non-veg-food-2.png",
                "recipe": "Not Available",
                "active": true
              },
              {
                "itemId": "hs0000006",
                "name": "Three Treasure Veggies 'n' Noodles with Oyster-Mushroom Sauce, Broccoli, Carrot and Beans",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "CONTINENTAL",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "VEG",
                "image": "non-veg-food-1.png",
                "recipe": "Not Available",
                "active": true
              },
              {
                "itemId": "hs0000007",
                "name": "Three Treasure Veggies 'n' Noodles with Oyster-Mushroom Sauce, Broccoli, Carrot and Beans",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "CONTINENTAL",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "VEG",
                "image": "veg-food-1.jpg",
                "recipe": "Not Available",
                "active": true
              },
              {
                "itemId": "hs0000008",
                "name": "Three Treasure Veggies 'n' Noodles with Oyster-Mushroom Sauce, Broccoli, Carrot and Beans",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "CONTINENTAL",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "VEG",
                "image": "veg-food-2.jpg",
                "recipe": "Not Available",
                "active": true
              },
              {
                "itemId": "hs0000009",
                "name": "Three Treasure Veggies 'n' Noodles with Oyster-Mushroom Sauce, Broccoli, Carrot and Beans",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "CONTINENTAL",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "VEG",
                "image": "veg-food-3.jpg",
                "recipe": "Not Available",
                "active": true
              },
              {
                "itemId": "hs0000010",
                "name": "Three Treasure Veggies 'n' Noodles with Oyster-Mushroom Sauce, Broccoli, Carrot and Beans",
                "ingredients": [
                  "Chicken","Pearl Barley","Green Bean","Carrot","Radish","Cucumber","Tomato","Mixed Sprouts","Golden Corn",
                  "Olive","Pomegranate","BBQ Sauce","Garlic", "Thyme","White-Wine Vinegar","Peanut","Peanut Butter","Mayonnaise"
                ],
                "category": "CONTINENTAL",
                "description": "This is no ordinary salad, this is the MEGA chicken-steak salad � light, full of flavour and satiating! Barbeque sauce, thyme and garlic infused grilled and sliced chicken; sliced carrot and radish and boiled egg sit pretty on saut�ed pearl barley, mixed sprouts, green bean, carrot, cucumber, pomegranate and golden corn. A portion of nutty peanut-butter mayo accompanies your salad! Serves 1.",
                "price": 200,
                "discountedPrice": 160,
                "type": "VEG",
                "image": "non-veg-food-1.png",
                "recipe": "Not Available",
                "active": true
              }
              
      
    ];*/
  }

  public getFoodItemByIdUsingHttp(id: string): Observable<Response> {
    return this._httpService.getFoodItemById(id);
    /*return {
      "itemId": "hs0000001",
      "name": "Citrus Pomegranate Sprouts Salad - 782 (Kcal)",
      "ingredients": [
        "Mixed Sprouts, Boiled Pearl Barley, Orange, Tomato, Basil, Olive, Cucumber, Pomegranate, Feta, Olive Oil"
      ],
      "category": "Continental",
      "description": "Crunchy, refreshing and satiating this salad is a playground for flavours and textures. Blanched mixed sprouts, pearl barley, tomato, basil, black olive, cucumber, pomegranate and feta are seasoned, tossed with oil and topped with segments of fresh oranges. A zesty orange juice and basil vinaigrette accompanies the fab salad. Serves 1.",
      "price": 170,
      "discountedPrice": 136,
      "type": "VEG",
      "image": "veg-food-1.jpg",
      "recipe": "Not available on this item",
      "active": true,
      "nutritionFacts":{
        "servingSize":"350",
        "servingPerContainer":"1",
        "calories":"550",
        "caloriesFromFat":"210",
        "totalFat":"23",
        "totalFatPercent":"35",
        "saturatedFat":"10",
        "saturatedFatPercent":"50",
        "transFat":"0",
        "transFatPercent":"0",
        "cholesterol":"110",
        "cholesterolPercent":"37",
        "sodium":"800",
        "sodiumPercent":"33",
        "totalCarbohydrates":"52",
        "totalCarbohydratesPercent":"17",
        "dietaryFiber":"6",
        "dietaryFiberPercent":"24",
        "sugars":"21",
        "protein":"33",
        "proteinPercent":"66",
        "vitaminAPercent":"45",
        "vitaminCPercent":"60",
        "calciumPercent":"15",
        "ironPercent":"15"
      }
    };*/
  }

 
  
}
