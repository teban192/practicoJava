
//Codigo cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;
//console.log("lados del cuadrado miden:" + ladoCuadrado+  "cm");

function  perimetroCuadrado(lado) {
    return lado * 4;

};

//console.log("El perimetro del cuadrado mide:" + perimetroCuadrado+ "cm");

function  areaCuadrada(lado) {
   
    return lado * lado;

};

//const areaCuadrada = ladoCuadrado * ladoCuadrado;

//console.log("El perimetro del cuadrado mide:" + areaCuadrada +"cm^2");

console.groupEnd()

//Codigo del triangullo
console.group("Triangulos")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseladoTriangulo3 = 6;

//console.log("Los lados del triangulo miden"
//+ladoTriangulo1+"cm,"
//+ladoTriangulo2+"cm,"
//+baseladoTriangulo3+"cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La Altura del Triangulo es de" + baseladoTriangulo3 +"cm");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseladoTriangulo3;

function perimetroTriangulo(lado1,lado2,base)
{
    return lado1+lado2+base;
}

//console.log("El perimetro del Triangulo es de" + perimetroTriangulo +"cm");

//const areaTriangulo = (baseladoTriangulo3 * alturaTriangulo) / 2;

function areaTriangulo(base,altura)
{
    return  (base * altura) / 2;
}

//console.log("El perimetro del cuadrado mide:" + areaTriangulo +"cm^2");

console.groupEnd()


//Circulo
console.group("Circulo")

//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es de" + radioCirculo +"cm");
//diametro
function diametroCirculo (radio) {
  return radio * 2;
}

console.log("El diametro del circulo es de" + diametroCirculo +"cm");
//PI
const pI= Math.PI;
console.log("El valor de la constante PI es de " + pI +"cm");
//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return  diametro * pI
}
 

//area
function areaCirculo (radio){
   return (radio * radio) * pI
}



//console.log("El valor del perimetroCirculo es de  " + areaCirculo +"cm2");

console.groupEnd()