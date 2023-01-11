let edadUno = Number(prompt("ingrese un valor"))
let edadSegundo = Number(prompt("ingrese un valor"))
let edadTercero = Number(prompt("ingrese un valor"))
let edadCuarto = Number(prompt("ingrese un valor"))
let total = edadUno+edadSegundo+edadTercero+edadCuarto

function sumaTotal(suma){
   let resultado = (suma/4)
   alert(resultado)
}

sumaTotal(total)