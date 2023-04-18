const reviews = [

    {
        name: "Szent Endre",
        job: "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel facilis autem architecto eaque quia molestiae delectus consequatur quos. Laboriosam amet doloremque a quisquam earum  at! Amet quibusdam vitae optio quae. Neque esse porro, ipsa nemo accusantium totam explicabo? Nobis, ullam! Molestiae nobis facilis vero ad deleniti laboriosam nisi consequuntur id consectetur, hic distinctio recusandae. Doloremque."
    },

    {
        name: "Török Bálint",
        job: "Java fejlesztő",
        img: "https://images.pexels.com/photos/16335811/pexels-photo-16335811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel facilis autem architecto eaque quia molestiae delectus quae. Neque esse porro, ipsa nemo accusantium totam explicabo? Nobis, ullam! Molestiae nobis facilis vero ad deleniti laboriosam nisi consequuntur id consectetur, hic distinctio recusandae. Doloremque."
    },

    {
        name: "Nagy Zsanett",
        job: "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel facilis autem architecto eaque quia molestiae delectus consequatur quos. Laboriosam amet doloremque a quisquam earum culpa commodi ut officiis, odio accusamus est minima repudiandae cupiditate ducimus aut sunt omnis sequi ipsum impedit aliquid atque at! Amet quibusdam vitae optio quae. Neque esse porro, ipsa nemo accusantium totam explicabo? Nobis, ullam! Molestiae nobis facilis vero ad deleniti laboriosam nisi consequuntur id consectetur, hic distinctio recusandae. Doloremque."
    }
];

//A használni kívánt elemeket eltároljuk változókba
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

//Kiinduló érték felvétele
let current = 0;

//Oldal betöltődésre töltsük be az első személyt az oldalra
window.addEventListener("load", () => {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

})

//Írok egy függvényt, amellyel ki tudjuk választani a következő embert ( adatait)
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

//Next gomb megnyomására ugorjunk a következő emberre
next.addEventListener("click", () => {

    //Léptetjük a kiinduló értékünket 1-el, azaz lépünk a következő emberre
    current++

    //Ha a kiinduló értékünk 1-el kisebb mint a reviews tömb hozza
    if(current > reviews.length-1){

        //Akkor álljon vissza a kiinduló érték 0-ra, vagyis a tömb elejére
        current = 0;
    }

    showPerson(current);
})

prev.addEventListener("click", () => {

    //Visszaléptetjük a kiinduló értékünket 1-el, azaz lépünk a előző emberre
    current--

    //Ha a kiinduló értékünk nagyobb mint 0
    if(current < 0){

        //Akkor álljon vissza a kiinduló érték -1-re, vagyis a tömb végére
        current = reviews.length-1;
    }

    showPerson(current);
})