let listaPanes = [
    {
        productID: 00,
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
        desc:" De fermentación prolongada, en la que se procesan los nutrientes propios de la harina que de esta forma son asimilados mejor por el organismo, dando un sabor y propiedades organolépticas."
    },
    {
        productID:01,
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
        desc:" De fermentación prolongada, en la que se procesan los nutrientes propios de la harina que de esta forma son asimilados mejor por el organismo, dando un sabor y propiedades organolépticas."
    },
    {
        productID:02,
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
        desc:"De fermentación prolongada, en la que se procesan los nutrientes propios de la harina que de esta forma son asimilados mejor por el organismo, dando un sabor y propiedades organolépticas."
    },
    {
        productID:03,
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
        desc:" De fermentación prolongada, en la que se procesan los nutrientes propios de la harina que de esta forma son asimilados mejor por el organismo, dando un sabor y propiedades organolépticas."
    },
    {
        productID:04,
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
        desc:" De fermentación prolongada, en la que se procesan los nutrientes propios de la harina que de esta forma son asimilados mejor por el organismo, dando un sabor y propiedades organolépticas."
    },
    {
        productID:05,
        img:"/assets/img-Cards/pan222.png.png",
        title:"PAN DE CAMPO",
        precio:"€6,00",
        desc:" De fermentación prolongada, en la que se procesan los nutrientes propios de la harina que de esta forma son asimilados mejor por el organismo, dando un sabor y propiedades organolépticas."
    }
]
//le asigna a boxcard la sección con id boxcard
let boxcard = document.getElementById("boxcard")


//le asigna a sectioninicial la sección con id sectionInitial
let sectioninicial = document.getElementById("sectionInitial")

//le asigna a sectioninicial la sección con id sectionInitial
let boxproduct = document.getElementById("boxproduct")

//recorre una lista que asignemos como parametro para aplicar
//la función printcard para cada elemento de la lista
function arrayread(array){
    for (const i of array) {
        printcard(i)
    }
}

//imprime dentro de la seccion boxcard los elementos HTML 
//para generar la card de cada producto 
function printcard(element){
    boxcard.innerHTML +=    `<section class="cards-main" id="${element.productID}" onclick="printProductCard(${element.productID})">
                                <div class="card">
                                    <img src="${element.img}" alt="" class="imgCards">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text">${element.precio}</p>
                                </div>
                                <button class="CardButton">ADD</button>
                            </section>`
}
///abre lista de productos cuando se hace click sobre una categoria de 4
//en main principal
function openboxmain(){
    
    sectioninicial.classList.add("displaynone")
    boxcard.classList.add("displayon")
    arrayread(listaPanes)
    
}

//imprime dentro de la seccion boxproduct los elementos HTML 
//para generar la card del producto seleccionado en boxcard 
let boxproduct = document.getElementById("boxproduct")

function printProductCard(idp){
    let boxproduct = document.getElementById("boxproduct")
    boxproduct.innerHTML +=    `<section class="productCard">
                                <div class="card">
                                    <div>
                                        <div>
                                            <img src="${listaPanes[idp].img}" alt="" class="imgCards">
                                        </div>
                                        <div>
                                            <h5 class="card-title">${listaPanes[idp].title}</h5>
                                            <p class="card-price">${listaPanes[idp].precio}</p>
                                        <div>
                                    </div>
                                    <div>
                                        <p class="cardProductDescription">${listaPanes[idp].desc}</p>
                                    </div>
                                <button class="CardButton">ADD</button>
                            </section>`
}


///abre card de descripción de producto
function openboxproduct(){
    
    boxcard.classList.add("displaynone")
    boxproduct.classList.add("displayon")
    printProductCard(idp)
    
}
