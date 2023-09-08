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
    }; border-left: 5px solid ${borderColors[index]} ;" data-id=${index + 1}>
              <div class="accordion__box-headings">
               <h3 class="accordion__box-heading">${accordion.title}</h3>
               <div class="plus">
               <span class="line line-vertical"></span>
               <span class="line line-horizontal"></span>
             </div>
                </div>
                <p>${accordion.text}</p>
                </div>`;
  accordionContainer.insertAdjacentHTML("beforeend", html);
});
