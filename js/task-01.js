const categoriesRef = document.querySelectorAll(".item");
console.log(`Number categories, ${categoriesRef.length}`);

categoriesRef.forEach(function (category) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});
