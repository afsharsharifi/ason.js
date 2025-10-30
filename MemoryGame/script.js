const icons = ["💻", "⚙️", "🧠", "📱", "🛰️", "💾", "☁️", "🖥️"];
let cards = [...icons, ...icons];
let flipped = [];
let matchedCount = 0;

// Shuffle cards
cards.sort(() => 0.5 - Math.random());

const game = document.getElementById("game");

cards.forEach((icon, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.icon = icon;
    card.addEventListener("click", () => flipCard(card));
    game.appendChild(card);
});

function flipCard(card) {
    if (card.classList.contains("flipped") || card.classList.contains("matched")) return;
    if (flipped.length === 2) return;

    card.classList.add("flipped");
    card.textContent = card.dataset.icon;
    flipped.push(card);

    if (flipped.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flipped;
    if (card1.dataset.icon === card2.dataset.icon) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCount += 2;
        if (matchedCount === cards.length) {
            setTimeout(() => {
                alert("🎉 You won! Pase is launching soon!");
            }, 300);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1.textContent = "";
            card2.textContent = "";
        }, 800);
    }
    flipped = [];
}