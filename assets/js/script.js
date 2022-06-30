// les let et les const
let platsDiv = document.getElementById("cartePlats");
let darkMode = document.querySelector("header button");
let header = document.querySelector("header");
let main = document.querySelector("main");
let footer = document.querySelector("footer");
let body = document.querySelector("body");
const plat = [
    {
    imgSrc: "assets/img/img-01.jpg",
    title: "un super titre",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dignissimos dolorum id illo neque pariatur qui rerum sit. Ducimus eveniet exercitationem facere illo necessitatibus provident quos vero voluptates! Praesentium!"
    },
    {
        imgSrc: "assets/img/img-02.jpg",
        title: "un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dignissimos dolorum id illo neque pariatur qui rerum sit. Ducimus eveniet exercitationem facere illo necessitatibus provident quos vero voluptates! Praesentium!"
    },
    {
        imgSrc: "assets/img/img-03.jpg",
        title: "un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dignissimos dolorum id illo neque pariatur qui rerum sit. Ducimus eveniet exercitationem facere illo necessitatibus provident quos vero voluptates! Praesentium!"
    },
    {
        imgSrc: "assets/img/img-04.jpg",
        title: "un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dignissimos dolorum id illo neque pariatur qui rerum sit. Ducimus eveniet exercitationem facere illo necessitatibus provident quos vero voluptates! Praesentium!"
    },
    {
        imgSrc: "assets/img/img-05.jpg",
        title: "un super titre",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dignissimos dolorum id illo neque pariatur qui rerum sit. Ducimus eveniet exercitationem facere illo necessitatibus provident quos vero voluptates! Praesentium!"
    },
];

// l'affichage dans la page
for (const element of plat){
    let article = document.createElement("article");
    platsDiv.appendChild(article);
    article.appendChild(document.createElement("img")).src = element.imgSrc;
    article.appendChild(document.createElement("h3")).textContent = element.title;
    article.appendChild(document.createElement("p")).textContent = element.text;
}

function darker() {
    header.style.display = "none";
    main.style.display = "none";
    footer.style.display = "none";
    body.style.backgroundColor = "#4F5D75";
    let p = document.createElement("p");
    p.innerText = "C'est une blague ... rechargez la page";
    p.classList.add("darkmode");
    body.appendChild(p);

}
darkMode.addEventListener("click", darker);