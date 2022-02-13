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

function searchedResult(data){
    resultContainer.innerHTML=""
let title = document.createElement("h4")
title.innerText = data.hits[0].recipe.label
title.setAttribute("class" ,"title")
resultContainer.appendChild(title)

let ingredientLines = document.createElement("ul")

resultContainer.appendChild(ingredientLines)

let lists = data.hits[0].recipe.ingredientLines
for (let i = 0; i < lists.length; i++) {
    let ingredientList = document.createElement("li")
    ingredientList.setAttribute("class" ,"ingredientList")

    ingredientLines.appendChild(ingredientList)
    ingredientList.innerText= lists[i]
}

let source = document.createElement("p")
source.innerText = "Source: " + data.hits[0].recipe.source
resultContainer.appendChild(source)
var aTag = document.createElement('a')
aTag.setAttribute('href', data.hits[0].recipe.url)
aTag.innerHTML = data.hits[0].recipe.url
resultContainer.appendChild(aTag)
