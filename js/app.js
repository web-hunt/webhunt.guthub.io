const websites = [
    {
        name: "Photopea",
        description: "Free online Photoshop alternative.",
        tags: ["Free", "Photo", "Editing"],
        logo: "https://placehold.co/80"
    },
    {
        name: "Remove.bg",
        description: "Remove image backgrounds instantly.",
        tags: ["AI", "Free"],
        logo: "https://placehold.co/80"
    },
    {
        name: "ToffeeShare",
        description: "Fast peer-to-peer file sharing.",
        tags: ["Files", "Free"],
        logo: "https://placehold.co/80"
    },
    {
        name: "WindowSwap",
        description: "Look through windows from around the world.",
        tags: ["Fun", "Travel"],
        logo: "https://placehold.co/80"
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
                <h3>${site.name}</h3>
                <p>${site.description}</p>

                <div class="tags">
                    ${tags}
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
        site.tags.join(" ").toLowerCase().includes(value)

    );

    displayWebsites(filtered);

});
