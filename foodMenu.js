const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', getMealList)

function getMealList() {

    let searchInput = document.getElementById('getSearchInput').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(res => res.json())
        .then(data => showMeals(data.meals));
}
const showMeals = foods => {
    const foodItemsDiv = document.getElementById('foodItems');
    // console.log(foods);
    foodItemsDiv.innerHTML = '';
    foods.forEach(foodItem => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.className = 'foodItem';

        foodItemDiv.innerHTML =
            `
        <div onclick = "getFoodDetails(${foodItem.idMeal})">
            <div class="food-img">
                <img src="${foodItem.strMealThumb}">                    
            </div>

            <div>
               <h3>${foodItem.strMeal}</h3>
            </div>
        </div>
            `;

        foodItemsDiv.appendChild(foodItemDiv);
    });
}

const getFoodDetails = idMeal => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => foodDetails(data.meals))
}

const foodDetails = showFoodDetail => {
    // console.log(showFoodDetail);
    const foodDetailContainer = document.getElementById('detail-container');
    foodDetailContainer.innerHTML = '';

    showFoodDetail.forEach(foodDetail => {
        const foodDetailDiv = document.createElement('div');
        foodDetailDiv.innerHTML =
            `
        <div class = "foodDetailImg">
            <img src= "${foodDetail.strMealThumb}">
        </div>

        <div class ="foodIngredient">
            <h2>Food Ingredient</h2>
            <ul type = "none" class ="ingredient">
                <li>${foodDetail.strIngredient1}</li>
                <li>${foodDetail.strIngredient2}</li>
                <li>${foodDetail.strIngredient3}</li>
                <li>${foodDetail.strIngredient4}</li>
                <li>${foodDetail.strIngredient5}</li>
                <li>${foodDetail.strIngredient6}</li>
                <li>${foodDetail.strIngredient7}</li>
                <li>${foodDetail.strIngredient8}</li>
                <li>${foodDetail.strIngredient9}</li>
                <li>${foodDetail.strIngredient10}</li>
            </ul>
        </div>
    `;
        foodDetailContainer.appendChild(foodDetailDiv);
    });
};