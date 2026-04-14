const images = [
    "./img/gallery/anime.jpg",
    "./img/gallery/earth_from_sky.jpg",
    "./img/gallery/mountain_sea.jpg",
    "./img/gallery/wintertree.jpg",
    "./img/gallery/bird.jpg",
    "./img/gallery/dark_clouds.png",
    "./img/gallery/leopards.jpg",
    "./img/gallery/mountain_sky.jpg",
    "./img/gallery/bird_white.jpg",
    "./img/gallery/duck.jpg",
    "./img/gallery/men_night_sea.jpg",
    "./img/gallery/winter_mountains.jpg"
];

function render() {
    let containerRef = document.getElementById("container");
    containerRef.innerHTML = "";

    for (let i = 0; i < images.length; i++) {
        containerRef.innerHTML += getImageTemplate(images[i]);
    }
}

function getImageTemplate(imageSrc) {
    return `<img src="${imageSrc}" alt="gallery image">`;
}