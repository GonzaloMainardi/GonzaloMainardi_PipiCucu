const productos = [

    {
        id: "1",
        nombre: "REMERA CELESTE",
        marca: "TOMMY HILFIGER",
        imagen: "./img/remera_tommy_celeste.png",
        precio: 4100
    },
    {
        id: "2",
        nombre: "REMERA AZUL",
        marca: "TOMMY HILFIGER",
        imagen: "./img/remera_tommy_azul.png",
        precio: 4100,
    },
    {
        id: "3",
        nombre: "REMERA ROJA",
        marca: "TOMMY HILFIGER",
        imagen: "./img/remera_tommy_roja.png",
        precio: 4100,
    },
    {
        id: "4",
        nombre: "REMERA AMARILLA",
        marca: "TOMMY HILFIGER",
        imagen: "./img/remera_tommy_amarilla.png",
        precio: 4100,
    },
    {
        id: "5",
        nombre: "REMERA BLANCA",
        marca: "TOMMY HILFIGER",
        imagen: "./img/remera_tommy_blanca.png",
        precio: 4100,
    },
    {
        id: "6",
        nombre: "REMERA NEGRA",
        marca: "TOMMY HILFIGER",
        imagen: "./img/remera_tommy_negra.png",
        precio: 4100,
    },
    {
        id: "7",
        nombre: "REMERA ROSA",
        marca: "TOMMY HILFIGER",
        imagen: "./img/remera_tommy_rosa.png",
        precio: 4100,
    },
    {
        id: "8",
        nombre: "ZAPATILLA CONVERSE",
        marca: "CONVERSE",
        imagen: "./img/zapatilla_converse.png",
        precio: 15990,
    },

]

const contenedorProductos = document.getElementById("home-productos")
let btnsComprar = document.querySelectorAll(".btn-comprar")

let carrito = []

