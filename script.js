const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $form = document.querySelector(".todo-form");

function getInputValue(event) {
  const inputVl = $input.value;
  const getDate = `${new Date().getHours()}:${new Date().getMinutes()}`;
  const inputHTML = `<li><input type="checkbox" /> <span>${inputVl}</span> ⌚ ${getDate}</li>`;
  const listEl = document.querySelector(".task-list");

  listEl.innerHTML += inputHTML;
  $input.value = "";
  event.preventDefault();
}
$form.addEventListener("submit", getInputValue);
