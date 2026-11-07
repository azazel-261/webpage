document.addEventListener("DOMContentLoaded", () => {
    const backgrounds = ["res/bg1.jpg", "res/bg2.jpg", "res/bg3.jpg", "res/bg4.jpg", "res/bg5.jpg"];
    const image = document.getElementById("mainBanner");
    const newbg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    console.log(newbg)
    image.style.backgroundImage = `url('${newbg}')`;

    const navButtons = document.querySelectorAll(".navButton");
    navButtons.forEach(navButton => {
        navButton.addEventListener('click', function () {
            navButtons.forEach(buttonToDeactivate => {
                buttonToDeactivate.classList.remove('active');
            });
            this.classList.add('active');
        })
    });
});

function showSection(name)
{
    const allSections = document.querySelectorAll(".toggleableSection");

    console.log(allSections);

    allSections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(name).classList.add("active");
}