const body = document.querySelector("body");
const span = document.querySelector("span");
const button = document.querySelector("button");

const getColor = () => {
  const hexNumber = Math.floor(Math.random() * 16777216);
  const hexCode = `#${hexNumber.toString(16)}`;
  span.innerText = hexCode;
  body.style.backgroundColor = hexCode;
  button.style.backgroundColor = hexCode;
};

button.addEventListener("click", getColor);
getColor();
