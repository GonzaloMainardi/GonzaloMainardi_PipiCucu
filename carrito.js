let carrito = localStorage.getItem("carrito");
carrito = JSON.parse(carrito);

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoLleno = document.querySelector("#carrito-lleno");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
const botonesCarrito = document.querySelectorAll("#carrito-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-comprar");


function cargarProductosCarrito(){
    if (carrito && carrito.length > 0) {

        carritoVacio.classList.add("disabled");
        carritoLleno.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
        carritoComprado.classList.add("disabled");
    
        carritoLleno.innerHTML = "";
    
        carrito.forEach(producto => {
            const contenedorCarrito = document.createElement("div")
            contenedorCarrito.classList.add("carrito-productos")
            contenedorCarrito.innerHTML = `
            <div class="card" style="width: 16rem;">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="producto-info">
                    <h5 class="producto-nombre">${producto.nombre}</h5>
                    <p class="producto-marca">${producto.marca}</p>
                    <p class="producto-cantidad">CANTIDAD: ${producto.cantidad}</p>
                    <h3 class="producto-precio">$${producto.precio}</h3>
                </div>
            </div>
            `
            carritoLleno.append(contenedorCarrito);
        });
    
    } 
    
    else {
        carritoVacio.classList.remove("disabled");
        carritoLleno.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");
    }

    actualizarBtnsCarrito();
    actualizarTotal();
}

cargarProductosCarrito();


function actualizarBtnsCarrito () {
    btnsCarrito = document.querySelectorAll(".carrito-vaciar")

    btnsCarrito.forEach(boton => {
        boton.addEventListener("click", eliminarCarrito);
    });
}


function eliminarCarrito () {
    carrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarProductosCarrito()
}

function actualizarTotal() {
    const totalCalculado = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click",comprarCarrito)

function comprarCarrito () {
    carrito.length = 0;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    carritoVacio.classList.add("disabled");
    carritoLleno.classList.add("disabled");
    carritoAcciones.classList.add("disabled");
    carritoComprado.classList.remove("disabled");

}