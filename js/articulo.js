export const crearArticulo = (data) =>{
    
    const $seccionArticulo = document.getElementById('seccion-articulo');
    data.forEach((element) => {
        
        let articulo = document.createElement("article");
        articulo.appendChild(agregarDetalle(element));
        
        $seccionArticulo.appendChild(articulo);
    });
}

const agregarDetalle = (data) =>{
    
    let lista = document.createElement("ul"); 
    for (const key in data) {
        if(key === "id") continue;
        let item = document.createElement("li");
        item.textContent += `${key}: ${data[key]}`; 
        lista.appendChild(item);       
    }
    return lista;
}
