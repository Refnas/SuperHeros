
const baseURL = 'https://superheroapi.com/api.php/978190916736019';
const searchButton = document.getElementById('SearchBtn');
const randomButton = document.getElementById('randomBtn');
const searchInput = document.getElementById('heroNameInput');
const heroDetails = document.getElementById('heroDetails');

const getSuperHero = (id) =>{
    fetch(`${baseURL}/${id}`)
    .then(response => response.json())
    .then(json => heroInfo(json))
}

const randomHero = () =>{
    const numberOfHeros = 731;
    return Math.floor((Math.random() * numberOfHeros)) + 1
}

const getSearchSuperHero = (name) =>{
    fetch(`${baseURL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0];
        heroInfo(hero);
    })
}

const statsEmoji = {
    intelligence : '🧠',
    strength : '💪',
    speed : '🗲',
    durability : '🏋️‍♂️',
    power : '📊',
    combat : '⚔️'
}

const heroInfo = (charecter) =>{
    const name = `<h2>${charecter.name}</h2>`;
    const image = `<img src='${charecter.image.url}' />`;
    const stats = Object.keys(charecter.powerstats).map(stat =>{
        return `<h6>${statsEmoji[stat]} ${stat.toUpperCase()} : <span>${charecter.powerstats[stat]}</span></h6>`
    }).join('');

    const statsHead = `<h2>HERO STATS</h2>`;
    heroDetails.innerHTML = `${name}${image}${statsHead}${stats}`;
}

searchButton.onclick = () => getSearchSuperHero(searchInput.value);
randomButton.onclick = () => getSuperHero(randomHero());