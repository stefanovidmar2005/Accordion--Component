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

const accordions = [
  {
    title: "Can I use FrontendPro to prepare for a frontend job interview?",
    text: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone. ",
  },
  {
    title: "Do I need to have experience in frontend dev to use FrontendPro?",
    text: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone. ",
  },
  {
    title: "How often are new challenges added to FrontendPro?",
    text: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone. ",
  },
  {
    title:
      "What kind of frontend challenges can I expect to find on FrontendPro??",
    text: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone. ",
  },
  {
    title: "Can I use libraries/frameworks on these projects?",
    text: "FrontendPro is designed to accommodate developers of all skill levels. Our challenges range from beginner to advanced, so there's something for everyone. ",
  },
];
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
