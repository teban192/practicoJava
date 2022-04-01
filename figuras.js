
//Codigo cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;

console.log("lados del cuadrado miden:" + ladoCuadrado+  "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado mide:" + perimetroCuadrado+ "cm");



const areaCuadrada = ladoCuadrado * ladoCuadrado;

console.log("El perimetro del cuadrado mide:" + areaCuadrada +"cm^2");

console.groupEnd()

//Codigo del triangullo
console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseladoTriangulo3 = 6;

console.log("Los lados del triangulo miden"
+ladoTriangulo1+"cm,"
+ladoTriangulo2+"cm,"
+baseladoTriangulo3+"cm"
);

const alturaTriangulo = 5.5;
console.log("La Altura del Triangulo es de" + baseladoTriangulo3 +"cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseladoTriangulo3;

console.log("El perimetro del Triangulo es de" + perimetroTriangulo +"cm");

const areaTriangulo = (baseladoTriangulo3 * alturaTriangulo) / 2;
console.log("El perimetro del cuadrado mide:" + areaTriangulo +"cm^2");

console.groupEnd()


//Circulo
console.group("Circulo")

//radio
const radioCirculo = 4;
console.log("El radio del circulo es de" + radioCirculo +"cm");
//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de" + diametroCirculo +"cm");
//PI
const pI= Math.PI;
console.log("El valor de la constante PI es de " + pI +"cm");
//Circunferencia

const perimetroCirculo = diametroCirculo * pI
console.log("El valor del perimetroCirculo es de  " + perimetroCirculo +"cm");

//area
const areaCirculo = (radioCirculo * radioCirculo) *pI
console.log("El valor del perimetroCirculo es de  " + areaCirculo +"cm2");

console.groupEnd()