let articuloElegido = prompt("INGRESE EL NUMERO DEL ARTICULO QUE DESEA COMPRAR: \n 1) REMERA \n 2) PANTALON \n 3) ZAPATILLA");

if (articuloElegido == 1) {
    articuloElegido = "REMERA";
}
else if (articuloElegido == 2) {
    articuloElegido = "PANTALON";
}
else if (articuloElegido == 3) {
    articuloElegido = "ZAPATILLA";
}

do {
    switch (articuloElegido) {
        case "REMERA":
            let precioremera = 3500
            let remeraColor = ConsultarColor();
            let remeraTalle = ConsultarTalle();
            let remeraCantidad = ConsultarCantidad(articuloElegido);
            console.log("USTED ELIJIO COMPRAR: " + remeraCantidad + " " + articuloElegido + " COLOR: " + remeraColor + " TALLE: " + remeraTalle);
            let remeraFormaPago = ConsultarFormaPago();
            let remeraMonto = CalcularMonto(precioremera,remeraCantidad);
            if (remeraFormaPago == 1 || remeraFormaPago == 2) {
                alert("EL MONTO FINAL A ABONAR ES: " + "$" + remeraMonto);
                console.log("EL MONTO FINAL A ABONAR ES: " + "$" + remeraMonto);
                alert("MUCHAS GRACIAS POR ELEJIRNOS");
                articuloElegido = false;
        }
            else if (remeraFormaPago == 3) {
                let montoPorCuota = calcularCuota(remeraMonto)
                alert("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
                console.log("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
                alert("MUCHAS GRACIAS POR ELEJIRNOS");
                articuloElegido = false;
        }
            break;
    
        case "PANTALON":
            let preciopantalon = 8200
            let pantalonColor = ConsultarColor();
            let pantalonTalle = ConsultarTalle();
            let pantalonCantidad = ConsultarCantidad(articuloElegido);
            console.log("USTED ELIJIO COMPRAR: " + pantalonCantidad + " " + articuloElegido + " COLOR: " + pantalonColor + " TALLE: " + pantalonTalle);
            let pantalonFormaPago = ConsultarFormaPago();
            let pantalonMonto = CalcularMonto(preciopantalon,pantalonCantidad);
            if (pantalonFormaPago == 1 || pantalonFormaPago == 2) {
                alert("EL MONTO FINAL A ABONAR ES: " + "$" + pantalonMonto);
                console.log("EL MONTO FINAL A ABONAR ES: " + "$" + pantalonMonto);
                alert("MUCHAS GRACIAS POR ELEJIRNOS");
                articuloElegido = false;

        }
            else if (pantalonFormaPago == 3) {
                let montoPorCuota = calcularCuota(pantalonMonto)
                alert("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
                console.log("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
                alert("MUCHAS GRACIAS POR ELEJIRNOS");
                articuloElegido = false;

        }
            break;
    
        case "ZAPATILLA":
                let zapatillaPrecio = 15000
                let zapatillaColor = ConsultarColor();
                let zapatillaTalle = ConsultarTalle();
                let zapatillaCantidad = ConsultarCantidad(articuloElegido);
                console.log("USTED ELIJIO COMPRAR: " + zapatillaCantidad + " " + articuloElegido + " COLOR: " + zapatillaColor + " TALLE: " + zapatillaTalle);
                let zapatillaFormaPago = ConsultarFormaPago();
                let zapatillaMonto = CalcularMonto(zapatillaPrecio,zapatillaCantidad);
                if (zapatillaFormaPago == 1 || zapatillaFormaPago == 2) {
                    alert("EL MONTO FINAL A ABONAR ES: " + "$" + zapatillaMonto);
                    console.log("EL MONTO FINAL A ABONAR ES: " + "$" + zapatillaMonto);
                    alert("MUCHAS GRACIAS POR ELEJIRNOS");
                    articuloElegido = false;

                }
                else if (zapatillaFormaPago == 3) {
                    let montoPorCuota = calcularCuota(zapatillaMonto);
                    alert("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
                    console.log("EL VALOR DE CADA CUOTA ES: " + "$" + montoPorCuota);
                    alert("MUCHAS GRACIAS POR ELEJIRNOS");
                    articuloElegido = false;
    
                }
                break;  
                
        default:
    
            break;
    }
    
} while (articuloElegido === "REMERA" || articuloElegido == "PANTALON" || articuloElegido == "ZAPATILLA")

function ConsultarTalle () {
    let talle = prompt("INGRESE EL TALLE DE PREFERENCIA: (S,M,L,XL,XXL)");
    return talle.toUpperCase();
}

function ConsultarColor () {
    let color = parseInt(prompt("INGRESE EL NUMERO DEL COLOR QUE DESEA COMPRAR: \n1) NEGRO \n 2) AZUL \n 3) ROJO \n 4) ROSA \n 5) BLANCO"))
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

function ConsultarCantidad (articulo) {
    let cant = parseInt(prompt("INGRESE LA CANTIDAD DE " + articulo + " DESEADA:"));
    return cant;
}

function ConsultarFormaPago () {
    let forma = prompt("INGRESE EL NUMERO DE LA FORMA DE PAGO DESEADA: \n 1) EFECTIVO \n 2) DEBITO \n 3) CREDITO");
    if (forma == 1) {
        console.log("USTED DECIDIO ABONAR EN EFECTIVO");
    }
    else if (forma == 2){
        console.log("USTED DECIDIO ABONAR CON TARJETA DE DEBITO");1
    }
    else if (forma == 3){
       
    }
    else {
        alert("INGRESO FORMA DE PAGO EQUIVOCADA, INTENTE NUEVAMENTE");
        ConsultarFormaPago();
    }
    return forma;
}

function CalcularMonto (precio,cantidad) {
    let montofinal = precio * cantidad;
    return montofinal;
}

function calcularCuota (monto) {
    let cuotas = prompt("ELIJA CANTIDAD DE CUOTAS: \n 1 CUOTA SIN INTERES \n 3 CUOTAS SIN INTERES \n 6 COUTAS CON 10% DE RECARGO");
    if (cuotas == 1) {
        console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 1 CUOTA SIN INTERES");
        alert("EL MONTO FINAL A ABONAR ES: " + "$" + monto);
        console.log("EL MONTO FINAL A ABONAR ES: " + "$" + monto);
        montoCuota = monto
    }
    else if (cuotas == 3) {
        console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 3 CUOTAS SIN INTERES");
        alert("EL MONTO FINAL A ABONAR ES: " + "$" + monto);
        console.log("EL MONTO FINAL A ABONAR ES: " + "$" + monto);
        montoCuota = monto/3
    }
    else if (cuotas == 6) {
        console.log("USTED ELIJIO ABONAR CON TARJETA DE CREDITO EN 6 CUOTAS SIN INTERES CON 10% DE RECARGO");
        alert("EL MONTO FINAL A ABONAR ES: " + "$" + monto*1.10);
        console.log("EL MONTO FINAL A ABONAR ES: " + "$" + monto*1.10);
        montoCuota = (monto*1.10)/6
    }
    else {
        alert("NO OFRECEMOS ESA CANTIDAD DE CUOTAS, INTENTE NUEVAMENTE");
        calcularCuota();

    }
    return montoCuota
}