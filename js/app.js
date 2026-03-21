const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Faq Page
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Close others (optional)
    document.querySelectorAll(".faq-answer").forEach((item) => {
      if (item !== answer) {
        item.style.maxHeight = null;
      }
    });

    // Toggle current
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

const contents = document.querySelectorAll(".values-content");
const button = document.querySelector(".values-toggle");

let index = 0;

button.addEventListener("click", () => {
  contents[index].classList.remove("active");

  index = (index + 1) % contents.length;

  contents[index].classList.add("active");
});
