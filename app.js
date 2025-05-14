function init(){
    var card = document.getElementById("productos")
    card = card.innerHTML =

    `
        <div class="card" class="mb-4" style="width: 18rem;">
            <img src="https://co-media.hptiendaenlinea.com/catalog/product/6/1/612C0LA-1_T1679070740.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 id="nombreProducto">Portatil</h5>
                <p id="body">Procesador Intel, 1TB, 16GB Ram.</p>
                <input type="number" id="input1">
                <button class="btn btn-primary" onclick="agregarAlCarrito()">Agregar al Carrito</button>
            </div>
        </div>
    
    `
}

function agregarAlCarrito(){
    var nombreP = document.getElementById("nombreProducto").textContent;
    var descrip = document.getElementById("body").textContent;
    var valorT = document.getElementById("input1").value;
    var carrito = document.getElementById("carro")
    carrito = carrito.innerHTML = `<h1>Agregaste el producto: ${nombreP} | ${descrip} | Cantidad :${valorT}</h1>
    
    `


}


