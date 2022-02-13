var recipeApiKey = "b49c94e39bb5414b2d07ad05bd3ec5f2";
let imageApiKey = "RUQuxPjGR6Ilkox7XXVJeDgtrx5S3OXASTUxQRUKq3w";
var searchButton = document.querySelector("#search-btn");
var result = document.querySelector("#result");
let resultContainer = document.getElementById("result-container");
let imageOne = document.getElementById("image-1");
let imageTwo = document.getElementById("image-2");

function searchRecipe() {
  let searchInput = $("#search-input").val();

  var apiRecipe =
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
    searchInput +
    "&app_id=a2a764d9&app_key=" +
    recipeApiKey;

  fetch(apiRecipe)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      searchedResult(data);
    });
  var imageApi =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    searchInput +
    "&client_id=" +
    imageApiKey;

  fetch(imageApi)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data2) {
      searchedImages(data2);
    });
}
