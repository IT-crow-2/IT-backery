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

let sectioninicial = document.getElementById("sectionInitial")



function arrayread(array){
    for (const i of array) {
        printcard(i)
    }
}

function printcard(element){
    boxcard.innerHTML +=    `<section class="cards-main">
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

arrayread(listaPanes)
    