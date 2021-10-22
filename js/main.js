let listaPanes = [
    {
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
    },
    {
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
    },
    {
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
    },
    {
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
    },
    {
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
    },
    {
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
    }
]

let boxcard = document.getElementById("boxcard")

let sectioninicial = document.getElementById("sectionInitial")



function arrayread(array){
    for (const i of array) {
        printcard(i)
    }
}

function printcard(element){
    boxcard.innerHTML += `<section class="cards-main">
                                    <div class="card">
                                        <div class="card-body">
                                        <img src="${element.img}" alt="">
                                        <h5 class="card-title">${element.title}</h5>
                                        <p class="card-text">${element.precio}</p>
                                    </div>
                                    <button class="CardButton">ADD</button>
                                </div>
                            </section>`
}

function openboxmain(){
    
    sectioninicial.classList.add("displaynone")
    boxcard.classList.add("displayon")
    arrayread(listaPanes)
    
}

