console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden" + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es:" + areaCuadrado + "cm2");
console.groupEnd();


console.group("Triangulo")

//const ladoTriangulo = 6;
//const ladoTriangulo2 = 5;
//const baseTriangulo = 4;
//const alturaTriangulo = 4;

//console.log("Los lados del cuadrado miden"
// + ladoTriangulo + "cm,"
// +  ladoTriangulo2 + "cm,"
// + baseTriangulo + "cm");

//console.log("La altura del triangulo es de:" + alturaTriangulo + "cm");

function perimetroTriangulo (lado1,lado2, base) {
    return lado1 + lado2 + base;

}

function areaTriangulo(base,altura){
   return (base * altura) / 2;
}
//console.log("El perimetro del triangulo es de:" + perimetroTriangulo + "cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;
//console.log("El area del triangulo es:" + areaTriangulo + "cm2");
 
 console.groupEnd();

 // codigo circulo
console.group("Circulo")
//radioCirculo
function diametroCirculo(radio){

    return radio * 2;
};
//console.log("El radioCirculo es  de:" + radioCirculo + "cm");
//diametroCirculo
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametroCirculo es  de:" + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("El valor de PI es  de:" + PI);
//PerimetroCirculo
function PerimetroCirculo (radio) {
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}


//diametroCirculo * PI;
//console.log("El perimetro es  de:" + PerimetroCirculo + "cm");
//areaCirculo
const areaCirculo = (radioCirculo*radioCirculo) * PI;
console.log("El areaCirculo es  de:" + areaCirculo + "cm2");

function areaCirculo (radio) {
    return (radio * radio) * PI;
 }


console.groupEnd();
