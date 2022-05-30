const ingredients = document.querySelector("#ingredients");
const recipes = document.querySelector("#recipes");
const tabColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--tabColor"
);

ingredients.onclick = () => {
  document.querySelector("#recipeContent").style.display = "none";
  document.querySelector("#ingredientContent").style.display = "block";
  recipes.style.border = "none";
  ingredients.style.borderBottom = `4px solid ${tabColor}`;
};

recipes.onclick = () => {
  document.querySelector("#recipeContent").style.display = "block";
  document.querySelector("#ingredientContent").style.display = "none";
  ingredients.style.border = "none";
  recipes.style.borderBottom = `4px solid ${tabColor}`;
};
