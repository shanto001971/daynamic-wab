function lodeImage(inputText) {
    document.getElementById('spinner').classList.remove('d-none');



    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            document.getElementById('spinner').classList.add('d-none');
            document.getElementById('input-fild').value = '';
            imageFile(json.meals)
        })
        

}

const imageFile = x => {
    const imageContainar = document.getElementById("image-container");
    imageContainar.innerHTML = '';
    for (const i of x) {
        const div = document.createElement('div');
        div.classList.add('img-store');
        div.innerHTML = `
        <div class="card mt-5 shadow" style="width: 18rem;">
            <img src="${i.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="">${i.strMeal}</h5>
            <button onclick="lodeMeale(${i.idMeal})"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            More info
            </button>
        </div>  
        `;
        imageContainar.appendChild(div);
    }
}

const serch = () => {
    const inputFild = document.getElementById('input-fild').value;

    lodeImage(inputFild);
}


document.getElementById('secend-btn').addEventListener('click', function(){
    const secendValue = document.getElementById('secend-value').value;
    console.log(secendValue);
    lodeImage(secendValue);
})

lodeImage('')

const lodeMeale = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => lodeSomthing(data.meals[0]));

}
const lodeSomthing = male => {
    document.getElementById('staticBackdropLabel').innerText = male.strMeal;
    document.getElementById('meal-body').innerHTML = `
    <div class="card" style="width:460px;">
        <img src="${male.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${male.strMeal}</h5>
            <p class="card-text">${male.strInstructions}</p>
        </div>
    </div>
    `


}
