const revealItems = document.querySelectorAll(".reveal-section");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const readMoreToggles = document.querySelectorAll(".mobile-readmore-toggle");

readMoreToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const wrapper = toggle.closest(".mobile-readmore");
    const content = wrapper?.querySelector(".mobile-readmore-content");

    if (!content) {
      return;
    }

    const isCollapsed = content.dataset.collapsed !== "false";
    content.dataset.collapsed = isCollapsed ? "false" : "true";
    toggle.setAttribute("aria-expanded", String(isCollapsed));
    toggle.textContent = isCollapsed ? "Show less" : "Read all";
  });
});
