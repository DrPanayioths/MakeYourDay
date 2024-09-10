function gen_img() {
    const image_gen = "https://picsum.photos/" + window.screen.availWidth + "/" + window.screen.availHeight + "?grayscale";
    document.body.style.backgroundImage = `url(${image_gen})`;
}

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

window.onload = () => {
    gen_img();
    gen_quote();
};
