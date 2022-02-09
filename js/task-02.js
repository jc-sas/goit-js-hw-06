const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients');
console.log(ingredientsContainerEl);

const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = '';
console.log(itemEl);

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const elements = makeIngredients(ingredients);
ingredientsContainerEl.append(...elements);
