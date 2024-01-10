/*const selectorius = document.querySelector('#dogs');
const selectoriusFoto = document.querySelector('#foto');
const selectoriusName = document.querySelector('#name');
fetch("https://dog.ceo/api/breeds/list/all")
	.then((atsakymas) => atsakymas.json()) 
    .then((atsakymas) => {
     let dynamicHTML = ``;
     for(let array in atsakymas.message){
        if(atsakymas.message[array].length > 0) {
            for(let value of atsakymas.message[array])
        dynamicHTML += `<option>${value}  ${array}</option>`}
            else { dynamicHTML += `<option>${array}</option>`}}
       selectorius.innerHTML+= dynamicHTML;
   
});

fetch("https://dog.ceo/api/breed/hound/images")
	.then((atsakymas) => atsakymas.json()) 
    .then((atsakymas) => {console.log(atsakymas)
    selectoriusFoto.innerHTML =`<img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg">`     
});
*/
const breedSelectElement = document.querySelector('#breeds-select')
const dynamicAlbumElement = document.querySelector('#photo-album')
const breedsArray = []

fetch('https://dog.ceo/api/breeds/list/all')
.then((response) => response.json())
.then((response) => parseAllBreeds(response.message))

function parseAllBreeds(breeds) {
    let dynamicHTML = ''
    for(let breed in breeds) {
        const subBreeds = breeds[breed]
        if(subBreeds.length === 0)
        {
            dynamicHTML += `<option>${breed}</option>`
            breedsArray.push(breed)
        }
        else{
            for (let subBreed of subBreeds)
            {
                dynamicHTML += `<option>${subBreed} ${breed}</option>`
                breedsArray.push(`${subBreed} ${breed}`)
            }
        }
        parseDogImages(breedsArray[0])
        breedSelectElement.innerHTML = dynamicHTML
    }
}

function parseDogImages(breed){
    let dynamicURL = generateDynamicDogPhotosURL(breed)
    fetch(dynamicURL)
    .then((response) => response.json())
    .then((response) => generateDynamicDogPhotos(response.message)) 
}

function generateDynamicDogPhotosURL(breed)
{
    let finalBreed = breed.split(" ").reverse().join('/')
    return `https://dog.ceo/api/breed/${finalBreed}/images`

}

function generateDynamicDogPhotos(photosArray)
{
    let dynamicHTML = ``
    for(let photo of photosArray)
    {
        dynamicHTML += `<div class="col-4 mx-auto">
        <img
            src="${photo}" style="width: 100%"/>
        </div>`
    }
    dynamicAlbumElement.innerHTML = dynamicHTML
}

breedSelectElement.addEventListener('change', () => {
    parseDogImages(breedSelectElement.value)
})