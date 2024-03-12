let countEl = document.getElementById("count-el");
let count = 0;

const updateCount = () => {
  countEl.textContent = count;
};

const handleClick = (e) => {
  if (e.target.id === "increment-btn") {
    count++;
  } else if (e.target.id === "decrement-btn") {
    count--;
  }
  updateCount();
};

document.addEventListener("click", handleClick);
