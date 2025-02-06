
fetch("https://icanhazdadjoke.com/", {
    headers:{
        "Accept": "application/json"
    }
}).then(response => response.json()).
    then(data => {
        console.log(data);
        let jokes = document.querySelector(".jokes")
        jokes.innerHTML = `<h2>${data.joke}</h2>`
    })