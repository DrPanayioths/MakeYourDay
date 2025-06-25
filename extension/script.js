// First Load Setup
if (localStorage.getItem("searchMode") === null) {
  localStorage.setItem("searchMode", "https://makeyourday.vercel.app");
}

document
  .getElementById("searchMode")
  .addEventListener("change", options_manager);

function options_manager() {
  const base_search = document.getElementById("searchMode");
  const baseURL = "https://makeyourday.vercel.app";

  // To-Do: Make The URL Handling Be Done In The Script Redirector

  if (base_search.value === "searchmode_on") {
    final = baseURL + "?s=1";
    localStorage.setItem("searchMode", final);
  } else if (base_search.value === "searchmode_off") {
    final = baseURL + "";
    localStorage.setItem("searchMode", final);
  }

  // Status Extension
  const base_status = document.getElementById("extension_status");

  if (base_status.value === "enable_status") {
    localStorage.setItem("style", "1");
  } else if (base_status.value === "disable_status") {
    localStorage.setItem("style", "0");
  }
}
