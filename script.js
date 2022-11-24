let intervalHandle;
let currentImg = 0;
let interval = 2500;

let mainImg = document.getElementById("main");
let gallery = document.getElementById("galeria");

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function change(img) {
    currentImg = img === undefined ? (currentImg + 1) % 4 : img - 1;
    console.log(currentImg);
    mainImg.src = images[currentImg];
    intervalHandle =
        img == 0
            ? intervalHandle
            : clearInterval(intervalHandle) === undefined
            ? setInterval(change, interval)
            : null;
    console.log(intervalHandle);
}

intervalHandle = setInterval(change, interval);

fetch("https://www.placecage.com/c/53/135/", { mode: "no-cors", cache: "no-cache" }).then(
    () => {
        //change photos to random
        images = [];
        for (let i = 0; i < gallery.children.length; i++) {
            const image = gallery.children.item(i);
            console.log(image);
            let width = Math.floor(Math.random() * 450 + 50);
            let height = Math.floor(Math.random() * 450 + 50);
            let url = `https://www.placecage.com/c/${width}/${height}`;
            images.push(`https://www.placecage.com/c/${width}/${height}`);
            image.src = url;
        }
    }
).catch(() =>{
    images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
});
