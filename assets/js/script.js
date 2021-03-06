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
      console.log("RecipeAPI", data);
    });
  var imageApi =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    searchInput +
    "&client_id=" +
    imageApiKey;

  fetch(imageApi)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data2) => {
      searchedImages(data2);
      console.log("imageAPI", data2);
    });
}

function searchedResult(data) {
  resultContainer.innerHTML = "";
  let title = document.createElement("h4");
  title.innerText = data.hits[0].recipe.label;
  title.setAttribute("class", "title");
  resultContainer.appendChild(title);

  let ingredientLines = document.createElement("ul");

  resultContainer.appendChild(ingredientLines);

  let lists = data.hits[0].recipe.ingredientLines;
  for (let i = 0; i < lists.length; i++) {
    let ingredientList = document.createElement("li");
    ingredientList.setAttribute("class", "ingredientList");

    ingredientLines.appendChild(ingredientList);
    ingredientList.innerText = lists[i];
  }

  let source = document.createElement("p");
  source.innerText = "Source: " + data.hits[0].recipe.source;
  resultContainer.appendChild(source);
  var aTag = document.createElement("a");
  aTag.setAttribute("href", data.hits[0].recipe.url);
  aTag.innerHTML = data.hits[0].recipe.url;
  resultContainer.appendChild(aTag);

  let titleTwo = document.createElement("h4");
  titleTwo.innerText = data.hits[3].recipe.label;
  titleTwo.setAttribute("class", "title");
  resultContainer.appendChild(titleTwo);

  let ingredientLine = document.createElement("ul");

  resultContainer.appendChild(ingredientLine);

  let list = data.hits[3].recipe.ingredientLines;
  for (let i = 0; i < list.length; i++) {
    let ingredientLists = document.createElement("li");
    ingredientLists.setAttribute("class", "ingredientList");

    ingredientLine.appendChild(ingredientLists);
    ingredientLists.innerText = list[i];
  }

  let sources = document.createElement("p");
  sources.innerText = "Source: " + data.hits[3].recipe.source;
  resultContainer.appendChild(sources);
  var aTag = document.createElement("a");
  aTag.setAttribute("href", data.hits[3].recipe.url);
  aTag.innerHTML = data.hits[3].recipe.url;
  resultContainer.appendChild(aTag);
}

function searchedImages(data2) {
  firstImage = data2.results[0].urls.small;
  imageOne.innerHTML = "<img src='" + firstImage + "'>";
  secondImage = data2.results[1].urls.small;

  imageTwo.innerHTML = "<img src='" + secondImage + "'>";
}
searchButton.addEventListener("click", searchRecipe);
