let platsDiv = document.getElementById("cartePlats");

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
]
for (const element of plat){
    let article = document.createElement("article");
    platsDiv.appendChild(article);
    article.appendChild(document.createElement("img")).src = element.imgSrc;
    article.appendChild(document.createElement("h3")).textContent = element.title;
    article.appendChild(document.createElement("p")).textContent = element.text;
}