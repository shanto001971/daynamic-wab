
function lodeImage(inputText) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(json => imageFile(json.meals))

}

const imageFile = x => {
    const imageContainar = document.getElementById("image-container");
    imageContainar.innerHTML = '';
    for (const i of x) {
        const div = document.createElement('div');
        div.classList.add('img-store');
        div.innerHTML = `
        <img class="img-size" src="${i.strMealThumb}">
        <h4>card Taitle: ${i.strMeal}</h4>
        <button onclick="lodeMeale()" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        More info
        </button>
        `;
        imageContainar.appendChild(div);
    }
}

const serch = () => {
    const inputFild = document.getElementById('input-fild').value;

    lodeImage(inputFild);

}

const lodeMeale = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => lodeSomthing(data.meals[0]));
}
const lodeSomthing = male => {
    document.getElementById('staticBackdropLabel').innerText = male.strMeal;
}
lodeImage('fish')