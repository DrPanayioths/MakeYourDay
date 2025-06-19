const worker = new Worker("worker.js");

function options_manager() {
  const base = document.getElementById("searchMode");
  base.addEventListener("change", function () {
    if (base.value === "searchmode_on") {
      sender("1");
    } else if (base.value === "searchmode_off") {
      sender("0");
    }
  });
}

function sender(message) {
  worker.postMessage({
    type: "setUrl",
    url: `https://makeyourday.vercel.app?s=${message}`,
  });
}

worker.onmessage = function (event) {
  console.log("Worker says:", event.data);
};
