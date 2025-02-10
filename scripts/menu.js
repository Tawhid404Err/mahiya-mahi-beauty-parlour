document.getElementById("menu-icon").addEventListener("click", function () {
  const linksBox = document.getElementById("links_box");
  const menuIcon = this;

  // Toggle the position of #links_box
  if (linksBox.style.opacity === "1") {
    linksBox.style.opacity = "0";
    // Change the SVG to the hamburger icon
    menuIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      `;
  } else {
    linksBox.style.opacity = "1";

    // Change the SVG to the close icon
    menuIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      `;
  }
});
