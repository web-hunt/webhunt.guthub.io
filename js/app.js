const websites = [
    {
        name: "Photopea",
        description: "Free online Photoshop alternative.",
        url: "https://photopea.com",
        logo: "https://placehold.co/80/38bdf8/ffffff?text=P",
        category: "Photo",
        tags: ["Free", "Editing", "Design"]
    },
    {
        name: "Remove.bg",
        description: "Remove image backgrounds instantly.",
        url: "https://remove.bg",
        logo: "https://placehold.co/80/22c55e/ffffff?text=R",
        category: "AI",
        tags: ["AI", "Free"]
    },
    {
        name: "ToffeeShare",
        description: "Fast peer-to-peer file sharing.",
        url: "https://toffeeshare.com",
        logo: "https://placehold.co/80/f97316/ffffff?text=T",
        category: "Files",
        tags: ["Files", "Free"]
    },
    {
        name: "WindowSwap",
        description: "Look through windows from around the world.",
        url: "https://window-swap.com",
        logo: "https://placehold.co/80/a855f7/ffffff?text=W",
        category: "Fun",
        tags: ["Travel", "Fun"]
    }
];

const cardGrid = document.querySelector(".card-grid");
const search = document.querySelector("input[type='search']");

function displayWebsites(list) {

    cardGrid.innerHTML = "";

    list.forEach(site => {

        const tags = site.tags.map(tag =>
            `<span class="tag">${tag}</span>`
        ).join("");

        cardGrid.innerHTML += `
            <div class="card">

                <img src="${site.logo}" alt="${site.name}">

                <span class="category">${site.category}</span>

                <h3>${site.name}</h3>

                <p>${site.description}</p>

                <div class="tags">
                    ${tags}
                </div>

                <div class="card-buttons">

                    <button class="favorite">❤</button>

                    <a
                        href="${site.url}"
                        target="_blank"
                        class="visit-btn">
                        Visit →
                    </a>

                </div>

            </div>
        `;

    });

}

displayWebsites(websites);

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = websites.filter(site =>
        site.name.toLowerCase().includes(value) ||
        site.description.toLowerCase().includes(value) ||
        site.category.toLowerCase().includes(value) ||
        site.tags.join(" ").toLowerCase().includes(value)
    );

    displayWebsites(filtered);

});
