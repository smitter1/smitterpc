// Keep header navigation active state synced to current page.
(() => {
  const navLinks = document.querySelectorAll(".top-bar__nav a.nav-btn");
  if (!navLinks.length) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => link.classList.remove("nav-btn--primary"));

  const activeLink = Array.from(navLinks).find((link) => {
    const href = (link.getAttribute("href") || "").split("#")[0].split("?")[0];
    return href === currentPath;
  });

  if (activeLink) {
    activeLink.classList.add("nav-btn--primary");
  }
})();

