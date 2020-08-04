const toggleButton = document.querySelector(".toggle");
const rootStyle = document.documentElement.style;

let isDark = true;
toggleButton.addEventListener("click", () => {
  // const isDark = rootStyle.getPropertyValue("--main-bg-color") === "#000";
  if (isDark) {
    rootStyle.setProperty("--main-bg-color", "#fff");
    rootStyle.setProperty("--main-color", "#000");
  } else {
    rootStyle.setProperty("--main-bg-color", "#000");
    rootStyle.setProperty("--main-color", "#fff");
  }
  isDark = !isDark;
});
