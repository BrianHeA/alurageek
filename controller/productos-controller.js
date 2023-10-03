
const crearNuevaLinea = (img_url, name, descripcion, precio) => {
  
    const linea = document.createElement("div")
    const contenido =
    `
    <div class="col-4">
    <div class="producto">
      <img src="${img_url}" alt="${name}" class="producto__img">
      <h3>${name}</h3>
      <p>${descripcion}</p>
      <br>
      <br>
      <p class="precio">${precio}</p>
    </div>
    </div>
    `;
    linea.innerHTML=contenido;

    return linea    
}


const table = document.querySelector("[data-table]")

const http = new XMLHttpRequest();

http.open("get","http://localhost:3000/producto")

http.send()

http.onload = () => {
    const data = JSON.parse(http.response);

    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.img_url,perfil.name, perfil.descripcion, perfil.precio)
        table.appendChild(nuevaLinea); 
    });

    console.log(data)
}
console.log(http);
