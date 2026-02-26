
export const AnimationDefault = () => {
    const element = document.querySelectorAll(
      ".fromLeft, .fromRight, .fromTop, .fromBottom",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        let lastClass = "";
        let count = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentClass = [
              "fromLeft",
              "fromRight",
              "fromTop",
              "fromBottom",
            ].find((cls) => entry.target.classList.contains(cls));
            if (currentClass && currentClass === lastClass) {
              count++;
            } else {
              count = 0;
            }
            lastClass = currentClass ?? "";
            (entry.target as HTMLElement).style.setProperty(
              "--delay",
              `${count * 0.3}s`,
            );
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    element.forEach((el) => observer.observe(el));
    return observer
}