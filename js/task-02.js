const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientsMarkup = ingredients.map(ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.classList.add('item');
  ingredientsItem.textContent = ingredient
  return ingredientsItem
});

ingredientsEl.append(...ingredientsMarkup);
