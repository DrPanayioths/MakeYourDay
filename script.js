// Change fuction that need to automatically load to DOMcontent

function gen_img() {
  const image_gen =
    "https://picsum.photos/" +
    window.innerWidth +
    "/" +
    window.innerHeight +
    "?grayscale";
  const image_gen_no_grayscale =
    "https://picsum.photos/" + window.innerWidth + "/" + window.innerHeight;
  document.body.style.backgroundImage = `url(${image_gen})`;
  if (localStorage.getItem("grayscale") === "on") {
    document.body.style.backgroundImage = `url(${image_gen})`;
  } else {
    document.body.style.backgroundImage = `url(${image_gen_no_grayscale})`;
  }
}
gen_img();

function handleResize() {
  gen_img();
}
window.addEventListener("resize", gen_img);

fonts = [
  '"Dela Gothic One"',
  '"DM Serif Display"',
  '"Abril Fatface"',
  '"Cantora One"',
  '"GFS Didot"',
  '"Noto Serif JP"',
  '"Oswald"',
  '"Rozha One"',
  '"ADLaM Display"',
  '"Dosis"',
];

function gen_quote() {
  const quote_gen =
    "https://johndturn-quotableapiproxy.web.val.run/quotes/random?tags=Inspirational";
  fetch(quote_gen)
    .then((response) => response.json())
    .then((data) => {
      var quote = document.getElementById("quote_display");
      if (localStorage.getItem("author") === "enabled") {
        quote.textContent = data[0].content + " - " + data[0].author;
      } else {
        quote.textContent = data[0].content;
      }

      if (localStorage.getItem("border") === "enabled") {
        quote.style.backdropFilter = "blur(10px)";
      } else {
        quote.style.backdropFilter = "blur(0px)";
      }
    });
}
gen_quote();

document.addEventListener("keydown", function (event) {
  const get_data = window.location.search;
  const process_data = new URLSearchParams(get_data);
  const search_metadata = process_data.get("s");

  if (event.code === "Space" && search_metadata != "1") {
    change_font();
  }
});

function change_font() {
  var quote = document.getElementById("quote_display");
  var font_random = fonts[Math.floor(Math.random() * fonts.length)];
  quote.style.fontFamily = font_random;
}
change_font();

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menus");

  function toggleMenu() {
    menu.classList.toggle("open");
  }

  // Right Click = Menu Toggle
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    toggleMenu();
  });
});

// Settings Menu
document.addEventListener("DOMContentLoaded", function () {
  // Show Author Interaction
  const domain = document.getElementById("author_selector");
  domain.addEventListener("click", function () {
    let previousColor = domain.style.backgroundColor;
    domain.style.backgroundColor = "rgba(32, 32, 32, 0.49)";

    setTimeout(() => {
      domain.style.backgroundColor = previousColor;
    }, 350);
  });

  // Blurred Box interaction
  const border = document.getElementById("border_selector");
  border.addEventListener("click", function () {
    let previousColor = border.style.backgroundColor;
    border.style.backgroundColor = "rgba(32, 32, 32, 0.49)";

    setTimeout(() => {
      border.style.backgroundColor = previousColor;
    }, 350);
  });
});

function access_menu() {
  if (localStorage.getItem("author") === "enabled") {
    gen_quote();
    localStorage.setItem("author", "disabled");
  } else {
    gen_quote();
    localStorage.setItem("author", "enabled");
  }
}

// Disclaimer Popup
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("disclaimer") === "showed") {
    document.getElementById("disclaimer").style.display = "none";
  } else {
    document.getElementById("disclaimer").style.display = "block";
    localStorage.setItem("disclaimer", "showed");
  }
});

function hide_disclaimer() {
  document.getElementById("disclaimer").style.opacity = "0";
}

// Border
function blur_menu() {
  const quote = document.getElementById("quote_display");

  if (localStorage.getItem("border") === "enabled") {
    quote.style.border = "none";
    quote.style.backdropFilter = "blur(0px)";
    localStorage.setItem("border", "disabled");
  } else {
    quote.style.backdropFilter = "blur(10px)";
    localStorage.setItem("border", "enabled");
  }
}

// Custom Cursor
document.addEventListener("mousemove", (e) => {
  document.getElementById("cursor").style.left = `${e.pageX}px`;
  document.getElementById("cursor").style.top = `${e.pageY}px`;
});

// Grayscale Background
function grayscale() {
  if (localStorage.getItem("grayscale") === "on") {
    localStorage.setItem("grayscale", "off");
    gen_img();
  } else {
    localStorage.setItem("grayscale", "on");
    gen_img();
  }
}

// Search Edition
document.addEventListener("DOMContentLoaded", function () {
  const get_data = window.location.search;
  const process_data = new URLSearchParams(get_data);
  const search_metadata = process_data.get("s");
  const search_sys = document.getElementById("search_system");

  function settings_modifier() {
    const search_system = document.getElementById("menus");
    search_system.style.marginBottom = "80px";
  }

  if (search_metadata === "1") {
    search_sys.style.opacity = "1";
    settings_modifier();

    // Auto Focus If Alphabetic Character is typed
    document.addEventListener("keydown", function (event) {
      const Allchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (Allchars.includes(event.key)) {
        const input = document.getElementById("search");
        input.focus();
      }
    });
  }
});
// Enter => Search Duckduckgo
const input_data = document.getElementById("search");
document.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    search_query();
  }
});

function search_query() {
  const base = "https://duckduckgo.com/";
  let data = input_data.value;
  let final_url = base + "?q=" + data;
  location.replace(final_url);
}
