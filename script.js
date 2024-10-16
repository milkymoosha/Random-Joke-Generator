function generateJoke() {
    fetch('https://icanhazdadjoke.com/slack', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('joke');
        jokeElement.innerHTML = jokeText;

        // Add animation effect to joke
        jokeElement.classList.remove("animate");
        void jokeElement.offsetWidth; // Trigger reflow to restart animation
        jokeElement.classList.add("animate");
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        const jokeElement = document.getElementById('joke');
        jokeElement.innerHTML = 'Oops! Could not fetch a joke. Try again later. 😢';
    });
}
