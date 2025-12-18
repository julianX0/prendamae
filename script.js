const quatrains = document.querySelectorAll(".quatrain");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.5 // reveal when half visible
  }
);

quatrains.forEach(q => observer.observe(q));
