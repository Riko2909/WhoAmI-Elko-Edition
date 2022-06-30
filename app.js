const imgWrapper = document.getElementsByClassName('img-wrapper')[0];
const iAm = document.getElementsByClassName('iam')[0];

imgWrapper.addEventListener("click", (event) => {

    if(event.target.tagName == "IMG")
        event.target.classList.toggle("disabled");
})

const random_img = Math.floor(Math.random() * 25) + 1;
const names = [
    "Kevin",
    "Claudia",
    "Lucy",
    "Dieter",
    "Suzan",
    "Tim",
    "Achmet",
    "Ling-Ping",
    "Hassan",
    "Mark",
    "Ali",
    "Björn",
    "Chao",
    "Tom",
    "Anna",
    "Michael",
    "Joschua",
    "Frank",
    "Justus",
    "Jamal",
    "Steve",
    "Klaus",
    "Timo",
    "Britta",
    "Franziska"
]

const elko_customers = "https://www.elektronik-kompendium.de/res/bilder/kunde"

for (let i = 1; i < 26; ++i) {

    const wholeimg = document.createElement("div")

    const people = document.createElement("img")
    people.src = `${elko_customers}${i <= 9 ? `0${i}` : i}`
    wholeimg.className = 'grid-img'

    const name = document.createElement("p")

    name.innerText = names[i - 1]

    wholeimg.appendChild(people);
    wholeimg.appendChild(name)

    imgWrapper.appendChild(wholeimg);
}

const elem = document.createElement("img")
elem.src = `${elko_customers}${random_img <= 9 ? `0${random_img}` : random_img}`;
elem.className = 'iam-img'

const IAmName = document.createElement("p")
IAmName.innerText = names[random_img - 1]

iAm.appendChild(elem);
iAm.appendChild(IAmName)