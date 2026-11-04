document.addEventListener("DOMContentLoaded", () => {
    const backgrounds = ["res/bg1.jpg", "res/bg2.jpg", "res/bg3.jpg", "res/bg4.jpg", "res/bg5.jpg"];
    const image = document.getElementById("mainBanner");
    const newbg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    console.log(newbg)
    image.style.backgroundImage = `url('${newbg}')`;
});