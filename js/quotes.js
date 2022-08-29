

const loadQuote = () => {
    // console.log('quote.js')
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayQuote(data))
}

const displayQuote = quote => {
    // console.log(quote);
    // console.log(quote.quote);
    const blockQuote = document.getElementById('quote');
    // blockQuote.innerText = quote;
    blockQuote.innerText = quote.quote;

}

document.getElementById('loadQuote').addEventListener('click', function () {
    loadQuote();
})