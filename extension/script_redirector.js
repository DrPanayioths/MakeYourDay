document.addEventListener("DOMContentLoaded", function () {
  let gohere = localStorage.getItem("searchMode");
  console.log("Redirecting to:", gohere);
  if (gohere) {
    window.location.href = gohere;
  }
});
