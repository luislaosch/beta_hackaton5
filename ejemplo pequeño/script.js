// Array para almacenar los productos
const productos = [];

// Clase Producto
class Producto {
    constructor(codigo, nombre, marca, modelo, numeroSerie, estado) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.numeroSerie = numeroSerie;
        this.estado = estado;
    }
}

// Función para registrar un nuevo producto
function registrarProducto() {
    // Obtener valores del formulario
    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const numeroSerie = document.getElementById("numeroSerie").value;
    const estado = document.getElementById("estado").checked;

    // Crear un nuevo objeto producto
    const producto = new Producto(codigo, nombre, marca, modelo, numeroSerie, estado);
    console.log(producto);
    // Agregar el producto al array
    productos.push(producto);

    // Limpiar formulario
    document.getElementById("productForm").reset();

    alert("Producto registrado exitosamente!");
}

// Función para mostrar los productos en la tabla
function mostrarProductos() {
    const tabla = document.getElementById("productosTable").getElementsByTagName("tbody")[0];
    tabla.innerHTML = ""; // Limpiar la tabla antes de mostrar

    // Recorrer los productos y agregarlos a la tabla
    productos.forEach((producto) => {
        const fila = tabla.insertRow();

        fila.insertCell(0).textContent = producto.codigo;
        fila.insertCell(1).textContent = producto.nombre;
        fila.insertCell(2).textContent = producto.marca;
        fila.insertCell(3).textContent = producto.modelo;
        fila.insertCell(4).textContent = producto.numeroSerie;
        fila.insertCell(5).textContent = producto.estado ? "Activo" : "Inactivo";
    });
}
