import { cliente } from "../client/client-service.js";

document.getElementById('add-producto').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

        const datosForm = document.querySelector('#add-producto'); // Obtén los datos del formulario, incluida la imagen

        console.log(datosForm)

        const name = document.querySelector('#nombre_producto').value;
        const img_url = document.querySelector('#imagen_producto').value;
        const precio = document.querySelector('#precio_producto').value;
        const descripcion = document.querySelector('#descripcion_producto').value;

        cliente.crearCliente(name,img_url,descripcion,precio).then( respuesta =>{
            console.log(respuesta)
        }).catch(err => alert("Error al enviar"))

        console.log(name,img_url,descripcion,precio)

    });
