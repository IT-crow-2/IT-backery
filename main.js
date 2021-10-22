let listaPanes = [
    {
        img:"/assets/img-Cards/pan222.png",
        title:"PAN DE CAMPO",
        precio:"€2,60",
    },
    {
        img:"/assets/img-Cards/croissants.png",
        title:"CROISSANTS",
        precio:"€1,20",
    },
    {
        img:"/assets/img-Cards/pan.png",
        title:"PAN DE CAMPO",
        precio:"€2,60",
    },
    {
        img:"/assets/img-Cards/rodajas.png",
        title:"PAN DE CAMPO",
        precio:"€2,60",
    },
    {
        img:"/assets/img-Cards/pbt.png",
        title:"PAN DE CAMPO",
        precio:"€2,60",
    },
    {
        img:"/assets/img-Cards/tartachoco.png",
        title:"PAN DE CAMPO",
        precio:"€2,60",
    },
    {
        img:"/assets/img-Cards/brownie.png",
        title:"PAN DE CAMPO",
        precio:"€2,60",
    },
    {
        img:"/assets/img-Cards/cheesecake.png",
        title:"PAN DE CAMPO",
        precio:"€2,60",
    },
]

let boxcard = document.getElementById("main-mobile2")

let product = document.getElementById("main-mobile3")



function arrayread(array){
    for (const i of array) {
        printcard(i)
    }
}

function printcard(element){
    boxcard.innerHTML +=    `<section class="cards-main" onclick="openProduct()">
                                    <button class="card">
                                        <div class="card-body">
                                            <img class="imgCards" src="${element.img}" alt="">
                                            <h5 class="card-title">${element.title}</h5>
                                            <p class="card-text"> ${element.precio}</p>
                                        </div>
                                        <button class="CardButton">ADD</button>
                                    </button>
                            </section>`
}

function openProduct(){
    boxcard.classList.add('displaynone');
    product.classList.remove('main-mobile3');
    product.classList.add('displayon-mobile3');
}

arrayread(listaPanes)
    