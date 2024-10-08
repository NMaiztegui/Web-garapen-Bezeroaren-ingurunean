// Constructor de Estudiante en ES5
class Estudiante{
    constructor(nombre, edad, ...asignaturas) {
    this.nombre = nombre;
    this.edad = edad;
    this.asignaturas = asignaturas;
    }
    // Añadir un método para saludar
   saludar = () =>  console.log(`Hola, me llamo ${this.nombre}  y tengo   ${this.edad}  años.`);
    
    // Añadir un método para listar las asignaturas
   listarAsignaturas =() =>
    console.log(`Mis asignaturas son: ${this.asignaturas.join(', ')}`);
    
}
    
    // Crear un nuevo estudiante
    
    let estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');
   
 // Destructuring para extraer nombre y edad
    const { nombre, edad, asignaturas } = estudiante1;

    // Mostrar datos del estudiante
    console.log(`Nombre: ${nombre} `);
    console.log(`Edad:  ${edad} `);
    // Mostrar saludo y asignaturas
    estudiante1.saludar();
    estudiante1.listarAsignaturas();
    // Función en ES5 para sumar notas
    const calcularPromedio= (...numeros) =>{
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        }
        return suma / numeros.length;
    }
    
    // Calcular promedio de notas templates literal
    var promedio = calcularPromedio(85, 90, 78, 92);
    console.log(`El promedio es: ${promedio}`);