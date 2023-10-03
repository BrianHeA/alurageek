
const crearNuevaLinea = (img_url, name, id) => {
  
    console.log(id)

    const linea = document.createElement("div")
    const contenido =
    `<div class="lista__info">
    <img src="${img_url}" alt="${name}" class="${name}">
    <h3 class="lista__info__titulo">${name}</h3>
    <div class="lista__botones">
      <button class="boton__editar">Editar</button>
      <button id="${id}" class="boton__eliminar">Eliminar</button>
    </div>
  </div>`;
    linea.innerHTML=contenido;

    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
      const id = btn.id;
      console.log("elclick",id)
    })

    return linea    
}


const table = document.querySelector("[data-table]")

const http = new XMLHttpRequest();

http.open("get","http://localhost:3000/producto")

http.send()

http.onload = () => {
    const data = JSON.parse(http.response);

    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.img_url,perfil.name,perfil.id)
        table.appendChild(nuevaLinea); 
    });
}

const crearProducto = (name, img_url, descripcion, precio, id) =>{
  return fetch("http://localhost:3000/producto",{
    method: "POST",
    headers: {"Content-type":"Aplication/json"},
    body:JSON.stringify({name,img_url,descripcion,precio,id:uuid.v4()})
  })
}

const eliminarProducto = () =>{
  console.log("eliminar a", id)
}

export const cliente = {
  crearProducto
};