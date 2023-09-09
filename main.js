// SELECTIONS
const accordionContainer = document.querySelector(".accordion__boxes");

const backgroundColors = [
  "#ffedd5",
  "#e0e7ff",
  "#ede9fe",
  "#fce7f3",
  "#f0fdf4",
];
const borderColors = ["#FB923C", "#818cf8", "#A78BFA", "#F472B6", "#4ADE80"];
// note

import accordions from "./data";
accordions.forEach((accordion, index) => {
  const html = `
    <div class="accordion__box" style="background-color:${
      backgroundColors[index]
    }; border-left: 4px solid ${borderColors[index]} ;" data-id=${index + 1}>
              <div class="accordion__box-headings">
               <h3 class="accordion__box-heading">${accordion.title}</h3>
               <div class="plus">
               <span class="line line-vertical"></span>
               <span class="line line-horizontal"></span>
             </div>
                </div>
                <p class='accordion__description'>${accordion.text}</p>
                </div>`;
  accordionContainer.insertAdjacentHTML("beforeend", html);
});

// Event Delegation

accordionContainer.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target.closest(".plus");
  if (!target) return;
  const parent = target.parentElement.parentElement;
  const paragraphEl = parent.querySelector(".accordion__description");
  const header = parent.querySelector(".accordion__box-heading");
  target.classList.toggle("active-accordion");
  paragraphEl.classList.toggle("active-description");
  header.classList.toggle("dark");
});
