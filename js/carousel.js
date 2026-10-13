const testimonials = [
  {
    name: "Artem Jones",
    image: "assets/user1.jpg",
    quote: "roadmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images. It's amazing to see how much impact it has had on millions of lives since then."
  },
  {
    name: "Jackie Mackle",
    image: "assets/user1.jpg",
    quote: "I find myself recommending roadmap.sh to all the internees or junior developers. It's a great way to skill up and grow in your career."
  },
  {
    name: "Artem Jones",
    image: "assets/user1.jpg",
    quote: "Since starting my career in 2021, I have only followed one resource, roadmap.sh. It truly helped me go from 0 to having a job and changing the financial trajectory of my family."
  }
];

let activeIndex = 0;
const reviewText = document.querySelector("#review-text");
const currentName = document.querySelector("#current-name");
const currentAvatar = document.querySelector("#current-avatar");
const sidePeople = document.querySelectorAll(".carousel-person--side");

function renderTestimonial() {
  const current = testimonials[activeIndex];
  reviewText.textContent = current.quote;
  currentName.textContent = current.name;
  currentAvatar.src = current.image;
  currentAvatar.alt = current.name;

  sidePeople.forEach((person) => {
    const offset = Number(person.dataset.offset);
    const index = (activeIndex + offset + testimonials.length) % testimonials.length;
    const image = person.querySelector("img");
    image.src = testimonials[index].image;
    image.alt = "";
  });
}

document.querySelectorAll(".carousel-button").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.dataset.direction === "next" ? 1 : -1;
    activeIndex = (activeIndex + direction + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  activeIndex = (activeIndex + (event.key === "ArrowRight" ? 1 : -1) + testimonials.length) % testimonials.length;
  renderTestimonial();
});

renderTestimonial();