function cargarProductos() {

    contenedorProductos.innerHTML = "";

    productos.forEach((producto) => {
    
        const contenedor = document.createElement("div")
        contenedor.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="producto-info">
                <h5 class="producto-nombre">${producto.nombre}</h5>
                <p class="producto-marca">${producto.marca}</p>
                <h3 class="producto-precio">$${producto.precio}</h3>
                <a href="#" class="btn-comprar" id="${producto.id}">AÑADIR AL CARRITO</a>
            </div>
        </div>
        `;
    
        contenedorProductos.append(contenedor)
    
    });  
    
    actualizarBtnsComprar()
}

cargarProductos();

function actualizarBtnsComprar () {
    btnsComprar = document.querySelectorAll(".btn-comprar")

    btnsComprar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


function agregarAlCarrito(e) {
    const btnId = e.currentTarget.id;
    const productoEnCarrito = productos.find(producto => producto.id === btnId);

    if(carrito.some(producto => producto.id === btnId)) {
        const index = carrito.findIndex(producto => producto.id === btnId);
        carrito[index].cantidad++;
    } else {
        productoEnCarrito.cantidad = 1;
        carrito.push(productoEnCarrito);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

}








// let articuloElegido = Number(prompt("INGRESE EL NUMERO DEL ARTICULO QUE DESEA COMPRAR: \n 1) REMERA \n 2) PANTALON \n 3) ZAPATILLA"));

// do {
//     switch (articuloElegido) {
//         case 1:
//             let precioRemera = BBDD[0].precio;
//             let remeraColor = ConsultarColor();
//             let remeraTalle = ConsultarTalle(BBDD[0].nombre);
//             let remeraCantidad = ConsultarCantidad(BBDD[0].nombre);
//             let remeraFormaPago = ConsultarFormaPago();
//             let remeraMonto = CalcularMonto(precioRemera,remeraCantidad);
//             if (remeraFormaPago == 1 || remeraFormaPago == 2) {
//                 mostrarTicket(remeraCantidad,BBDD[0].nombre,BBDD[0].marca,remeraColor,remeraTalle,remeraMonto)
//                 articuloElegido = seguirComprando();
//         }
//             else if (remeraFormaPago == 3) {
//                 let montoPorCuota = calcularCuota(remeraMonto)
//                 mostrarTicket(remeraCantidad,BBDD[0].nombre,BBDD[0].marca,remeraColor,remeraTalle,remeraMonto)
//                 alert("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
//                 articuloElegido = seguirComprando();
//         }
//             break;
    
//         case 2:
//             let precioPantalon = BBDD[1].precio;
//             let pantalonColor = ConsultarColor();
//             let pantalonTalle = ConsultarTalle(BBDD[1].nombre);
//             let pantalonCantidad = ConsultarCantidad(BBDD[1].nombre);
//             let pantalonFormaPago = ConsultarFormaPago();
//             let pantalonMonto = CalcularMonto(precioPantalon,pantalonCantidad);
//             if (pantalonFormaPago == 1 || pantalonFormaPago == 2) {
//                 mostrarTicket(pantalonCantidad,BBDD[1].nombre,BBDD[1].marca,pantalonColor,pantalonTalle,pantalonMonto)
//                 articuloElegido = seguirComprando();

//         }
//             else if (pantalonFormaPago == 3) {
//                 let montoPorCuota = calcularCuota(pantalonMonto)
//                 mostrarTicket(pantalonCantidad,BBDD[1].nombre,BBDD[1].marca,pantalonColor,pantalonTalle,pantalonMonto)
//                 alert("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
//                 articuloElegido = seguirComprando();
//         }
//             break;
    
//         case 3:
//                 let zapatillaPrecio = BBDD[2].precio
//                 let zapatillaColor = ConsultarColor();
//                 let zapatillaTalle = ConsultarTalle(BBDD[2].nombre);
//                 let zapatillaCantidad = ConsultarCantidad(BBDD[2].nombre);
//                 let zapatillaFormaPago = ConsultarFormaPago();
//                 let zapatillaMonto = CalcularMonto(zapatillaPrecio,zapatillaCantidad);
//                 if (zapatillaFormaPago == 1 || zapatillaFormaPago == 2) {
//                     mostrarTicket(zapatillaCantidad,BBDD[2].nombre,BBDD[2].marca,zapatillaColor,zapatillaTalle,zapatillaMonto)
//                     articuloElegido = seguirComprando();
//                 }
//                 else if (zapatillaFormaPago == 3) {
//                     let montoPorCuota = calcularCuota(zapatillaMonto);
//                     mostrarTicket(zapatillaCantidad,BBDD[2].nombre,BBDD[2].marca,zapatillaColor,zapatillaTalle,zapatillaMonto)
//                     alert("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
//                     articuloElegido = seguirComprando();
    
//                 }
//                 break;  
                
//         default:
    
//             break;
//     }
    
// } while (articuloElegido === 1 || articuloElegido == 2 || articuloElegido == 3)

// function ConsultarTalle (articulo) {
//     if (articulo === "ZAPATILLA") {
//         let talle = prompt("INGRESE EL TALLE DE PREFERENCIA: ");
//         return talle;    
//     }
//     else {
//         let talle = prompt("INGRESE EL TALLE DE PREFERENCIA: (S,M,L,XL,XXL)");
//         return talle.toUpperCase();
//     }
// }

// function ConsultarColor () {
//     let color = parseInt(prompt("INGRESE EL NUMERO DEL COLOR QUE DESEA COMPRAR: \n1) NEGRO \n 2) AZUL \n 3) ROJO \n 4) ROSA \n 5) BLANCO"))
//         if (color == 1) {
//             color = "NEGRO";
//         }
//         else if (color == 2) {
//             color = "AZUL";
//         }
//         else if (color == 3) {
//             color = "ROJO";
//         }
//         else if (color == 4) {
//             color = "ROSA";
//         }
//         else if (color == 5) {
//             color = "BLANCO";
//         }
//         else {
//             alert("INGRESO COLOR EQUIVOCADO")
//             ConsultarColor();
//         }
//     return color;
// }

// function ConsultarCantidad (articulo) {
//     if (articulo === "REMERA") {
//         let cant = parseInt(prompt("INGRESE LA CANTIDAD DE " + articulo + " DESEADA (STOCK DISPONIBLE: " + BBDD[0].stock + ")"));
//         if (cant > BBDD[0].stock) {
//             alert("NO DISPONEMOS DE ESE STOCK")
//             ConsultarCantidad(articulo)
//         }
//         else{
//             BBDD[0].stock = BBDD[0].stock - cant;
//             return cant;
//         }
//     }
//     else if (articulo === "PANTALON") {
//         let cant = parseInt(prompt("INGRESE LA CANTIDAD DE " + articulo + " DESEADA (STOCK DISPONIBLE: " + BBDD[1].stock + ")"));

//         if (cant > BBDD[1].stock) {
//             alert("NO DISPONEMOS DE ESE STOCK")
//             ConsultarCantidad(articulo)
//         }
//         else{
//             BBDD[1].stock = BBDD[1].stock - cant;
//             return cant;

//         }
//     }
//     if (articulo === "ZAPATILLA") {
//         let cant = parseInt(prompt("INGRESE LA CANTIDAD DE " + articulo + " DESEADA (STOCK DISPONIBLE: " + BBDD[2].stock + ")"));

//         if (cant > BBDD[2].stock) {
//             alert("NO DISPONEMOS DE ESE STOCK")
//             ConsultarCantidad(articulo)
//         }
//         else{
//             BBDD[2].stock = BBDD[2].stock - cant;
//             return cant;

//         }
//     }
// }

// function ConsultarFormaPago () {
//     let forma = prompt("INGRESE EL NUMERO DE LA FORMA DE PAGO DESEADA: \n 1) EFECTIVO \n 2) DEBITO \n 3) CREDITO");
//     if (forma == 1) {
//         console.log("USTED DECIDIO ABONAR EN EFECTIVO");
//     }
//     else if (forma == 2){
//         console.log("USTED DECIDIO ABONAR CON TARJETA DE DEBITO");1
//     }
//     else if (forma == 3){
       
//     }
//     else {
//         alert("INGRESO FORMA DE PAGO EQUIVOCADA, INTENTE NUEVAMENTE");
//         ConsultarFormaPago();
//     }
//     return forma;
// }

// function CalcularMonto (precio,cantidad) {
//     let montofinal = precio * cantidad;
//     return montofinal;
// }

// function calcularCuota (monto) {
//     let cuotas = prompt("ELIJA CANTIDAD DE CUOTAS: \n 1 CUOTA SIN INTERES \n 3 CUOTAS SIN INTERES \n 6 COUTAS CON 10% DE RECARGO");
//     if (cuotas == 1) {
//         console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 1 CUOTA SIN INTERES");
//         montoCuota = monto
//     }
//     else if (cuotas == 3) {
//         console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 3 CUOTAS SIN INTERES");
//         montoCuota = monto/3
//     }
//     else if (cuotas == 6) {
//         console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 6 CUOTAS SIN INTERES CON 10% DE RECARGO");
//         montoCuota = (monto*1.10)/6
//     }
//     else {
//         alert("NO OFRECEMOS ESA CANTIDAD DE CUOTAS, INTENTE NUEVAMENTE");
//         calcularCuota();

//     }
//     return montoCuota
// }


// function seguirComprando() {

//     var opcion = confirm("¿DESEA REALIZAR OTRA COMPRA?")
//     if (opcion == true) {
//         let articuloElegido = Number(prompt("INGRESE EL NUMERO DEL ARTICULO QUE DESEA COMPRAR: \n 1) REMERA \n 2) PANTALON \n 3) ZAPATILLA"));
//         return articuloElegido;
//     }
//     else {
//         alert("MUCHAS GRACIAS POR ELEJIRNOS");
//     }

// }

// function mostrarTicket (cantidad,nombre,marca,color,talle,monto) {
//     console.log("***** TICKET DE COMPRA *****")
//     console.log("USTED ELIJIO COMPRAR: " + cantidad + " " + nombre + " MARCA: " + marca +  " COLOR: " + color + " TALLE: " + talle);
//     console.log("EL MONTO FINAL A ABONAR ES: " + "$" + monto);
//     console.log("****************************");
// }