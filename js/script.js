// YOUR CODE HERE
const btn = document.getElementById("btn1");
const output = document.getElementById("output1");

btn.addEventListener("click", function () {
  output.style.color = "red";
});


const btn2 = document.getElementById("btn2");
const output2 = document.getElementById("output2");

btn2.addEventListener("click", function () {
  const span = document.createElement("span");
  span.textContent = " Hello word";
  output2.appendChild(span);
});


const btn3 = document.getElementById("btn3");
const paragraph = document.querySelector("#output3 p");

btn3.addEventListener("click", function () {
  paragraph.classList.remove("small-text");
});


const btn4 = document.getElementById("btn4");
const paragraphs = document.querySelectorAll("#output4 p");

btn4.addEventListener("click", function () {
  paragraphs.forEach((p) => {
    p.style.color = "red";
  });
});


const btn5 = document.getElementById("btn5");
const input = document.getElementById("message");

btn5.addEventListener("click", function () {
  console.log(input.value);
});
