let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item"); // target all elements with class "item"
  let lastItem = items[items.length - 1];
  document.querySelector(".slide").insertBefore(lastItem, items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item"); // target all elements with class "item"
  let firstItem = items[0];
  document.querySelector(".slide").appendChild(firstItem);
});
