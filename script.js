let opcion = prompt("ELIJA ARTICULO: 1-REMERA | 2-PANTALON | 3-ZAPATILLA");

if (opcion == 1) {
    opcion = "REMERA";
}
else if (opcion == 2) {
    opcion = "PANTALON";
}
else if (opcion == 3) {
    opcion = "ZAPATILLA";
}


console.log("USTED ELIJIO COMPRAR: " + opcion);

switch (opcion) {
    case "REMERA":
        let precioremera = 3500
        let remeraColor = ConsultarColor();
        let remeraTalle = ConsultarTalle();
        let remeraCantidad = ConsultarCantidad();
        alert("USTED ELIJIO COMPRAR: " + remeraCantidad + " " + opcion + " COLOR: " + remeraColor + " TALLE: " + remeraTalle);
        let remeraFormaPago = ConsultarFormaPago();
        let remeraMonto = CalcularMonto(precioremera,remeraCantidad);
        console.log("EL MONTO FINAL A ABONAR ES: " + remeraMonto);
        break;

    case "PANTALON":
        let preciopantalon = 8200
        let pantalonColor = ConsultarColor();
        let pantalonTalle = ConsultarTalle();
        let pantalonCantidad = ConsultarCantidad();
        alert("USTED ELIJIO COMPRAR: " + pantalonCantidad + " " + opcion + " COLOR: " + pantalonColor + " TALLE: " + pantalonTalle);
        let pantalonFormaPago = ConsultarFormaPago();
        let pantalonMonto = CalcularMonto(preciopantalon,pantalonCantidad);
        console.log("EL MONTO FINAL A ABONAR ES: " + pantalonMonto)
        break;

    case "ZAPATILLA":
            let zapatillaPrecio = 15000
            let zapatillaColor = ConsultarColor();
            let zapatillaTalle = ConsultarTalle();
            let zapatillaCantidad = ConsultarCantidad();
            alert("USTED ELIJIO COMPRAR: " + zapatillaCantidad + " " + opcion + " COLOR: " + zapatillaColor + " TALLE: " + zapatillaTalle);
            let zapatillaFormaPago = ConsultarFormaPago();
            let zapatillaMonto = CalcularMonto(zapatillaPrecio,zapatillaCantidad);
            console.log("EL MONTO FINAL A ABONAR ES: " + zapatillaMonto)
            break;  
            
    default:

        break;
}


function ConsultarTalle () {
    let talle = prompt("INGRESE EL TALLE DE PREFERENCIA: (S,M,L,XL,XXL)");
    return talle.toUpperCase();
}

function ConsultarColor () {
    let color = prompt("ELIJA COLOR: 1-NEGRO | 2-AZUL | 3-ROJO | 4-ROSA | 5-BLANCO")

        if (color == 1) {
            color = "NEGRO";
        }
        else if (color == 2) {
            color = "AZUL";
        }
        else if (color == 3) {
            color = "ROJO";
        }
        else if (color == 4) {
            color = "ROSA";
        }
        else if (color == 5) {
            color = "BLANCO";
        }
        else {
            alert("INGRESO COLOR EQUIVOCADO")
            ConsultarColor();
        }
    return color;
}

function ConsultarCantidad () {
    let cant = prompt("INGRESE CANTIDAD DESEADA:");
    return cant.toUpperCase();
}

function ConsultarFormaPago () {
    let forma = prompt("ELIJA FORMA DE PAGO: 1-EFECTIVO | 2-DEBITO | 3-CREDITO")
    if (forma == 1) {
        console.log("USTED DECIDIO ABONAR EN EFECTIVO")
    }
    else if (forma == 2){
        console.log("USTED DECIDIO ABONAR CON TARJETA DE DEBITO")
    }
    else if (forma == 3){
        console.log("USTED DECIDIO ABONAR CON TARJETA DE CREDITO")
    }
    else {
        alert("INGRESO FORMA DE PAGO EQUIVOCADA, INTENTE NUEVAMENTE")
        ConsultarFormaPago();
    }
    return forma;
}

function CalcularMonto (precio,cantidad) {
    let montofinal = precio * cantidad;
    return montofinal;
}