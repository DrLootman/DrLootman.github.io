// Function that get informations from Simpsons API

function getSimpsonsQuotes() {

    const url = "https://thesimpsonsquoteapi.glitch.me/quotes";

    const messageHtml =  `<h5>There's a delay, because of the asynchronious request. Please, wait a few seconds more...</h5>`

    document.querySelector('#the_simpsons').innerHTML = messageHtml;

    axios
        .get(url)

        .then((response) => response.data)

        .then(([simpsons]) => {

            const simpsonsHtml = `
                <p>${simpsons.quote}</p>
                <img src="${simpsons.image}" alt="simpsons character" />
            `

            document.querySelector('#the_simpsons').innerHTML = simpsonsHtml;
        })

        .catch((err) => {
            console.error("This is an error", err)
        })
}

getSimpsonsQuotes();

// Button for generating a new quote and his image :

const button = document.querySelector("#generator");

button.addEventListener("click", () => {
    getSimpsonsQuotes();
});