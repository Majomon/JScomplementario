/* Incorporando arrays 14/06/2022 */

/* >> Consigna: Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
Incorporar al menos un Array en tu proyecto.
Utilizar algunos de los métodos o propiedades vistos en la clase.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee array para agrupar elementos similares.
>>Ejemplo:
Podemos crear arrays para los objetos identificados en el simulador la clase anterior, Ejemplo: Array de Productos, Array de Personas,Array de Libros, Array de Autos,  Array de Comidas,  Array de Bebidas, Array de Tareas, etc.
 */


function Productos(id, nombre, precio){
    this.id=id;
    this.nombre=nombre;
    this.precio=precio;
}


const listaProductos=[]
let contador=2



do{
    let nombreProducto=prompt("Ingrese el nombre del producto");
    listaProductos.push(nombreProducto);
    contador-=1
} while (contador!=0)

console.log(listaProductos);