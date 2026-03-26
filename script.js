const games = [
{ title: "2048", url: "https://play2048.co/", thumb: "https://via.placeholder.com/150" },
{ title: "Hextris", url: "https://hextris.io/", thumb: "https://via.placeholder.com/150" },
// You can add more URLs here
];

const container = document.getElementById('game-container');
const modal = document.getElementById('game-modal');
const frame = document.getElementById('game-frame');
const closeBtn = document.querySelector('.close-btn');

// Load games into the page
games.forEach(game => {
const card = document.createElement('div');
card.className = 'game-card';
card.innerHTML = `
<img src="${game.thumb}" alt="${game.title}">
<h3>${game.title}</h3>
`;
card.onclick = () => {
frame.src = game.url;
modal.classList.remove('hidden');
};
container.appendChild(card);
});

closeBtn.onclick = () => {
modal.classList.add('hidden');
frame.src = ""; // Stop the game when closed};
