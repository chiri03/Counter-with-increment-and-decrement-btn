const countEl = document.querySelector("[data-counter-value]");
const countBntIncr = document.querySelector("[data-counter-button=increment]");
const countBntDecr = document.querySelector("[data-counter-button=decrement]");
let count = 0;

const updateCount = () => {
  countEl.textContent = count;
};

// const handleClick = (e) => {
//   const action = e.target.getAttribute("data-counter-button");
//   if (action === "increment") {
//     count++;
//   } else if (action === "decrement") {
//     count--;
//   }
//   updateCount();
// };

const handleClick = (e) => {
  count += e ? 1 : -1;
  updateCount();
};

countBntIncr.addEventListener("click", () => handleClick(true));
countBntDecr.addEventListener("click", () => handleClick(false));
