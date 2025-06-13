async function getData(index) {
    const url = "./data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        updatePage(json, index)

    } catch (error) {
        console.error(error.message);
    }
}

const overviewImage = document.querySelector('.overview-img');
const structureImage = document.querySelector('.structure-img');
const geologyImage = document.querySelector('.geology-img');
const planetNameEl = document.querySelector('.planet-name');
const planetOverviewContent = document.querySelector('.overview-content');
const planetOverviewSource = document.querySelector('.overview-source');
const planetStructureContent = document.querySelector('.structure-content');
const planetStructureSource = document.querySelector('.structure-source');
const planetGeologyContent = document.querySelector('.geology-content');
const planetGeologySource = document.querySelector('.geology-source');
const rotationValue = document.querySelector('.rotation-value');
const revolutionValue = document.querySelector('.revolution-value');
const radiusValue = document.querySelector('.radius-value');
const tempValue = document.querySelector('.temperature-value');

function updatePage(planetData, index) {

    const { images, name, overview, structure, geology, rotation, revolution, radius, temperature } = planetData[index];

    overviewImage.src = images.planet;
    structureImage.src = images.internal;
    geologyImage.src = images.geology;
    planetNameEl.innerText = name;
    planetOverviewContent.innerText = overview.content;
    planetOverviewSource.setAttribute('href', overview.source);
    planetStructureContent.innerText = structure.content;
    planetStructureSource.setAttribute('href', structure.source);
    planetGeologyContent.innerText = geology.content;
    planetGeologySource.setAttribute('href', geology.source);
    rotationValue.innerText = rotation;
    revolutionValue.innerText = revolution;
    radiusValue.innerText = radius;
    tempValue.innerText = temperature;

}

const planetBtns = document.querySelectorAll('.nav-btn')

planetBtns.forEach(function (el) {

    el.addEventListener('click', function (event) {

        const dataId = event.target.dataset.id;
        getData(dataId);
    })

});

const overviewTab = document.querySelector('#overview-tab');
const structureTab = document.querySelector('#structure-tab');
const geologyTab = document.querySelector('#geology-tab');
const secondaryNavBtns = document.querySelectorAll('.secondary-nav-btns');

secondaryNavBtns.forEach(function (el) {

    el.addEventListener('click', function () {
        if (overviewTab.classList.contains('active')) {

            overviewImage.style.display = 'block';
            structureImage.style.display = 'none'
            geologyImage.style.display = 'none'

        } if (structureTab.classList.contains('active')) {

            structureImage.style.display = 'block';
            overviewImage.style.display = 'none';
            geologyImage.style.display = 'none'

        } if (geologyTab.classList.contains('active')) {
            structureImage.style.display = 'none';
            geologyImage.style.display = 'block';
            overviewImage.style.display = 'block';
        }

    })

})


getData(0);