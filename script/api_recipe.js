const fetch_recipe = async () => {
  try {
    const apiKey = "455b1277717a497a9143d9d154929f8d";
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query='pasta'`;
    const response = await fetch(url);
    // console.log(response);
    if (!response.ok) {
      console.log("error occured");
    }

    let data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }
};

fetch_recipe();

function displayRecipes(recipes) {
  const container = document.getElementById("recipe-container");
  container.innerHTML = ""; // Clear previous results

  if (!container) {
    console.error(
      "Error: The element with id 'recipe-container' was not found."
    );
    return;
  }

  // Check if the recipes array is valid and not empty
  if (!recipes || !Array.isArray(recipes) || recipes.length === 0) {
    container.innerHTML =
      "<p class='text-gray-500 text-center'>No recipes found.</p>";
    return;
  }

  recipes.forEach((recipe) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.className =
      "flex flex-col md:flex-row max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6";

    // Use innerHTML to inject the complete HTML string
    recipeDiv.innerHTML = `
      <div class="w-full md:w-1/2 p-6 md:p-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">${recipe.title}</h1>
        <p class="text-gray-600 mb-6">${recipe.title}</p>
        
        <h2 class="text-xl md:text-2xl font-semibold text-gray-700 mb-3">Ingredients</h2>
        <ul class="list-disc list-inside text-gray-600 mb-6 space-y-1">
         
        </ul>

        <h2 class="text-xl md:text-2xl font-semibold text-gray-700 mb-3">Instructions</h2>
        <ol class="list-decimal list-inside text-gray-600 space-y-2">
        
        </ol>
      </div>

      <div class="w-full md:w-1/2 flex items-center justify-center p-4">
        <img 
          src="${recipe.image}" 
          alt="Image of ${recipe.title}" 
          class="w-full h-auto object-cover rounded-lg shadow-md"
        >
      </div>
    `;

    container.appendChild(recipeDiv);
  });
}
