document.addEventListener("DOMContentLoaded", function () {
  const status_check = localStorage.getItem("status");
  if (status_check === "1") {
    let gohere = localStorage.getItem("searchMode");
    console.log("Redirecting to:", gohere);
    if (gohere) {
      window.location.href = gohere;
    }
  } else {
    window.location.href = "https://www.google.com";
  }
});
