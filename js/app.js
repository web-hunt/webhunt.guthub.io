const const websites = [
    {
        id: "photopea",
        name: "Photopea",
        description: "Free online Photoshop alternative.",
        url: "https://photopea.com",
        logo: "https://placehold.co/80/38bdf8/ffffff?text=P",
        category: "Photo",
        tags: ["Free", "Editing", "Design"],
        featured: true,
        trending: true,
        hiddenGem: false,
        recent: false,
        rating: 4.9,
        views: "2.4M"
    },

    {
        id: "removebg",
        name: "Remove.bg",
        description: "Remove image backgrounds instantly.",
        url: "https://remove.bg",
        logo: "https://placehold.co/80/22c55e/ffffff?text=R",
        category: "AI",
        tags: ["AI","Free"],
        featured: false,
        trending: true,
        hiddenGem: false,
        recent: true,
        rating: 4.8,
        views: "1.8M"
    },

    {
        id: "toffeeshare",
        name: "ToffeeShare",
        description: "Fast peer-to-peer file sharing.",
        url: "https://toffeeshare.com",
        logo: "https://placehold.co/80/f97316/ffffff?text=T",
        category: "Files",
        tags: ["Files","Free"],
        featured: false,
        trending: false,
        hiddenGem: true,
        recent: true,
        rating: 4.7,
        views: "320K"
    },

    {
        id: "windowswap",
        name: "WindowSwap",
        description: "Look through windows from around the world.",
        url: "https://window-swap.com",
        logo: "https://placehold.co/80/a855f7/ffffff?text=W",
        category: "Fun",
        tags: ["Travel","Fun"],
        featured: false,
        trending: false,
        hiddenGem: true,
        recent: false,
        rating: 4.8,
        views: "740K"
    }
];

const search = document.querySelector("input[type='search']");

const grids = document.querySelectorAll(".card-grid");

const trendingGrid = grids[0];
const hiddenGrid = grids[1];
const recentGrid = grids[2];

function createCard(site){

    const tags = site.tags.map(tag =>
        `<span class="tag">${tag}</span>`
    ).join("");

    return `
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

}

function render(){

    trendingGrid.innerHTML = "";
    hiddenGrid.innerHTML = "";
    recentGrid.innerHTML = "";

    const value = search.value.toLowerCase();

    websites.forEach(site=>{

        const match =
            site.name.toLowerCase().includes(value) ||
            site.description.toLowerCase().includes(value) ||
            site.category.toLowerCase().includes(value) ||
            site.tags.join(" ").toLowerCase().includes(value);

        if(!match) return;

        if(site.trending){
            trendingGrid.innerHTML += createCard(site);
        }

        if(site.hiddenGem){
            hiddenGrid.innerHTML += createCard(site);
        }

        if(site.recent){
            recentGrid.innerHTML += createCard(site);
        }

    });

}

render();

search.addEventListener("input",render);

document.getElementById("randomBtn").addEventListener("click",()=>{

    const random =
        websites[Math.floor(Math.random()*websites.length)];

    window.open(random.url,"_blank");

});
