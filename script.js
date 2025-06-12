async function getData() {
    const url = "./data.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        assignData(json)

    } catch (error) {
        console.error(error.message);
    }
}

function assignData(data) {

    console.log(data);

    const earthData = data[2];

    updatePage(earthData)

}

const planetImage = document.querySelector('img.planet');
const internalImage = document.querySelector('img.internal');
const geologyImage = document.querySelector('img.geology');
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

function updatePage(planetData) {

    const { images, name, overview, structure, geology, rotation, revolution, radius, temperature } = planetData;

    console.log(name, overview, structure, geology, rotation, revolution, radius, images, temperature);

    planetImage.src = images.planet;
    internalImage.src = images.internal;
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

getData();