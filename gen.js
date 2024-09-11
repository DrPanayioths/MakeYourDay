function gen_img() {
    const image_gen = "https://picsum.photos/" + window.screen.availWidth + "/" + window.screen.availHeight + "?grayscale";
    document.body.style.backgroundImage = `url(${image_gen})`;
}

fonts = [
    '"Dela Gothic One"',
    '"DM Serif Display"',
    '"Abril Fatface"'  
];
function gen_quote() {
    const quote_gen = "https://api.quotable.io/quotes/random?tags=Inspirational";
        fetch(quote_gen)
        .then(response => response.json())
        .then(data => {
            var quote = document.getElementById("quote_display");
            quote.textContent = data[0].content
            console.log(data[0].author)
        })
}

function change_font() {
    var quote = document.getElementById("quote_display");
    var font_random = fonts[(Math.floor(Math.random() * fonts.length))]
    quote.style.fontFamily = font_random;
}

window.onload = () => {
    gen_img();
    gen_quote();
    change_font();
};
