// First Load Setup
if (localStorage.getItem("searchMode") === null) {
  localStorage.setItem("searchMode", "https://makeyourday.vercel.app");
}

document
  .getElementById("searchMode")
  .addEventListener("change", options_manager);

function options_manager() {
  const base = document.getElementById("searchMode");
  const baseURL = "https://makeyourday.vercel.app";

  if (base.value === "searchmode_on") {
    final = baseURL + "?s=1";
    localStorage.setItem("searchMode", final);
  } else if (base.value === "searchmode_off") {
    final = baseURL + "";
    localStorage.setItem("searchMode", final);
  }
}
