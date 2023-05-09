// let top = document.createElement('div')
// document.body.appendChild(top)
// top.className="goal"
// top.innerText= 'it is well'

// let container = document.getElementById("container").innerHTML =

// `<div class="topcontainer">
// <h2> DOG APP </h2>

// </div>`


// let array = ["tosin", "tayo", "deduke", "gold", "kenny"] 

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }
    


// for (let i = 0; i < pictures.length; i++){
//     console.log(pictures[i])
//     // container.innerHTML += '<img src="' + pictures[i] +'" id="image"/>'
//     container.innerHTML += ` <img src="${pictures[i]}" id="image"/>`
// }

document.body.innerHTML = `
<h1>
Tosin Pet Shop
</h1>
<div class="big-container">
<img id="big-image" src="" alt="">
<h2 id="big-text">Dog 1</h2>
</div>
` + document.body.innerHTML;



let dogsImg = []
async function getDogs(){
    let dogsRequest = await fetch("https://dog.ceo/api/breeds/image/random/42")
    let response = await dogsRequest.json();

    dogsImg = response.message;

    let container = document.getElementById("container");
    container.innerHTML = "";

    for(let i=0;i<dogsImg.length;i++){
        container.innerHTML += `
        <div class="dog" onclick="showDog(${i})">
            <img src="${dogsImg[i]}" alt="">
            <div>
                Dog ${i+1}
            </div>
        </div>
        `
    }

    showDog(0)
}

function showDog(i){
    let bigImage = document.getElementById("big-image");
    let bigText = document.getElementById("big-text");

    bigImage.src = dogsImg[i];
    bigText.innerHTML = `Dog ${i+1}`;
}

getDogs()