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
    const quote_gen = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://quote-generator-api-six.vercel.app/api/quotes/random?category=motivational");
        fetch(quote_gen)
        .then(response => response.json())
        .then(data => {
            const quoteData = JSON.parse(data.contents);
            var quote = document.getElementById("quote_display");
            var quote_generated = quoteData.quote;
            quote.textContent = quote_generated;
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
