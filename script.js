const dog_result = document.getElementById("dog_result"); 
const fox_result = document.getElementById("fox_result");
const dog_btn = document.getElementById("dog_btn");
const fox_btn = document.getElementById("fox_btn");

dog_btn.addEventListener("click", getRandomDog);
fox_btn.addEventListener(`click`, getRandomFox);

function getRandomDog(){
    fetch("https://random.dog/woof.json")
      .then(res=> res.json())
      .then(data=>{
        dog_result.innerHTML= `<img src= "${data.url}"/>`
      })
}


function getRandomFox(){
    fetch("https://randomfox.ca/floof/")
      .then(res=> res.json())
      .then(data=>{
        fox_result.innerHTML= `<img src= "${data.image}"/>`
      })
}