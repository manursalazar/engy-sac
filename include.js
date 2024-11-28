// Espera a que todo el contenido del DOM esté cargado antes de ejecutar la función
document.addEventListener("DOMContentLoaded", function() {
    // Incluye el contenido del archivo header.html en el elemento con ID "header-placeholder"
    includeHTML("header-placeholder", "header.html");
    // Incluye el contenido del archivo footer.html en el elemento con ID "footer-placeholder"
    includeHTML("footer-placeholder", "footer.html");
});

// Función para incluir un archivo HTML en un elemento específico
function includeHTML(elementId, file) {
    var xhttp = new XMLHttpRequest(); // Crea un nuevo objeto XMLHttpRequest
    xhttp.onreadystatechange = function() {
        // Verifica si la solicitud ha completado y fue exitosa
        if (this.readyState == 4 && this.status == 200) {
            // Inyecta la respuesta del archivo HTML en el elemento especificado
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    // Configura la solicitud HTTP para obtener el archivo especificado
    xhttp.open("GET", file, true);
    xhttp.send(); // Envía la solicitud
}

/*

DOM significa Document Object Model (Modelo de Objetos del Documento). 
Es una interfaz de programación para los documentos HTML y XML que proporciona una representación estructurada del documento como un conjunto de nodos y objetos. 
Aquí hay algunos aspectos clave del DOM:
Estructura Jerárquica: El DOM representa el contenido de un documento en una estructura de árbol. Cada elemento HTML, atributo y texto es un nodo en este árbol.

Interactividad: Permite que los lenguajes de programación, como JavaScript, interactúen con el contenido, la estructura y el estilo de una página web. 
Esto significa que puedes modificar el contenido de la página, agregar o eliminar elementos, cambiar estilos, y mucho más, de manera dinámica.

Acceso y Manipulación: Los desarrolladores pueden acceder a elementos del documento mediante métodos y propiedades del DOM. 
Por ejemplo, puedes usar document.getElementById('miElemento') para obtener un elemento con un ID específico.

Eventos: El DOM permite la gestión de eventos, lo que significa que puedes definir acciones que se llevarán a cabo en respuesta a acciones del usuario, 
como hacer clic en un botón o mover el ratón.

*/